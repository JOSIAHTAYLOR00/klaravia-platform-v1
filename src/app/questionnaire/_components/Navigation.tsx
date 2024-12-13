"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface NavigationProps {
  showPrevious: boolean;
  canContinue: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export function Navigation({ showPrevious, canContinue, onPrevious, onNext }: NavigationProps) {
  return (
    <div className="flex justify-between items-center pt-8">
      {showPrevious ? (
        <motion.button whileHover={{ x: -4 }} onClick={onPrevious} className="flex items-center text-blue-50/70 hover:text-blue-50 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </motion.button>
      ) : (
        <div /> // Empty div for spacing
      )}

      <motion.button
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
        onClick={onNext}
        disabled={!canContinue}
        className={`
          px-8 py-3 rounded-lg font-semibold inline-flex items-center 
          transition-all duration-300
          ${canContinue ? "bg-amber-500 hover:bg-amber-400 text-[#121212]" : "bg-blue-50/10 text-blue-50/30 cursor-not-allowed"}
        `}
      >
        Continue
        <ChevronRight className="ml-2 w-5 h-5" />
      </motion.button>
    </div>
  );
}
