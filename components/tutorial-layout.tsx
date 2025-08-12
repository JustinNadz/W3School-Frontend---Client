'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface TutorialLayoutProps {
  title: string
  description: string
  currentTopic: string
  topics: string[]
  children: React.ReactNode
}

export default function TutorialLayout({
  title,
  description,
  currentTopic,
  topics,
  children
}: TutorialLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const currentIndex = topics.indexOf(currentTopic)

  return (
    <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-4 sm:py-6 lg:py-8">
      <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
        {/* Sidebar: sticky so it does not move when the page scrolls */}
        <aside className={`xl:w-72 2xl:w-80 ${sidebarOpen ? 'block' : 'hidden xl:block'} xl:self-start`}> 
          <Card className="sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center justify-between mb-4 xl:hidden">
                <h3 className="font-bold text-[#9929EA] text-sm sm:text-base">{title}</h3>
                <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <h3 className="font-bold text-[#9929EA] mb-4 hidden xl:block text-base lg:text-lg">{title}</h3>
              <nav className="space-y-1">
                {topics.map((topic) => (
                  <Link
                    key={topic}
                    href={`#${topic.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`block px-2 sm:px-3 py-2 text-xs sm:text-sm rounded transition-colors ${
                      topic === currentTopic
                        ? 'bg-[#9929EA] text-white'
                        : 'text-gray-700 hover:bg-[#CC66DA] hover:text-white'
                    }`}
                  >
                    {topic}
                  </Link>
                ))}
              </nav>
            </CardContent>
          </Card>
        </aside>

        <main className="flex-1 min-w-0">
          <Button
            variant="outline"
            size="sm"
            className="xl:hidden mb-4 text-xs sm:text-sm"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-4 w-4 mr-2" />
            Tutorial Menu
          </Button>

          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#9929EA] mb-2">{title}</h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">{description}</p>
          </div>

          <div className="prose max-w-none">
            {children}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t gap-4">
            <div>
              {currentIndex > 0 && (
                <Link
                  href={`#${topics[currentIndex - 1].toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center text-[#9929EA] hover:underline text-sm sm:text-base"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  {topics[currentIndex - 1]}
                </Link>
              )}
            </div>
            <div>
              {currentIndex < topics.length - 1 && (
                <Link
                  href={`#${topics[currentIndex + 1].toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center text-[#9929EA] hover:underline text-sm sm:text-base"
                >
                  {topics[currentIndex + 1]}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              )}
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <Button className="bg-[#00AA6C] hover:bg-[#008A5A] text-white text-sm sm:text-lg px-6 sm:px-8 py-2 sm:py-3">
              Try it Yourself »
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}


