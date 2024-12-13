"use client";

import { Leaf, CloudSun, Home } from "lucide-react";
import { SystemResultsProps } from "@/types/solarResults";
import { MetricCard } from "../MetricCard";

export function EnvironmentalTab({ environmentalImpact }: Pick<SystemResultsProps, "environmentalImpact">) {
  const impacts = [
    {
      icon: <Leaf className="text-green-500" />,
      label: "Trees Planted",
      value: environmentalImpact.treesPlanted,
      description: "Equivalent annual impact",
      unit: "/year",
    },
    {
      icon: <CloudSun className="text-blue-500" />,
      label: "CO₂ Reduction",
      value: environmentalImpact.co2Reduced,
      unit: "tons/year",
      description: "Annual carbon offset",
    },
    {
      icon: <Home />,
      label: "Homes Powered",
      value: environmentalImpact.homesOffset,
      description: "Equivalent energy production",
      unit: "/year",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {impacts.map((impact, index) => (
        <MetricCard key={index} {...impact} />
      ))}
    </div>
  );
}
