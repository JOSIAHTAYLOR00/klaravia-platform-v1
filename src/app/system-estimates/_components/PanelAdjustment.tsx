"use client";

import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { fadeInUpVariants } from "./animations";

interface PanelAdjustmentProps {
  numberOfPanels: number;
  basePanels: number;
  panelAdjustment: number;
  onAdjustPanels: (adjustment: number) => void;
}

export function PanelAdjustment({ numberOfPanels, basePanels, panelAdjustment, onAdjustPanels }: PanelAdjustmentProps) {
  return (
    <motion.div variants={fadeInUpVariants} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6 border border-layer-10 dark:border-dark-layer-10 mb-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl font-semibold text-main dark:text-blue-50">System Size</h3>
          <p className="text-main/70 dark:text-blue-50/70">Adjust the number of panels to meet your goals</p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => onAdjustPanels(-1)}
            className="p-2 rounded-lg bg-surface-layer-10 dark:bg-surface-dark-layer-10 hover:bg-surface-layer-20 dark:hover:bg-surface-dark-layer-20 text-main dark:text-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={numberOfPanels <= Math.ceil(basePanels * 0.25)}
          >
            <Minus className="w-5 h-5" />
          </button>
          <div className="text-2xl font-bold text-main dark:text-blue-50">{numberOfPanels}</div>
          <button
            onClick={() => onAdjustPanels(1)}
            className="p-2 rounded-lg bg-surface-layer-10 dark:bg-surface-dark-layer-10 hover:bg-surface-layer-20 dark:hover:bg-surface-dark-layer-20 text-main dark:text-blue-50 transition-colors"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-main/70 dark:text-blue-50/70">
        <span>Recommended: {basePanels} panels</span>
        <span>
          {panelAdjustment > 0 ? "+" : ""}
          {panelAdjustment} panels from recommendation
        </span>
      </div>
    </motion.div>
  );
}
