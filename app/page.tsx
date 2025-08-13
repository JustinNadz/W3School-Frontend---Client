import Header from '@/components/header'
import Hero from '@/components/hero'
import TutorialSections from '@/components/tutorial-sections'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />

      {/* W3Schools-style tutorial sections only */}
      <TutorialSections />
    </div>
  )
}
