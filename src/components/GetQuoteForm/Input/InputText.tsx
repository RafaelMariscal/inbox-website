import { ComponentProps } from 'react'
import { FieldValues, Path, UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

type InputTextProps<T extends FieldValues> = ComponentProps<'input'> & {
  inputName: Path<T>
  register: UseFormRegister<T>
}

export default function InputText<T>({
  className,
  inputName,
  register,
  ...rest
}: InputTextProps<{ [key in keyof T]: T[key] }>) {
  return (
    <input
      {...rest}
      className={twMerge(
        'absolute inset-0 z-10 bg-transparent px-4 pt-2 outline-none',
        'truncate font-semibold',
        '[&_~*]:valid:top-[.125rem] [&_~*]:focus:top-[.125rem]',
        '[&_~*]:valid:text-[.625rem] [&_~*]:focus:text-[.625rem]',
        '[&_~*]:valid:opacity-100 [&_~*]:focus:opacity-100',
        '[&_~*]:valid:z-10 [&_~*]:focus:z-10',
        className,
      )}
      {...register(inputName, {
        required: true,
        valueAsNumber: rest.type === 'number' ? true : undefined,
      })}
      required
    />
  )
}
