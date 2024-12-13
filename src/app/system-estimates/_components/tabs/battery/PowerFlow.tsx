"use client";

import { motion } from "framer-motion";
import { Sun, Battery, Moon } from "lucide-react";
import { fadeInUpVariants } from "../../animations";

const flowStages = [
  {
    icon: <Sun className="w-12 h-12 text-amber-500" />,
    title: "Day Time",
    description: "Solar panels power your home and charge the battery during the day",
  },
  {
    icon: <Battery className="w-12 h-12 text-green-500" />,
    title: "Peak Hours",
    description: "Your battery provides power during expensive peak rates and in times of need",
  },
  {
    icon: <Moon className="w-12 h-12 text-blue-400" />,
    title: "Night Time",
    description: "Stored energy powers your home overnight when your panels aren't producing energy",
  },
];

export function PowerFlow() {
  return (
    <motion.div variants={fadeInUpVariants} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6 border border-layer-10 dark:border-dark-layer-10">
      <h3 className="text-xl font-semibold text-main dark:text-blue-50 mb-6">How Battery Storage Works</h3>
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {flowStages.map((stage, index) => (
          <div key={index} className="space-y-6 text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: index * 0.2 }} className="mx-auto justify-items-center">
              {stage.icon}
            </motion.div>
            <div>
              <h4 className="text-lg font-medium text-main dark:text-blue-50 mb-2">{stage.title}</h4>
              <p className="text-sm text-main/70 dark:text-blue-50/70">{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
