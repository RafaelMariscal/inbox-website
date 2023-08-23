import { MealsProps } from '@/@types/MealTypes'

export enum MealTypeEnum {
  breakfast = 'Desjejum',
  lunch = 'Almoço',
  dinner = 'Jantar',
  supper = 'Ceia',
  snack = 'Lanche',
  coffeeBreak = 'Coffee Break',
  other = 'Outro',
}

const MEALS: MealsProps[] = [
  {
    id: `${MealTypeEnum.breakfast}1`,
    type: MealTypeEnum.breakfast,
    timeToServe: '06:30',
    quantities: {
      weekdays: 230,
      onSaturdays: 180,
      onSundays: 120,
    },
    mealDescription: '1 Pão com margarina, 1 Pão com recheio, café e leite.',
  },
  {
    id: `${MealTypeEnum.lunch}1`,
    type: MealTypeEnum.lunch,
    timeToServe: '11:00',
    quantities: {
      weekdays: 290,
      onSaturdays: 210,
      onSundays: 170,
    },
    mealDescription:
      'Arroz, Feijão, Macarrão, Farofa, 2 opções de Saladas, 2 opões de proteínas e doce ou fruta.',
  },
  {
    id: `${MealTypeEnum.dinner}1`,
    type: MealTypeEnum.dinner,
    timeToServe: '11:00',
    quantities: {
      weekdays: 200,
      onSaturdays: 160,
      onSundays: 110,
    },
    mealDescription:
      'Arroz, Feijão, Macarrão, Farofa, 2 opções de Saladas, 2 opões de proteínas e doce ou fruta.',
  },
  {
    id: `${MealTypeEnum.dinner}2`,
    type: MealTypeEnum.dinner,
    timeToServe: '12:00',
    quantities: {
      weekdays: 200,
      onSaturdays: 160,
      onSundays: 110,
    },
    mealDescription:
      'Arroz, Feijão, Macarrão, Farofa, 2 opções de Saladas, 2 opões de proteínas e doce ou fruta.',
  },
]

export default MEALS
