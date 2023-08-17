import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface FooterSectionTitleProps {
  children: ReactNode
  className?: string
}

export default function FooterSectionTitle({
  children,
  className,
}: FooterSectionTitleProps) {
  return (
    <h4 className={twMerge('text-lg font-semibold tracking-wide', className)}>
      {children}
    </h4>
  )
}
