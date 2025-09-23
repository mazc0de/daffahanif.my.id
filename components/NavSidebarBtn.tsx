import Link from 'next/link'
import { TNavSidebar } from '@/types'

const NavSidebarBtn = ({ isOpen, handleOpen, items }: TNavSidebar) => {
  return (
    <div className='md:hidden'>
      <button
        className={`group fixed top-11 right-6 z-[110] transition-all duration-300 ease-in-out lg:hidden`}
        onClick={handleOpen}
      >
        <div className='relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full transition-all duration-200'>
          <div className='flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300'>
            <div
              className={`bg-primary h-[2px] w-7 origin-left transform transition-all duration-300 ${
                isOpen ? 'translate-x-10' : ''
              }`}
            ></div>
            <div
              className={`bg-primary h-[2px] w-7 transform rounded transition-all delay-75 duration-300 ${
                isOpen ? 'translate-x-10' : ''
              }`}
            ></div>
            <div
              className={`bg-primary h-[2px] w-7 origin-left transform transition-all delay-150 duration-300 ${
                isOpen ? 'translate-x-10' : ''
              }`}
            ></div>

            {/* X icon */}
            <div
              className={`absolute top-6 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 ${
                isOpen ? 'w-12 translate-x-0' : ''
              }`}
            >
              <div
                className={`bg-primary absolute h-[2px] w-5 rotate-0 transform transition-all delay-300 duration-500 ${
                  isOpen ? 'rotate-45' : ''
                }`}
              ></div>
              <div
                className={`bg-primary absolute h-[2px] w-5 -rotate-0 transform transition-all delay-300 duration-500 ${
                  isOpen ? '-rotate-45' : ''
                }`}
              ></div>
            </div>
          </div>
        </div>
      </button>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-[100] h-screen w-[75%] max-w-sm bg-white/15 shadow-2xl transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex h-full flex-col items-center justify-center gap-3 p-4'>
          {items?.map((item, index: number) => {
            return (
              <Link
                href={`#${item.id}`}
                key={index}
                className='w-full'
                onClick={handleOpen}
              >
                <div className='border-wood flex w-full items-center justify-center rounded-lg py-3'>
                  <p className='text-wood font-semibold'>{item.label}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          onClick={handleOpen}
          className='fixed inset-0 z-[90] bg-white/10 backdrop-blur-sm'
        ></div>
      )}
    </div>
  )
}

export default NavSidebarBtn
