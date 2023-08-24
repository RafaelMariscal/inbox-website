import { FileEdit } from 'lucide-react'
import MealRequestDialog from '../MealRequestDialog'
import { MealRequestedType } from '@/contexts/QuoteFormContext/porvider'

type MealsRequestTableRowEditButtonProps = {
  meal: MealRequestedType
  disabled?: boolean
}

export default function MealsRequestTableRowEditButton({
  meal,
  disabled = false,
}: MealsRequestTableRowEditButtonProps) {
  return (
    <MealRequestDialog
      meal={meal}
      customClassName={{ className: 'p-1' }}
      disabled={disabled}
    >
      <FileEdit size={16} strokeWidth={2} />
    </MealRequestDialog>
  )
}
