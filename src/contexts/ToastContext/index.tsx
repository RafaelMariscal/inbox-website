'use client'

import { Dispatch, SetStateAction, createContext } from 'react'

interface ToastContextProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  message: string
  setMessage: Dispatch<SetStateAction<string>>
  title: string
  setTitle: Dispatch<SetStateAction<string>>
  handleShowToastMessage: (newMessage: string) => void
  timer: number
  setTimer: Dispatch<SetStateAction<number>>
}

export const ToastContext = createContext<ToastContextProps>({
  isOpen: false,
  setIsOpen: () => null,
  message: '',
  setMessage: () => null,
  title: '',
  setTitle: () => null,
  handleShowToastMessage: () => null,
  timer: 5000,
  setTimer: () => null,
})
