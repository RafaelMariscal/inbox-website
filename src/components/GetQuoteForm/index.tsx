import SectionTitle from '../SectionTitle'
import Input from './Input'

export default function GetQuoteForm() {
  return (
    <section id="quoteForm" className="mx-auto mb-14 max-w-screen-lg pt-12">
      <SectionTitle useTextDecoration>Solicitar Orçamento</SectionTitle>

      <Input.Root className="z-10 mt-4">
        <Input.Input required />
        <Input.Container>
          <Input.Label>Label Test</Input.Label>
          <Input.ErrorMessage>Exemple of error message</Input.ErrorMessage>
        </Input.Container>
      </Input.Root>

      <Input.Root className="z-10 mb-4 mt-4">
        <Input.Input required />
        <Input.Container>
          <Input.Label>Label Test</Input.Label>
          <Input.ErrorMessage>Exemple of error message</Input.ErrorMessage>
        </Input.Container>
      </Input.Root>

      <Input.Select />
    </section>
  )
}
