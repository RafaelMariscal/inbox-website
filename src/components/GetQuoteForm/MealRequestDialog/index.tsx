import * as Dialog from '@radix-ui/react-dialog'
import { ClipboardCheck, Delete, ListPlus, Loader2, X } from 'lucide-react'
import { ComponentProps, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Input from '../Input'
import Button from '@/components/Button'
import { useMealRequestFormContext } from '@/contexts/MealRequestFormContext/hook'
import { MealRequestFormData } from '@/contexts/MealRequestFormContext/porvider'
import MEAL_TYPE_OPTIONS from '@/mocks/mealTypeMocks'
import MEAL_TIME_OPTIONS from '@/mocks/mealTimeOptionMock'
import clsx from 'clsx'
import { useQuoteFormContext } from '@/contexts/QuoteFormContext/hook'
import { MealRequestedType } from '@/contexts/QuoteFormContext/porvider'

interface CustomClassNameProps {
  before?: string
  className?: string
}

type MealRequestDialogProps = ComponentProps<'div'> & {
  customClassName?: CustomClassNameProps
  meal: MealRequestedType | null
}

export default function MealRequestDialog({
  children,
  className,
  meal,
  customClassName,
}: MealRequestDialogProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const useQuoteFormCtx = useQuoteFormContext()
  const useMealRequestFormCtx = useMealRequestFormContext()
  if (useQuoteFormCtx === null || useMealRequestFormCtx === null) return <></>

  const { addMealRequest, editMealRequest, deleteMealRequest } = useQuoteFormCtx
  const { MealRequestForm } = useMealRequestFormCtx
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = MealRequestForm

  const mealTypeValue = watch('mealType')
  const mealTimeValue = watch('mealTime')
  const mealDescriptionValue = watch('mealDescription')
  const mealDescriptionTotalChars = mealDescriptionValue?.length || 0
  const FieldTextMaxChars = 400
  const CharCouterValue = FieldTextMaxChars - mealDescriptionTotalChars

  const handleMealRequestDialogSubmit = (data: MealRequestFormData) => {
    console.log('MealRequestDialogForm submitted', { data })
    setIsLoading(true)
    if (meal) {
      editMealRequest(data, meal)
      handleCloseModal()
    } else {
      addMealRequest(data)
      handleCloseModal()
    }
  }
  const handleDeleteMealRequest = () => {
    if (meal) deleteMealRequest(meal)
    handleCloseModal()
  }
  const handleOpenChange = (open: boolean) => {
    if (meal) {
      setValue('mealType', meal.mealType)
      setValue('mealTime', meal.mealTime)
      setValue('weekDaysQuantities', meal.weekDaysQuantities)
      setValue('saturdayQuantities', meal.saturdayQuantities)
      setValue('sundaysQuantities', meal.sundaysQuantities)
      setValue('mealDescription', meal.mealDescription)
    } else {
      reset()
    }
    setIsOpen(open)
    setIsLoading(false)
  }
  const handleCloseModal = () => {
    setTimeout(() => {
      setIsLoading(false)
      setIsOpen(false)
      reset()
    }, 300)
  }
  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Trigger
        className={twMerge(
          'relative inline-block bg-salen-500 shadow-button outline-none',
          'before:block before:h-2 before:w-2 before:bg-inherit',
          'before:absolute before:left-0 before:top-0 ',
          'before:origin-top-left before:-rotate-45 before:scale-0',
          'before:transition-all before:duration-150 before:hover:scale-100',
          'after:block after:h-2 after:w-2 after:bg-inherit ',
          'after:absolute after:bottom-0 after:right-0 ',
          'after:origin-bottom-right after:rotate-45 after:scale-0',
          'after:transition-all after:duration-150 after:hover:scale-100',
          '[&_div]:hover:-translate-y-[.375rem] [&_div]:hover:translate-x-[.375rem]',
          '[&_div]:hover:border-salen-500 [&_div]:hover:text-send-500',
          '[&_div]:focus:border-salen-500 [&_div]:focus:text-send-500',
          customClassName?.before || className,
        )}
      >
        <div
          className={twMerge(
            'flex items-center justify-center gap-2',
            'font-medium leading-none tracking-wide',
            'relative z-10 transition-all duration-150',
            'bg-eden-700 text-eden-100',
            'border border-eden-100',
            customClassName?.className || className,
          )}
        >
          {children}
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay
          className="
            fixed inset-0 z-10 grid place-items-center bg-dark/20
            data-[state=closed]:animate-[hide_300ms]
            data-[state=open]:animate-[show_200ms]
          "
        >
          <Dialog.Content
            className="
              w-full max-w-lg bg-light p-4 shadow-card
              data-[state=closed]:animate-[dialog-content-hide_300ms]
              data-[state=open]:animate-[dialog-content-show_250ms]
            "
          >
            <header className="mb-1 flex items-center justify-between">
              <Dialog.Title className="font-semibold leading-tight tracking-wide">
                {meal
                  ? `Editar Refeição: ${meal.mealType}`
                  : 'Adicionar nova Refeição'}
              </Dialog.Title>
              <Dialog.Close
                className="
                  outline-none transition-all duration-200
                  hover:bg-terracotta-100/20 hover:text-terracotta-500
                  focus:bg-terracotta-100/20 focus:text-terracotta-500
                "
              >
                <X size={18} className="p-[.125rem]" />
              </Dialog.Close>
            </header>
            <Dialog.Description className="text-sm font-medium opacity-70">
              Complete o formulário para adicionar uma nova refeição à
              solicitação.
            </Dialog.Description>

            <form
              id="mealRequestForm"
              className="mt-3"
              onSubmit={handleSubmit(handleMealRequestDialogSubmit)}
              noValidate
            >
              <fieldset disabled={isSubmitSuccessful}>
                <div className="mb-2 grid grid-cols-3 grid-rows-2 gap-2">
                  <Input.Select<MealRequestFormData>
                    name="mealType"
                    placeholder="Tipo de Refeição"
                    value={mealTypeValue}
                    setValue={setValue}
                    errorMessage={errors?.mealType?.message}
                    options={MEAL_TYPE_OPTIONS}
                    className="col-span-2"
                    disabled={isSubmitSuccessful}
                  />
                  <Input.Select
                    name="mealTime"
                    placeholder="Horário"
                    value={mealTimeValue}
                    setValue={setValue}
                    errorMessage={errors?.mealTime?.message}
                    options={MEAL_TIME_OPTIONS}
                    className=""
                    disabled={isSubmitSuccessful}
                  />
                  <Input.Root errorMessage={errors?.weekDaysQuantities}>
                    <Input.Input<MealRequestFormData>
                      inputName="weekDaysQuantities"
                      register={register}
                      type="number"
                    />
                    <Input.Container>
                      <Input.Label>Qtd. seg. à sex.</Input.Label>
                    </Input.Container>
                    {errors?.weekDaysQuantities && (
                      <Input.ErrorMessage
                        errorMessage={errors?.weekDaysQuantities.message}
                      />
                    )}
                  </Input.Root>
                  <Input.Root errorMessage={errors?.saturdayQuantities}>
                    <Input.Input<MealRequestFormData>
                      inputName="saturdayQuantities"
                      register={register}
                      type="number"
                    />
                    <Input.Container>
                      <Input.Label>Qtd. sábado</Input.Label>
                    </Input.Container>
                    {errors?.saturdayQuantities && (
                      <Input.ErrorMessage
                        errorMessage={errors?.saturdayQuantities.message}
                      />
                    )}
                  </Input.Root>
                  <Input.Root errorMessage={errors?.sundaysQuantities}>
                    <Input.Input<MealRequestFormData>
                      inputName="sundaysQuantities"
                      register={register}
                      type="number"
                    />
                    <Input.Container>
                      <Input.Label>Qtd. domingo</Input.Label>
                    </Input.Container>
                    {errors?.sundaysQuantities && (
                      <Input.ErrorMessage
                        errorMessage={errors?.sundaysQuantities.message}
                      />
                    )}
                  </Input.Root>
                </div>
                <Input.Root
                  className="h-40"
                  errorMessage={errors?.mealDescription}
                >
                  <Input.Textarea<MealRequestFormData>
                    inputName="mealDescription"
                    register={register}
                    className="align-baseline"
                    maxLength={FieldTextMaxChars}
                  />
                  <Input.Container>
                    <Input.Label>Composição da refeição</Input.Label>
                  </Input.Container>
                  {errors?.mealDescription && (
                    <Input.ErrorMessage
                      errorMessage={errors?.mealDescription.message}
                    />
                  )}
                </Input.Root>
                <Input.CharCounter
                  className={twMerge(
                    'mt-1 text-end opacity-60',
                    clsx(CharCouterValue === 0 && 'text-terracotta-500'),
                  )}
                >
                  {CharCouterValue === 0
                    ? 'Máximo de caractéres atingido.'
                    : `Restam ${CharCouterValue} caracteres.`}
                </Input.CharCounter>
                <div className="flex gap-4">
                  {meal ? (
                    <Button
                      type="button"
                      variant="danger"
                      className="mt-4 w-max whitespace-nowrap disabled:pointer-events-none"
                      onClick={handleDeleteMealRequest}
                      disabled={isLoading || isSubmitSuccessful}
                    >
                      Excluir Refeição
                      <Delete size={18} strokeWidth={2} fillOpacity={0} />
                    </Button>
                  ) : null}
                  <Button
                    type="submit"
                    form="mealRequestForm"
                    variant="stroke"
                    className="mt-4 w-full"
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
                        className="anim animate-[show_500ms]"
                      />
                    )}
                    {!isLoading && !isSubmitSuccessful && (
                      <>
                        {meal ? ' Confirmar Edição' : 'Adicionar à Solicitação'}
                        <ListPlus size={18} strokeWidth={2} fillOpacity={0} />
                      </>
                    )}
                  </Button>
                </div>
              </fieldset>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
