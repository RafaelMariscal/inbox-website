import { ComponentProps } from 'react'

type MealsRequestTableRowProps = ComponentProps<'div'>

export default function MealsRequestTableRow(props: MealsRequestTableRowProps) {
  return <div {...props} className="mb-1 flex items-center gap-1" />
}
