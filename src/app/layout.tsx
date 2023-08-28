import './globals.css'
import Footer from '@/components/Footer'
// eslint-disable-next-line camelcase
import { Roboto_Slab } from 'next/font/google'
import type { Metadata } from 'next'
import { GlobalGoogleReCaptchaProvider } from '@/contexts/GlobalGoogleReCaptchaProvider'
import { GlobalToastContextProvider } from '@/contexts/ToastContext/provider'

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  fallback: ['bree-serif', 'serif'],
})

export const metadata: Metadata = {
  title: 'Inbox Alimentação & Serviços',
  description:
    'Fornecedor de Refeições Coletivas com soluções em Restaurantes Empresariais, Refeições Transportadas e Refeições para Eventos.',
  abstract:
    'Fornecedor de Refeições Coletivas com soluções em Restaurantes Empresariais, Refeições Transportadas e Refeições para Eventos.',
  keywords: [
    'inbox',
    'refeições',
    'refeicoes',
    'coletivas',
    'fornecedor',
    'alimentacao',
    'alimentação',
    'empresa',
    'restaurante',
    'refeitório',
    'refeitorio',
    'transportada',
    'eventos',
    'orçamento',
    'orcamento',
  ],
  robots: 'index, follow',
  authors: { name: 'RM Softwere', url: 'rafaelmariscal.vercel.app/' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={robotoSlab.className}>
        <GlobalToastContextProvider>
          <GlobalGoogleReCaptchaProvider>
            {children}
          </GlobalGoogleReCaptchaProvider>
          <Footer />
        </GlobalToastContextProvider>
      </body>
    </html>
  )
}
