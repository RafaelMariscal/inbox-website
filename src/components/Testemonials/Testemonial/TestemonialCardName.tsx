// eslint-disable-next-line camelcase
import { Bree_Serif } from 'next/font/google'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

const breeSerif = Bree_Serif({
  weight: '400',
  subsets: ['latin'],
  fallback: ['bree-serif', 'serif'],
})

interface TestemonialCardNameProps {
  children: ReactNode
}

export default function TestemonialCardName({
  children,
}: TestemonialCardNameProps) {
  return (
    <span
      className={twMerge('block text-xl font-semibold', breeSerif.className)}
    >
      {children}
    </span>
  )
}
