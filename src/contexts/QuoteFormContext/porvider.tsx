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
    required_error: 'Refeições precisam ser adicionadas à requisição.',
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
  const [mealsRequested, setMealsRequested] = useState<MealRequestedType[]>([])
  const useQuoteForm = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  })
  const { setValue, clearErrors } = useQuoteForm

  const addMealRequest = (data: MealRequestFormData) => {
    setTimeout(() => {
      const id = window.crypto.randomUUID() as UUID
      const newMealRequest: MealRequestedType = { id, ...data }
      setMealsRequested((prev) => {
        setValue('mealsRequest', [...prev, newMealRequest])
        return [...prev, newMealRequest]
      })
      clearErrors('mealsRequest')
    }, 1000)
  }
  const editMealRequest = (
    data: MealRequestFormData,
    meal: MealRequestedType,
  ) => {
    setTimeout(() => {
      setMealsRequested((prev) => {
        const updatedRequests = prev.map((request) => {
          if (request.id === meal.id)
            return { id: request.id, ...data } as MealRequestedType
          return request
        })
        setValue('mealsRequest', updatedRequests)
        return updatedRequests
      })
    }, 1000)
  }
  const deleteMealRequest = (meal: MealRequestedType) => {
    setTimeout(() => {
      setMealsRequested((prev) => {
        const updatedRequests = prev.filter((request) => request.id !== meal.id)
        setValue('mealsRequest', updatedRequests)
        return updatedRequests
      })
    }, 1000)
  }

  return (
    <QuoteFormContext.Provider
      value={{
        useQuoteForm,
        mealsRequested,
        setMealsRequested,
        addMealRequest,
        editMealRequest,
        deleteMealRequest,
      }}
    >
      {children}
    </QuoteFormContext.Provider>
  )
}
