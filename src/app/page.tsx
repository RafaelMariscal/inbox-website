import Hero from '@/components/Hero'
import MainServices from '@/components/MainServices'

export default function Home() {
  return (
    <main>
      <h1 className="invisible h-0 w-0">Inbox Alimentação e Serviços</h1>
      <Hero />
      <div className="bg-radial-green">
        <MainServices />
      </div>
    </main>
  )
}
