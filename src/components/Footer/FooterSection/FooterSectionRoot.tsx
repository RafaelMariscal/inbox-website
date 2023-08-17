import { ReactNode } from 'react'

interface FooterSectionRootProps {
  children: ReactNode
}

export default function FooterSectionRoot({
  children,
}: FooterSectionRootProps) {
  return (
    <div className="flex flex-col gap-3 text-light drop-shadow-custom-text">
      {children}
    </div>
  )
}
