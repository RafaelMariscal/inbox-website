'use client'

import SectionTitle from '../SectionTitle'
import Button from '../Button'
import { useQuoteFormContext } from '@/contexts/QuoteFormContext/hook'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ClipboardCheck, ListPlus, Loader2, Send } from 'lucide-react'
import MainForm from './MainForm'
import MealsDetails from './MealsDetails'

export default function QuoteForm() {
  const [isLoading, setIsLoading] = useState(false)
  const quoteFormContext = useQuoteFormContext()
  if (quoteFormContext === null) return <></>
  const { useQuoteForm, setMealsRequested } = quoteFormContext
  const {
    reset,
    formState: { isSubmitSuccessful },
  } = useQuoteForm

  const handleFormReset = () => {
    reset()
    setMealsRequested([])
  }
  return (
    <section
      id="quoteForm"
      className="
        mx-auto mb-14 max-w-screen-lg pt-12 
        max-tablets-sm:px-4
      "
    >
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

      <MealsDetails isLoading={isLoading} />

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
              Enviar Solicitação{' '}
              <span className="max-tablets-sm:hidden">de Orçamento</span>
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
