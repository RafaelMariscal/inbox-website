interface ToastMessageDescriptionProps {
  description: string
}

export default function ToastMessageDescription({
  description,
}: ToastMessageDescriptionProps) {
  return (
    <p className="text-sm font-semibold leading-none tracking-wide text-eden-500/80">
      {description}
    </p>
  )
}
