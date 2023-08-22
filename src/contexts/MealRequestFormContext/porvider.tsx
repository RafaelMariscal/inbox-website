'use client'

import { ReactNode } from 'react'
import { MealRequestFormContext } from '.'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const mealRequestFormSchema = z.object({
  mealType: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' })
    .min(3, { message: 'Mínimo de 3 caracteres.' })
    .max(200, { message: 'Máximo de 200 caracteres.' }),
  mealTime: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' })
    .min(3, { message: 'Mínimo de 3 caracteres.' })
    .max(200, { message: 'Máximo de 200 caracteres.' }),
  weekDaysQuantities: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' })
    .email({ message: 'Email inválido' }),
  saturdayQuantities: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' }),
  sundaysQuantities: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' })
    .min(3, { message: 'Mínimo de 3 caracteres.' })
    .max(200, { message: 'Máximo de 200 caracteres.' }),
  mealDescription: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' }),
})
export type MealRequestFormData = z.infer<typeof mealRequestFormSchema>

interface GlobalMealRequestFormProviderProps {
  children: ReactNode
}

export const GlobalMealRequestFormProvider = ({
  children,
}: GlobalMealRequestFormProviderProps) => {
  const useFormObject = useForm<MealRequestFormData>({
    resolver: zodResolver(mealRequestFormSchema),
  })
  return (
    <MealRequestFormContext.Provider value={{ MealRequestForm: useFormObject }}>
      {children}
    </MealRequestFormContext.Provider>
  )
}
