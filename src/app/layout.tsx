// eslint-disable-next-line camelcase
import { Roboto_Slab } from 'next/font/google'
import type { Metadata } from 'next'
import { twMerge } from 'tailwind-merge'
import './globals.css'
import Footer from '@/components/Footer'

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inbox Alimentação & Serviços',
  description:
    'Fornecedor de Refeições Coletivas com soluções em Restaurantes Empresariais, Refeições Transportadas e Refeições para Eventos.',
  abstract:
    'Fornecedor de Refeições Coletivas com soluções em Restaurantes Empresariais, Refeições Transportadas e Refeições para Eventos.',
  keywords: [
    'Empresa',
    'Fornecedor',
    'Refeicoes',
    'Refeições',
    'Alimentacao',
    'Alimentação',
    'Coletivas',
    'Restaurante',
    'Refeitório',
    'Refeitorio',
    'Transportada',
    'Eventos',
    'Orçamento',
    'Orcamento',
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
      <body className={twMerge(robotoSlab.className)}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
