"use client";

import { SystemResultsProps } from "@/types/solarResults";
import { PanelAdjustment } from "../PanelAdjustment";
import SolarReadyFeature from "../system-preview/SolarReadyFeature";

export function SystemPreviewTab({ systemSize, numberOfPanels, basePanels, panelAdjustment, onAdjustPanels }: any) {
  return (
    <div className="space-y-8">
      <PanelAdjustment numberOfPanels={numberOfPanels} basePanels={basePanels} panelAdjustment={panelAdjustment} onAdjustPanels={onAdjustPanels} />
      <SolarReadyFeature />

      <div className="grid md:grid-cols-2 gap-8"></div>
    </div>
  );
}
