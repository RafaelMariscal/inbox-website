import { ReactNode } from 'react'

interface TestemonialRootProps {
  children: ReactNode
}

export default function TestemonialRoot({ children }: TestemonialRootProps) {
  return (
    <div className="absolute bottom-0 top-0 flex w-full items-center">
      <div className="mx-auto flex h-full w-full max-w-screen-lg items-center gap-28">
        {children}
      </div>
    </div>
  )
}
