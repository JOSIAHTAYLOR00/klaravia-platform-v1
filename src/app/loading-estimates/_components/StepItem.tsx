"use client";

import { Check } from "lucide-react";
import { StepItemProps } from "@/types/loadingEstimates";

export function StepItem({ step, isActive, isCompleted }: StepItemProps) {
  const Icon = step.icon;

  return (
    <div
      className={`flex items-center space-x-4 transition-all duration-300 ${
        isActive ? "opacity-100 transform scale-100" : isCompleted ? "opacity-50 transform scale-95" : "opacity-30 transform scale-95"
      }`}
    >
      <Icon className={`w-6 h-6 ${isActive ? "text-yellow-500" : "text-gray-400"}`} />
      <span className={`text-xl ${isActive ? "text-main dark:text-white" : "text-main/90 dark:text-gray-400"}`}>{step.text}</span>
      {isCompleted && <Check className="w-8 h-8 text-green-600 dark:text-green-500 ml-auto" />}
    </div>
  );
}
