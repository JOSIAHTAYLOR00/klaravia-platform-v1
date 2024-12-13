'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Step } from "@/types/loadingEstimates";

export function useLoadingSequence(steps: Step[]) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          router.push("/system-estimates");
          return 100;
        }
        return prev + 0.5;
      });
    }, 36);

    let stepTimeout: NodeJS.Timeout;
    const nextStep = () => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          stepTimeout = setTimeout(nextStep, steps[prev + 1].duration);
          return prev + 1;
        }
        return prev;
      });
    };
    stepTimeout = setTimeout(nextStep, steps[0].duration);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(stepTimeout);
    };
  }, [steps, router]);

  return { currentStep, progress };
}