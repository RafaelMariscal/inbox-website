import { useContext } from 'react'
import { QuoteFormContext } from '.'

export const useQuoteFormContext = () => {
  const ctx = useContext(QuoteFormContext)
  if (ctx === null) {
    console.log('quoteFormContext is null.')
    return null
  }
  return ctx
}
