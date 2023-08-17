import { ReactNode } from 'react'

interface CardContentProps {
  children: ReactNode
}

export default function CardContent({ children }: CardContentProps) {
  return (
    <div className="absolute inset-0 bg-eden-950/60 text-light transition-colors">
      {children}
    </div>
  )
}
