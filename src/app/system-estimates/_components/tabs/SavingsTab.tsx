"use client";

import { DollarSign, Calendar, TrendingUp } from "lucide-react";
import { SystemResultsProps } from "@/types/solarResults";
import { MetricCard } from "../MetricCard";
import { BillComparison } from "./savings/BillComparison";
import { PaybackPeriod } from "./savings/PaybackPeriod";
import { InvestmentReturns } from "./savings/InvestmentReturns";
import { AdditionalBenefits } from "./savings/AdditionalBenefits";
import { AdditionalCostCard } from "./overview/AdditionalCostCard";

export function SavingsTab({ monthlyBill, monthlySavings, estimatedSavings, paybackPeriod }: SystemResultsProps) {
  const savingsMetrics = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      label: "Monthly Savings",
      value: monthlySavings,
      unit: "$/mo",
      description: "Average reduction in monthly bills",
      color: "text-green-400",
      showWarning: monthlySavings < 0,
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      label: "Annual Savings",
      value: (monthlyBill - monthlySavings) * 12,
      unit: "$/yr",
      description: "Total yearly savings",
      color: "text-blue-400",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: "25-Year Savings",
      value: estimatedSavings,
      description: "Lifetime system savings",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        {savingsMetrics.map((metric, index) =>
          metric.showWarning && monthlySavings < 0 ? (
            <AdditionalCostCard key={index} monthlyBill={monthlyBill} monthlySavings={monthlySavings} />
          ) : (
            <MetricCard key={index} {...metric} />
          )
        )}
      </div>

      <BillComparison monthlyBill={monthlyBill} monthlySavings={monthlySavings} />

      <div className="grid md:grid-cols-2 gap-8">
        <PaybackPeriod paybackPeriod={paybackPeriod} />
        <InvestmentReturns estimatedSavings={estimatedSavings} />
      </div>

      <AdditionalBenefits />
    </div>
  );
}
