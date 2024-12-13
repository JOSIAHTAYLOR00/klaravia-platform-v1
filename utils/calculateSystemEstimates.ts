// app/_components/calculator/utils/calculations.ts
import { useUserDataContext } from '@/providers/UserDataProvider';
import { SolarConstants, SystemEstimates } from '@/types/solarEstimates';

interface LoanCalculation {
  monthlyPayment: number;
  totalLoanCost: number;
  interestPaid: number;
  loanTerm: number;
  apr: number;
}

interface MonthlyProductionData {
  month: string;
  value: number;
}

const LOAN_CONSTANTS = {
  INTEREST_RATE: 0.07, // 7% APR
  LOAN_TERM_YEARS: 25,
  PAYMENTS_PER_YEAR: 12
} as const;

const CONSTANTS = {
  avgElectricityRate: .18, //((Number(userData.electric_bill) / (Number(userData.estimatedAnnualUsage) / 12))),
  avgSunHoursPerDay: 5.5,
  systemEfficiency: 0.85,
  panelWattage: 400, // watts
  costPerWatt: 2.4,
  annualDegradation: 0.005,
  CO2PerKWh: 0.0007,
  treesPerTonCO2: 40,
  averageHomeEmissions: 7.72
};

const ANNUAL_RATE_INCREASE = 0.03; // 3% annual increase

function calculateSolarLoanPayment(netSystemCost: number): LoanCalculation {
  const monthlyRate = LOAN_CONSTANTS.INTEREST_RATE / LOAN_CONSTANTS.PAYMENTS_PER_YEAR;
  const totalPayments = LOAN_CONSTANTS.LOAN_TERM_YEARS * LOAN_CONSTANTS.PAYMENTS_PER_YEAR;

  const monthlyPayment = netSystemCost * 
    (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
    (Math.pow(1 + monthlyRate, totalPayments) - 1);

  return {
    monthlyPayment: Math.round(monthlyPayment),
    totalLoanCost: Math.round(monthlyPayment * totalPayments),
    interestPaid: Math.round((monthlyPayment * totalPayments) - netSystemCost),
    loanTerm: LOAN_CONSTANTS.LOAN_TERM_YEARS,
    apr: LOAN_CONSTANTS.INTEREST_RATE
  };
}

function calculatePaybackPeriod(
  netCost: number,
  annualProduction: number,
  annualConsumption: number,
  currentRate: number,
  monthlyLoanPayment: number
): number {
  let remainingCost = netCost;
  let year = 0;
  
  while (remainingCost > 0 && year < 25) {
    const yearRate = currentRate * Math.pow(1 + ANNUAL_RATE_INCREASE, year);
    const yearProduction = Math.min(
      annualProduction * Math.pow(1 - CONSTANTS.annualDegradation, year),
      annualConsumption
    );
    const solarSavings = yearProduction * yearRate;
    const remainingUtilityCost = Math.max(0, (annualConsumption - yearProduction)) * yearRate;
    const yearSavings = solarSavings - remainingUtilityCost - (monthlyLoanPayment * 12);
    
    remainingCost -= yearSavings;
    
    if (remainingCost <= 0) {
      // Interpolate partial year
      return year + (remainingCost + yearSavings) / yearSavings;
    }
    
    year++;
  }
  
  return 99; // Return 99 if system never pays back
}

function calculateMonthlyProduction(systemSize: number, CONSTANTS: SolarConstants): MonthlyProductionData[] {
  const monthlyFactors = {
    Jan: 0.65, Feb: 0.75, Mar: 0.9, Apr: 1.0,
    May: 1.1, Jun: 1.15, Jul: 1.15, Aug: 1.1,
    Sep: 0.95, Oct: 0.8, Nov: 0.7, Dec: 0.6
  } as const;

  return Object.entries(monthlyFactors).map(([month, factor]) => ({
    month,
    value: Math.round(systemSize * factor * CONSTANTS.avgSunHoursPerDay * 30)
  }));
}

function calculateYearlySavings(
  year: number,
  annualProduction: number,
  annualConsumption: number,
  avgElectricityRate: number,
  estimatedLoanPayment: number
): number {
  const yearRate = avgElectricityRate * Math.pow(1 + ANNUAL_RATE_INCREASE, year);
  const yearProduction = annualProduction * Math.pow(1 - CONSTANTS.annualDegradation, year);
  const solarSavings = Math.min(yearProduction, annualConsumption) * yearRate;
  const remainingUtilityCost = Math.max(0, (annualConsumption - yearProduction)) * yearRate;
  return solarSavings - remainingUtilityCost - (estimatedLoanPayment * 12);
}

const calculateBaseSystemSize = () => {
  const { userData } = useUserDataContext();
  const monthlyBill = Number(userData.electric_bill);
  const annualConsumption = Number(userData.estimatedAnnualUsage);
  return (annualConsumption / 
    (CONSTANTS.avgSunHoursPerDay * 365 * CONSTANTS.systemEfficiency)) * .9;
};

export async function calculateSystemEstimates(
  userData: any,
  CONSTANTS: SolarConstants,
  panelAdjustment: number,
  onAdjustPanels: (adjustment: number) => void
): Promise<SystemEstimates> {
  try {
    const monthlyBill = Number(userData.electric_bill);
    const annualConsumption = Number(userData.estimatedAnnualUsage);
    
    // Calculate base system size and adjust for panel count
    const baseSystemSize = calculateBaseSystemSize();
    const basePanels = Math.ceil((baseSystemSize * 1000) / CONSTANTS.panelWattage);
    const adjustedPanels = basePanels + panelAdjustment;
    const systemSize = (adjustedPanels * CONSTANTS.panelWattage) / 1000;

    // Calculate production and offset
    const dailyProduction = systemSize * CONSTANTS.avgSunHoursPerDay * CONSTANTS.systemEfficiency;
    const annualProduction = Math.min(dailyProduction * 365, annualConsumption);
    const offset = (annualProduction / annualConsumption) * 100;

    // Calculate costs and savings
    const systemCost = systemSize * 1000 * CONSTANTS.costPerWatt;
    const federalTaxCredit = systemCost * 0.30;
    const netCost = systemCost - federalTaxCredit;
    const monthlyProduction = annualProduction / 12;
    
    const { monthlyPayment: estimatedLoanPayment } = calculateSolarLoanPayment(netCost);

    // Calculate first year and lifetime savings
    const firstYearSavings = calculateYearlySavings(
      0,
      annualProduction,
      annualConsumption,
      CONSTANTS.avgElectricityRate,
      estimatedLoanPayment
    );
    
    const monthlySavings = firstYearSavings / 12;

    let totalLifetimeSavings = 0;
    for (let year = 0; year < 25; year++) {
      totalLifetimeSavings += calculateYearlySavings(
        year,
        annualProduction,
        annualConsumption,
        CONSTANTS.avgElectricityRate,
        estimatedLoanPayment
      );
    }

    // Calculate payback period
    const paybackPeriod = calculatePaybackPeriod(
      netCost,
      annualProduction,
      annualConsumption,
      CONSTANTS.avgElectricityRate,
      estimatedLoanPayment
    );

    // Environmental impact calculations
    const annualCO2Reduction = annualProduction * CONSTANTS.CO2PerKWh;
    const environmentalImpact = {
      treesPlanted: Math.round(annualCO2Reduction * CONSTANTS.treesPerTonCO2),
      carsRemoved: parseFloat((annualCO2Reduction / 4.6).toFixed(1)),
      co2Reduced: parseFloat(annualCO2Reduction.toFixed(1)),
      homesOffset: parseFloat((annualCO2Reduction / CONSTANTS.averageHomeEmissions).toFixed(1)),
      wasteDiverted: parseFloat((annualCO2Reduction * 2.3).toFixed(1))
    };

    const monthlyProductionData = calculateMonthlyProduction(systemSize, CONSTANTS);

    return {
      systemSize: parseFloat(systemSize.toFixed(1)),
      annualConsumption: Math.round(annualConsumption),
      annualProduction: Math.round(annualProduction),
      numberOfPanels: adjustedPanels,
      basePanels,
      offset: Math.round(offset),
      estimatedSavings: Math.round(totalLifetimeSavings),
      monthlyBill: Math.round(monthlyBill),
      estimatedMonthlyBill: Math.round(monthlyBill - monthlySavings),
      estimatedLoanPayment: Math.round(estimatedLoanPayment),
      monthlySavings: Math.round(monthlySavings),
      paybackPeriod: parseFloat(paybackPeriod.toFixed(1)),
      environmentalImpact,
      monthlyProduction: monthlyProductionData,
      onAdjustPanels,
      panelAdjustment
    };
  } catch (error) {
    console.error('Error in calculateSystemEstimates:', error);
    throw error;
  }
}