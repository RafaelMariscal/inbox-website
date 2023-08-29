import { ReactNode } from 'react'

interface TestemonialControllerTitleProps {
  children: ReactNode
}

export default function TestemonialControllerTitle({
  children,
}: TestemonialControllerTitleProps) {
  return (
    <h2
      className="
        mb-6 text-4xl font-bold leading-none drop-shadow-custom-text
        max-lg:mb-4 max-lg:max-w-[280px]
      "
    >
      {children}
    </h2>
  )
}
