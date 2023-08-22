'use client'

import * as Select from '@radix-ui/react-select'
import { Check, ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import Input from '.'
import { FieldValues, Path, PathValue, UseFormSetValue } from 'react-hook-form'
interface InputSelectProps<T extends FieldValues> {
  name: Path<T>
  options: string[]
  value: string
  setValue: UseFormSetValue<T>
  placeholder: string
  errorMessage?: string | undefined
  className?: string
}

export default function InputSelect<T>({
  name,
  options,
  value,
  setValue,
  errorMessage,
  placeholder,
  className,
}: InputSelectProps<{ [key in keyof T]: T[key] }>) {
  const [open, setOpen] = useState(false)
  return (
    <Select.Root
      open={open}
      onOpenChange={setOpen}
      value={value}
      onValueChange={(value) => setValue(name, value as PathValue<T, Path<T>>)}
    >
      <div className={twMerge('relative', className)}>
        <Select.Trigger
          className={twMerge(
            'relative h-14 w-full border border-eden-100',
            'flex items-center justify-between pr-4 font-semibold',
            'shadow-lg shadow-dark/20 outline-none',
            'hover:bg-eden-100/30 focus:bg-eden-100/30',
            clsx(errorMessage && 'border-terracotta-500'),
            className,
          )}
          aria-label="Services"
        >
          <div
            className={twMerge(
              'flex-1 text-center opacity-50',
              clsx(value && 'opacity-100'),
            )}
          >
            <Select.Value placeholder={placeholder} />
          </div>
          <Select.Icon>
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        {errorMessage && <Input.ErrorMessage errorMessage={errorMessage} />}
      </div>

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
          <Select.Viewport className="max-h-52">
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
