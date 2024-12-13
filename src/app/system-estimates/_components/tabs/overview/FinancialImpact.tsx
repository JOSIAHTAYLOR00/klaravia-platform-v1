"use client";

import { motion } from "framer-motion";
import { fadeInUpVariants } from "../../animations";

interface FinancialImpactProps {
  paybackPeriod: number;
  estimatedSavings: number;
}

export function FinancialImpact({ paybackPeriod, estimatedSavings }: FinancialImpactProps) {
  return (
    <motion.div variants={fadeInUpVariants} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6 border border border-layer-10 dark:border-dark-layer-10">
      <h3 className="text-xl font-semibold text-main dark:text-blue-50 mb-6">Financial Impact</h3>
      <div className="flex items-end space-x-4 mb-6">
        <div>
          <p className="text-sm text-main/50 dark:text-blue-50/50 mb-1">Payback Period</p>
          <p className="text-3xl font-bold text-main/80 dark:text-blue-500/80">{paybackPeriod === 99 ? `${paybackPeriod}+` : paybackPeriod} Years</p>
        </div>
        <div className="text-main/50 dark:text-blue-50/50 mb-2">with</div>
        <div>
          <p className="text-sm text-main dark:text-blue-50/50 mb-1">25-Year Savings</p>
          <p className="text-3xl font-bold text-green-500/80">${estimatedSavings.toLocaleString()}</p>
        </div>
      </div>
      <div className="h-2 bg-green-500/60 rounded-3xl overflow-hidden mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(paybackPeriod / 25) * 100}%` }}
          transition={{ duration: 1.5 }}
          className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-3xl"
        />
      </div>
      <p className="text-sm text-main/50 dark:text-blue-50/50">
        System pays for itself in {paybackPeriod.toFixed(1)} years, providing free energy for {(25 - paybackPeriod).toFixed(1)} more years
      </p>
    </motion.div>
  );
}
