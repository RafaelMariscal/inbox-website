'use client'

import { createContext } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { QuoteFormData } from './porvider'

interface QuoteFormContextProps {
  useQuoteForm: UseFormReturn<QuoteFormData>
}

export const QuoteFormContext = createContext<QuoteFormContextProps | null>(
  null,
)
