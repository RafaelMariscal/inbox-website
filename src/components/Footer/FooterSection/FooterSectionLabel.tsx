import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface FooterSectionLabelProps {
  children: ReactNode
  className?: string
}

export default function FooterSectionLabel({
  children,
  className,
}: FooterSectionLabelProps) {
  return (
    <p className={twMerge('text-base font-medium leading-none', className)}>
      {children}
    </p>
  )
}
