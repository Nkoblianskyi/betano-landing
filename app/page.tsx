import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Bonus } from "@/components/bonus"
import { AboutBetano } from "@/components/about-betano"
import { ResponsibleGaming } from "@/components/responsible-gaming"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Bonus />
      <AboutBetano />
      <ResponsibleGaming />
      <Footer />
    </main>
  )
}
