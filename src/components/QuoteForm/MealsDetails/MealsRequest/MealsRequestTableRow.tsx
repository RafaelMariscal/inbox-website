import { HTMLMotionProps, motion } from 'framer-motion'

type MealsRequestTableRowProps = HTMLMotionProps<'div'>

export default function MealsRequestTableRow(props: MealsRequestTableRowProps) {
  return (
    <motion.div
      {...props}
      initial={{ height: 0, opacity: '0%' }}
      animate={{ height: 'auto', opacity: '100%' }}
      exit={{ height: '0%', opacity: '0%' }}
      className="
        mb-1 flex items-center gap-1
        max-lg:w-fit
      "
    />
  )
}
