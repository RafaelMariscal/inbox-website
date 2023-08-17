import Button from './Button'

export default function GetQuote() {
  return (
    <div className="flex items-center justify-center gap-14">
      <div>
        <h3 className="text-3xl font-semibold tracking-wide drop-shadow-custom-text">
          Faça já seu Orçamento!
        </h3>
        <p className="font-medium drop-shadow-custom-text">
          Nossa equipe está à disposição para retirar qualquer dúvida.
        </p>
      </div>
      <Button href="#quoteForm" scroll variant="light">
        Solicitar Orçamento
      </Button>
    </div>
  )
}
