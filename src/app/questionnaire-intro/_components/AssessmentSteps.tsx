"use client";

import { ClipboardCheck, Clock, Shield } from "lucide-react";
import { ClientAssessmentStep } from "../_components/ClientAssessmentStep";

const STEPS = [
  {
    title: "Quick Assessment",
    description: "Answer a few simple questions about your home",
    IconComponent: ClipboardCheck,
  },
  {
    title: "Instant Results",
    description: "Get your custom solar design and savings estimate",
    IconComponent: Clock,
  },
  {
    title: "Accurate Design",
    description: "Receive a system tailored to your needs",
    IconComponent: Shield,
  },
] as const;

export function AssessmentSteps() {
  return (
    <div className="space-y-4">
      {STEPS.map((step, index) => (
        <ClientAssessmentStep key={index} {...step} index={index} />
      ))}
    </div>
  );
}
