import EmptyBox from '@/assets/icons/EmptyBox'
import { ComponentProps } from 'react'

type MealsRequestEmptyStateProps = ComponentProps<'div'>

export default function MealsRequestEmptyState(
  props: MealsRequestEmptyStateProps,
) {
  return (
    <div {...props} className="relative grid place-items-center pt-2">
      <span className="absolute top-0 text-sm font-medium">
        Solicitação Vazia...
      </span>
      <EmptyBox className="drop-shadow-custom-text" />
    </div>
  )
}
