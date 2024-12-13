"use client";

import { motion } from "framer-motion";
import { fadeInUpVariants } from "../../animations";

interface BatteryToggleProps {
  includeBattery: boolean;
  setIncludeBattery: (value: boolean) => void;
}

export function BatteryToggle({ includeBattery, setIncludeBattery }: BatteryToggleProps) {
  return (
    <motion.div variants={fadeInUpVariants} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-6 border border-layer-10 dark:border-dark-layer-10">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold text-main dark:text-blue-50">Add Battery Storage</h3>
          <p className="text-main/70 dark:text-blue-50/70">Power your home day and night with stored solar energy</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={includeBattery} onChange={(e) => setIncludeBattery(e.target.checked)} />
          <div className="w-14 h-7 bg-surface-layer-10 dark:bg-surface-dark-layer-10 peer-focus:outline-none rounded-3xl peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-3xl after:h-6 after:w-6 after:transition-all peer-checked:bg-amber-500"></div>
        </label>
      </div>
      {includeBattery && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-4 mt-4">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-main/70 dark:text-blue-50/70 text-sm">Battery Capacity</p>
              <p className="text-2xl font-bold text-main dark:text-blue-50">13.5 kWh</p>
            </div>
            <div>
              <p className="text-main/70 dark:text-blue-50/70 text-sm">Backup Duration</p>
              <p className="text-2xl font-bold text-main dark:text-blue-50">24+ Hours</p>
            </div>
            <div>
              <p className="text-main/70 dark:text-blue-50/70 text-sm">Additional Cost</p>
              <p className="text-2xl font-bold text-amber-500">~ $8,000</p>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
