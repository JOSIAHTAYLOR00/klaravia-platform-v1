"use client";

import { motion } from "framer-motion";
import { fadeInUpVariants } from "../../animations";

interface InvestmentReturnsProps {
  estimatedSavings: number;
}

export function InvestmentReturns({ estimatedSavings }: InvestmentReturnsProps) {
  return (
    <motion.div variants={fadeInUpVariants} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6 border border-layer-10 dark:border-dark-layer-10">
      <h3 className="text-main dark:text-blue-50 font-medium mb-4">
        Return on Investment
        <span className="text-xs text-main/50 dark:text-blue-50/50 ml-2">Estimated</span>
      </h3>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-main/70 dark:text-blue-50/70">Total Investment</span>
          <span className="text-main dark:text-blue-50 font-semibold">$20,000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-main/70 dark:text-blue-50/70">Tax Credit (30%)</span>
          <span className="text-green-400 font-semibold">-$6,000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-main/70 dark:text-blue-50/70">Net Cost</span>
          <span className="text-main dark:text-blue-50 font-semibold">$14,000</span>
        </div>
        <div className="border-t border-white/10 pt-4">
          <div className="flex justify-between">
            <span className="text-main/70 dark:text-blue-50/70">25-Year Return</span>
            <span className="text-amber-500 font-semibold">${estimatedSavings.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
