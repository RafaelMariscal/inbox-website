import { ReactNode } from 'react'

interface TestemonialCardHeaderProps {
  children: ReactNode
}

export default function TestemonialCardHeader({
  children,
}: TestemonialCardHeaderProps) {
  return <div className="mb-5 flex items-center gap-4">{children}</div>
}
