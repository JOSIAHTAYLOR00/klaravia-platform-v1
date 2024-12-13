"use client";

import { BatteryToggle } from "./battery/BatteryToggle";
import { BatteryBenefits } from "./battery/BatteryBenefits";
import { PowerFlow } from "./battery/PowerFlow";
import { BackupProtection } from "./battery/BackupProtection";
import { BatteryROI } from "./battery/BatteryROI";
import { BatteryCTA } from "./battery/BatteryCTA";
import { SystemResultsProps } from "@/types/solarResults";

interface BatteryTabProps extends SystemResultsProps {
  includeBattery: boolean;
  setIncludeBattery: (value: boolean) => void;
  onProceed: () => void;
}

export function BatteryTab({ includeBattery, setIncludeBattery, onProceed }: BatteryTabProps) {
  return (
    <div className="space-y-8">
      <BatteryToggle includeBattery={includeBattery} setIncludeBattery={setIncludeBattery} />

      <BatteryBenefits />
      <PowerFlow />

      <div className="grid md:grid-cols-2 gap-8">
        <BackupProtection />
        <BatteryROI />
      </div>

      {includeBattery && <BatteryCTA onProceed={onProceed} />}
    </div>
  );
}
