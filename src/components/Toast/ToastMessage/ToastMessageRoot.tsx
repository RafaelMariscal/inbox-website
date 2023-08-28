import { HTMLProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ToastMessageRootProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export default function ToastMessageRoot({
  children,
  className,
  ...rest
}: ToastMessageRootProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        'fixed right-6 z-50 flex items-center pr-4 shadow-lg shadow-dark/20',
        'invisible border border-cyan-700 border-opacity-50',
        'bg-eden-100 md:-right-[50%] md:top-6',
        'max-md:bottom-4 max-md:w-full max-md:max-w-[calc(100%-2.5rem)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
