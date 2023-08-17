import { ReactNode } from 'react'

interface InputContainerProps {
  children: ReactNode
}

export default function InputContainer({ children }: InputContainerProps) {
  return (
    <div className="absolute left-4 top-4 -z-10 flex h-fit items-center gap-1 transition-all">
      {children}
    </div>
  )
}
