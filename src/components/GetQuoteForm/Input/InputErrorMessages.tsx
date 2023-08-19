'use client'
import * as HoverCard from '@radix-ui/react-hover-card'
import { AnimatePresence, motion } from 'framer-motion'
import { Info } from 'lucide-react'
import { useState } from 'react'

interface InputErrorMessagesProps {
  errorMessage: string | undefined
}

export default function InputErrorMessages({
  errorMessage,
}: InputErrorMessagesProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HoverCard.Root open={isOpen} onOpenChange={setIsOpen} openDelay={100}>
      <HoverCard.Trigger asChild>
        <button
          type="button"
          className="absolute right-2 top-1 z-50 cursor-default outline-none"
        >
          <Info
            size={12}
            strokeWidth={2}
            fill="#fdc5b3"
            fillOpacity="20%"
            stroke="#de3700"
          />
        </button>
      </HoverCard.Trigger>
      <AnimatePresence>
        {isOpen && (
          <HoverCard.Portal forceMount>
            <HoverCard.Content asChild side="left" align="start" sideOffset={3}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="border border-terracotta-500 bg-light px-3 py-2 text-sm font-medium text-terracotta-500"
              >
                {errorMessage}
              </motion.div>
            </HoverCard.Content>
          </HoverCard.Portal>
        )}
      </AnimatePresence>
    </HoverCard.Root>
  )
}
