import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ToastMessageActionProps {
  children: ReactNode
  trigger: () => void
  className?: string
}

export default function ToastMessageAction({
  children,
  trigger,
  className,
}: ToastMessageActionProps) {
  return (
    <button
      onClick={trigger}
      className={twMerge(
        'border border-transparent bg-eden-700 p-[.125rem] text-light',
        'select-none outline-none',
        'absolute right-0 top-0 -translate-y-1/2 translate-x-1/2',
        'duration-200 [&_*]:transition-[background]',
        'hover:border-eden-700 hover:bg-eden-500',
        'focus:border-eden-700 focus:bg-eden-500',
        className,
      )}
    >
      {children}
    </button>
  )
}
