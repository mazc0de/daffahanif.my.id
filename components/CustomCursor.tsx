'use client'

import { useEffect, useState } from 'react'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
      className='pointer-events-none fixed z-[9999] h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FBEB04]/80 mix-blend-difference transition-transform duration-150'
    />
  )
}

export default CustomCursor
