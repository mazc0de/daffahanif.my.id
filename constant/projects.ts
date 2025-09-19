import { TProject } from '@/types'

export const projects: TProject[] = [
  {
    title: 'Self-Kios MKP',
    image: '/images/kosibuami.webp',
    description:
      'Kios mandiri untuk pembelian tiket dan cetak boarding pass. Fokus pada UX antrian cepat, i18n, dan aksesibilitas.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'Kos Ibu Ami Petarukan',
    image: '/images/kosibuami.webp',
    description:
      'Landing page hospitality dengan galeri, peta, dan form kontak. Tema earth tone, glass blur pada navbar.',
    tech: ['Next.js', 'Tailwind', 'shadcn/ui'],
    link: '#'
  },
  {
    title: 'UI Components Lab',
    image: '/images/kosibuami.webp',
    description:
      'Eksperimen komponen: Navbar animasi, cards, timeline, dan tabel interaktif dengan aksesibilitas yang baik.',
    tech: ['React', 'Radix', 'Tailwind'],
    link: '#'
  }
]
