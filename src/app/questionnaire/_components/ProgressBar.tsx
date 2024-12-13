"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  currentIndex: number;
  total: number;
}

export function ProgressBar({ currentIndex, total }: ProgressBarProps) {
  const progress = ((currentIndex + 1) / total) * 100;

  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
      <div className="flex justify-between text-main/60 dark:text-blue-50/60 text-sm mb-2">
        <span>
          Question {currentIndex + 1} of {total}
        </span>
        <span>{Math.round(progress)}% Complete</span>
      </div>
      <div className="h-1 bg-surface-layer-50/20 dark:bg-blue-50/10 rounded-xl">
        <motion.div className="h-full bg-amber-500 rounded-xl" initial={{ width: "0%" }} animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} />
      </div>
    </motion.div>
  );
}
