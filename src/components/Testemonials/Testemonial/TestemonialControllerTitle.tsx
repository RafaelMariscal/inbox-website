import { ReactNode } from 'react'

interface TestemonialControllerTitleProps {
  children: ReactNode
}

export default function TestemonialControllerTitle({
  children,
}: TestemonialControllerTitleProps) {
  return (
    <h2 className="mb-6 text-4xl font-bold leading-none drop-shadow-custom-text">
      {children}
    </h2>
  )
}
