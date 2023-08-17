import { Card } from './Card'
import TraditionSrc from '@/assets/images/mainPillars/tradition.jpg'
import QualitySrc from '@/assets/images/mainPillars/quality.jpg'
import SoliditySrc from '@/assets/images/mainPillars/solidity.jpg'

export default function MainPillars() {
  return (
    <section id="pillars" className="mx-auto mb-14 max-w-screen-lg pt-9">
      <h2 className="mb-6 text-center text-4xl font-bold leading-none drop-shadow-custom-text">
        Nossos Pilares
      </h2>

      <div className="flex gap-10">
        <Card.Root>
          <Card.Image
            src={TraditionSrc}
            alt="Industrial restaurant's kitchen"
          />
          <Card.Content>
            <Card.Title>Tradição</Card.Title>
            <Card.Description>
              A Inbox Alimentação e Serviços possui em sua fundação um Know How
              de Três Gerações atuando no ramo de refeições coletivas, estando
              sempre em busca por melhorias, e pela padronização de seus
              processos, gerando um sistema produtivo eficiênte e que entrega
              uma melhor qualidade dos produtos e serviços aos nossos clientes.
            </Card.Description>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Image src={QualitySrc} alt="Industrial restaurant's kitchen" />
          <Card.Content>
            <Card.Title>Qualidade</Card.Title>
            <Card.Description>
              Inbox Alimentação e Serviços tem enraizada a cultura de oferecer
              um sabor diferenciado para todos os seus clientes, fazendo uso de
              temperos próprios preparados na nossa linha de produção, tornando
              o sabor das refeições um grande diferencial, além de toda a
              estrutura de preparação e manipulação dos insumos utilizados.
            </Card.Description>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Image src={SoliditySrc} alt="Industrial restaurant's kitchen" />
          <Card.Content>
            <Card.Title>Solidez</Card.Title>
            <Card.Description>
              Com a EXPERIÊNCIA adiquirida no ramo de Alimentação Coletiva e a
              implementação das Normativas de Segurança e Saúde Alimentar, a
              Inbox Alimentação e Serviços faz uso de toda uma estrutura para
              fornecer suas refeições de forma eficiente, com segurança e alto
              padrão de qualidade nos serviços.
            </Card.Description>
          </Card.Content>
        </Card.Root>
      </div>
    </section>
  )
}
