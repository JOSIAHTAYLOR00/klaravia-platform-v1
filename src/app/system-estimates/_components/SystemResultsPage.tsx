"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useUserDataContext } from "@/providers/UserDataProvider";
import { containerVariants, fadeInUpVariants } from "./animations";
import { SystemResultsProps } from "@/types/solarResults";

// Navigation
import { TabNavigation } from "./TabNavigation";

// Info Messages
import { SystemInfoMessage } from "./SystemInfoMessage";
import { NegativeSavingsWarning } from "./NegativeSavingsWarning";

// Tabs
import { OverviewTab } from "./tabs/OverviewTab";
import { SavingsTab } from "./tabs/SavingsTab";
import { BatteryTab } from "./tabs/BatteryTab";
import { EnvironmentalTab } from "./tabs/EnvironmentalTab";
import { SystemPreviewTab } from "./tabs/SystemPreviewTab";

// Additional Sections
import { NextSteps } from "./NextSteps";
import { SystemCTA } from "./SystemCTA";

export default function SystemResultsPage({
  systemSize,
  annualConsumption,
  annualProduction,
  numberOfPanels,
  offset,
  estimatedSavings,
  monthlyBill,
  monthlySavings,
  paybackPeriod,
  environmentalImpact,
  monthlyProduction,
  basePanels,
  panelAdjustment,
  onAdjustPanels,
}: SystemResultsProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [includeBattery, setIncludeBattery] = useState(false);
  const router = useRouter();
  const { setUserData } = useUserDataContext();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleProceedToInstallerSelect = () => {
    setUserData((prevUserData: any) => {
      if (
        JSON.stringify(prevUserData) !==
        JSON.stringify({
          ...prevUserData,
          google_system_size: systemSize,
          requires_battery: includeBattery,
        })
      ) {
        return {
          ...prevUserData,
          google_system_size: systemSize,
          requires_battery: includeBattery,
        };
      }
      return prevUserData;
    });
    router.push("/installer-comparison");
  };

  const renderActiveTab = () => {
    const commonProps = {
      systemSize,
      annualConsumption,
      annualProduction,
      numberOfPanels,
      offset,
      estimatedSavings,
      monthlyBill,
      monthlySavings,
      paybackPeriod,
      environmentalImpact,
      monthlyProduction,
      basePanels,
      panelAdjustment,
      onAdjustPanels,
    };

    switch (activeTab) {
      case "overview":
        return <OverviewTab {...commonProps} />;
      case "savings":
        return <SavingsTab {...commonProps} />;
      case "battery":
        return <BatteryTab {...commonProps} includeBattery={includeBattery} setIncludeBattery={setIncludeBattery} onProceed={handleProceedToInstallerSelect} />;
      case "environmental":
        return <EnvironmentalTab environmentalImpact={environmentalImpact} />;
      case "system preview":
        return <SystemPreviewTab numberOfPanels={numberOfPanels} basePanels={basePanels} panelAdjustment={panelAdjustment} onAdjustPanels={onAdjustPanels} />;
      default:
        return <OverviewTab {...commonProps} />;
    }
  };

  return (
    <section className="min-h-screen px-4 py-28">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div variants={fadeInUpVariants} className="text-center mb-8">
          <h1 className="text-4xl md:text-4xl font-bold text-main dark:text-blue-50 mb-4">Your Home's System Estimates</h1>
          <p className="text-lg text-main/70 dark:text-blue-50/70 max-w-5xl mx-auto">
            We've analyzed your energy needs and designed a custom solar solution that will transform your home into a clean energy powerhouse.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Info Messages */}
        <SystemInfoMessage />
        <NegativeSavingsWarning monthlySavings={monthlySavings} />

        {/* Active Tab Content */}
        {renderActiveTab()}

        {/* Next Steps */}
        <NextSteps />

        {/* Call to Action */}
        <SystemCTA includeBattery={includeBattery} setActiveTab={setActiveTab} setIncludeBattery={setIncludeBattery} onProceed={handleProceedToInstallerSelect} />
      </motion.div>
    </section>
  );
}
