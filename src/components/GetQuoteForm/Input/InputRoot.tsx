import clsx from 'clsx'
import { ReactNode } from 'react'
import { FieldError } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface InputRootProps {
  children: ReactNode
  errorMessage: FieldError | undefined
  className?: string
}

export default function InputRoot({
  children,
  errorMessage,
  className,
}: InputRootProps) {
  return (
    <div
      className={twMerge(
        'relative h-14 w-full border border-eden-100 bg-transparent shadow-lg shadow-dark/20',
        'valid:[&_>input]:bg-eden-100/30 focus:[&_>input]:bg-eden-100/30',
        clsx(errorMessage && 'border-terracotta-500'),

        className,
      )}
    >
      {children}
    </div>
  )
}
