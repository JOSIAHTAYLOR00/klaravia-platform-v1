"use client";

import { SunAnimation } from "./SunAnimation";
import { ProgressBar } from "./ProgressBar";
import { StepItem } from "./StepItem";
import { useLoadingSequence } from "@/hooks/useLoadingSequence";
import { STEPS } from "./constants";

export default function LoadingSequence() {
  const { currentStep, progress } = useLoadingSequence(STEPS);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full space-y-8">
        <ProgressBar progress={progress} />
        <div className="w-full space-y-4">
          {STEPS.map((step, index) => (
            <StepItem key={index} step={step} isActive={index === currentStep} isCompleted={index < currentStep} />
          ))}
        </div>
      </div>
    </div>
  );
}
