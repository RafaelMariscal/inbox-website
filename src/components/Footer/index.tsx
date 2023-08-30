import FooterSection from './FooterSection'
import Image from 'next/image'
import LogoSrc from '@/assets/logo/logo-footer.svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-eden-900 px-4 pb-3 pt-10">
      <div
        className="
          mx-auto flex w-full max-w-screen-xl items-start justify-around
          max-lg:w-fit max-lg:flex-col max-lg:gap-10
        "
      >
        <Link
          href={'/'}
          target="_blank"
          className="outline-none max-lg:self-center"
        >
          <Image
            src={LogoSrc}
            alt="Logotipo Inbox Alimentação e Serviços"
            quality={100}
            className="drop-shadow-custom-img"
          />
        </Link>
        <FooterSection.Root>
          <FooterSection.Title>Nossos Contatos</FooterSection.Title>

          <FooterSection.Link
            href={'mailto:setorcomercialinbox@gmail.com'}
            target="_blank"
          >
            <FooterSection.Label>Email:</FooterSection.Label>
            <FooterSection.Description>
              setorcomercialinbox@gmail.com
            </FooterSection.Description>
          </FooterSection.Link>
          <FooterSection.Link href={'tel:+558532898989'} target="_blank">
            <FooterSection.Label>Telefone:</FooterSection.Label>
            <FooterSection.Description>
              (85) 3289-8989
            </FooterSection.Description>
          </FooterSection.Link>
          <FooterSection.Link
            href={
              'https://www.google.com.br/maps/dir/-3.7654903,-38.5686078/R.+Belo+Horizonte,+2911+-+Dem%C3%B3crito+Rocha,+Fortaleza+-+CE,+60440-192/@-3.7657081,-38.571241,17z/data=!3m1!4b1!4m19!1m8!3m7!1s0x7c74eaa9c08b04b:0x181a8e6abb30c232!2sR.+Belo+Horizonte,+2911+-+Dem%C3%B3crito+Rocha,+Fortaleza+-+CE,+60440-192!3b1!8m2!3d-3.7659259!4d-38.5687082!16s%2Fg%2F11c22s6mvm!4m9!1m1!4e1!1m5!1m1!1s0x7c74eaa9c08b04b:0x181a8e6abb30c232!2m2!1d-38.5687082!2d-3.7659259!3e0?entry=ttu'
            }
            target="_blank"
          >
            <FooterSection.Label>Endereço:</FooterSection.Label>
            <FooterSection.Description>
              Rua Belo Horizonte, 2911 - Jóquei Clube, Fortaleza-CE.
            </FooterSection.Description>
          </FooterSection.Link>
        </FooterSection.Root>

        <FooterSection.Root>
          <FooterSection.Title>Acesso Rápido</FooterSection.Title>

          <FooterSection.Link href={'#hero'}>Home</FooterSection.Link>
          <FooterSection.Link href={'#services'}>
            Nossos Serviços
          </FooterSection.Link>
          <FooterSection.Link href={'#advantages'}>
            Vantagens
          </FooterSection.Link>
          <FooterSection.Link href={'#about'}>Quem Somos</FooterSection.Link>
          <FooterSection.Link href={'#pillars'}>
            Nossos Pilares
          </FooterSection.Link>
          <FooterSection.Link href={'#testemonials'}>
            Depoimentos
          </FooterSection.Link>
          <FooterSection.Link href={'#'}>
            Solicitar Orçamento
          </FooterSection.Link>
        </FooterSection.Root>
      </div>
      <p
        className="
          mt-9 text-center text-xs font-light tracking-wide 
          text-light drop-shadow-[0_.125rem_.25rem_rgba(0,0,0,0.8)]

        "
      >
        Inbox Alimentação e Serviços | 2018 © Todos os direitos reservados.
        Desenvolvido por{' '}
        <Link
          href={'https://rafaelmariscal.vercel.app/'}
          target="_blank"
          className="
            inline-block text-send-500 outline-none
            hover:text-eden-300 focus:text-eden-300 
          "
        >
          RM Software Development
        </Link>
        .
      </p>
    </footer>
  )
}
