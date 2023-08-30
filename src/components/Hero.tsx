// eslint-disable-next-line camelcase
import { Bree_Serif } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import CustomLink from './CustomLink'
import Image from 'next/image'
import { Soup } from 'lucide-react'
import HeroBgSrc from '@/assets/images/HeroBackground.png'
import LogoSrc from '@/assets/logo/logo-hero.svg'

const breeSerif = Bree_Serif({
  weight: '400',
  subsets: ['latin'],
  fallback: ['bree-serif', 'serif'],
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-[90vh] min-h-[600px] flex-col items-center justify-center gap-12 px-4"
    >
      <Image
        src={HeroBgSrc}
        alt="Restaurant Image"
        quality={100}
        className="absolute -z-10 h-[90vh] min-h-[600px] w-full object-cover"
        placeholder="blur"
        priority
      />
      {/* <Brand className="drop-shadow-custom max-sm:scale-[80%]" /> */}
      <Image
        src={LogoSrc}
        alt="Logotipo Inbox Alimentação e Serviços"
        quality={100}
        priority
        className="drop-shadow-custom"
      />
      <h2
        className={twMerge(
          breeSerif.className,
          'max-w-lg text-center text-5xl tracking-wider',
          'text-light drop-shadow-custom',
          'max-sm:max-w-sm max-sm:text-4xl',
        )}
      >
        Qualidade e Sabor em Larga Escala
      </h2>

      <div className="flex w-full max-w-screen-phones-sm flex-col gap-6">
        <CustomLink
          variant="light"
          href="#quoteForm"
          className="w-full"
          tabIndex={1}
        >
          Solicitar Orçamento
          <Soup size={18} strokeWidth={2} fillOpacity={0} />
        </CustomLink>
        {/* <CustomLink variant="stroke" href="" className="w-full" tabIndex={2}>
          Whatsapp
          <WhatsappLogo className="[&_*]:fill-eden-100" />
        </CustomLink> */}
      </div>
    </section>
  )
}
