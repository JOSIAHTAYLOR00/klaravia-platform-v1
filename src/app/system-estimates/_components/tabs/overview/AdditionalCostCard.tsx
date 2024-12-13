"use client";

import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";
import { fadeInUpVariants } from "../../animations";

interface AdditionalCostCardProps {
  monthlyBill: number;
  monthlySavings: number;
}

export function AdditionalCostCard({ monthlyBill, monthlySavings }: AdditionalCostCardProps) {
  return (
    <motion.div variants={fadeInUpVariants} className="bg-red-500/10 rounded-lg p-6 border border-red-500/50">
      <div className="flex items-center space-x-3 mb-4">
        <div className="text-red-400">
          <DollarSign className="w-8 h-8" />
        </div>
        <h3 className="text-red-50/90 font-medium">Additional Monthly Cost</h3>
      </div>
      <div className="text-3xl font-bold text-red-400 mb-2">
        +{(monthlySavings * -1).toLocaleString()}
        <span className="text-lg text-red-300/70 ml-1">$/mo</span>
        <span className="text-xs text-red-300/50 ml-2">Estimated</span>
      </div>
      <p className="text-sm text-red-300/50">
        ${monthlyBill - monthlySavings}/mo up from ${monthlyBill}/mo
      </p>
    </motion.div>
  );
}
