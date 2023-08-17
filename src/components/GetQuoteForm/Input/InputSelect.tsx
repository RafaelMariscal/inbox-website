'use client'

import * as Select from '@radix-ui/react-select'
import { Check, ChevronDownIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

const SERVICES = [
  'Restaurante Empresarial',
  'Refeições Transportadas',
  'Refeições para Eventos',
]

interface InputSelectProps {
  className?: string
}

export default function InputSelect({ className }: InputSelectProps) {
  return (
    <Select.Root required>
      <Select.Trigger
        className={twMerge(
          'relative h-14 w-full max-w-sm border border-eden-100',
          'flex items-center justify-between gap-4 pr-4 font-semibold',
          'shadow-lg shadow-dark/20 outline-none',
          'hover:bg-eden-100/30 focus:bg-eden-100/30',
          className,
        )}
        aria-label="Services"
      >
        <div className="flex-1 text-center">
          <Select.Value placeholder="Modal de Serviço" />
        </div>
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          className="w-screen max-w-sm bg-light shadow-lg shadow-dark/20"
        >
          <Select.Viewport>
            {SERVICES.map((service) => (
              <Select.Item
                key={service}
                value={service}
                className="flex items-center justify-center gap-3 outline-none focus:bg-eden-100"
              >
                <div className="font-semibold">
                  <Select.ItemText>{service}</Select.ItemText>
                </div>
                <Select.ItemIndicator>
                  <Check size={14} strokeWidth={2.5} />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.Arrow fill="#FFF" />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
