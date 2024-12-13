"use client";

import { motion } from "framer-motion";
import { Shield, DollarSign, Zap } from "lucide-react";
import { fadeInUpVariants } from "../../animations";

const benefits = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Backup Power",
    description: "Keep your lights on and essential appliances running during grid outages",
    highlight: "Never lose power again",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Peak Shifting",
    description: "Use stored energy during peak rate hours to maximize savings",
    highlight: "Save up to 40% more",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Energy Independence",
    description: "Reduce reliance on the grid and increase self-consumption",
    highlight: "90% energy independence",
  },
];

export function BatteryBenefits() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          variants={fadeInUpVariants}
          className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6 border border-layer-10 dark:border-dark-layer-10 relative overflow-hidden"
        >
          <div className="text-amber-500 mb-4">{benefit.icon}</div>
          <h3 className="text-xl font-semibold text-main dark:text-blue-50 mb-2">{benefit.title}</h3>
          <p className="text-main/70 dark:text-blue-50/70 text-sm mb-4">{benefit.description}</p>
          <div className="text-amber-500 text-sm font-semibold">{benefit.highlight}</div>
        </motion.div>
      ))}
    </div>
  );
}
