import AboutUs from '@/components/AboutUs'
import GetQuote from '@/components/GetQuote'
import Hero from '@/components/Hero'
import MainAdvantages from '@/components/MainAdvantages'
import MainPillars from '@/components/MainPillars'
import MainServices from '@/components/MainServices'
import Testemonials from '@/components/Testemonials'

export default function Home() {
  return (
    <main>
      <h1 className="invisible h-0 w-0">Inbox Alimentação e Serviços</h1>
      <Hero />
      <div className="bg-radial-green">
        <MainServices />
        <MainAdvantages />
        <GetQuote />
        <AboutUs />
        <MainPillars />
        <Testemonials />
      </div>
    </main>
  )
}
