import Button from '@/components/Button'
import { Soup } from 'lucide-react'
import { ComponentProps } from 'react'

type MealsRequestAddMealButtonProps = ComponentProps<'button'>

export default function MealsRequestAddMealButton({
  type,
  ...props
}: MealsRequestAddMealButtonProps) {
  return (
    <Button
      {...props}
      type={type || 'button'}
      variant="stroke"
      className="left-1/2 mt-4 -translate-x-1/2"
    >
      Adicionar Refeição
      <Soup size={16} strokeWidth={2} fillOpacity={0} />
    </Button>
  )
}
