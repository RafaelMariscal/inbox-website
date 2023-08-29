import { ComponentProps } from 'react'

type MealsRequestTableRootProps = ComponentProps<'div'>

export default function MealsRequestTableRoot(
  props: MealsRequestTableRootProps,
) {
  return <div {...props} className="w-full bg-eden-100 px-2 py-1" />
}
