import { ClipboardCheck, Clock, Shield } from 'lucide-react'
import { Step } from '@/types/steps'

export const assessmentSteps: Step[] = [
  {
    title: "Quick Assessment",
    description: "Answer a few simple questions about your home",
    icon: ClipboardCheck
  },
  {
    title: "Instant Results",
    description: "Get your custom solar design and savings estimate",
    icon: Clock
  },
  {
    title: "Accurate Design",
    description: "Receive a system tailored to your needs",
    icon: Shield
  }
]