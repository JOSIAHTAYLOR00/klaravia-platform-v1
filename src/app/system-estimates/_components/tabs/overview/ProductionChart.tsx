"use client";

import { motion } from "framer-motion";
import { fadeInUpVariants } from "../../animations";
import { MonthlyProduction } from "@/types/solarResults";

interface ProductionChartProps {
  monthlyProduction: MonthlyProduction[];
}

export function ProductionChart({ monthlyProduction }: ProductionChartProps) {
  const peakMonth = monthlyProduction.reduce((max, month) => (month.value > max.value ? month : max));

  return (
    <motion.div variants={fadeInUpVariants} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6 border border border-layer-10 dark:border-dark-layer-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-main dark:text-blue-50">
          Annual Production
          <span className="text-xs text-main/50 dark:text-blue-50/50 ml-2">Estimated</span>
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-main/50 dark:text-blue-50/50">Peak Month:</span>
          <span className="text-sm font-semibold text-amber-500">{peakMonth.month}</span>
        </div>
      </div>
      <div className="h-64">
        <div className="h-full flex items-end justify-between gap-1">
          {monthlyProduction.map((month, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <motion.div
                initial={{ height: 0 }}
                animate={{
                  height: `${(month.value / Math.max(...monthlyProduction.map((m) => m.value))) * 200}px`,
                }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="w-full bg-gradient-to-t from-amber-500 to-amber-400 rounded-t relative group border-2"
              >
                <div className="w-full text-center absolute -top-8 left-1/2 transform -translate-x-1/2 bg-surface-layer-10 dark:bg-surface-dark-layer-10 backdrop-blur-md px-2 py-1 rounded text-xs text-main dark:text-blue-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  {month.value.toLocaleString()} kWh
                </div>
              </motion.div>
              <div className="text-xs text-main/50 dark:text-blue-50/50 mt-2">{month.month}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
