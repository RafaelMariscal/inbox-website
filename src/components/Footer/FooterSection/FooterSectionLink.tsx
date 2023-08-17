import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type Targets = '_blank' | '_parent' | '_self' | '_top'
type FooterSectionLinkProps = LinkProps & {
  children: ReactNode
  target?: Targets
}

export default function FooterSectionLink({
  children,
  target = '_self',
  ...rest
}: FooterSectionLinkProps) {
  return (
    <Link
      {...rest}
      className="
        flex w-fit flex-col gap-2 text-sm font-normal tracking-wide
        text-light  outline-none
        hover:text-send-500 focus:text-send-500
        [&_p]:hover:text-light [&_p]:focus:text-light 
      "
      target={target}
    >
      {children}
    </Link>
  )
}
