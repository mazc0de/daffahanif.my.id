const Footer = () => {
  return (
    <footer className='mx-auto w-full pt-24 pb-16'>
      <div className='rounded-2xl border border-[var(--stroke)] bg-[var(--glass)] p-6 text-sm text-white/60 backdrop-blur'>
        <p>
          © {new Date().getFullYear()} Daffa Hanifisyafiq — Crafted with React,
          Tailwind, shadcn/ui, and Framer Motion.
        </p>
      </div>
    </footer>
  )
}

export default Footer
