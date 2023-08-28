import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ToastMessageIconProps {
  children: ReactNode
  className?: string
}

export default function ToastMessageIcon({
  children,
  className,
}: ToastMessageIconProps) {
  return <div className={twMerge('p-4', className)}>{children}</div>
}
