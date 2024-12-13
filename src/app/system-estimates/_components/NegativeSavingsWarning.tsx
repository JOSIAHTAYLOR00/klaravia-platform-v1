"use client";

import { FiAlertTriangle } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeInUpVariants } from "./animations";

interface NegativeSavingsWarningProps {
  monthlySavings: number;
}

export function NegativeSavingsWarning({ monthlySavings }: NegativeSavingsWarningProps) {
  if (monthlySavings >= 0) return null;

  return (
    <motion.div variants={fadeInUpVariants} className="bg-orange-500/10 backdrop-blur-sm rounded-lg p-2 mb-8 border border-orange-500/20">
      <div className="flex items-start space-x-4 items-center">
        <FiAlertTriangle className="w-6 h-6 text-orange-500 dark:text-orange-700/80 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-orange-700 dark:text-orange-50 font-medium mb-0">This system may not lower your monthly payment</h4>
          <p className="text-orange-700/70 dark:text-orange-50/70 text-sm">
            Based off our initial estimates, it appears this system will not lower your monthly payment. You may need to adjust the system to meet your needs. Please contact us if
            you have any questions.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
