import { ReactNode } from 'react'

interface AdvantageTextProps {
  children?: ReactNode
}

export default function AdvantageText({ children }: AdvantageTextProps) {
  return (
    <p className="font-medium leading-tight text-eden-700 drop-shadow-custom-text">
      {children}
    </p>
  )
}
