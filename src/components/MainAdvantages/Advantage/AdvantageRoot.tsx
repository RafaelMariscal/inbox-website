import { ReactNode } from 'react'

interface AdvantageRootProps {
  children: ReactNode
}

export default function AdvantageRoot({ children }: AdvantageRootProps) {
  return <div className="flex gap-4">{children}</div>
}
