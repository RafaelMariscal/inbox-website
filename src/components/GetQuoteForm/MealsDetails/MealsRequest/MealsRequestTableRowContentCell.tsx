import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type MealsRequestTableRowContentCellProps = ComponentProps<'p'>

export default function MealsRequestTableRowContentCell({
  className,
  ...props
}: MealsRequestTableRowContentCellProps) {
  return (
    <p
      {...props}
      className={twMerge(
        'py-[.125rem] text-center text-sm font-medium tracking-wide text-send-500',
        className,
      )}
    />
  )
}
