import { TProject } from '@/types'

export const projects: TProject[] = [
  {
    title: 'Kos Ibu Ami Petarukan',
    image: '/images/kosibuami.webp',
    description:
      'Kos Ibu Ami Petarukan is a simple and comfortable boarding house located in Petarukan. It provides essential facilities, a strategic location, and an easy way for tenants to get information through the website.',
    tech: ['Next.js', 'Tailwind CSS', 'shadcn/ui'],
    link: 'https://kosibuami.my.id/'
  },
  {
    title: 'Tiket Kapal.com',
    image: '/images/tiketkapal-com.webp',
    description:
      'Tiketkapal.com is a convenient online platform that helps users book ferry tickets from Bali, Tanjung Pinang, and Batam. It allows users to search schedules and make payments easily and securely.',
    tech: ['React.js', 'Tailwind CSS'],
    link: 'https://tiketkapal.com/'
  },
  {
    title: 'Selfkiosk Pelabuhan',
    image: '/images/selfkios.webp',
    description:
      'A self-service kiosk system located at the port that allows passengers to conveniently browse ferry schedules, select routes, and independently complete their ticket purchase. The kiosk is integrated with the ferry reservation system for seamless transactions and also provides instant ticket printing for passengers.',
    tech: ['React.js', 'Tailwind CSS'],
    link: '#'
  },
  {
    title: 'Harbor Departure Board',
    image: '/images/monitoring.webp',
    description:
      'A digital departure board commonly found at ports that displays essential ferry information, including vessel name, destination, schedule, gate, status, and remarks. It helps passengers stay updated and informed in real time.',
    tech: ['React.js', 'Tailwind CSS'],
    link: '#'
  },
  {
    title: 'Rodex',
    image: '/images/rodex2.webp',
    description:
      'Rodex is a train ticket booking application available on the Lifestyle page of myBCA. It is seamlessly integrated with BCA payment services, making it easy and secure for users to search schedules and purchase tickets directly.',
    tech: ['React.js', 'Tailwind CSS'],
    link: '#'
  },
  {
    title: 'Mini BMS Lifestyle',
    image: '/images/minibms-livin.webp',
    description:
      'Mini BMS Lifestyle is a ferry ticket booking application similar to Tiketkapal.com, available on the Livin Sukha Lifestyle page. It is directly integrated with Bank Mandiri payment services, enabling users to conveniently search schedules, book tickets, and complete secure transactions.',
    tech: ['Next.js', 'Tailwind CSS'],
    link: '#'
  }
]
