import { useContext } from 'react'
import { MealRequestFormContext } from '.'

export const useMealRequestFormContext = () => {
  const ctx = useContext(MealRequestFormContext)
  if (ctx === null) {
    console.log('MealRequestFormContext is null.')
    return null
  }
  return ctx
}
