import Header from '@/components/header'
import Hero from '@/components/hero'
import MainContent from '@/components/main-content'
import Sidebar from '@/components/sidebar'
import TutorialSections from '@/components/tutorial-sections'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white w-full">
      <Header />
      <Hero />

      {/* Two-column layout: left shows HTML/CSS sections, right shows learning panels */}
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-start">
          {/* Left column: HTML & CSS sections */}
          <div className="lg:col-span-2 xl:col-span-3">
            <TutorialSections />
          </div>

          {/* Right column: Learning Journey then Learning Analytics */}
          <div className="lg:col-span-1 space-y-6">
            <MainContent />
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
