"use client";

import { VStack, HStack, Box } from "@chakra-ui/react";
import { ProgressBar } from "./ProgressBar";
import { StepIcon } from "./StepIcon";
import { ProgressTrackerProps } from "./_types";
import { PROGRESS_STEPS } from "./_progressSteps";
import { StepLabel } from "./StepLabel";

export const UserProgressTracker = ({ setHoverIndex, hoverIndex, projectStatusIndex }: ProgressTrackerProps) => {
  return (
    <VStack w="full" spacing={4}>
      <Box w="full" overflowX="auto" className="hide-scrollbar" py={4}>
        <HStack spacing={0} minW={{ base: "800px", lg: "full" }} px={4} position="relative">
          <ProgressBar totalSteps={PROGRESS_STEPS.length} currentStep={projectStatusIndex} />

          {PROGRESS_STEPS.map((step, index) => {
            const isActive = index <= projectStatusIndex;
            const isHovered = index === hoverIndex;

            return (
              <VStack
                key={index}
                flex={1}
                position="relative"
                cursor="pointer"
                onClick={() => setHoverIndex(index)}
                spacing={2}
                className="transition-all duration-300 group"
                zIndex={1}
              >
                <StepIcon icon={step.icon} isActive={isActive} isHovered={isHovered} />
                <StepLabel title={step.title} isActive={isActive} isHovered={isHovered} />
              </VStack>
            );
          })}
        </HStack>
      </Box>
    </VStack>
  );
};
