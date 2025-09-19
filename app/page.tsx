import About from '@/components/About'
import BackgroundOrbs from '@/components/BackgroundOrbs'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Journey from '@/components/Journey'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import { navItems } from '@/constant/navItems'

const Home = () => {
  return (
    <main className='min-h-screen scroll-smooth bg-neutral-950 bg-[radial-gradient(1200px_800px_at_10%_-10%,rgba(251,235,4,0.08),transparent),radial-gradient(800px_500px_at_110%_10%,rgba(251,235,4,0.06),transparent)] text-white [--glow:rgba(126,231,135,0.25)] [--ring:#7ee787]'>
      <main className='container mx-auto max-w-6xl px-4'>
        <Navbar items={navItems} />
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Footer />
      </main>
      <BackgroundOrbs />
    </main>
  )
}

export default Home
