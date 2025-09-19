import Link from 'next/link'

const IconLink = ({
  href,
  label,
  Icon
}: {
  href: string
  label: string
  Icon: any
}) => {
  return (
    <Link
      target='_blank'
      href={href}
      aria-label={label}
      className='inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:bg-white/10'
    >
      <Icon className='h-[18px] w-[18px]' />
    </Link>
  )
}

export default IconLink
