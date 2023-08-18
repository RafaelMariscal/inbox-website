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
        'border border-eden-100 bg-eden-700 p-1 text-send-500 transition-colors duration-150',
        'hover:border-eden-700 hover:bg-send-500 hover:text-eden-700',
        className,
      )}
    >
      {props.children ? props.children : <FileEdit size={16} strokeWidth={2} />}
    </button>
  )
}
