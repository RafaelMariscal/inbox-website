import { ComponentProps } from 'react'

type MealsRequestTableHeaderProps = ComponentProps<'header'>

export default function MealsRequestTableHeader(
  props: MealsRequestTableHeaderProps,
) {
  return (
    <header
      {...props}
      className="
        flex items-center gap-2
        max-lg:w-fit
      "
    />
  )
}
