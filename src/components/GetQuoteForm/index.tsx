'use client'

import Input from './Input'
import WhatsappLogo from '@/assets/icons/WhatsappLogo'
import SectionTitle from '../SectionTitle'
import SERVICES from '@/mocks/servicesMock'
import MealRequest from './MealsRequest'
import CustomLink from '../CustomLink'
import Button from '../Button'
import MealRequestDialog from './MealRequestDialog'
import clsx from 'clsx'
import { QuoteFormData } from '@/contexts/QuoteFormContext/porvider'
import { useQuoteFormContext } from '@/contexts/QuoteFormContext/hook'
import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ClipboardCheck, ListPlus, Loader2, Send, Soup } from 'lucide-react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export default function GetQuoteForm() {
  const [isLoading, setIsLoading] = useState(false)
  const quoteFormContext = useQuoteFormContext()
  const { executeRecaptcha } = useGoogleReCaptcha()
  const getReCaptchaVerifyToken = useCallback(async () => {
    if (!executeRecaptcha)
      return console.log('Execute recaptcha not yet available')
    const token = await executeRecaptcha()
    console.log('Valid ReCaptcha token')
    return token
  }, [executeRecaptcha])

  if (quoteFormContext === null) return <></>
  const { useQuoteForm, mealsRequested, setMealsRequested } = quoteFormContext
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useQuoteForm
  const serviceModelValue = watch('serviceModel')

  const sendQuoteRequest = (data: QuoteFormData) => {
    setTimeout(() => {
      console.log('Form data submitted.', { data })
      setIsLoading(false)
    }, 1000)
  }
  const quoteFormSubmit = async (data: QuoteFormData) => {
    setIsLoading(true)
    console.log('Valid form data. Awaiting Validation Token.', { data })
    const ReCaptchaToken = await getReCaptchaVerifyToken()
    if (ReCaptchaToken) return sendQuoteRequest(data)
    return console.log('Failed to send Data')
  }
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

      <form id="mainForm" onSubmit={handleSubmit(quoteFormSubmit)} noValidate>
        <div className="grid grid-cols-2 gap-3 gap-x-6">
          <Input.Root errorMessage={errors.name}>
            <Input.Input<QuoteFormData>
              inputName="name"
              register={register}
              readOnly={isLoading || isSubmitSuccessful}
            />
            <Input.Container>
              <Input.Label>Nome</Input.Label>
            </Input.Container>
            {errors?.name && (
              <Input.ErrorMessage errorMessage={errors?.name.message} />
            )}
          </Input.Root>
          <Input.Root errorMessage={errors.role}>
            <Input.Input<QuoteFormData>
              inputName="role"
              register={register}
              readOnly={isLoading || isSubmitSuccessful}
            />
            <Input.Container>
              <Input.Label>Cargo</Input.Label>
            </Input.Container>
            {errors?.role && (
              <Input.ErrorMessage errorMessage={errors.role.message} />
            )}
          </Input.Root>
          <Input.Root errorMessage={errors.email}>
            <Input.Input<QuoteFormData>
              inputName="email"
              register={register}
              readOnly={isLoading || isSubmitSuccessful}
            />
            <Input.Container>
              <Input.Label>Email</Input.Label>
            </Input.Container>
            {errors?.email && (
              <Input.ErrorMessage errorMessage={errors.email.message} />
            )}
          </Input.Root>
          <Input.Root errorMessage={errors.phone}>
            <Input.Input<QuoteFormData>
              inputName="phone"
              register={register}
              readOnly={isLoading || isSubmitSuccessful}
            />
            <Input.Container>
              <Input.Label>Telefone</Input.Label>
            </Input.Container>
            {errors?.phone && (
              <Input.ErrorMessage errorMessage={errors.phone.message} />
            )}
          </Input.Root>
          <Input.Root errorMessage={errors.companyName}>
            <Input.Input<QuoteFormData>
              inputName="companyName"
              register={register}
              readOnly={isLoading || isSubmitSuccessful}
            />
            <Input.Container>
              <Input.Label>Nome da Empresa</Input.Label>
            </Input.Container>
            {errors?.companyName && (
              <Input.ErrorMessage errorMessage={errors.companyName.message} />
            )}
          </Input.Root>
          <Input.Root errorMessage={errors.cnpj}>
            <Input.Input<QuoteFormData>
              inputName="cnpj"
              register={register}
              readOnly={isLoading || isSubmitSuccessful}
            />
            <Input.Container>
              <Input.Label>CNPJ</Input.Label>
            </Input.Container>
            {errors?.cnpj && (
              <Input.ErrorMessage errorMessage={errors.cnpj.message} />
            )}
          </Input.Root>
          <Input.Root errorMessage={errors.address}>
            <Input.Input<QuoteFormData>
              inputName="address"
              register={register}
              readOnly={isLoading || isSubmitSuccessful}
            />
            <Input.Container>
              <Input.Label>Endereço</Input.Label>
            </Input.Container>
            {errors?.address && (
              <Input.ErrorMessage errorMessage={errors.address.message} />
            )}
          </Input.Root>
          <Input.Select<QuoteFormData>
            name="serviceModel"
            placeholder="Modal de Serviço"
            value={serviceModelValue}
            setValue={setValue}
            errorMessage={errors?.serviceModel?.message}
            options={SERVICES}
            disabled={isLoading || isSubmitSuccessful}
          />
        </div>
      </form>
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
