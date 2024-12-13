"use client";

import { motion } from "framer-motion";
import { fadeInUpVariants } from "./animations";

const steps = [
  {
    number: "1",
    title: "Compare Installers",
    description: "Review quotes from certified local installers",
  },
  {
    number: "2",
    title: "Site Assessment",
    description: "Get detailed analysis and final system design",
  },
  {
    number: "3",
    title: "Final Quote",
    description: "Receive exact pricing and production estimates",
  },
];

export function NextSteps() {
  return (
    <motion.div variants={fadeInUpVariants} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6  my-12">
      <h3 className="text-xl font-semibold text-main dark:text-blue-50 mb-4">Next Steps</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-600/70 dark:bg-surface-dark-layer-10 flex items-center justify-center flex-shrink-0">
              <span className="text-white dark:text-blue-50 font-medium">{step.number}</span>
            </div>
            <div>
              <h4 className="text-main dark:text-blue-50 font-medium mb-1">{step.title}</h4>
              <p className="text-sm text-main/70 dark:text-blue-50/70">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
