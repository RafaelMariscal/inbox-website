import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface FooterSectionDescriptionProps {
  children: ReactNode
  className?: string
}

export default function FooterSectionDescription({
  children,
  className,
}: FooterSectionDescriptionProps) {
  return (
    <span className={twMerge('text-sm font-normal', className)}>
      {children}
    </span>
  )
}
