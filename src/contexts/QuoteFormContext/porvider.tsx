'use client'

import { ReactNode } from 'react'
import { QuoteFormContext } from '.'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

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
    .email({ message: 'Email inválido' }),
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
    .nonempty({ message: 'Campo obrigatório.' }),
  serviceModel: z
    .string({ required_error: 'Campo obrigatório.' })
    .nonempty({ message: 'Campo obrigatório.' }),
})
export type QuoteFormData = z.infer<typeof quoteFormSchema>

interface GlobalQuoteFormProviderProps {
  children: ReactNode
}

export const GlobalQuoteFormProvider = ({
  children,
}: GlobalQuoteFormProviderProps) => {
  const useFormObject = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  })
  return (
    <QuoteFormContext.Provider value={{ useQuoteForm: useFormObject }}>
      {children}
    </QuoteFormContext.Provider>
  )
}
