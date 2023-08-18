'use client'

import Input from './Input'
import WhatsappLogo from '@/assets/icons/WhatsappLogo'
import SectionTitle from '../SectionTitle'
import SERVICES from '@/mocks/servicesMock'
import MealRequest from './MealsRequest'
import MEALS from '@/mocks/mealsMock'
import CustomLink from '../CustomLink'
import Button from '../Button'

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
                  <MealRequest.RowEditButton />
                </MealRequest.TableRow>
              ))}
            </MealRequest.Table>
          )}
          <MealRequest.AddButton>Adicionar Refeição</MealRequest.AddButton>
        </MealRequest.Root>

        <Button type="submit" variant="light" className="w-full">
          Enviar Solicitação de Orçamento
        </Button>
      </form>
    </section>
  )
}
