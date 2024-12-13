"use client";

import { motion } from "framer-motion";
import { Equipment } from "./types";

interface EquipmentSelectorProps {
  equipment: Equipment[];
  onSelect: (item: Equipment | null) => void;
  type: "panel" | "battery";
  currentSelection: Equipment | null;
  isExpanded: boolean;
}

export const EquipmentSelector = ({ equipment, onSelect, type, currentSelection, isExpanded }: EquipmentSelectorProps) => {
  return (
    <motion.div initial={false} animate={{ height: isExpanded ? "auto" : 0 }} className="overflow-hidden">
      <div className="py-4 space-y-4">
        {equipment.map((item) => {
          const isSelected = currentSelection ? currentSelection === item : false;
          return (
            <motion.div
              key={item.seriesName}
              className={`rounded-lg p-4 cursor-pointer border transition-all
                ${
                  isSelected
                    ? "border-green-500 bg-green-500/10"
                    : "border-layer-10 dark:border-dark-layer-10 bg-surface-layer-5 dark:bg-surface-dark-layer-5 hover:bg-surface-layer-10 dark:hover:bg-surface-dark-layer-10"
                }`}
              onClick={() => onSelect(isSelected ? null : item)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="text-lg font-semibold text-main dark:text-blue-50">
                      {item.manufacturer} {item.seriesName}
                    </h4>
                    {isSelected && <div className="bg-green-500/20 text-green-700 dark:text-green-500 px-2 py-1 rounded-md text-xs">Added</div>}
                  </div>
                  <div className="text-main dark:text-blue-50/70 text-sm mt-1">
                    {type === "panel" ? `${item.pMax}W • ${item.efficiency}% Efficiency` : `${item.storage_capacity} kWh • ${item.power_output}kW Power`}
                  </div>
                </div>
                {type === "panel" && item.warrantyYears && (
                  <div className="text-right">
                    <div className="text-main/50 dark:text-blue-50/50 text-sm">{`${item.warrantyYears} Year Warranty`}</div>
                  </div>
                )}
              </div>
              {/* <div className="mt-4 grid md:grid-cols-2 gap-4">
                {item.features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-blue-50/70">{feature}</span>
                  </div>
                ))}
              </div> */}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
