import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type MealsRequestRootProps = ComponentProps<'div'>

export default function MealsRequestRoot({
  className,
  ...props
}: MealsRequestRootProps) {
  return (
    <div
      {...props}
      className={twMerge(
        'mt-8 w-full border border-eden-100 px-4 pb-4 pt-3 shadow-lg shadow-dark/20',
        className,
      )}
    />
  )
}
