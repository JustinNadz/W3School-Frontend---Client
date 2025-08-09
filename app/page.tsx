import Header from '@/components/header'
import Hero from '@/components/hero'
import MainContent from '@/components/main-content'
import Sidebar from '@/components/sidebar'
import AIAssistant from '@/components/ai-assistant'
import TutorialSections from '@/components/tutorial-sections'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* W3Schools Style Tutorial Sections */}
      <TutorialSections />
      
      {/* Original Main Content Layout */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <MainContent />
          <Sidebar />
        </div>
      </div>
      
      <AIAssistant />
    </div>
  )
}
