'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from './ui/button'
import IconLink from './IconLink'
import { fadeUp } from '@/lib/utils'

const Hero = () => {
  return (
    <section id='home' className='relative pt-44'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className='mx-auto flex h-full w-full items-center'
      >
        <div className='relative w-full overflow-hidden rounded-3xl border border-[var(--stroke)] bg-[var(--glass)] p-8 backdrop-blur'>
          <div className='absolute inset-0 -z-10'>
            <div
              className='pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full blur-2xl'
              style={{
                background:
                  'radial-gradient(circle, rgba(251,235,4,0.2), transparent 70%)'
              }}
            />
          </div>

          <motion.h1 className='text-3xl font-semibold md:text-5xl'>
            <span className='text-white/80'>Hi, I'm</span>{' '}
            <span className='text-primary'>Daffa Hanifisyafiq</span>
          </motion.h1>
          <p className='mt-4 max-w-2xl text-base text-white/70 md:text-lg'>
            Currently battling bugs in the JavaScript universe, especially on
            the frontend side of the web.
          </p>

          <div className='mt-6 flex flex-wrap items-center gap-2'>
            <Button
              asChild
              className='rounded-full bg-[var(--accent)] text-black hover:opacity-90'
            >
              <a href='#projects' className='inline-flex items-center'>
                Lihat Projects <ArrowRight className='ml-2 h-4 w-4' />
              </a>
            </Button>
            <Button
              variant='outline'
              asChild
              className='rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10'
            >
              <a
                href='mailto:daffa@example.com'
                className='inline-flex items-center'
              >
                <Mail className='mr-2 h-4 w-4' />
                Contact
              </a>
            </Button>
            <div className='ml-auto flex items-center gap-2'>
              <IconLink href='#' label='GitHub' Icon={Github} />
              <IconLink href='#' label='LinkedIn' Icon={Linkedin} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
