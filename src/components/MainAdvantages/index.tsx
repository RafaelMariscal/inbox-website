import Image from 'next/image'
import salad1 from '@/assets/images/salad-1.png'
import salad2 from '@/assets/images/salad-2.png'
import Advantage from './Advantage'
import {
  SlidersHorizontal,
  BarChartHorizontalBig,
  FilePieChart,
  SmilePlus,
  Soup,
  Stethoscope,
  PiggyBank,
  Laugh,
  LucideIcon,
} from 'lucide-react'
import SectionTitle from '../SectionTitle'

type AdvantegesType = {
  icon: LucideIcon
  text: string
}

const FirsAdvanteges: AdvantegesType[] = [
  {
    icon: SlidersHorizontal,
    text: 'Customização dos serviços oferecidos conforme as necessidades, atendendo 24/7.',
  },
  {
    icon: BarChartHorizontalBig,
    text: 'Otimização dos recursos do contratante, pois os esforços são direcionados a sua atividade principal.',
  },
  {
    icon: FilePieChart,
    text: 'Incentivos fiscais, através do Programa de Alimentação do Trabalhador (PAT).',
  },
  {
    icon: SmilePlus,
    text: 'Maior satisfação dos funcionários, uma vez que sentem-se valorizados pela organização.',
  },
]
const SecondAdvanteges: AdvantegesType[] = [
  {
    icon: Soup,
    text: 'Cardápios elaborados por Nutricionistas, entregando uma alimentação balanceada aos comensais.',
  },
  {
    icon: Stethoscope,
    text: 'Maior Segurança Alimentar, devido às boas práticas nutricionais aplicadas por nossos colaboradores.',
  },
  {
    icon: PiggyBank,
    text: 'Redução dos custos com assistência médica, relacionados à alimentação inadequada.',
  },
  {
    icon: Laugh,
    text: 'Aumento da interação entre os colaboradores através dos eventos periódicos oferecidos.',
  },
]

export default function MainAdvantages() {
  return (
    <section id="advantages" className="mx-auto mb-12 max-w-screen-lg pt-9">
      <SectionTitle className="mb-8">
        <strong className="font-bold">Vantagens</strong> ao Terceirizar
      </SectionTitle>

      <div className="mb-6 flex items-center justify-center gap-16 max-lg:mb-4">
        <Image
          src={salad1}
          alt="A Salad plate that looks really healthy"
          quality={100}
          width={300}
          className="drop-shadow-custom-img max-lg:hidden"
        />
        <ul className="flex max-w-screen-phones flex-col gap-4 ">
          {FirsAdvanteges.map((adv, index) => (
            <Advantage.Root key={adv.text} index={index} tabIndex={6 + index}>
              <Advantage.Icon>
                <adv.icon size={22} color="#f6e68f" strokeWidth="2" />
              </Advantage.Icon>
              <Advantage.Text>{adv.text}</Advantage.Text>
            </Advantage.Root>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-center gap-16">
        <ul className="flex max-w-screen-phones flex-col gap-4">
          {SecondAdvanteges.map((adv, index) => (
            <Advantage.Root
              key={adv.text}
              direction={-1}
              index={index}
              tabIndex={FirsAdvanteges.length + 6 + index}
            >
              <Advantage.Icon>
                <adv.icon size={22} color="#f6e68f" strokeWidth="2" />
              </Advantage.Icon>
              <Advantage.Text>{adv.text}</Advantage.Text>
            </Advantage.Root>
          ))}
        </ul>
        <Image
          src={salad2}
          alt="A Salad plate that looks really healthy"
          quality={100}
          width={300}
          className="drop-shadow-custom-img max-lg:hidden"
        />
      </div>
    </section>
  )
}
