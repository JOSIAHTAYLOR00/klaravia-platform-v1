export interface EnvironmentalImpact {
  treesPlanted: number;
  carsRemoved: number;
  co2Reduced: number;
  homesOffset: number;
  wasteDiverted: number;
}

export interface MonthlyProduction {
  month: string;
  value: number;
}

export interface SystemResultsProps {
  systemSize: number;
  annualConsumption: number;
  annualProduction: number;
  numberOfPanels: number;
  offset: number;
  estimatedSavings: number;
  monthlyBill: number;
  monthlySavings: number;
  paybackPeriod: number;
  environmentalImpact: EnvironmentalImpact;
  monthlyProduction: MonthlyProduction[];
  basePanels: number;
  panelAdjustment: number;
  onAdjustPanels: (adjustment: number) => void;
}

export interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  unit?: string;
  description: string;
  color?: string;
  showTooltip?: boolean;
}