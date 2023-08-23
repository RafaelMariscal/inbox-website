'use client'

import { Dispatch, SetStateAction, createContext } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { MealRequestedType, QuoteFormData } from './porvider'

interface QuoteFormContextProps {
  useQuoteForm: UseFormReturn<QuoteFormData>
  mealsRequested: MealRequestedType[]
  setMealsRequested: Dispatch<SetStateAction<MealRequestedType[]>>
}

export const QuoteFormContext = createContext<QuoteFormContextProps | null>(
  null,
)
