import Image, { ImageProps } from 'next/image'

type CardImageProps = ImageProps

export default function CardImage(props: CardImageProps) {
  return (
    <Image
      {...props}
      alt={props.alt}
      width={320}
      quality={100}
      placeholder="blur"
      className="object-cover"
    />
  )
}
