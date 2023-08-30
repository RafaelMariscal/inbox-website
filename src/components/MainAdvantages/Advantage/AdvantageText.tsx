import { ReactNode } from 'react'

interface AdvantageTextProps {
  children?: ReactNode
}

export default function AdvantageText({ children }: AdvantageTextProps) {
  return (
    <p
      className="
        font-medium leading-tight text-eden-700 drop-shadow-custom-text
        max-phones-sm:text-sm max-phones-sm:font-semibold
      "
    >
      {children}
    </p>
  )
}
