import { ReactNode } from 'react'
import { Reorder } from 'framer-motion'
import { Testemonial } from '..'

interface TestemonialCardRootProps {
  testemonial: Testemonial
  children: ReactNode
}

export default function TestemonialCardRoot({
  testemonial,
  children,
}: TestemonialCardRootProps) {
  return (
    <Reorder.Item
      as="div"
      value={testemonial}
      dragListener={false}
      transition={{
        type: 'spring',
        bounce: 0.15,
        duration: 0.7,
        restSpeed: 0.2,
      }}
      className="
        flex w-[440px] select-none flex-col bg-light p-8 shadow-card
        max-tablets-sm:w-screen max-tablets-sm:px-4
      "
    >
      {children}
    </Reorder.Item>
  )
}
