import WhatsappLogo from '@/assets/icons/WhatsappLogo'
import Button from '../Button'
import SectionTitle from '../SectionTitle'
import Form from './Form'

export default function GetQuoteForm() {
  return (
    <section id="quoteForm" className="mx-auto mb-14 max-w-screen-lg pt-12">
      <SectionTitle useTextDecoration className="mb-8">
        Solicitar Orçamento
      </SectionTitle>
      <div className="mb-6 flex items-center justify-center gap-4">
        <p className="font-medium">
          Fale diretamente com um de nossos atendentes:
        </p>
        <Button variant="stroke" href="">
          Whatsapp
          <WhatsappLogo className="[&_*]:fill-eden-100" />
        </Button>
      </div>
      <Form />
    </section>
  )
}
