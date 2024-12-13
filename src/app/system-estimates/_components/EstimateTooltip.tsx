"use client";

import { InfoIcon } from "lucide-react";

interface EstimateTooltipProps {
  text: string;
}

export function EstimateTooltip({ text }: EstimateTooltipProps) {
  return (
    <div className="absolute right-4 top-2">
      <div className="group relative inline-block">
        <InfoIcon className="w-4 h-4 text-main dark:text-blue-50/30 inline ml-1" />
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 hidden group-hover:block w-48 p-2 bg-surface-layer-10 dark:bg-surface-dark-layer-10 backdrop-blur-md rounded text-xs text-main dark:text-blue-50">
          {text}
        </div>
      </div>
    </div>
  );
}
