"use client";

import { motion } from "framer-motion";
import { ElementType } from "react";
import { LucideProps } from "lucide-react";

interface ClientAssessmentStepProps {
  title: string;
  description: string;
  IconComponent: ElementType<LucideProps>;
  index: number;
}

export function ClientAssessmentStep({ title, description, IconComponent, index }: ClientAssessmentStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="flex items-start space-x-4 p-4 rounded-lg bg-surface-layer-5 dark:bg-surface-dark-layer-5"
    >
      <div className="bg-amber-500/10 rounded-full p-3">
        <IconComponent className="w-5 h-5 text-amber-500" />
      </div>
      <div>
        <h3 className="text-main dark:text-blue-50 font-semibold mb-1">{title}</h3>
        <p className="text-main/70 dark:text-blue-50/70 text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
