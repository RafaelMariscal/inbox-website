import { ReactNode } from 'react'

interface TestemonialCardDescriptionProps {
  children: ReactNode
}

export default function TestemonialCardDescription({
  children,
}: TestemonialCardDescriptionProps) {
  return (
    <span className="block h-fit font-semibold opacity-60">{children}</span>
  )
}
