import KitchenSrc from '@/assets/images/mainServices/kitchen.jpg'
import VanSrc from '@/assets/images/mainServices/van.jpg'
import CateringSrc from '@/assets/images/mainServices/catering.jpg'
import { Card } from './Card'
import SectionTitle from './SectionTitle'

export default function MainServices() {
  return (
    <section
      id="services"
      className="mx-auto mb-14 max-w-screen-lg pt-9 max-lg:mb-10"
    >
      <SectionTitle useTextDecoration>Nossos Serviços</SectionTitle>

      <div className="flex gap-10 max-lg:mx-auto max-lg:w-fit max-lg:flex-col">
        <Card.Root tabIndex={3}>
          <Card.Image src={KitchenSrc} alt="Industrial restaurant's kitchen" />
          <Card.Content>
            <Card.Title>
              Restaurantes{' '}
              <span className="whitespace-nowrap">Empresariais</span>
            </Card.Title>
            <Card.Description>
              A cozinha industrial e o(s) reitório(s) são projetados e
              implementados nas instalações do contratante. Modelo ideal para
              grandes industrias, pois promove a redução dos riscos inerentes ao
              serviço de alimentação, além de ofertar maior qualidade.
            </Card.Description>
          </Card.Content>
        </Card.Root>
        <Card.Root tabIndex={4}>
          <Card.Image src={VanSrc} alt="Industrial restaurant's kitchen" />
          <Card.Content>
            <Card.Title>
              Refeições <span className="whitespace-nowrap">Transportadas</span>
            </Card.Title>
            <Card.Description>
              A preparação e distribuição das refeições é realizada em nossas
              unidades de distribuição, sendo ideal para empresas que não
              possuem espaço suficiente, ou um ambiente de difícil viabilização
              para a instalação de um Restaurante Empresarial.
            </Card.Description>
          </Card.Content>
        </Card.Root>
        <Card.Root tabIndex={5}>
          <Card.Image src={CateringSrc} alt="Industrial restaurant's kitchen" />
          <Card.Content>
            <Card.Title>
              Refeições <span className="whitespace-nowrap">para Eventos</span>
            </Card.Title>
            <Card.Description>
              Promoção de eventos corporativos como workshops, coffee breaks e
              confraternizações, ofertando um serviço totalmente customizável,
              com refeições diferenciadas e uma equipe altamente capacitada para
              realizar seu evento.
            </Card.Description>
          </Card.Content>
        </Card.Root>
      </div>
    </section>
  )
}
