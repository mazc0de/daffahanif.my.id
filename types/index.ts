import type { LucideIcon } from 'lucide-react'

export type TNavItems = {
  id: string
  label: string
}

export type TNavSidebar = {
  isOpen: boolean
  handleOpen: () => void
  items: TNavItems[]
}

export interface TJobDescription {
  id: number
  description: string
}

export interface TJourney {
  role: string
  company: string
  period: string
  detail: string
  jobDescription: TJobDescription[]
}

export interface TProject {
  title: string
  image: string
  description: string
  tech: string[]
  link: string
}

export type TSocialMedia = {
  label: string
  icon: LucideIcon
  href: string
}
