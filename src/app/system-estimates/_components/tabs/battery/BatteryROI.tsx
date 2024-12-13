"use client";

import { motion } from "framer-motion";
import { fadeInUpVariants } from "../../animations";

export function BatteryROI() {
  return (
    <motion.div variants={fadeInUpVariants} className="rounded-lg p-6 border border-layer-10 dark:border-dark-layer-10">
      <h3 className="text-xl font-semibold text-main dark:text-blue-50 mb-4">Return on Investment</h3>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-main dark:text-blue-50/70">Federal Tax Credit</span>
          <span className="text-green-500 font-semibold">30% Included</span>
        </div>
        <div className="flex justify-between">
          <span className="text-main/70 dark:text-blue-50/70">Additional Savings/Year</span>
          <span className="text-main dark:text-blue-50">
            $800 <span className="text-xs text-main/50 dark:text-blue-50/50 ml-2">Estimated</span>
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-main/70 dark:text-blue-50/70">Payback Period</span>
          <span className="text-main dark:text-blue-50">7-9 Years</span>
        </div>
        <div className="pt-4 border-t border-layer-10 dark:border-dark-layer-10">
          <div className="flex justify-between">
            <span className="text-main dark:text-blue-50/70">25-Year Savings</span>
            <span className="text-amber-500 font-semibold">$12,000+</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
