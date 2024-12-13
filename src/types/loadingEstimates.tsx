export interface Step {
  icon: React.ElementType;
  text: string;
  duration: number;
}

export interface StepItemProps {
  step: Step;
  isActive: boolean;
  isCompleted: boolean;
}
