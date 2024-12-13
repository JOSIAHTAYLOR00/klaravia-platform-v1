import { Text } from "@chakra-ui/react";
import { StepLabelProps } from "./_types";

export const StepLabel = ({ title, isActive, isHovered }: StepLabelProps) => (
  <Text
    fontSize="sm"
    fontWeight="medium"
    className={`
      transition-colors duration-300
      ${isActive ? "text-blue-50" : "text-blue-50/50"}
      ${isHovered ? "text-blue-50" : ""}
    `}
    textAlign="center"
    px={2}
  >
    {title}
  </Text>
);
