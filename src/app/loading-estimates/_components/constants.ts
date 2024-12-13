import { Sun, Home, Calculator, LineChart, CloudSun, Check } from "lucide-react";
import { Step } from "@/types/loadingEstimates";

export const STEPS: Step[] = [
  {
    icon: Home,
    text: "Analyzing roof dimensions and orientation...",
    duration: 1600,
  },
  {
    icon: Sun,
    text: "Calculating solar exposure and peak sun hours...",
    duration: 1600,
  },
  {
    icon: Calculator,
    text: "Determining optimal panel configuration...",
    duration: 1600,
  },
  {
    icon: LineChart,
    text: "Estimating potential energy production...",
    duration: 1600,
  },
  {
    icon: Check,
    text: "Preparing your personalized solar proposal...",
    duration: 1600,
  },
];