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
<<<<<<< HEAD
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <aside className={`lg:w-64 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
          <Card className="sticky top-4">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <h3 className="font-bold text-[#9929EA]">{title}</h3>
                <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <h3 className="font-bold text-[#9929EA] mb-4 hidden lg:block">{title}</h3>
              <nav className="space-y-1">
=======
    <div className="w-full px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8 max-w-[1920px] mx-auto h-[calc(100vh-12rem)]">
        {/* Left Sidebar - Navigation */}
        <aside className={`lg:w-64 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="h-full bg-gradient-to-br from-purple-900 via-purple-800 to-[#9929EA] rounded-xl shadow-2xl border border-purple-700 overflow-hidden">
            <div className="p-4 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <h3 className="font-bold text-white">{title}</h3>
                <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)} className="text-white hover:bg-purple-700">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <h3 className="font-bold text-white mb-4 hidden lg:block">{title}</h3>
              
              {/* Scrollable Navigation */}
              <nav className="flex-1 overflow-y-auto space-y-1 pr-2">
>>>>>>> 175e78b43188cdb41dad50b85d26488d781b2ffd
                {topics.map((topic) => (
                  <Link
                    key={topic}
                    href={`#${topic.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`block px-3 py-2 text-sm rounded transition-colors ${
                      topic === currentTopic
<<<<<<< HEAD
                        ? 'bg-[#9929EA] text-white'
                        : 'text-gray-700 hover:bg-[#CC66DA] hover:text-white'
=======
                        ? 'bg-white text-[#9929EA] font-semibold shadow-lg'
                        : 'text-purple-100 hover:bg-purple-700 hover:text-white'
>>>>>>> 175e78b43188cdb41dad50b85d26488d781b2ffd
                    }`}
                  >
                    {topic}
                  </Link>
                ))}
              </nav>
<<<<<<< HEAD
            </CardContent>
          </Card>
        </aside>

        <main className="flex-1">
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden mb-4"
=======
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden mb-4 border-[#9929EA] text-[#9929EA] hover:bg-[#9929EA] hover:text-white"
>>>>>>> 175e78b43188cdb41dad50b85d26488d781b2ffd
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-4 w-4 mr-2" />
            Tutorial Menu
          </Button>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#9929EA] mb-2">{title}</h1>
            <p className="text-xl text-gray-600">{description}</p>
          </div>

          <div className="prose max-w-none">
            {children}
          </div>
<<<<<<< HEAD

          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <div>
              {currentIndex > 0 && (
                <Link
                  href={`#${topics[currentIndex - 1].toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center text-[#9929EA] hover:underline"
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
                  className="flex items-center text-[#9929EA] hover:underline"
                >
                  {topics[currentIndex + 1]}
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              )}
            </div>
          </div>

          <div className="mt-8">
            <Button className="bg-[#00AA6C] hover:bg-[#008A5A] text-white text-lg px-8 py-3">
              Try it Yourself »
            </Button>
          </div>
=======
>>>>>>> 175e78b43188cdb41dad50b85d26488d781b2ffd
        </main>
      </div>
    </div>
  )
}


