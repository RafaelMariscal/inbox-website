import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TestemonialControllerButtonProps = ComponentProps<'button'>

export default function TestemonialControllerButton({
  children,
  ...rest
}: TestemonialControllerButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        'p-[.125rem] text-eden-300 outline-none transition-all duration-200',
        'hover:text-eden-700 focus:text-eden-700',
        rest.className,
      )}
    >
      {children}
    </button>
  )
}
