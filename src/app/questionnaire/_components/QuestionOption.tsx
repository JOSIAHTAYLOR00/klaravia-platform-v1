"use client";

import { motion } from "framer-motion";
import { Option } from "@/types/questions";

interface QuestionOptionProps {
  option: Option;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export function QuestionOption({ option, isSelected, onSelect }: QuestionOptionProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelect(option.id)}
      className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left group
        ${isSelected ? "border-amber-500 bg-amber-500/10" : "border-layer-50/10 dark:border-blue-50/10 hover:border-amber-500/50"}`}
    >
      <div className="flex items-center space-x-4">
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
          ${isSelected ? "border-amber-500" : "border-layer-50/30 dark:border-blue-50/30 group-hover:border-amber-500/50"}`}
        >
          {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />}
        </div>
        <div>
          <p className="font-semibold text-main dark:text-blue-50">{option.label}</p>
          <p className="text-sm text-main/70 dark:text-blue-50/70">{option.description}</p>
        </div>
      </div>
    </motion.button>
  );
}
