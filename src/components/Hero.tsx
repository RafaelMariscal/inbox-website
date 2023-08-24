// eslint-disable-next-line camelcase
import { Bree_Serif } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import Brand from '@/assets/logo/Brand'
import WhatsappLogo from '@/assets/icons/WhatsappLogo'
import CustomLink from './CustomLink'
import Image from 'next/image'
import HeroBgSrc from '@/assets/images/HeroBackground.png'

const breeSerif = Bree_Serif({
  weight: '400',
  subsets: ['latin'],
  fallback: ['bree-serif', 'serif'],
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[90vh] flex-col items-center justify-center gap-12"
    >
      <Image
        src={HeroBgSrc}
        alt="Restaurant Image"
        className="absolute h-[90vh] w-full object-cover"
        placeholder="blur"
        priority
      />
      <Brand className="drop-shadow-custom" />
      <h2
        className={twMerge(
          breeSerif.className,
          'max-w-lg text-center text-5xl tracking-wider text-light drop-shadow-custom',
        )}
      >
        Qualidade e Sabor em Larga Escala
      </h2>

      <div className="flex w-full max-w-screen-phones-sm flex-col gap-6">
        <CustomLink variant="light" href="#quoteForm" className="w-full">
          Solicitar Orçamento
        </CustomLink>
        <CustomLink variant="stroke" href="" className="w-full">
          Whatsapp
          <WhatsappLogo className="[&_*]:fill-eden-100" />
        </CustomLink>
      </div>
    </section>
  )
}
