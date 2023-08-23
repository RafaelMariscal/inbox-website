export interface MealsQuantities {
  weekdays: number
  onSaturdays: number
  onSundays: number
}

export type MealType =
  | 'Desjejum'
  | 'Almoço'
  | 'Jantar'
  | 'Ceia'
  | 'Lanche'
  | 'Coffee Break'
  | 'Outros'
export interface MealsProps {
  id: string
  type: MealType
  timeToServe: string
  quantities: MealsQuantities
  mealDescription: string
}
