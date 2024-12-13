"use client";

import { DollarSign, Sun, Leaf } from "lucide-react";
import { SystemResultsProps } from "@/types/solarResults";
import { MetricCard } from "../MetricCard";
import { PanelAdjustment } from "../PanelAdjustment";
import { EnergyIndependence } from "./overview/EnergyIndependence";
import { FinancialImpact } from "./overview/FinancialImpact";
import { ProductionChart } from "./overview/ProductionChart";
import { AdditionalCostCard } from "./overview/AdditionalCostCard";
import SolarReadyFeature from "../system-preview/SolarReadyFeature";

export function OverviewTab({
  systemSize,
  annualConsumption,
  annualProduction,
  numberOfPanels,
  offset,
  estimatedSavings,
  monthlyBill,
  monthlySavings,
  paybackPeriod,
  environmentalImpact,
  monthlyProduction,
  basePanels,
  panelAdjustment,
  onAdjustPanels,
}: SystemResultsProps) {
  const metrics = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      label: "Monthly Bill",
      value: monthlyBill - monthlySavings,
      unit: "$/mo",
      description: `Down from $${monthlyBill}/mo`,
      color: "text-green-400",
      showWarning: monthlySavings < 0,
    },
    {
      icon: <Sun className="w-8 h-8" />,
      label: "System Size",
      value: systemSize,
      unit: "kW",
      description: `${numberOfPanels} Solar Panels`,
      color: "text-amber-500",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      label: "Carbon Offset",
      value: environmentalImpact.co2Reduced,
      unit: "tons/yr",
      description: "Carbon reduction",
      color: "text-blue-400",
    },
  ];

  return (
    <div className="space-y-8">
      <PanelAdjustment numberOfPanels={numberOfPanels} basePanels={basePanels} panelAdjustment={panelAdjustment} onAdjustPanels={onAdjustPanels} />

      <div className="grid md:grid-cols-3 gap-6">
        {metrics.map((metric, index) =>
          metric.showWarning && monthlySavings < 0 ? (
            <AdditionalCostCard key={index} monthlyBill={monthlyBill} monthlySavings={monthlySavings} />
          ) : (
            <MetricCard key={index} {...metric} />
          )
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <EnergyIndependence offset={offset} annualProduction={annualProduction} annualConsumption={annualConsumption} />
        <FinancialImpact paybackPeriod={paybackPeriod} estimatedSavings={estimatedSavings} />
      </div>

      <ProductionChart monthlyProduction={monthlyProduction} />
    </div>
  );
}
