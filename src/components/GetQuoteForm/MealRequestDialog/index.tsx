import { MealsProps } from '@/@types/MealTypes'
import * as Dialog from '@radix-ui/react-dialog'
import { ListPlus, X } from 'lucide-react'
import { ComponentProps, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import Input from '../Input'
import Button from '@/components/Button'
import { useMealRequestFormContext } from '@/contexts/MealRequestFormContext/hook'
import { MealRequestFormData } from '@/contexts/MealRequestFormContext/porvider'
import MEAL_TYPE_OPTIONS from '@/mocks/mealTypeMocks'
import MEAL_TIME_OPTIONS from '@/mocks/mealTimeOptionMock'

interface CustomClassNameProps {
  before?: string
  className?: string
}

type MealRequestDialogProps = ComponentProps<'div'> & {
  customClassName?: CustomClassNameProps
  meal: MealsProps | null
}

export default function MealRequestDialog({
  children,
  className,
  meal,
  customClassName,
}: MealRequestDialogProps) {
  const [isOpen, setIsOpen] = useState(false)

  const ctxReturn = useMealRequestFormContext()
  if (ctxReturn === null) return <></>
  const { MealRequestForm } = ctxReturn
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = MealRequestForm

  const mealTypeValue = watch('mealType')
  const mealTimeValue = watch('mealTime')

  const handleMealRequestDialogSubmit = (data: MealRequestFormData) => {
    console.log('MealRequestDialogForm Submitted', { data })
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (meal) {
      setValue('mealType', meal.type)
      setValue('mealTime', meal.timeToServe)
      setValue('weekDaysQuantities', String(meal.quantities.weekdays))
      setValue('saturdayQuantities', String(meal.quantities.onSaturdays))
      setValue('sundaysQuantities', String(meal.quantities.onSundays))
      setValue('mealDescription', String(meal.mealDescription))
    } else {
      reset()
    }
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
                  ? `Editar Refeição: ${meal.type}`
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
              className="mt-3"
              onSubmit={handleSubmit(handleMealRequestDialogSubmit)}
              noValidate
            >
              <div className="mb-2 grid grid-cols-3 grid-rows-2 gap-2">
                <Input.Select<MealRequestFormData>
                  name="mealType"
                  placeholder="Tipo de Refeição"
                  value={mealTypeValue}
                  setValue={setValue}
                  errorMessage={errors?.mealType?.message}
                  options={MEAL_TYPE_OPTIONS}
                  className="col-span-2"
                />
                <Input.Select
                  name="mealTime"
                  placeholder="Horário"
                  value={mealTimeValue}
                  setValue={setValue}
                  errorMessage={errors?.mealTime?.message}
                  options={MEAL_TIME_OPTIONS}
                  className=""
                />
                <Input.Root errorMessage={errors?.weekDaysQuantities}>
                  <Input.Input<MealRequestFormData>
                    inputName="weekDaysQuantities"
                    register={register}
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
              <Button variant="stroke" className="mt-4 w-full">
                {meal ? ' Confirmar Edição' : 'Adicionar à Solicitação'}
                <ListPlus size={18} strokeWidth={2} fillOpacity={0} />
              </Button>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
