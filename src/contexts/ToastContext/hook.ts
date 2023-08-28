import { useContext } from 'react'
import { ToastContext } from '.'

export const useToastContext = () => {
  const ctx = useContext(ToastContext)
  return ctx
}
