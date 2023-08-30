import { ReactNode } from 'react'

interface AdvantageIconProps {
  children?: ReactNode
}

export default function AdvantageIcon({ children }: AdvantageIconProps) {
  return (
    <div
      className="
          relative top-1 z-0 h-fit w-fit bg-salen-500 shadow-custom 
          before:absolute
          
          before:-top-2 before:left-0 before:block before:h-2
          before:w-2 before:origin-bottom-left before:rotate-45 
          before:bg-salen-500 after:absolute

          after:-right-2 after:bottom-0 after:-z-10 after:block
          after:h-2 after:w-2 after:origin-bottom-left 
          after:-rotate-45 after:bg-salen-500 
          
          max-phones:top-2
        "
    >
      <div
        className="
          grid h-10 w-10 translate-x-[6px] translate-y-[-6px] place-items-center bg-eden-700
        "
      >
        {children}
      </div>
    </div>
  )
}
