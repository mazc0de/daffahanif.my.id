'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import type { TNavItems } from '@/types'
import NavInteractive from './NavInteractive'

const Navbar = ({ items }: { items: TNavItems[] }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='sticky top-0 z-50 pt-8'>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className='container mx-auto max-w-6xl rounded-2xl bg-[var(--glass)] p-4 backdrop-blur supports-[backdrop-filter]:bg-white/5'
      >
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Image
              src='/images/dh-logo.webp'
              alt='dh-logo'
              width={42}
              height={42}
              className={`rounded-md transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:rotate-[360deg] ${isScrolled ? 'scale-90' : 'scale-100'}`}
            />
            <span className='text-xs tracking-widest text-white/70'>
              DAFFA HANIFISYAFIQ
            </span>
          </div>
          <NavInteractive items={items} />
        </div>
      </motion.nav>
    </div>
  )
}

export default Navbar
