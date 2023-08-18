'use client'

import Input from './Input'

const SERVICES = [
  'Modal de Serviço',
  'Restaurante Empresarial',
  'Refeições Transportadas',
  'Refeições para Eventos',
]

export default function Form() {
  return (
    <form className="grid grid-cols-2 gap-3 gap-x-6">
      <Input.Root>
        <Input.Input required />
        <Input.Container>
          <Input.Label>Nome</Input.Label>
        </Input.Container>
        <Input.ErrorMessage errorMessage="Exemple of error message" />
      </Input.Root>
      <Input.Root>
        <Input.Input required />
        <Input.Container>
          <Input.Label>Cargo</Input.Label>
        </Input.Container>
        <Input.ErrorMessage errorMessage="Exemple of error message" />
      </Input.Root>
      <Input.Root>
        <Input.Input required />
        <Input.Container>
          <Input.Label>Email</Input.Label>
        </Input.Container>
        <Input.ErrorMessage errorMessage="Exemple of error message" />
      </Input.Root>
      <Input.Root>
        <Input.Input required />
        <Input.Container>
          <Input.Label>Telefone</Input.Label>
        </Input.Container>
        <Input.ErrorMessage errorMessage="Exemple of error message" />
      </Input.Root>
      <Input.Root>
        <Input.Input required />
        <Input.Container>
          <Input.Label>Nome da Empresa</Input.Label>
        </Input.Container>
        <Input.ErrorMessage errorMessage="Exemple of error message" />
      </Input.Root>
      <Input.Root>
        <Input.Input required />
        <Input.Container>
          <Input.Label>CNPJ</Input.Label>
        </Input.Container>
        <Input.ErrorMessage errorMessage="Exemple of error message" />
      </Input.Root>
      <Input.Root>
        <Input.Input required />
        <Input.Container>
          <Input.Label>Endereço</Input.Label>
        </Input.Container>
        <Input.ErrorMessage errorMessage="Exemple of error message" />
      </Input.Root>

      <Input.Select options={SERVICES} />
    </form>
  )
}
