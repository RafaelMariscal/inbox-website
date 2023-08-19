import { MealsProps } from '@/@types/MealTypes'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ComponentProps, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface CustomClassNameProps {
  before?: string
  className?: string
}

type MealRequestDialogProps = ComponentProps<'div'> & {
  customClassName?: CustomClassNameProps
  mealSelected?: MealsProps
}

export default function MealRequestDialog({
  children,
  className,
  mealSelected,
  customClassName,
}: MealRequestDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger
        className={twMerge(
          'relative inline-block bg-salen-500 shadow-button outline-none',
          'before:block before:h-2 before:w-2 before:bg-inherit',
          'before:absolute before:left-0 before:top-0 ',
          'before:origin-top-left before:-rotate-45 before:scale-0',
          'before:transition-all before:duration-150 before:hover:scale-100',
          'after:block after:h-2 after:w-2 after:bg-inherit ',
          'after:absolute after:bottom-0 after:right-0 ',
          'after:origin-bottom-right after:rotate-45 after:scale-0',
          'after:transition-all after:duration-150 after:hover:scale-100',
          '[&_div]:hover:-translate-y-[.375rem] [&_div]:hover:translate-x-[.375rem]',
          '[&_div]:hover:border-salen-500 [&_div]:hover:text-send-500',
          '[&_div]:focus:border-salen-500 [&_div]:focus:text-send-500',
          customClassName?.before || className,
        )}
      >
        <div
          className={twMerge(
            'flex items-center justify-center gap-2',
            'font-medium leading-none tracking-wide',
            'relative z-10 transition-all duration-150',
            'bg-eden-700 text-eden-100',
            'border border-eden-100',
            customClassName?.className || className,
          )}
        >
          {children}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className="
          fixed inset-0 z-50 grid place-items-center bg-dark/20
          data-[state=closed]:animate-[hide_300ms]
          data-[state=open]:animate-[show_200ms]
      "
        >
          <Dialog.Content
            className="
            h-40 w-40 bg-light shadow-card
            data-[state=closed]:animate-[dialog-content-hide_300ms]
            data-[state=open]:animate-[dialog-content-show_250ms]
          "
          >
            <Dialog.Title>
              {mealSelected
                ? `Editando ${mealSelected.type}`
                : 'Formulário de Refeição'}
            </Dialog.Title>
            <Dialog.Description>Testing</Dialog.Description>
            <Dialog.Close className="outline-none">
              <X size={16} className="bg-red-500" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
