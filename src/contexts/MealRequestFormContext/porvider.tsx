'use client'

import { ReactNode } from 'react'
import { MealRequestFormContext } from '.'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export const mealRequestFormSchema = z.object({
  mealType: z.enum(
    [
      'Desjejum',
      'Almoço',
      'Jantar',
      'Ceia',
      'Lanche',
      'Coffee Break',
      'Outros',
    ],
    {
      errorMap: () => {
        return { message: 'Campo obrigatório.' }
      },
    },
  ),
  mealTime: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' })
    .min(3, { message: 'Mínimo de 3 caracteres.' })
    .max(200, { message: 'Máximo de 200 caracteres.' }),
  weekDaysQuantities: z
    .number({
      required_error: 'Campo obrigatório.',
      invalid_type_error: 'Campo obrigatório: 0-9',
    })
    .int({ message: 'Apenas números inteiros' })
    .nonnegative({ message: 'Apenas números positivos.' })
    .min(40, { message: 'Mínimo de 40 refeições' }),
  saturdayQuantities: z
    .number({
      required_error: 'Campo obrigatório.',
      invalid_type_error: 'Campo obrigatório: 0-9',
    })
    .int({ message: 'Apenas números inteiros' })
    .nonnegative({ message: 'Apenas números positivos.' }),
  sundaysQuantities: z
    .number({
      required_error: 'Campo obrigatório.',
      invalid_type_error: 'Campo obrigatório: 0-9',
    })
    .int({ message: 'Apenas números inteiros' })
    .nonnegative({ message: 'Apenas números positivos.' }),
  mealDescription: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' })
    .min(3, { message: 'Mínimo de 3 caracteres.' })
    .max(400, { message: 'Máximo de 400 caracteres.' }),
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
