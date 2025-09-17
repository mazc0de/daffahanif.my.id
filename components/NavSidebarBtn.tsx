import { TNavSidebar } from '@/types'

const NavSidebarBtn = ({ isOpen, handleOpen }: TNavSidebar) => {
  return (
    <div className='md:hidden'>
      <button
        className={`group fixed top-3 right-6 z-[150] transition-all duration-300 ease-in-out lg:hidden`}
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
    </div>
  )
}

export default NavSidebarBtn
