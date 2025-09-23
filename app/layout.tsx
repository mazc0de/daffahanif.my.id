import type { Metadata } from 'next'
import { Inter, Rethink_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--_inter' })
const rethink = Rethink_Sans({ subsets: ['latin'], variable: '--_rethink' })

export const metadata: Metadata = {
  title: 'Daffa Hanifisyafiq',
  description:
    'Daffa Hanifisyafiq is a frontend developer who creates modern, futuristic, and accessible websites with great user experiences.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${rethink.variable} ${inter.variable}`}>
      <body className='font-body antialiased'>{children}</body>
    </html>
  )
}
