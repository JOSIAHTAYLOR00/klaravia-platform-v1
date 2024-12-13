import { LucideIcon } from "lucide-react";

export interface ProgressTrackerProps {
  setHoverIndex: (index: number) => void;
  hoverIndex: number;
  projectStatusIndex: number;
}

export interface StepIconProps {
  icon: LucideIcon;
  isActive: boolean;
  isHovered: boolean;
}

export interface StepLabelProps {
  title: string;
  isActive: boolean;
  isHovered: boolean;
}