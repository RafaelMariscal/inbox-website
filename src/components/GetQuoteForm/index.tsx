'use client'

import Input from './Input'
import WhatsappLogo from '@/assets/icons/WhatsappLogo'
import SectionTitle from '../SectionTitle'
import SERVICES from '@/mocks/servicesMock'
import MealRequest from './MealsRequest'
import MEALS from '@/mocks/mealsMock'
import CustomLink from '../CustomLink'
import Button from '../Button'
import { Send, Soup } from 'lucide-react'
import MealRequestDialog from './MealRequestDialog'

export default function GetQuoteForm() {
  const errorMessage = undefined
  const errorMessage1 = 'random error message.'
  return (
    <section id="quoteForm" className="mx-auto mb-14 max-w-screen-lg pt-12">
      <SectionTitle useTextDecoration className="mb-8">
        Solicitar Orçamento
      </SectionTitle>
      <div className="mb-6 flex items-center justify-center gap-4">
        <p className="font-medium">
          Ou fale diretamente com um de nossos atendentes:
        </p>
        <CustomLink variant="stroke" href="">
          Whatsapp
          <WhatsappLogo className="[&_*]:fill-eden-100" />
        </CustomLink>
      </div>

      <form>
        <div className="grid grid-cols-2 gap-3 gap-x-6">
          <Input.Root>
            <Input.Input required />
            <Input.Container>
              <Input.Label>Nome</Input.Label>
            </Input.Container>
            {errorMessage1 && (
              <Input.ErrorMessage errorMessage={errorMessage1} />
            )}
          </Input.Root>
          <Input.Root>
            <Input.Input required />
            <Input.Container>
              <Input.Label>Cargo</Input.Label>
            </Input.Container>
            {errorMessage && <Input.ErrorMessage errorMessage={errorMessage} />}
          </Input.Root>
          <Input.Root>
            <Input.Input required />
            <Input.Container>
              <Input.Label>Email</Input.Label>
            </Input.Container>
            {errorMessage && <Input.ErrorMessage errorMessage={errorMessage} />}
          </Input.Root>
          <Input.Root>
            <Input.Input required />
            <Input.Container>
              <Input.Label>Telefone</Input.Label>
            </Input.Container>
            {errorMessage && <Input.ErrorMessage errorMessage={errorMessage} />}
          </Input.Root>
          <Input.Root>
            <Input.Input required />
            <Input.Container>
              <Input.Label>Nome da Empresa</Input.Label>
            </Input.Container>
            {errorMessage && <Input.ErrorMessage errorMessage={errorMessage} />}
          </Input.Root>
          <Input.Root>
            <Input.Input required />
            <Input.Container>
              <Input.Label>CNPJ</Input.Label>
            </Input.Container>
            {errorMessage && <Input.ErrorMessage errorMessage={errorMessage} />}
          </Input.Root>
          <Input.Root>
            <Input.Input required />
            <Input.Container>
              <Input.Label>Endereço</Input.Label>
            </Input.Container>
            {errorMessage && <Input.ErrorMessage errorMessage={errorMessage} />}
          </Input.Root>
          <Input.Select placeholder="Modal de Serviço" options={SERVICES} />
        </div>

        <MealRequest.Root className="mb-6">
          <MealRequest.Title>Refeições Solicitadas:</MealRequest.Title>
          {MEALS.length === 0 ? (
            <MealRequest.EmptyState />
          ) : (
            <MealRequest.Table>
              <MealRequest.TableHeader>
                <MealRequest.HeaderCell className="w-36">
                  Tipo de Refeição
                </MealRequest.HeaderCell>
                <MealRequest.HeaderCell className="w-[5.25rem]">
                  Horário
                </MealRequest.HeaderCell>
                <MealRequest.HeaderCell className="w-[5.25rem]">
                  Seg. à Sex.
                </MealRequest.HeaderCell>
                <MealRequest.HeaderCell className="w-[5.25rem]">
                  Sábado
                </MealRequest.HeaderCell>
                <MealRequest.HeaderCell className="w-[5.25rem]">
                  Domingo
                </MealRequest.HeaderCell>
                <MealRequest.HeaderCell className="max-w-md flex-1">
                  Composição
                </MealRequest.HeaderCell>
              </MealRequest.TableHeader>
              {MEALS.map((meal) => (
                <MealRequest.TableRow key={meal.id}>
                  <MealRequest.RowContent>
                    <MealRequest.RowContentCell className="w-36">
                      {meal.type}
                    </MealRequest.RowContentCell>
                    <MealRequest.RowContentCell className="w-[5.25rem]">
                      {meal.timeToServe}
                    </MealRequest.RowContentCell>
                    <MealRequest.RowContentCell className="w-[5.25rem]">
                      {meal.quantities.weekdays}
                    </MealRequest.RowContentCell>
                    <MealRequest.RowContentCell className="w-[5.25rem]">
                      {meal.quantities.onSaturdays}
                    </MealRequest.RowContentCell>
                    <MealRequest.RowContentCell className="w-[5.25rem]">
                      {meal.quantities.onSundays}
                    </MealRequest.RowContentCell>
                    <MealRequest.RowContentCell className="flex-1 truncate px-2">
                      {meal.mealDescription}
                    </MealRequest.RowContentCell>
                  </MealRequest.RowContent>
                  <MealRequest.RowEditButton mealSelected={meal} />
                </MealRequest.TableRow>
              ))}
            </MealRequest.Table>
          )}
          <MealRequestDialog
            customClassName={{
              before: 'left-1/2 mt-4 -translate-x-1/2',
              className: 'h-9 px-4',
            }}
          >
            Adicionar Refeição
            <Soup size={16} strokeWidth={2} fillOpacity={0} />
          </MealRequestDialog>
        </MealRequest.Root>

        <Button type="submit" variant="stroke" className="w-full">
          Enviar Solicitação de Orçamento
          <Send size={16} strokeWidth={2.5} fillOpacity={0} />
        </Button>
      </form>
    </section>
  )
}
