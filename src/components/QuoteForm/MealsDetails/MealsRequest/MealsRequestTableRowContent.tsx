import { ComponentProps } from 'react'

type MealsRequestTableRowContentProps = ComponentProps<'div'>

export default function MealsRequestTableRowContent(
  props: MealsRequestTableRowContentProps,
) {
  return (
    <div
      {...props}
      className="flex w-full max-w-[calc(100%-1.875rem)] items-center gap-2 bg-eden-700"
    />
  )
}
