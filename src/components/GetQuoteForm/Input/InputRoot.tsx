import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputRootProps {
  children: ReactNode
  className?: string
}

export default function InputRoot({ children, className }: InputRootProps) {
  return (
    <div
      className={twMerge(
        'relative h-14 w-full max-w-sm border border-eden-100 shadow-lg shadow-dark/20',
        'valid:[&_>input]:bg-eden-100/30 focus:[&_>input]:bg-eden-100/30',
        className,
      )}
    >
      {children}
    </div>
  )
}
