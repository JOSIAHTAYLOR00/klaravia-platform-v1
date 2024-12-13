"use client";

import { motion } from "framer-motion";
import { fadeInUpVariants } from "../../animations";

interface PaybackPeriodProps {
  paybackPeriod: number;
}

export function PaybackPeriod({ paybackPeriod }: PaybackPeriodProps) {
  return (
    <motion.div variants={fadeInUpVariants} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6 border border-layer-10 dark:border-dark-layer-10">
      <h3 className="text-main dark:text-blue-50 font-medium mb-4">
        Payback Period
        <span className="text-xs text-main/50 dark:text-blue-50/50 ml-2">Estimated</span>
      </h3>
      <div className="space-y-2">
        <div className="relative h-4 bg-green-500/30 rounded-3xl overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(paybackPeriod / 25) * 100}%` }}
            transition={{ duration: 1 }}
            className="absolute h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-xl"
          >
            <div
              className="absolute text-xs font-medium"
              style={{
                left: "50%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
                top: "0px",
                fontWeight: "bold",
              }}
            >
              {paybackPeriod} Years
            </div>
          </motion.div>
        </div>
        <div className="flex justify-between text-sm text-main/50 dark:text-blue-50/50 px-1">
          <span>Today</span>
          <span>12.5 Years</span>
          <span>25 Years</span>
        </div>
      </div>
      <p className="text-sm text-main/70 dark:text-blue-50/70 mt-4">
        Your system pays for itself in {paybackPeriod.toFixed(1)} years, providing free energy for the rest of its life
      </p>
    </motion.div>
  );
}
