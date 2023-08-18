'use client'

import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonRootProps = LinkProps & {
  variant: 'light' | 'eden' | 'stroke'
  children: ReactNode
  className?: string
}

export default function CustomLink({
  variant,
  children,
  className,
  ...rest
}: ButtonRootProps) {
  return (
    <Link
      {...rest}
      className={twMerge(
        'relative inline-block h-9 bg-salen-500 shadow-button outline-none',
        'before:block before:h-2 before:w-2 before:bg-salen-500',
        'before:absolute before:left-0 before:top-0 ',
        'before:origin-top-left before:-rotate-45 before:scale-0',
        'before:transition-all before:duration-150 before:hover:scale-100',
        'after:block after:h-2 after:w-2 after:bg-salen-500 ',
        'after:absolute after:bottom-0 after:right-0 ',
        'after:origin-bottom-right after:rotate-45 after:scale-0',
        'after:transition-all after:duration-150 after:hover:scale-100',
        '[&_div]:hover:-translate-y-[.375rem] [&_div]:hover:translate-x-[.375rem]',
        '[&_div]:hover:bg-eden-700 [&_div]:hover:text-send-500',
        '[&_div]:focus:bg-eden-700 [&_div]:focus:text-send-500',
        '[&_*]:hover:fill-send-500 [&_*]:focus:fill-send-500',
        '[&_*]:hover:border-salen-500 [&_*]:focus:border-salen-500',
        className,
      )}
    >
      <div
        data-variant={variant}
        className={twMerge(
          'flex items-center justify-center gap-2',
          'h-9 px-4 font-medium leading-none tracking-wide',
          'relative z-10 transition-all duration-150',
          'data-[variant=eden]:bg-eden-700 data-[variant=eden]:text-send-500',
          'data-[variant=light]:bg-eden-100 data-[variant=light]:text-eden-700',
          'data-[variant=stroke]:bg-eden-700 data-[variant=stroke]:text-eden-100',
          'data-[variant=stroke]:border data-[variant=stroke]:border-eden-100',
          className,
        )}
      >
        {children}
      </div>
    </Link>
  )
}
