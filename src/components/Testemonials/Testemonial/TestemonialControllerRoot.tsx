import { ComponentProps } from 'react'

type TestemonialControllerRootProps = ComponentProps<'div'>

export default function TestemonialControllerRoot({
  children,
  ...rest
}: TestemonialControllerRootProps) {
  return <div {...rest}>{children}</div>
}
