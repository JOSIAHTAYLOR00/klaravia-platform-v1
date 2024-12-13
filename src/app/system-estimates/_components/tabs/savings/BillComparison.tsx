"use client";

import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { fadeInUpVariants } from "../../animations";

interface BillComparisonProps {
  monthlyBill: number;
  monthlySavings: number;
}

export function BillComparison({ monthlyBill, monthlySavings }: BillComparisonProps) {
  return (
    <motion.div variants={fadeInUpVariants} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6 border border-layer-10 dark:border-dark-layer-10">
      <h3 className="text-main dark:text-blue-50 font-medium mb-6">Monthly Bill Comparison</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-main/70 dark:text-blue-50/70 text-xs">Current Monthly Bill</span>
            <div className="h-8 flex items-center">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "150px" }}
                transition={{ duration: 1 }}
                className="bg-blue-500 dark:bg-blue-500/50 h-full rounded-lg px-3 flex items-center"
              >
                <span className="text-white dark:text-blue-50 font-semibold">${monthlyBill}</span>
              </motion.div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-main/70 dark:text-blue-50/70 text-xs">
              Solar Monthly Bill
              <span className="text-xs text-main dark:text-blue-50/50 ml-2">Estimated</span>
            </span>
            {monthlySavings < 0 ? (
              <div className="h-8 flex items-center">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((-monthlySavings + monthlyBill) / monthlyBill) * 150}px` }}
                  transition={{ duration: 1 }}
                  className="bg-amber-500 dark:bg-amber-500/50 h-full rounded-lg px-3 flex items-center"
                >
                  <span className="text-main dark:text-blue-50 font-semibold">${-monthlySavings + monthlyBill}</span>
                </motion.div>
              </div>
            ) : (
              <Box display="flex" className="w-1/2 h-8 items-center" justifyContent="flex-end">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(monthlySavings / (monthlyBill - monthlySavings)) * 150}px` }}
                  transition={{ duration: 1 }}
                  className="bg-amber-500 dark:bg-amber-500/50 h-full rounded-lg px-3 flex items-center"
                >
                  <span className="text-white dark:text-blue-50 font-semibold">${monthlyBill - monthlySavings}</span>
                </motion.div>
              </Box>
            )}
          </div>
        </div>
        {monthlySavings < 0 ? (
          <div className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6">
            <h4 className="text-main dark:text-blue-50 font-medium mb-2">Monthly Cost</h4>
            <div className="text-4xl font-bold text-red-400">
              ${(monthlyBill - monthlySavings).toLocaleString()}
              <span className="text-xs text-blue-50/50 ml-2">Estimated</span>
            </div>
            <p className="text-sm text-main/50 dark:text-blue-50/50 mt-2">
              That's a {Math.round(((monthlyBill - monthlySavings) / monthlyBill) * 100) - 100}% addition to your monthly energy costs
            </p>
          </div>
        ) : (
          <div className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6">
            <h4 className="text-main dark:text-blue-50 font-medium mb-2">Monthly Savings</h4>
            <div className="text-4xl font-bold text-amber-500">
              ${monthlySavings.toLocaleString()}
              <span className="text-xs text-main/50 dark:text-blue-50/50 ml-2">Estimated</span>
            </div>
            <p className="text-sm text-main dark:text-blue-50/50 mt-2">
              That's a {Math.round(100 - ((monthlyBill - monthlySavings) * 100) / monthlyBill)}% reduction in your monthly energy costs
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}
