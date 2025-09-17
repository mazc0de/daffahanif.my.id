import React from 'react'

const BackgroundOrbs = () => {
  return (
    <div className='pointer-events-none fixed inset-0 -z-10'>
      <div
        className='absolute top-20 left-1/3 h-56 w-56 rounded-full blur-3xl'
        style={{
          background:
            'radial-gradient(circle, rgba(251,235,4,0.25), transparent 60%)'
        }}
      />
      <div
        className='absolute right-20 bottom-10 h-72 w-72 rounded-full blur-3xl'
        style={{
          background:
            'radial-gradient(circle, rgba(251,235,4,0.18), transparent 60%)'
        }}
      />
    </div>
  )
}

export default BackgroundOrbs
