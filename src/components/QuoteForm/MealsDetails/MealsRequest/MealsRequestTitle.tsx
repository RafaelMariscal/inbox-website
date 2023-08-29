import { ComponentProps } from 'react'

type MealsRequestTitleProps = ComponentProps<'h3'>

export default function MealsRequestTitle(props: MealsRequestTitleProps) {
  return (
    <h3 {...props} className="mb-4 font-semibold leading-tight tracking-wide" />
  )
}
