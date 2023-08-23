'use client'

import { ReactNode, useState } from 'react'
import { QuoteFormContext } from '.'
import { array, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
  MealRequestFormData,
  mealRequestFormSchema,
} from '../MealRequestFormContext/porvider'
import { UUID } from 'crypto'

export const quoteFormSchema = z.object({
  name: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' })
    .min(3, { message: 'Mínimo de 3 caracteres.' })
    .max(200, { message: 'Máximo de 200 caracteres.' }),
  role: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' })
    .min(3, { message: 'Mínimo de 3 caracteres.' })
    .max(200, { message: 'Máximo de 200 caracteres.' }),
  email: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' })
    .email({ message: 'Email inválido' })
    .min(3, { message: 'Mínimo de 3 caracteres.' })
    .max(200, { message: 'Máximo de 200 caracteres.' }),
  phone: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' }),
  companyName: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' })
    .min(3, { message: 'Mínimo de 3 caracteres.' })
    .max(200, { message: 'Máximo de 200 caracteres.' }),
  cnpj: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' }),
  address: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' })
    .min(3, { message: 'Mínimo de 3 caracteres.' })
    .max(200, { message: 'Máximo de 200 caracteres.' }),
  serviceModel: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' })
    .min(3, { message: 'Mínimo de 3 caracteres.' })
    .max(200, { message: 'Máximo de 200 caracteres.' }),
  mealsRequest: array(mealRequestFormSchema, {
    invalid_type_error: 'invalid mealRequest type',
    required_error: 'Refeições precisam ser adicionadas a requisição.',
  })
    .min(1, { message: 'Refeições precisam ser adicionadas a requisição.' })
    .max(12, { message: 'Refeições precisam ser adicionadas a requisição.' }),
})
export type QuoteFormData = z.infer<typeof quoteFormSchema>
export type MealRequestedType = MealRequestFormData & {
  id: UUID
}

interface GlobalQuoteFormProviderProps {
  children: ReactNode
}

export const GlobalQuoteFormProvider = ({
  children,
}: GlobalQuoteFormProviderProps) => {
  const useFormObject = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  })
  const [mealsRequested, setMealsRequested] = useState<MealRequestedType[]>([])
  return (
    <QuoteFormContext.Provider
      value={{ useQuoteForm: useFormObject, mealsRequested, setMealsRequested }}
    >
      {children}
    </QuoteFormContext.Provider>
  )
}
