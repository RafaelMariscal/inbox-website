import { Soup } from 'lucide-react'
import CustomLink from './CustomLink'

export default function GetQuote() {
  return (
    <div
      className="
        flex items-center justify-center gap-14
        max-lg:flex-col max-lg:gap-4 max-lg:py-4
      "
    >
      <div className="text-center lg:text-start">
        <h3 className="text-3xl font-semibold tracking-wide drop-shadow-custom-text">
          Faça já seu Orçamento!
        </h3>
        <p className="font-medium drop-shadow-custom-text">
          Nossa equipe está à disposição para retirar qualquer dúvida.
        </p>
      </div>
      <CustomLink href="#quoteForm" variant="light" tabIndex={14}>
        Solicitar Orçamento
        <Soup size={18} strokeWidth={2} fillOpacity={0} />
      </CustomLink>
    </div>
  )
}
