import { ReactNode } from 'react'
interface CardDescriptionProps {
  children: ReactNode
}

export default function CardDescription({ children }: CardDescriptionProps) {
  return (
    <p
      className="
        h-0 w-0 -translate-x-[150%] px-4
        text-start leading-snug opacity-0 drop-shadow-sm
      "
    >
      {children}
    </p>
  )
}
