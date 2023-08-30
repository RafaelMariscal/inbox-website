'use client'
import { HTMLMotionProps, motion } from 'framer-motion'

type AdvantageRootProps = HTMLMotionProps<'li'> & {
  direction?: -1 | 1
  index?: number
}

export default function AdvantageRoot({
  children,
  direction = 1,
  index = 0,
  ...props
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
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      className="
        flex gap-4 pb-2 pt-1 outline-none transition-colors focus:bg-eden-100
        max-tablets-sm:focus:bg-transparent
      "
      {...props}
    >
      {children}
    </motion.li>
  )
}
