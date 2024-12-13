export interface SolarConstants {
  avgElectricityRate: number;
  avgSunHoursPerDay: number;
  systemEfficiency: number;
  panelWattage: number;
  costPerWatt: number;
  annualDegradation: number;
  CO2PerKWh: number;
  treesPerTonCO2: number;
  averageHomeEmissions: number;
}

export interface SystemEstimates {
  systemSize: number;
  annualConsumption: number;
  annualProduction: number;
  numberOfPanels: number;
  basePanels: number;
  offset: number;
  estimatedSavings: number;
  monthlyBill: number;
  estimatedMonthlyBill: number;
  estimatedLoanPayment: number;
  monthlySavings: number;
  paybackPeriod: number;
  environmentalImpact: {
    treesPlanted: number;
    carsRemoved: number;
    co2Reduced: number;
    homesOffset: number;
    wasteDiverted: number;
  };
  monthlyProduction: Array<{ month: string; value: number }>;
  onAdjustPanels: (adjustment: number) => void;
  panelAdjustment: number;
}
