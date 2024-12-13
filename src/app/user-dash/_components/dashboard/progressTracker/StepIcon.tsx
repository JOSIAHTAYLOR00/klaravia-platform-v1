import { Box } from "@chakra-ui/react";
import { StepIconProps } from "./_types";

export const StepIcon = ({ icon: Icon, isActive, isHovered }: StepIconProps) => (
  <Box
    className={`
      w-11 h-11 rounded-lg flex items-center justify-center
      transition-all duration-300
      ${
        isActive ? "bg-gradient-to-r from-amber-600 to-amber-500 shadow-lg shadow-amber-500/20" : "bg-gray-300 dark:bg-[#121212] border-2 border-layer-10 dark:border-dark-layer-10"
      }
      ${isHovered && !isActive ? "border-white/20" : ""}
      group-hover:scale-110
    `}
  >
    <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-main/80 dark:text-white/50"}`} />
  </Box>
);
