import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type MealsRequestTableHeaderCellProps = ComponentProps<'p'>

export default function MealsRequestTableHeaderCell({
  className,
  ...props
}: MealsRequestTableHeaderCellProps) {
  return (
    <p {...props} className={twMerge('text-center font-semibold', className)} />
  )
}
