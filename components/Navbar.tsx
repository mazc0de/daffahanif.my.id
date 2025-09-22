'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { fadeDown } from '@/lib/utils'
import type { TNavItems } from '@/types'

import NavSidebarBtn from './NavSidebarBtn'
import NavInteractive from './NavInteractive'

const Navbar = ({ items }: { items: TNavItems[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

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
    <>
      <motion.nav
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeDown}
        className='fixed top-0 right-0 left-0 z-50 px-4 pt-8'
      >
        <div
          className={`container mx-auto max-w-6xl rounded-2xl p-4 backdrop-blur transition-all duration-300 ${
            isScrolled
              ? 'bg-white/10 shadow-lg'
              : 'bg-[var(--glass)] supports-[backdrop-filter]:bg-white/5'
          }`}
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Image
                src='/images/dh-logo.webp'
                alt='dh-logo'
                width={42}
                height={42}
                className={`rounded-md transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:rotate-[360deg] ${
                  isScrolled ? 'scale-90' : 'scale-100'
                }`}
              />
              <span
                className={`text-xs tracking-widest transition-colors duration-300 ${
                  isScrolled ? 'text-white/90' : 'text-white/70'
                }`}
              >
                DAFFA HANIFISYAFIQ
              </span>
            </div>
            <NavInteractive items={items} />
          </div>
        </div>
      </motion.nav>
      <NavSidebarBtn isOpen={isOpen} handleOpen={handleOpen} />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-[100] h-screen w-[75%] max-w-sm bg-white/15 shadow-2xl transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex h-full flex-col items-center justify-center gap-3 p-4'>
          {items?.map((item, index: number) => {
            return (
              <Link
                href={`#${item.id}`}
                key={index}
                className='w-full'
                onClick={() => setIsOpen(false)}
              >
                <div className='border-wood flex w-full items-center justify-center rounded-lg py-3'>
                  <p className='text-wood font-semibold'>{item.label}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className='fixed inset-0 z-[90] bg-white/10 backdrop-blur-sm'
        ></div>
      )}
    </>
  )
}

export default Navbar
