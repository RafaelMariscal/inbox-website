import { FileEdit } from 'lucide-react'
import MealRequestDialog from '../MealRequestDialog'
import { MealsProps } from '@/@types/MealTypes'

type MealsRequestTableRowEditButtonProps = {
  meal: MealsProps
}

export default function MealsRequestTableRowEditButton({
  meal,
}: MealsRequestTableRowEditButtonProps) {
  return (
    <MealRequestDialog meal={meal} customClassName={{ className: 'p-1' }}>
      <FileEdit size={16} strokeWidth={2} />
    </MealRequestDialog>
  )
}
