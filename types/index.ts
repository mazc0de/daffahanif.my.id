export type TNavItems = {
  id: string
  label: string
}

export type TNavSidebar = {
  isOpen: boolean
  handleOpen: () => void
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
