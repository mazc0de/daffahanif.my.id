'use client'
import Link from 'next/link'
import Image from 'next/image'
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
    <div
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur supports-[backdrop-filter]:bg-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto max-w-6xl px-4'>
        <div className='flex h-20 items-center justify-between'>
          <div className='flex w-1/2 items-center gap-3 md:w-fit'>
            <Image
              src='/images/dh-logo.webp'
              alt='dh-logo'
              width={38}
              height={38}
              className={`rounded-md transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:rotate-[360deg] ${isScrolled ? 'scale-90' : 'scale-100'}`}
            />
            <span className='text-sm tracking-widest text-white/70'>
              DAFFA HANIFISYAFIQ
            </span>
          </div>

          <NavInteractive items={items} />

          <Link
            href='#projects'
            className='group inline-flex w-1/2 max-w-40 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_15px_#fbeb04] md:w-fit'
          >
            View Projects
            <svg
              className='h-4 w-4 transition-transform group-hover:translate-x-0.5'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M5 12h14' />
              <path d='m12 5 7 7-7 7' />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
