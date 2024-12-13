"use client";

import { motion } from "framer-motion";
import { MetricCardProps } from "@/types/solarResults";
import { fadeInUpVariants } from "./animations";
import { EstimateTooltip } from "./EstimateTooltip";

export function MetricCard({ icon, label, value, unit, description, color, showTooltip = true }: MetricCardProps) {
  return (
    <motion.div variants={fadeInUpVariants} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6 border border-layer-10 dark:border-dark-layer-10 relative">
      {showTooltip && <EstimateTooltip text="Preliminary estimate based on your location and usage. Final values may vary based on detailed site assessment." />}
      <div className="flex items-center space-x-3 mb-4">
        <div className={color || "text-amber-500"}>{icon}</div>
        <h3 className="text-main/90 dark:text-blue-50/90 font-medium">{label}</h3>
      </div>
      <div className="text-3xl font-bold text-main dark:text-blue-50 mb-2">
        {value.toLocaleString()}
        {unit && <span className="text-lg text-main/70 dark:text-blue-50/70 ml-1">{unit}</span>}
        <span className="text-xs text-main/50 dark:text-blue-50/50 ml-2">Estimated</span>
      </div>
      <p className="text-sm text-main/50 dark:text-blue-50/50">{description}</p>
    </motion.div>
  );
}
