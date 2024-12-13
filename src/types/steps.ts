import { LucideProps } from 'lucide-react'
import { ElementType } from 'react'

export interface Step {
  title: string
  description: string
  icon: ElementType<LucideProps>
}