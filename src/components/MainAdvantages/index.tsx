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
} from 'lucide-react'

export default function MainAdvantages() {
  return (
    <section id="advantages" className="mx-auto mb-12 max-w-screen-lg pt-9">
      <h2 className="mb-7 text-center text-4xl font-bold leading-none drop-shadow-custom-text">
        Quais as <strong className="font-bold">Vantagens</strong> ao
        Terceirizar?
      </h2>

      <div className="mb-6 flex items-center justify-center gap-16">
        <Image
          src={salad1}
          alt="A Salad plate that looks really healthy"
          quality={100}
          width={300}
          className="drop-shadow-custom-img"
        />
        <div className="flex max-w-screen-phones flex-col gap-6 ">
          <Advantage.Root>
            <Advantage.Icon>
              <SlidersHorizontal size={22} color="#f6e68f" strokeWidth="2" />
            </Advantage.Icon>
            <Advantage.Text>
              Customização dos serviços oferecidos conforme as necessidades,
              atendendo 24/7.
            </Advantage.Text>
          </Advantage.Root>
          <Advantage.Root>
            <Advantage.Icon>
              <BarChartHorizontalBig
                size={22}
                color="#f6e68f"
                strokeWidth="2"
              />
            </Advantage.Icon>
            <Advantage.Text>
              Otimização dos recursos do contratante, pois os esforços são
              direcionados a sua atividade principal.
            </Advantage.Text>
          </Advantage.Root>
          <Advantage.Root>
            <Advantage.Icon>
              <FilePieChart size={22} color="#f6e68f" strokeWidth="2" />
            </Advantage.Icon>
            <Advantage.Text>
              Incentivos fiscais, através do Programa de Alimentação do
              Trabalhador (PAT).
            </Advantage.Text>
          </Advantage.Root>
          <Advantage.Root>
            <Advantage.Icon>
              <SmilePlus size={22} color="#f6e68f" strokeWidth="2" />
            </Advantage.Icon>
            <Advantage.Text>
              Maior satisfação dos funcionários, uma vez que sentem-se
              valorizados pela organização.
            </Advantage.Text>
          </Advantage.Root>
        </div>
      </div>

      <div className="flex items-center justify-center gap-16">
        <div className="flex max-w-screen-phones flex-col gap-6">
          <Advantage.Root>
            <Advantage.Icon>
              <Soup size={22} color="#f6e68f" strokeWidth="2" />
            </Advantage.Icon>
            <Advantage.Text>
              Cardápios elaborados por Nutricionistas, entregando uma
              alimentação balanceada aos comensais.
            </Advantage.Text>
          </Advantage.Root>
          <Advantage.Root>
            <Advantage.Icon>
              <Stethoscope size={22} color="#f6e68f" strokeWidth="2" />
            </Advantage.Icon>
            <Advantage.Text>
              Maior Segurança Alimentar, devido às boas práticas nutricionais
              aplicadas por nossos colaboradores.
            </Advantage.Text>
          </Advantage.Root>
          <Advantage.Root>
            <Advantage.Icon>
              <PiggyBank size={22} color="#f6e68f" strokeWidth="2" />
            </Advantage.Icon>
            <Advantage.Text>
              Redução dos custos com assistência médica, relacionados à
              alimentação inadequada.
            </Advantage.Text>
          </Advantage.Root>
          <Advantage.Root>
            <Advantage.Icon>
              <Laugh size={22} color="#f6e68f" strokeWidth="2" />
            </Advantage.Icon>
            <Advantage.Text>
              Aumento da interação entre os colaboradores através dos eventos
              periódicos oferecidos.
            </Advantage.Text>
          </Advantage.Root>
        </div>
        <Image
          src={salad2}
          alt="A Salad plate that looks really healthy"
          quality={100}
          width={300}
          className="drop-shadow-custom-img"
        />
      </div>
    </section>
  )
}
