import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputTextProps = ComponentProps<'input'>

export default function InputText({ className, ...rest }: InputTextProps) {
  return (
    <input
      {...rest}
      className={twMerge(
        'absolute inset-0 bg-transparent px-4 pt-2 outline-none',
        'truncate font-semibold',
        '[&_~*]:valid:top-[.125rem] [&_~*]:focus:top-[.125rem]',
        '[&_~*]:valid:text-[.625rem] [&_~*]:focus:text-[.625rem]',
        '[&_~*]:valid:opacity-100 [&_~*]:focus:opacity-100',
        '[&_~*]:valid:z-10 [&_~*]:focus:z-10',
        className,
      )}
    />
  )
}
