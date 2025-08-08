'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Search, Menu, X, Moon, Sun, Code, Users, Award, User, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${isScrolled ? 'shadow-lg' : 'border-b border-gray-200'}`}>
      <div className="bg-gradient-to-r from-[#9929EA] to-[#B84AE8] text-white shadow-lg">
        <div className="w-full px-6">
          <div className="flex items-center h-16 max-w-[1400px] mx-auto">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 flex-shrink-0 mr-10 group">
              <div className="bg-white text-[#9929EA] px-3 py-2 rounded-lg font-bold text-xl shadow-md group-hover:shadow-lg transition-shadow duration-200">
                W³
              </div>
              <span className="text-lg font-semibold tracking-wide">schools</span>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-2 mr-8">
              <div className="relative group">
                <Link href="/html" className="flex items-center px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-all duration-200 hover:shadow-md">
                  HTML Tutorials
                  <ChevronDown className="ml-1 h-3 w-3 opacity-70" />
                </Link>
              </div>
              <div className="relative group">
                <Link href="/css" className="flex items-center px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-all duration-200 hover:shadow-md">
                  CSS Tutorials
                  <ChevronDown className="ml-1 h-3 w-3 opacity-70" />
                </Link>
              </div>
              <Link href="#" className="px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-all duration-200 hover:shadow-md">
                Exercises
              </Link>
              <Link href="#" className="px-4 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-all duration-200 hover:shadow-md">
                References
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex relative mr-8">
              <div className="relative group">
                <Input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 bg-white/95 text-gray-800 border-none rounded-full h-10 pr-12 pl-4 shadow-md focus:shadow-lg focus:bg-white transition-all duration-200 placeholder:text-gray-500"
                />
                <Button 
                  size="sm" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-[#9929EA] hover:bg-[#8B1FD6] rounded-full p-0 shadow-sm"
                >
                  <Search className="h-4 w-4 text-white" />
                </Button>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-3 ml-auto">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="text-white hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-200"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-200">
                <Code className="h-4 w-4 mr-2" />
                <span className="font-medium">Spaces</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-200">
                <Users className="h-4 w-4 mr-2" />
                <span className="font-medium">For Teachers</span>
              </Button>
              <div className="flex items-center space-x-2 ml-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-[#9929EA] px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Award className="h-4 w-4 mr-2" />
                  Upgrade
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-[#9929EA] px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Get Certified
                </Button>
                <Button className="bg-gradient-to-r from-[#00AA6C] to-[#00C774] hover:from-[#008A5A] hover:to-[#00A862] text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-white ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>



      {isMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-[#9929EA] to-[#B84AE8] text-white shadow-lg">
          <div className="px-6 py-6">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search tutorials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/95 text-gray-800 border-none rounded-full h-12 pr-12 pl-4 shadow-md placeholder:text-gray-500"
                />
                <Button 
                  size="sm" 
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-[#9929EA] hover:bg-[#8B1FD6] rounded-full p-0"
                >
                  <Search className="h-4 w-4 text-white" />
                </Button>
              </div>
              <div className="border-t border-white/20 pt-4">
                <Link href="/html" className="flex items-center justify-start text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium">
                  HTML Tutorials
                  <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
                </Link>
                <Link href="/css" className="flex items-center justify-start text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium">
                  CSS Tutorials
                  <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
                </Link>
                <Link href="#" className="flex items-center justify-start text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium">
                  Exercises
                </Link>
                <Link href="#" className="flex items-center justify-start text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium">
                  References
                </Link>
              </div>
              <div className="border-t border-white/20 pt-4 space-y-3">
                <Button variant="ghost" className="justify-start text-white w-full hover:bg-white/10 py-3">
                  <Code className="h-4 w-4 mr-3" />
                  Spaces
                </Button>
                <Button variant="ghost" className="justify-start text-white w-full hover:bg-white/10 py-3">
                  <Users className="h-4 w-4 mr-3" />
                  For Teachers
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-[#9929EA] w-full py-3 font-semibold"
                >
                  <Award className="h-4 w-4 mr-2" />
                  Upgrade
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-white/80 text-white hover:bg-white hover:text-[#9929EA] w-full py-3 font-semibold"
                >
                  Get Certified
                </Button>
                <Button className="bg-gradient-to-r from-[#00AA6C] to-[#00C774] hover:from-[#008A5A] hover:to-[#00A862] text-white w-full py-3 font-semibold shadow-lg">
                  <User className="h-4 w-4 mr-2" />
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


