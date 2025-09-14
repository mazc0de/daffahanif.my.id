'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

import type { TNavItems } from '@/types'
import { useActiveSection } from '@/hooks/useActiveSection'

const NavInteractive = ({ items }: { items: TNavItems[] }) => {
  const active = useActiveSection(items.map(i => i.id))

  return (
    <nav className={`hidden items-center gap-1 bg-transparent md:flex`}>
      <div className='flex items-center gap-1 rounded-full px-2 py-1'>
        {items.map(item => {
          const isActive = active === item.id
          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-full px-4 py-2 text-sm [text-wrap:nowrap] transition-colors duration-200 hover:text-white ${
                isActive ? 'text-white' : 'text-white/70'
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId='active-pill'
                  className='yellow-shadow absolute inset-0 -z-10 rounded-full bg-white/10'
                  transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 35,
                    mass: 0.8
                  }}
                  initial={false}
                />
              )}
              {item.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default NavInteractive
