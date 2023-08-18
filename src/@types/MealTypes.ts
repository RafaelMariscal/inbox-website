export interface MealsQuantities {
  weekdays: number
  onSaturdays: number
  onSundays: number
}
export enum MealsTypes {
  breakfast = 'Desjejum',
  lunch = 'Almoço',
  dinner = 'Jantar',
  snack = 'Lanche',
  event = 'Evento',
  other = 'Outros',
}

export interface MealsProps {
  id: string
  type: MealsTypes
  timeToServe: string
  quantities: MealsQuantities
  mealDescription: string
}
