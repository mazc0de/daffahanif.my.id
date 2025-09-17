'use client'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { journey } from '@/constant/journey'
import { TJourney } from '@/types'

const Journey = () => {
  return (
    <section id='journey' className='relative scroll-mt-24 pt-24'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className='mx-auto w-full'
      >
        <div className='rounded-3xl border border-[var(--stroke)] bg-[var(--glass)] p-6 backdrop-blur md:p-8'>
          <h2 className='text-2xl font-semibold'>My Journey</h2>
          <Separator className='my-6 bg-white/10' />
          <ol className='relative space-y-6'>
            {journey.map((item: TJourney, idx) => (
              <motion.li
                key={idx}
                custom={idx}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className='group'
              >
                <div className='grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 md:grid-cols-[220px_1fr]'>
                  <div>
                    <p className='text-sm text-white/60'>{item.period}</p>
                    <p className='text-primary font-medium'>{item.role}</p>
                    <p className='text-sm text-white/70'>{item.company}</p>
                  </div>
                  <div>
                    <p className='text-white/70'>{item.detail}</p>
                    <ul className='mt-4 list-inside list-disc space-y-2 text-gray-300'>
                      {item.jobDescription.map(desc => (
                        <li key={desc.id}>{desc.description}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </motion.div>
    </section>
  )
}

export default Journey
