import { ReactNode } from 'react'

interface TestemonialRootProps {
  children: ReactNode
}

export default function TestemonialRoot({ children }: TestemonialRootProps) {
  return (
    <div
      className="
        absolute bottom-0 top-0 flex w-full items-center
        max-lg:max-w-sm max-lg:self-center max-tablets-sm:max-w-full
      "
    >
      <div
        className="
          mx-auto flex h-full w-full max-w-screen-lg items-center gap-28
          max-lg:flex-col max-lg:items-start max-lg:gap-4
        "
      >
        {children}
      </div>
    </div>
  )
}
