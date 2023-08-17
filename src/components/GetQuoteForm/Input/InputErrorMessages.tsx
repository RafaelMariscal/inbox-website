import { Info } from 'lucide-react'
import { ReactNode } from 'react'

interface InputErrorMessagesProps {
  children: ReactNode
}

export default function InputErrorMessages({
  children,
}: InputErrorMessagesProps) {
  return (
    <div className="flex items-center gap-[.125rem]">
      <Info
        size={12}
        strokeWidth={2}
        fill="#fdc5b3"
        fillOpacity="20%"
        stroke="#de3700"
      />
      <p className="text-terracotta-500">{children}</p>
    </div>
  )
}
