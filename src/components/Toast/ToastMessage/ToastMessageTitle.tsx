interface ToastMessageTitleProps {
  title: string
}

export default function ToastMessageTitle({ title }: ToastMessageTitleProps) {
  return <p className="font-bold leading-none text-eden-700">{title}</p>
}
