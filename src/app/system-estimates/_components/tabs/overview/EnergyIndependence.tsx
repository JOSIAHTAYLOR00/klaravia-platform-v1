"use client";

import { motion } from "framer-motion";
import { fadeInUpVariants } from "../../animations";

interface EnergyIndependenceProps {
  offset: number;
  annualProduction: number;
  annualConsumption: number;
}

export function EnergyIndependence({ offset, annualProduction, annualConsumption }: EnergyIndependenceProps) {
  return (
    <motion.div variants={fadeInUpVariants} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6 border border-layer-10 dark:border-dark-layer-10">
      <h3 className="text-xl font-semibold text-main dark:text-blue-50 mb-6">Energy Independence</h3>
      <div className="space-y-2 mb-4">
        <div className="relative h-4 bg-surface-layer-10 dark:bg-surface-dark-layer-10 rounded-3xl overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(Math.min(offset, 150) / 150) * 100}%` }}
            transition={{ duration: 1.5 }}
            className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-3xl"
          >
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold">{offset}%</span>
          </motion.div>
        </div>
        <div className="flex justify-between text-sm text-main/50 dark:text-blue-50/50 px-1">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
          <span>150%</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <p className="text-3xl font-bold text-main dark:text-blue-50 mb-1">{annualProduction.toLocaleString()}</p>
          <p className="text-sm text-main/50 dark:text-blue-50/50">kWh/Year Produced</p>
        </div>
        <div>
          <p className="text-3xl font-bold text-main dark:text-blue-50 mb-1">{annualConsumption.toLocaleString()}</p>
          <p className="text-sm text-main/50 dark:text-blue-50/50">kWh/Year Needed</p>
        </div>
      </div>
    </motion.div>
  );
}
