"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronRight, Star, MapPin, Calendar, Clock } from "lucide-react";
import { EquipmentSelector } from "./EquipmentSelector";
import { calculateTotalCost } from "../utils/calculations";
import { UserWithoutTypeName } from "@/types/user";
import { Battery, Installer, UserUpdateOptions } from "@/API";
import { Equipment } from "./types";

interface DetailModalProps {
  installer: Installer;
  userData: UserWithoutTypeName;
  onClose: () => void;
  handleInstallerChosen: (value: Installer) => void;
  setUserData: (value: UserWithoutTypeName) => void;
}

export const DetailModal = ({ installer, userData, onClose, handleInstallerChosen, setUserData }: DetailModalProps) => {
  const [selectedPanel, setSelectedPanel] = useState(installer?.available_panels?.[0]);
  const [selectedBattery, setSelectedBattery] = useState<Battery | null>(null);
  const [isEquipmentExpanded, setIsEquipmentExpanded] = useState(false);

  const handleAddBattery = () => {
    if (installer && installer.available_batteries) {
      setUserData((prevUserData: UserWithoutTypeName) => {
        if (
          JSON.stringify(prevUserData) !==
          JSON.stringify({
            ...prevUserData,
            requires_battery: true,
            updated_by: UserUpdateOptions.DYNAMO,
          })
        ) {
          return {
            ...prevUserData,
            requires_battery: true,
            updated_by: UserUpdateOptions.DYNAMO,
          };
        }
        return prevUserData;
      });
      setSelectedBattery(installer.available_batteries[0]);
    }
  };

  const handleRemoveBattery = () => {
    setUserData((prevUserData: UserWithoutTypeName) => {
      if (
        JSON.stringify(prevUserData) !==
        JSON.stringify({
          ...prevUserData,
          requires_battery: false,
          updated_by: UserUpdateOptions.DYNAMO,
        })
      ) {
        return {
          ...prevUserData,
          requires_battery: false,
          updated_by: UserUpdateOptions.DYNAMO,
        };
      }
      return prevUserData;
    });
    setSelectedBattery(null);
  };

  return (
    <motion.div onClick={onClose} className="fixed inset-0 bg-surface-layer-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-base dark:bg-dark-base rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-base dark:bg-dark-base p-6 border-b border-layer-10 dark:border-dark-layer-10">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-main dark:text-blue-50 mb-2">{installer.company_name}</h2>
              <div className="flex items-center space-x-4 text-main/70 dark:text-blue-50/70">
                <span className="flex items-center">
                  <Star className="w-4 h-4 text-amber-500 mr-1" fill="currentColor" />
                  {installer.installer_rating}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Local to your area
                </span>
              </div>
            </div>
            <button onClick={onClose} className="text-main/50 dark:text-blue-50/50 hover:text-main dark:hover:text-blue-50 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Calendar, label: "Years Experience", value: installer.years_in_business },
              // { icon: Users, label: "Installations", value: installer.completedInstalls },
              // { icon: Shield, label: "Warranty", value: `${installer.warrantyYears} Years` },
              { icon: Clock, label: "Avg. Install Time", value: `${installer.average_install_time} Days` },
            ].map((stat, index) => (
              <div key={index} className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-4">
                <stat.icon className="w-5 h-5 text-amber-500 mb-2" />
                <div className="text-xl font-bold text-main dark:text-blue-50">{stat.value}</div>
                <div className="text-sm text-main dark:text-blue-50/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 space-y-8">
          {/* Description */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-main/80 dark:text-white/60 mb-4">About {installer.company_name}</h3>
            <p className="text-main/70 dark:text-blue-50/40">{installer.company_about_text}</p>
          </div>

          {/* Certifications */}
          {/* <div>
            <h3 className="text-xl font-semibold text-blue-50 mb-4">Certifications</h3>
            <div className="flex flex-wrap gap-3">
              {installer.certifications.map((cert, index) => (
                <div key={index} className="bg-blue-500/10 text-blue-50 px-3 py-1 rounded-3xl text-sm">
                  {cert}
                </div>
              ))}
            </div>
          </div> */}

          {/* Key Highlights */}
          {/* <div>
            <h3 className="text-xl font-semibold text-blue-50 mb-4">Highlights</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {installer.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-blue-50/70">{highlight}</span>
                </div>
              ))}
            </div>
          </div> */}

          <div className="p-6 space-y-8">
            {/* Add this section for equipment selection */}
            <div className="space-y-12">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-main dark:text-blue-50">Equipment Options</h3>
                <button
                  onClick={() => setIsEquipmentExpanded(!isEquipmentExpanded)}
                  className="text-blue-700/70 hover:text-blue-700 dark:text-amber-500/70 dark:hover:text-amber-500 flex items-center"
                >
                  {isEquipmentExpanded ? "Hide" : "Show"} Options
                  <ChevronRight
                    className={`ml-1 w-4 h-4 transform transition-transform
                ${isEquipmentExpanded ? "rotate-90" : ""}`}
                  />
                </button>
              </div>

              <div className="space-y-6" style={{ display: isEquipmentExpanded ? "inherit" : "none" }}>
                {installer.available_panels && (
                  <div>
                    <h4 className="text-lg font-semibold text-main dark:text-blue-50 mb-2">Solar Panels</h4>
                    <EquipmentSelector
                      equipment={installer.available_panels as Equipment[]}
                      type="panel"
                      currentSelection={selectedPanel as Equipment}
                      onSelect={setSelectedPanel}
                      isExpanded={isEquipmentExpanded}
                    />
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-semibold text-main dark:text-blue-50">Battery Storage</h4>
                    {selectedBattery && (
                      <button onClick={handleRemoveBattery} className="text-sm text-red-500/75 hover:text-red-500">
                        Remove Battery
                      </button>
                    )}
                  </div>
                  <EquipmentSelector
                    equipment={installer.available_batteries as Equipment[]}
                    type="battery"
                    currentSelection={selectedBattery}
                    onSelect={handleAddBattery}
                    isExpanded={isEquipmentExpanded}
                  />
                </div>
              </div>

              {/* Updated pricing section */}
              <div className="bg-surface-layer-5 dark:bg-surface-dark-layer-5 rounded-lg p-4">
                <div className="flex justify-between items-center ">
                  <span className="text-main dark:text-blue-50">Total System Cost</span>
                  <span className="text-2xl font-bold text-green-600">
                    $
                    {calculateTotalCost(
                      (Number(installer.company_red_line) * 1000 * userData?.google_system_size + 400 * Number(userData?.google_system_size)) * 0.7,
                      selectedPanel,
                      selectedBattery
                    )}
                  </span>
                </div>
                <div className="space-y-2 text-sm">{/* ... pricing breakdown ... */}</div>
              </div>
            </div>
          </div>

          {/* Recent Projects */}
          {/* <div>
            <h3 className="text-xl font-semibold text-blue-50 mb-4">Recent Projects</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {installer.recentProjects.map((project, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-4">
                  <div className="text-blue-50 font-medium mb-1">{project.size} System</div>
                  <div className="text-blue-50/50 text-sm">{project.address}</div>
                  <div className="text-blue-50/50 text-sm">{project.completion}</div>
                </div>
              ))}
            </div>
          </div> */}

          {/* Call to Action */}
          <div className="bg-gradient-to-r rounded-lg p-6 text-center" style={{ marginTop: "0px" }}>
            <h3 className="text-xl font-semibold text-main dark:text-blue-50 mb-2">Ready to move forward?</h3>
            <p className="text-main/70 dark:text-blue-50/70 mb-4">Choose {installer.company_name} as your installation partner</p>
            <button
              onClick={() => handleInstallerChosen(installer)}
              className="bg-amber-500 text-main px-6 py-3 mt-6 rounded-lg font-semibold hover:bg-amber-400 transition-colors"
            >
              Purchase With {installer.company_name}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
