// eslint-disable-next-line camelcase
import { Bree_Serif } from 'next/font/google'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const breeSerif = Bree_Serif({ weight: '400', subsets: ['latin'] })

interface TestemonialCardTextProps {
  children: ReactNode
}

export default function TestemonialCardText({
  children,
}: TestemonialCardTextProps) {
  return (
    <p
      className={twMerge(
        'flex-1 font-medium leading-snug opacity-60',
        breeSerif.className,
      )}
    >
      &#34;{children}&#34;
    </p>
  )
}
