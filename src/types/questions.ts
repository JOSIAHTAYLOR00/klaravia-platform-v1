import { LucideIcon } from 'lucide-react'

export interface Option {
  id: string
  label: string
  description: string
}

export interface Question {
  id: string
  question: string
  description: string
  options: Option[]
  icon: JSX.Element | LucideIcon
}

export interface CustomQuestion {
  id: string
  isCustomQuestion: true
  component: React.ComponentType<any>
}