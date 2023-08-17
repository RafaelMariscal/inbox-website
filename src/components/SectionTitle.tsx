import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type SectionTitleProps = ComponentProps<'h2'> & {
  useTextDecoration?: boolean
}

export default function SectionTitle({
  useTextDecoration = false,
  className,
  ...rest
}: SectionTitleProps) {
  return (
    <h2
      {...rest}
      data-decoration={useTextDecoration}
      className={twMerge(
        'mb-12 text-center text-5xl font-semibold leading-none drop-shadow-custom-text',
        'data-[decoration=true]:relative data-[decoration=true]:after:absolute',
        'data-[decoration=true]:after:h-[.1875rem] data-[decoration=true]:after:w-36',
        'data-[decoration=true]:after:-bottom-7 data-[decoration=true]:after:bg-eden-700',
        'data-[decoration=true]:after:left-1/2 data-[decoration=true]:after:-translate-x-1/2',
        'data-[decoration=true]:after:drop-shadow-custom-text',
        className,
      )}
    />
  )
}
