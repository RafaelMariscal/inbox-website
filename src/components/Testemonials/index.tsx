'use client'

import Testemonial from './Testemonial'
import OrlandoSrc from '@/assets/images/testemonialsImages/orlandoAraujo.png'
import LeilaSrc from '@/assets/images/testemonialsImages/leilaRodrigues.png'
import ErlandiaSrc from '@/assets/images/testemonialsImages/erlandiaDiasRocha.png'
import ArthurSrc from '@/assets/images/testemonialsImages/arthurMoreira.png'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import TestemonialsBgSrc from '@/assets/images/testemonialsBg.png'
export interface Testemonial {
  id: string
  avatar: StaticImageData
  name: string
  description: string
  testemonial: string
}

const TESTEMONIALS: Testemonial[] = [
  {
    id: 'Orlando Araujo',
    avatar: OrlandoSrc,
    name: 'Orlando Araujo',
    description: 'Encarregado de Produção',
    testemonial:
      'A comida vem pegando fogo de quente e tem um tempero muito bom. Nunca tive problema em 6 anos que trabalho aqui. A menina da copa é bem educada, e vira e mexe tem eventos como no São João.',
  },
  {
    id: 'Leila Rodrigues',
    avatar: LeilaSrc,
    name: 'Leila Rodrigues',
    description: 'Analista de Recursos Humanos',
    testemonial:
      'Não tenho nada a reclamar do serviço. A comida é deliciosa e bem apresentada. Além de que a equipe deles é bem atenciosa, e a variedade do cardápio também é muito boa!',
  },
  {
    id: 'Erlândia Dias',
    avatar: ErlandiaSrc,
    name: 'Erlândia Dias Rocha',
    description: 'Costureira',
    testemonial:
      'Trabalho muito sentada, e por isso preciso comer de forma mais saudável, sabe? Então escolhi pelo cardápio da dieta. E olha que ela vem muito gostosa! Penso até que não estou fazendo dieta.',
  },
  {
    id: 'Arthur Moreira',
    avatar: ArthurSrc,
    name: 'Arthur Moreira',
    description: 'Gerente de Produção',
    testemonial:
      'Como gestor, estou muito satisfeito com o serviço de refeições oferecido a nossa empresa. Refeições de qualidade são um fator crucial para o aumento da produtividade dos nossos encarregados.',
  },
]

export default function Testemonials() {
  const [testemonials, setTestemonials] = useState(TESTEMONIALS)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (!isAnimating) setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testemonials])

  const pastOne = () => {
    const firstElement = testemonials.shift()
    if (!firstElement) return null
    setTestemonials([...testemonials, firstElement])
  }
  const nextOne = () => {
    const lastElement = testemonials.pop()
    if (!lastElement) return null
    setTestemonials([lastElement, ...testemonials])
  }

  return (
    <section id="testemonials" className="relative flex overflow-hidden">
      <div className="flex w-full max-w-[50%] justify-end pr-32">
        <Quote size={220} strokeWidth={2} color="transparent" fill="#ebf6f3" />
      </div>
      <Image
        src={TestemonialsBgSrc}
        alt="Green squares blob image"
        quality={100}
        className="h-[600px] w-full max-w-[50%] bg-repeat-x object-cover object-left"
        placeholder="blur"
      />
      <Testemonial.Root>
        <Testemonial.Controller>
          <Testemonial.ControllerTitle>
            Depoimentos dos clientes
          </Testemonial.ControllerTitle>
          <div>
            <Testemonial.ControllerButton
              onClick={pastOne}
              disabled={isAnimating}
              className="mr-4"
            >
              <ChevronLeft size={24} className="drop-shadow-custom-text" />
            </Testemonial.ControllerButton>
            <Testemonial.ControllerButton
              onClick={nextOne}
              disabled={isAnimating}
            >
              <ChevronRight size={24} className="drop-shadow-custom-text" />
            </Testemonial.ControllerButton>
          </div>
        </Testemonial.Controller>

        <Testemonial.Content
          testemonials={testemonials}
          setTestemonials={setTestemonials}
        >
          {testemonials.map((testemonial) => {
            return (
              <Testemonial.Card key={testemonial.id} testemonial={testemonial}>
                <Testemonial.CardHeader>
                  <Testemonial.Avatar src={testemonial.avatar} alt="" />
                  <div>
                    <Testemonial.Name>{testemonial.name}</Testemonial.Name>
                    <Testemonial.Description>
                      {testemonial.description}
                    </Testemonial.Description>
                  </div>
                </Testemonial.CardHeader>
                <Testemonial.Text>{testemonial.testemonial}</Testemonial.Text>
              </Testemonial.Card>
            )
          })}
        </Testemonial.Content>
      </Testemonial.Root>
    </section>
  )
}
