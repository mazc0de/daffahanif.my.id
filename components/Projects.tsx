'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/constant/projects'
import { fadeUp } from '@/lib/utils'
import { TProject } from '@/types'

const Projects = () => {
  const handleClick = (link: string) => {
    if (link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer')
    }
  }
  return (
    <section id='projects' className='relative scroll-mt-24 pt-16 lg:pt-24'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
        className='mx-auto w-full'
      >
        <div className='mb-6 flex items-end justify-between'>
          <h2 className='text-2xl font-semibold'>Projects</h2>
          <span className='text-xs text-white/60'>Showcase</span>
        </div>
        <div className='grid gap-6 md:grid-cols-2 [&:hover_.card:not(:hover)]:opacity-50'>
          {projects.map((item: TProject, idx) => (
            <motion.div
              key={item.title}
              custom={idx}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              {/* <Link href={item.link !== '#' && item.link}> */}
              <Card
                className='card group cursor-pointer overflow-hidden border-white/10 bg-white/5 pt-0 text-white transition-opacity duration-300'
                onClick={() => handleClick(item.link)}
              >
                <div className='relative overflow-hidden'>
                  <Image
                    width={250}
                    height={250}
                    src={item.image}
                    alt={item.title}
                    className='aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-105'
                  />
                  <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.5),transparent_40%)] transition-transform duration-300 group-hover:scale-105' />
                </div>
                <CardHeader>
                  <CardTitle className='group flex items-center gap-1 text-white/90'>
                    <p className='group-hover:text-primary transition-all duration-300'>
                      {item.title}
                    </p>
                    {item.link !== '#' && (
                      <ArrowUpRight className='group-hover:text-primary w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                    )}
                  </CardTitle>
                  <CardDescription className='text-white/70'>
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className='flex flex-wrap items-center gap-2'>
                  {item.tech.map(t => (
                    <Badge
                      key={t}
                      className='border-white/15 bg-white/10 text-white/80 hover:bg-white/20'
                    >
                      {t}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
              {/* </Link> */}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
