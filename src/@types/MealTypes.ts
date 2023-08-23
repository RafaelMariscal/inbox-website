import { z } from 'zod'

export interface MealsQuantities {
  weekdays: number
  onSaturdays: number
  onSundays: number
}

export enum MealTypeEnum {
  breakfast = 'Desjejum',
  lunch = 'Almoço',
  dinner = 'Jantar',
  supper = 'Ceia',
  snack = 'Lanche',
  coffeeBreak = 'Coffee Break',
  other = 'Outro',
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
