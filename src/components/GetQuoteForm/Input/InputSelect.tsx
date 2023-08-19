'use client'

import * as Select from '@radix-ui/react-select'
import { Check, ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputSelectProps {
  options: string[]
  placeholder: string
  className?: string
}

export default function InputSelect({
  options,
  placeholder,
  className,
}: InputSelectProps) {
  const [open, setOpen] = useState(false)

  return (
    <Select.Root open={open} onOpenChange={setOpen} required>
      <Select.Trigger
        className={twMerge(
          'relative h-14 w-full border border-eden-100',
          'flex items-center justify-between pr-4 font-semibold',
          'shadow-lg shadow-dark/20 outline-none',
          'hover:bg-eden-100/30 focus:bg-eden-100/30',
          className,
        )}
        aria-label="Services"
      >
        <div className="flex-1 text-center">
          <Select.Value placeholder={placeholder} />
        </div>
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal className="z-50">
        <Select.Content
          sideOffset={4}
          position="popper"
          align="end"
          className={twMerge(
            'w-full bg-light shadow-lg shadow-dark/20',
            'data-[state=open]:animate-[show_300ms_forwards]',
          )}
        >
          <Select.Viewport>
            {options.map((option, i) => (
              <Select.Item
                key={option}
                value={option}
                className="
                  flex cursor-pointer items-center justify-center gap-3 px-8 
                  outline-none focus:bg-eden-100 data-[isFirstOne=true]:opacity-20
                "
              >
                <div
                  data-isfirst={i === 0}
                  className="py-1 font-semibold data-[isfirst=true]:opacity-50"
                >
                  <Select.ItemText>
                    {option === '' ? placeholder : option}
                  </Select.ItemText>
                </div>
                {i !== 0 && (
                  <Select.ItemIndicator className="absolute right-2">
                    <Check size={14} strokeWidth={2.5} />
                  </Select.ItemIndicator>
                )}
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
