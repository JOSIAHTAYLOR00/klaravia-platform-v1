"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeInUpVariants } from "../../animations";

const protectedItems = ["Refrigerator & Freezer", "Lights & Internet", "Air Conditioning", "Home Security System", "Phone & Computer Charging", "Essential Medical Equipment"];

export function BackupProtection() {
  return (
    <motion.div variants={fadeInUpVariants} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6 border border-layer-10 dark:border-dark-layer-10">
      <h3 className="text-xl font-semibold text-main dark:text-blue-50 mb-4">Protected During Outages</h3>
      <div className="space-y-3">
        {protectedItems.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-center space-x-3">
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-main/90 dark:text-blue-50/90">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
