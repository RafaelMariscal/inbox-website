'use client'

import Input from './Input'
import SectionTitle from '../SectionTitle'
import MealRequest from './MealsRequest'
import Button from '../Button'
import MealRequestDialog from './MealRequestDialog'
import clsx from 'clsx'
import { useQuoteFormContext } from '@/contexts/QuoteFormContext/hook'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ClipboardCheck, ListPlus, Loader2, Send, Soup } from 'lucide-react'
import MainForm from './MainForm'

export default function GetQuoteForm() {
  const [isLoading, setIsLoading] = useState(false)
  const quoteFormContext = useQuoteFormContext()
  if (quoteFormContext === null) return <></>
  const { useQuoteForm, mealsRequested, setMealsRequested } = quoteFormContext
  const {
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useQuoteForm

  const handleFormReset = () => {
    reset()
    setMealsRequested([])
  }
  return (
    <section id="quoteForm" className="mx-auto mb-14 max-w-screen-lg pt-12">
      <SectionTitle useTextDecoration className="mb-8">
        Solicitar Orçamento
      </SectionTitle>
      <div className="mb-6 flex items-center justify-center gap-4">
        {/* <p className="font-medium">
          Ou fale diretamente com um de nossos atendentes:
        </p>
        <CustomLink variant="stroke" href="">
          Whatsapp
          <WhatsappLogo className="[&_*]:fill-eden-100" />
        </CustomLink> */}
      </div>

      <MainForm
        id="mainForm"
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        className="grid grid-cols-2 gap-3 gap-x-6"
        noValidate
      />
      <MealRequest.Root
        className={clsx(
          'relative mb-6',
          errors?.mealsRequest && 'border-terracotta-500',
        )}
      >
        {errors?.mealsRequest && (
          <Input.ErrorMessage errorMessage={errors?.mealsRequest.message} />
        )}
        <MealRequest.Title>Refeições Solicitadas:</MealRequest.Title>
        <AnimatePresence>
          {mealsRequested.length === 0 && (
            <motion.div
              initial={{ opacity: '0%', translateY: '-10%' }}
              animate={{ opacity: '100%', translateY: '0%' }}
              exit={{ opacity: '0%', translateY: '10%' }}
            >
              <MealRequest.EmptyState />
            </motion.div>
          )}
          {mealsRequested.length !== 0 && (
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
              <AnimatePresence>
                {mealsRequested.map((meal) => (
                  <MealRequest.TableRow key={meal.id}>
                    <MealRequest.RowContent>
                      <MealRequest.RowContentCell className="w-36">
                        {meal.mealType}
                      </MealRequest.RowContentCell>
                      <MealRequest.RowContentCell className="w-[5.25rem]">
                        {meal.mealTime}
                      </MealRequest.RowContentCell>
                      <MealRequest.RowContentCell className="w-[5.25rem]">
                        {meal.weekDaysQuantities}
                      </MealRequest.RowContentCell>
                      <MealRequest.RowContentCell className="w-[5.25rem]">
                        {meal.saturdayQuantities}
                      </MealRequest.RowContentCell>
                      <MealRequest.RowContentCell className="w-[5.25rem]">
                        {meal.sundaysQuantities}
                      </MealRequest.RowContentCell>
                      <MealRequest.RowContentCell className="flex-1 truncate px-2">
                        {meal.mealDescription}
                      </MealRequest.RowContentCell>
                    </MealRequest.RowContent>
                    <MealRequest.RowEditButton
                      meal={meal}
                      disabled={isLoading || isSubmitSuccessful}
                    />
                  </MealRequest.TableRow>
                ))}
              </AnimatePresence>
            </MealRequest.Table>
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
      </MealRequest.Root>
      <div className="flex flex-col items-center justify-center gap-4">
        <Button
          type="submit"
          form="mainForm"
          variant="stroke"
          className="w-full max-w-sm disabled:pointer-events-none"
          disabled={isLoading || isSubmitSuccessful}
        >
          {isLoading && (
            <Loader2
              size={18}
              strokeWidth={2}
              fillOpacity={0}
              className="animate-[spin_1000ms_infinite_linear]"
            />
          )}
          {!isLoading && isSubmitSuccessful && (
            <ClipboardCheck
              size={18}
              strokeWidth={2}
              fillOpacity={0}
              className="animate-[show_500ms]"
            />
          )}
          {!isLoading && !isSubmitSuccessful && (
            <>
              Enviar Solicitação de Orçamento
              <Send size={16} strokeWidth={2} fillOpacity={0} />
            </>
          )}
        </Button>
        <AnimatePresence>
          {!isLoading && isSubmitSuccessful && (
            <motion.div
              initial={{ opacity: '0%', translateY: '-10%' }}
              animate={{ opacity: '100%', translateY: '0%' }}
              exit={{ opacity: '0%', translateY: '10%' }}
              className="w-full max-w-sm"
            >
              <Button
                variant="light"
                className="w-full disabled:pointer-events-none"
                onClick={handleFormReset}
              >
                Nova Solicitação
                <ListPlus size={16} strokeWidth={2.5} fillOpacity={0} />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
