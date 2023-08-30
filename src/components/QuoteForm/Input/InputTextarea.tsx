import { ComponentProps } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

type InputTextareaProps<T extends FieldValues> = ComponentProps<'textarea'> & {
  inputName: Path<T>
  register: UseFormRegister<T>
}

export default function InputTextarea<T>({
  className,
  inputName,
  register,
  ...rest
}: InputTextareaProps<{ [key in keyof T]: T[key] }>) {
  return (
    <textarea
      {...rest}
      className={twMerge(
        'absolute inset-0 z-10 mt-5 bg-transparent px-4 outline-none',
        'resize-none text-ellipsis whitespace-normal font-semibold',
        'max-tablets-sm:[&_~*]:text-sm',
        'disabled:opacity-60 [&_~div]:disabled:opacity-0',
        '[&_~*]:valid:top-[.125rem] [&_~*]:focus:top-[.125rem]',
        '[&_~*]:valid:text-[.625rem] [&_~*]:focus:text-[.625rem]',
        '[&_~*]:valid:opacity-100 [&_~*]:focus:opacity-100',
        '[&_~*]:valid:z-10 [&_~*]:focus:z-10',
        '',
        className,
      )}
      {...register(inputName, { required: true })}
      required
    />
  )
}
