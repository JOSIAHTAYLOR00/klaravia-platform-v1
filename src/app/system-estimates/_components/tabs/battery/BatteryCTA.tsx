"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { fadeInUpVariants } from "../../animations";

interface BatteryCTAProps {
  onProceed: () => void;
}

export function BatteryCTA({ onProceed }: BatteryCTAProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg p-8">
      <h3 className="text-2xl font-bold text-main dark:text-blue-50 mb-4 flex flex-row justify-center items-center gap-2">
        Battery Added to Your System
        <CheckCircle />
      </h3>
      <p className="text-main/70 dark:text-blue-50/70 mb-6">You've made a great choice! Your new system will include battery storage for maximum efficiency and protection.</p>
      <button className="bg-green-500 hover:bg-green-400 text-[#121212] px-8 py-3 rounded-lg font-semibold transition-colors" onClick={onProceed}>
        View Updated Quote
      </button>
    </motion.div>
  );
}
