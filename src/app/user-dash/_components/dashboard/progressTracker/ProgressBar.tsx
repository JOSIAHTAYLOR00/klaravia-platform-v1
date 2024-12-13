import { Box } from "@chakra-ui/react";

interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}

export const ProgressBar = ({ totalSteps, currentStep }: ProgressBarProps) => (
  <>
    <Box position="absolute" left="6%" right="6%" top="22px" height="6px" className="bg-surface-layer-10 dark:bg-surface-dark-layer-10" />
    <Box
      position="absolute"
      left="6%"
      right={`${95 - (currentStep + 1) * (90 / totalSteps)}%`}
      top="22px"
      height="6px"
      className="bg-gradient-to-r from-amber-600 to-amber-500 rounded-lg"
    />
  </>
);
