import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputLabelProps = ComponentProps<'label'>

export default function InputLabel({
  children,
  className,
  ...rest
}: InputLabelProps) {
  return (
    <label {...rest} className={twMerge('font-semibold opacity-50', className)}>
      {children}
    </label>
  )
}
