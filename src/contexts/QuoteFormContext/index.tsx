'use client'

import { Dispatch, SetStateAction, createContext } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { MealRequestedType, QuoteFormData } from './porvider'
import { MealRequestFormData } from '../MealRequestFormContext/porvider'

interface QuoteFormContextProps {
  useQuoteForm: UseFormReturn<QuoteFormData>
  mealsRequested: MealRequestedType[]
  setMealsRequested: Dispatch<SetStateAction<MealRequestedType[]>>
  addMealRequest: (data: MealRequestFormData) => void
  editMealRequest: (data: MealRequestFormData, meal: MealRequestedType) => void
  deleteMealRequest: (meal: MealRequestedType) => void
}

export const QuoteFormContext = createContext<QuoteFormContextProps | null>(
  null,
)
