"use client";

import { InfoIcon } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUpVariants } from "./animations";

export function SystemInfoMessage() {
  return (
    <motion.div variants={fadeInUpVariants} className="bg-blue-500/10 backdrop-blur-sm rounded-lg p-2 mb-4 border border-blue-500/20">
      <div className="flex items-start space-x-4 items-center">
        <InfoIcon className="w-6 h-6 text-blue-500 dark:text-blue-700/80 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-main dark:text-blue-50 font-medium mb-0">Custom Analysis for Your Home</h4>
          <p className="text-main/70 dark:text-blue-50/70 text-sm">
            These estimates are based on your address, electricity usage, and regional solar data. Final system specifications and savings will be confirmed by your chosen
            installation partner.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
