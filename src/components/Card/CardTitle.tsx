import { ReactNode } from 'react'

interface CardTitleProps {
  children: ReactNode
}

export default function CardTitle({ children }: CardTitleProps) {
  return (
    <h3
      className="
        relative top-[33%] mx-4 my-6 w-[calc(100%-2rem)]
        text-center text-3xl font-semibold leading-none 
        drop-shadow-[0_.125rem_.25rem_rgba(0,0,0,0.8)]
        transition-all duration-300
      
        after:absolute after:-bottom-4 after:left-0 
        after:h-1 after:bg-send-500 
      "
    >
      {children}
    </h3>
  )
}
