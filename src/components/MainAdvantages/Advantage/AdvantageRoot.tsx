'use client'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'
interface AdvantageRootProps {
  children: ReactNode
  direction?: -1 | 1
  index?: number
}

export default function AdvantageRoot({
  children,
  direction = 1,
  index = 0,
}: AdvantageRootProps) {
  const fadeInAnimationVariants = {
    initial: {
      opacity: '0%',
      x: 100 * direction,
    },
    animate: {
      opacity: '100%',
      x: 0,
      transition: { duration: 1, type: 'spring', delay: 0.15 * index },
    },
  }
  return (
    <motion.li
      className="flex gap-4"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.li>
  )
}
