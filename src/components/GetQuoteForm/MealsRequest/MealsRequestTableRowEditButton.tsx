import { FileEdit } from 'lucide-react'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type MealsRequestTableRowEditButtonProps = ComponentProps<'button'>

export default function MealsRequestTableRowEditButton({
  type,
  className,
  ...props
}: MealsRequestTableRowEditButtonProps) {
  return (
    <button
      {...props}
      type={type || 'button'}
      className={twMerge(
        'relative inline-block bg-salen-500 shadow-button outline-none',
        'before:block before:h-2 before:w-2 before:bg-salen-500',
        'before:absolute before:left-0 before:top-0 ',
        'before:origin-top-left before:-rotate-45 before:scale-0',
        'before:transition-all before:duration-150 before:hover:scale-100',
        'after:block after:h-2 after:w-2 after:bg-salen-500 ',
        'after:absolute after:bottom-0 after:right-0 ',
        'after:origin-bottom-right after:rotate-45 after:scale-0',
        'after:transition-all after:duration-150 after:hover:scale-100',
        '[&_div]:hover:-translate-y-[.375rem] [&_div]:hover:translate-x-[.375rem]',
        '[&_*]:hover:border-salen-500 [&_*]:focus:border-salen-500',
        className,
      )}
    >
      <div
        className={twMerge(
          'flex items-center justify-center gap-2',
          'p-1 font-medium leading-none tracking-wide',
          'relative z-10 transition-all duration-150',
          'bg-eden-700 text-send-500',
        )}
      >
        {props.children ? (
          props.children
        ) : (
          <FileEdit size={16} strokeWidth={2} />
        )}
      </div>
    </button>
  )
}
