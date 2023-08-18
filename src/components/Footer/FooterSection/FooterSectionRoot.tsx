import { ReactNode } from 'react'

interface FooterSectionRootProps {
  children: ReactNode
}

export default function FooterSectionRoot({
  children,
}: FooterSectionRootProps) {
  return (
    <div className="flex flex-col gap-3 text-light drop-shadow-[0_.125rem_.25rem_rgba(0,0,0,0.8)]">
      {children}
    </div>
  )
}
