'use client'

import { createContext } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { MealRequestFormData } from './porvider'

interface MealRequestFormContextProps {
  MealRequestForm: UseFormReturn<MealRequestFormData>
}

export const MealRequestFormContext =
  createContext<MealRequestFormContextProps | null>(null)
