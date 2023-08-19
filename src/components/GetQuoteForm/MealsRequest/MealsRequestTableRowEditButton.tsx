import { FileEdit } from 'lucide-react'
import MealRequestDialog from '../MealRequestDialog'
import { MealsProps } from '@/@types/MealTypes'

type MealsRequestTableRowEditButtonProps = {
  mealSelected?: MealsProps
}

export default function MealsRequestTableRowEditButton({
  mealSelected,
}: MealsRequestTableRowEditButtonProps) {
  return (
    <MealRequestDialog
      mealSelected={mealSelected}
      customClassName={{ className: 'p-1' }}
    >
      <FileEdit size={16} strokeWidth={2} />
    </MealRequestDialog>
  )
}
