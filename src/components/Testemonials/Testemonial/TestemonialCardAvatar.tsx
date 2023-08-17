import Image, { ImageProps } from 'next/image'

type TestemonialCardAvatarProps = ImageProps

export default function TestemonialCardAvatar({
  src,
  alt,
  ...props
}: TestemonialCardAvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      {...props}
      quality={100}
      placeholder="blur"
      className="h-20 w-20 rounded-full outline outline-2 outline-eden-700"
    />
  )
}
