import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputCharCounterProps = ComponentProps<'span'>

export default function InputCharCounter({
  className,
  ...rest
}: InputCharCounterProps) {
  return (
    <span
      {...rest}
      className={twMerge(
        'block text-xs font-semibold tracking-wide',
        className,
      )}
    />
  )
}
