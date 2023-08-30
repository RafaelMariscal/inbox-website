import Image from 'next/image'
import LogoSrc from '@/assets/logo/logo.svg'
import SectionTitle from './SectionTitle'

export default function AboutUs() {
  return (
    <section
      id="about"
      className="
        mb-14 flex items-center justify-center gap-10 pt-14
        max-lg:mb-0 max-lg:px-4 max-lg:pb-6 max-lg:text-center
        max-phones:text-start
      "
    >
      <article
        className="
          flex max-w-screen-phones flex-col gap-4 font-bold outline-none
          drop-shadow-custom-text
        "
        tabIndex={15}
      >
        <SectionTitle className="mb-0 text-start text-5xl drop-shadow-none max-lg:text-center">
          Quem somos
        </SectionTitle>

        <p>
          Nós da Inbox Alimentação & Serviços fomos projetados para{' '}
          <strong className="font-bold underline underline-offset-2">
            fornecer refeições com qualidade e sabor diferenciados
          </strong>{' '}
          a preços competitivos, e entregando não apenas refeições elaboradas e
          saborosas, mas{' '}
          <strong className="font-bold underline underline-offset-2">
            impactando diretamente no grau de satisfação dos colaboradores
          </strong>{' '}
          dos nossos parceiros.
        </p>
        <p>
          Com um Know How de Três Gerações, buscamos oferecer as melhores
          soluções em refeições coletivas aos nossos clientes, com a{' '}
          <strong className="font-bold underline underline-offset-2">
            missão de nos tornarmos participantes diretos do desenvolvimento e
            sucesso dos nossos clientes
          </strong>
          .
        </p>
        <p>
          Orgulhamo-nos de prestar nossos serviços a empresas líderes em seus
          segmentos, garantindo refeições elaboradas, saborosas, e
          nutricionalmente balanceadas,{' '}
          <strong className="font-bold underline underline-offset-2">
            contribuindo assim para um ambiente de trabalho mais produtivo
          </strong>
          .
        </p>
      </article>

      <Image
        src={LogoSrc}
        alt="Inbox embossed Logo"
        width={400}
        className="opacity-70 drop-shadow-custom-logo max-lg:hidden"
      />
    </section>
  )
}
