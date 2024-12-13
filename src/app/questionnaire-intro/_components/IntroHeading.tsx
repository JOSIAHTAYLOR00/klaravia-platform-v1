"use client";

import { motion } from "framer-motion";

export function IntroHeading() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="mt-8 sm:mt-0 text-2xl sm:text-5xl font-bold text-main dark:text-blue-50 mb-6 leading-tight">
        Let's Design Your <span className="text-amber-500">Solar System</span>
      </h1>
      <p className="text-md sm:text-lg text-main/80 dark:text-blue-50/80">Based on your monthly electric bill, we'll help design a system that maximizes your savings.</p>
    </motion.div>
  );
}
