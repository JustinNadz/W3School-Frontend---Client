import Header from '@/components/header'
import Hero from '@/components/hero'
import MainContent from '@/components/main-content'
import Sidebar from '@/components/sidebar'
import FloatingChatbot from '@/components/floating-chatbot'
import TutorialSections from '@/components/tutorial-sections'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* W3Schools Style Tutorial Sections */}
      <TutorialSections />
      
      {/* Original Main Content Layout with Independent Scrolling */}
      <div className="w-full px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-[1920px] mx-auto h-[calc(100vh-12rem)]">
          {/* Main Content Area */}
          <div className="flex-1 overflow-y-auto">
            <MainContent />
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:w-80 overflow-y-auto">
            <div className="sticky top-0">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
      
      <FloatingChatbot />
    </div>
  )
}
