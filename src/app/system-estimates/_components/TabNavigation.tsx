"use client";

import { motion } from "framer-motion";
import { fadeInUpVariants } from "./animations";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  const tabs = ["Overview", "Savings", "Battery", "Environmental", "System Preview"];

  return (
    <motion.div variants={fadeInUpVariants} className="flex justify-start sm:justify-center mb-12 overflow-x-auto">
      <div className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-full p-2 inline-flex">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === tab.toLowerCase() ? "bg-blue-500 text-white" : "text-main/70 dark:text-blue-50/70 hover:text-main hover:bg-gray-200 dark:hover:text-blue-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
