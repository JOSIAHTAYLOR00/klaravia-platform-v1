import { 
  FileText, 
  PenTool, 
  FileSignature, 
  Home, 
  ClipboardCheck, 
  CreditCard, 
  HardHat, 
  Power 
} from "lucide-react";
import { Step } from "./_types";

export const PROGRESS_STEPS: Step[] = [
  {
    title: "Bill Review",
    icon: FileText,
  },
  {
    title: "Design",
    icon: PenTool,
  },
  {
    title: "Documents",
    icon: FileSignature,
  },
  {
    title: "Site Survey",
    icon: Home,
  },
  {
    title: "Permits",
    icon: ClipboardCheck,
  },
  {
    title: "Payment",
    icon: CreditCard,
  },
  {
    title: "Installation",
    icon: HardHat,
  },
  {
    title: "Activation",
    icon: Power,
  },
];