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
    <a
      href={href}
      aria-label={label}
      className='inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white/80 transition hover:bg-white/10'
    >
      <Icon className='h-[18px] w-[18px]' />
    </a>
  )
}

export default IconLink
