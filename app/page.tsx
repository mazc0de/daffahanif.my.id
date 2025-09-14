import Navbar from '@/components/Navbar'
import { navItems } from '@/constant/navItems'

const Home = () => {
  return (
    <main className='min-h-screen scroll-smooth bg-[#0b0b0e] text-white [--glow:rgba(126,231,135,0.25)] [--ring:#7ee787]'>
      <Navbar items={navItems} />

      <section
        id='home'
        className='container mx-auto min-h-[100svh] max-w-6xl px-4 pt-32'
      >
        <h1 className='text-4xl font-semibold'>Home</h1>
      </section>
      <section
        id='about'
        className='container mx-auto min-h-[100svh] max-w-6xl px-4 pt-32'
      >
        <h2 className='text-3xl font-semibold'>About</h2>
      </section>
      <section
        id='journey'
        className='container mx-auto min-h-[100svh] max-w-6xl px-4 pt-32'
      >
        <h2 className='text-3xl font-semibold'>My Journey</h2>
      </section>
      <section
        id='projects'
        className='container mx-auto min-h-[100svh] max-w-6xl px-4 pt-32'
      >
        <h2 className='text-3xl font-semibold'>Projects</h2>
      </section>
    </main>
  )
}

export default Home
