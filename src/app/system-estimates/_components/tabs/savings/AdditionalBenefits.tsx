"use client";

import { motion } from "framer-motion";
import { Home, Shield, Leaf } from "lucide-react";
import { fadeInUpVariants } from "../../animations";

const benefits = [
  {
    icon: <Home className="w-6 h-6" />,
    title: "Property Value",
    description: "Average home value increase of 4.1%",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Energy Security",
    description: "Protection against rising utility rates",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Green Incentives",
    description: "Additional state and local tax benefits",
  },
];

export function AdditionalBenefits() {
  return (
    <motion.div variants={fadeInUpVariants} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6 border border-layer-10 dark:border-dark-layer-10">
      <h3 className="text-main dark:text-blue-50 font-medium mb-6">Additional Financial Benefits</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="text-amber-500">{benefit.icon}</div>
            <div>
              <h4 className="text-main dark:text-blue-50 font-medium mb-1">{benefit.title}</h4>
              <p className="text-sm text-main dark:text-blue-50/70">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
