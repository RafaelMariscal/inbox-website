'use client'

import { ComponentProps, useCallback } from 'react'
import { twMerge } from 'tailwind-merge'
import { QuoteFormData } from '@/contexts/QuoteFormContext/porvider'
import { useQuoteFormContext } from '@/contexts/QuoteFormContext/hook'
import Input from './Input'
import SERVICES from '@/mocks/servicesMock'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useToastContext } from '@/contexts/ToastContext/hook'

type MainFormProps = ComponentProps<'form'> & {
  isLoading: boolean
  setIsLoading: (state: boolean) => void
}

export default function MainForm({
  isLoading,
  setIsLoading,
  ...props
}: MainFormProps) {
  const { executeRecaptcha } = useGoogleReCaptcha()
  const quoteFormContext = useQuoteFormContext()
  const { setIsOpen, setTitle, setMessage } = useToastContext()
  const getReCaptchaVerifyToken = useCallback(async () => {
    if (!executeRecaptcha)
      return console.log('Execute recaptcha not yet available')
    const token = await executeRecaptcha()
    console.log('Valid ReCaptcha token')
    return token
  }, [executeRecaptcha])
  if (quoteFormContext === null) return <></>
  const { useQuoteForm } = quoteFormContext
  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { isSubmitSuccessful, errors },
  } = useQuoteForm

  const serviceModelValue = watch('serviceModel')

  const sendQuoteRequest = (data: QuoteFormData) => {
    setTimeout(() => {
      setIsOpen(true)
      setTitle('Solicitação enviada!')
      setMessage('Logo nossa equipe entrará em contato.')
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
  return (
    <form
      {...props}
      className={twMerge(
        'grid grid-cols-2 gap-3 gap-x-6',
        'max-lg:mx-auto max-lg:max-w-screen-phones max-lg:grid-cols-1',
        props.className,
      )}
      onSubmit={handleSubmit(quoteFormSubmit)}
    >
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
    </form>
  )
}
