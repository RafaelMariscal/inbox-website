import { MailCheck, X } from 'lucide-react'
import { ToastMessage } from './ToastMessage'
import { useToastContext } from '@/contexts/ToastContext/hook'

export default function Toast() {
  const { title, message, isOpen, setIsOpen } = useToastContext()
  return (
    <ToastMessage.Root
      aria-hidden={!isOpen}
      className="
        aria-[hidden='false']:animate-[swipeUp_200ms_ease-out_forwards]
        aria-[hidden='true']:animate-[swipeDown_300ms_ease-in_forwards]
        aria-[hidden='false']:md:animate-[swipeIn_200ms_ease-out_forwards]
        aria-[hidden='true']:md:animate-[swipeOut_300ms_ease-in_forwards]
      "
    >
      <ToastMessage.Icon>
        <MailCheck size={32} className="text-eden-500" strokeWidth={1.5} />
      </ToastMessage.Icon>
      <div className="flex flex-col gap-1">
        <ToastMessage.Title title={title} />
        {message && <ToastMessage.Description description={message} />}
      </div>
      <ToastMessage.Action trigger={() => setIsOpen(false)}>
        <X size={14} strokeWidth={3.5} />
      </ToastMessage.Action>
    </ToastMessage.Root>
  )
}
