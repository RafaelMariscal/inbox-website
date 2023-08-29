import { ComponentProps } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useQuoteFormContext } from '@/contexts/QuoteFormContext/hook'
import { Soup } from 'lucide-react'
import MealsRequest from './MealsRequest'
import Input from '../Input'
import MealRequestDialog from '../MealRequestDialog'
import clsx from 'clsx'

type MealsDetailsProps = ComponentProps<'div'> & {
  isLoading?: boolean
}

export default function MealsDetails({
  isLoading,
  ...props
}: MealsDetailsProps) {
  const quoteFormContext = useQuoteFormContext()
  if (quoteFormContext === null) return <></>
  const { useQuoteForm, mealsRequested } = quoteFormContext
  const {
    formState: { isSubmitSuccessful, errors },
  } = useQuoteForm
  return (
    <MealsRequest.Root
      {...props}
      className={clsx(
        'relative mb-6',
        'max-lg:mx-auto max-lg:max-w-screen-phones',
        errors?.mealsRequest && 'border-terracotta-500',
      )}
    >
      {errors?.mealsRequest && (
        <Input.ErrorMessage errorMessage={errors?.mealsRequest.message} />
      )}
      <MealsRequest.Title>Refeições Solicitadas:</MealsRequest.Title>
      <AnimatePresence>
        {mealsRequested.length === 0 && (
          <motion.div
            initial={{ opacity: '0%', translateY: '-10%' }}
            animate={{ opacity: '100%', translateY: '0%' }}
            exit={{ opacity: '0%', translateY: '10%' }}
          >
            <MealsRequest.EmptyState />
          </motion.div>
        )}
        {mealsRequested.length !== 0 && (
          <MealsRequest.Table>
            <MealsRequest.TableHeader>
              <MealsRequest.HeaderCell className="w-36">
                Tipo de Refeição
              </MealsRequest.HeaderCell>
              <MealsRequest.HeaderCell className="w-[5.25rem]">
                Horário
              </MealsRequest.HeaderCell>
              <MealsRequest.HeaderCell className="w-[5.25rem]">
                Seg. à Sex.
              </MealsRequest.HeaderCell>
              <MealsRequest.HeaderCell className="w-[5.25rem]">
                Sábado
              </MealsRequest.HeaderCell>
              <MealsRequest.HeaderCell className="w-[5.25rem]">
                Domingo
              </MealsRequest.HeaderCell>
              <MealsRequest.HeaderCell className="min-w-[6rem] max-w-md flex-1">
                Composição
              </MealsRequest.HeaderCell>
            </MealsRequest.TableHeader>
            <AnimatePresence>
              {mealsRequested.map((meal) => (
                <MealsRequest.TableRow key={meal.id}>
                  <MealsRequest.RowContent>
                    <MealsRequest.RowContentCell className="w-36">
                      {meal.mealType}
                    </MealsRequest.RowContentCell>
                    <MealsRequest.RowContentCell className="w-[5.25rem]">
                      {meal.mealTime}
                    </MealsRequest.RowContentCell>
                    <MealsRequest.RowContentCell className="w-[5.25rem]">
                      {meal.weekDaysQuantities}
                    </MealsRequest.RowContentCell>
                    <MealsRequest.RowContentCell className="w-[5.25rem]">
                      {meal.saturdayQuantities}
                    </MealsRequest.RowContentCell>
                    <MealsRequest.RowContentCell className="w-[5.25rem]">
                      {meal.sundaysQuantities}
                    </MealsRequest.RowContentCell>
                    <MealsRequest.RowContentCell
                      className="
                        min-w-[6rem] flex-1 truncate px-2
                        max-lg:max-w-[9rem]
                      "
                    >
                      {meal.mealDescription}
                    </MealsRequest.RowContentCell>
                  </MealsRequest.RowContent>
                  <MealsRequest.RowEditButton
                    meal={meal}
                    disabled={isLoading || isSubmitSuccessful}
                  />
                </MealsRequest.TableRow>
              ))}
            </AnimatePresence>
          </MealsRequest.Table>
        )}
      </AnimatePresence>

      <MealRequestDialog
        meal={null}
        customClassName={{
          before: 'left-1/2 mt-4 -translate-x-1/2',
          className: 'h-9 px-4',
        }}
        disabled={isLoading || isSubmitSuccessful}
      >
        Adicionar Refeição
        <Soup size={16} strokeWidth={2} fillOpacity={0} />
      </MealRequestDialog>
    </MealsRequest.Root>
  )
}
