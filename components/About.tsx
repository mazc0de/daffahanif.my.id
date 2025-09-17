'use client'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/utils'
import Image from 'next/image'

const About = () => {
  return (
    <section id='about' className='relative scroll-mt-24 pt-24'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className='mx-auto w-full'
      >
        <div className='grid items-center gap-6 rounded-3xl border border-[var(--stroke)] bg-[var(--glass)] p-6 backdrop-blur md:grid-cols-[320px_1fr] md:p-8'>
          <div className='relative overflow-hidden rounded-2xl'>
            <Image
              src='/images/daffa.webp'
              alt='Daffa portrait'
              width='250'
              height='250'
              className='aspect-[4/5] h-full w-full object-cover transition-all duration-300 hover:scale-105'
            />
          </div>
          <div>
            <h2 className='text-2xl font-semibold'>About Me</h2>
            <p className='mt-3 text-white/70'>
              I've always been fascinated by technology—though to be honest, I
              don't just use it… I wrestle with it until it turns into code. For
              me, web development feels like a giant playground: except instead
              of swings and slides, I get bugs and deploy errors (and somehow, I
              still love it).
            </p>
            <p className='mt-3 text-white/70'>
              The more I learn, the more I realize how much I don't know— and
              honestly, that's the fun part. It keeps life surprising, like a
              software update that actually improves performance.
            </p>
            <p className='mt-3 text-white/70'>
              Oh, and before I forget: right now I'm working as a Frontend
              Developer / Junior Software Engineer at Mitra Kasih Perkasa. I
              helped build an e-ticketing system that makes booking ship tickets
              a breeze for passengers.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
