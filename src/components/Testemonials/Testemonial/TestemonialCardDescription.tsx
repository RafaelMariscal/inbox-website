import { ReactNode } from 'react'

interface TestemonialCardDescriptionProps {
  children: ReactNode
}

export default function TestemonialCardDescription({
  children,
}: TestemonialCardDescriptionProps) {
  return <span className="block font-semibold opacity-60">{children}</span>
}
