import { Reorder } from 'framer-motion'
import { ReactNode } from 'react'
import { Testemonial } from '..'

interface TestemonialContentProps {
  testemonials: Testemonial[]
  setTestemonials: (state: Testemonial[]) => void
  children: ReactNode
}

export default function TestemonialContent({
  testemonials,
  setTestemonials,
  children,
}: TestemonialContentProps) {
  return (
    <Reorder.Group
      as="div"
      axis="x"
      values={testemonials}
      onReorder={setTestemonials}
      className="
        flex gap-3
        max-lg:translate-x-[37%]
      "
    >
      {children}
    </Reorder.Group>
  )
}
