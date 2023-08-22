import { MealsProps, MealsTypes } from '@/@types/MealTypes'

const MEALS: MealsProps[] = [
  {
    id: `${MealsTypes.breakfast}1`,
    type: MealsTypes.breakfast,
    timeToServe: '06:30',
    quantities: {
      weekdays: 230,
      onSaturdays: 180,
      onSundays: 120,
    },
    mealDescription: '1 Pão com margarina, 1 Pão com recheio, café e leite.',
  },
  {
    id: `${MealsTypes.lunch}1`,
    type: MealsTypes.lunch,
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
    id: `${MealsTypes.dinner}1`,
    type: MealsTypes.dinner,
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
    id: `${MealsTypes.dinner}2`,
    type: MealsTypes.dinner,
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
