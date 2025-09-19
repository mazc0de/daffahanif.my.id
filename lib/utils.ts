import { clsx, type ClassValue } from 'clsx'
import { Variants } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5 }
  })
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 }, // mulai dari atas
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.8, ease: 'easeOut' }
  })
}
