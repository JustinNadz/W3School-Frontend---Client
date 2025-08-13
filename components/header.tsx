'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Search, Menu, X, Moon, Sun, User, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AuthModal from '@/components/auth-modal'

export default function Header() {
  type Dropdown = 'none' | 'tutorials' | 'exercises' | 'certificates' | 'services'

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<Dropdown>('none')
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const navRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (openDropdown === 'none') return
    const onDocClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown('none')
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [openDropdown])

  const toggleDropdown = (id: Dropdown) => {
    setOpenDropdown(prev => (prev === id ? 'none' : id))
  }

  const MenuButton = ({ id, label }: { id: Dropdown; label: string }) => (
    <div className="relative">
      <button
        id={`${id}-trigger`}
        aria-haspopup="menu"
        aria-expanded={openDropdown === id}
        aria-controls={`${id}-menu`}
        onClick={() => toggleDropdown(id)}
        className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/10 inline-flex items-center gap-1"
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === id ? 'rotate-180' : ''}`} />
      </button>

      {openDropdown === id && (
        <div
          id={`${id}-menu`}
          role="menu"
          aria-labelledby={`${id}-trigger`}
          className="absolute left-0 top-full mt-2 w-72 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xl z-[60] p-2"
          onKeyDown={(e) => { if (e.key === 'Escape') setOpenDropdown('none') }}
        >
          {id === 'tutorials' && (
            <ul className="space-y-1 text-sm">
              <li><Link href="/html" className="block rounded px-3 py-2 hover:bg-gray-100">HTML Tutorial</Link></li>
              <li><Link href="/css" className="block rounded px-3 py-2 hover:bg-gray-100">CSS Tutorial</Link></li>
            </ul>
          )}
          {id === 'exercises' && (
            <ul className="space-y-1 text-sm">
              <li><Link href="/html" className="block rounded px-3 py-2 hover:bg-gray-100">HTML Exercises</Link></li>
              <li><Link href="/css" className="block rounded px-3 py-2 hover:bg-gray-100">CSS Exercises</Link></li>
            </ul>
          )}
          {id === 'certificates' && (
            <ul className="space-y-1 text-sm">
              <li><Link href="/html" className="block rounded px-3 py-2 hover:bg-gray-100">HTML Certificate</Link></li>
              <li><Link href="/css" className="block rounded px-3 py-2 hover:bg-gray-100">CSS Certificate</Link></li>
            </ul>
          )}
          {id === 'services' && (
            <ul className="space-y-1 text-sm">
              <li><Link href="/html" className="block rounded px-3 py-2 hover:bg-gray-100">Code Editor (Try it)</Link></li>
              <li><Link href="/css" className="block rounded px-3 py-2 hover:bg-gray-100">Quizzes</Link></li>
            </ul>
          )}
        </div>
      )}
    </div>
  )

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${isScrolled ? 'shadow-lg' : 'border-b border-gray-200'}`}>
      <AuthModal open={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
      <div className="bg-gradient-to-r from-[#9929EA] to-[#B84AE8] text-white shadow-lg">
        <div className="w-full px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 max-w-[1400px] mx-auto">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-3 flex-shrink-0 group">
                <div className="bg-white text-[#9929EA] px-3 py-2 rounded-lg font-bold text-xl shadow-md group-hover:shadow-lg transition-shadow duration-200">W³</div>
                <span className="text-lg font-semibold tracking-wide">schools</span>
              </Link>

              <nav ref={navRef as React.RefObject<HTMLElement>} className="hidden lg:flex items-center space-x-2">
                <MenuButton id="tutorials" label="Tutorials" />
                <MenuButton id="exercises" label="Exercises" />
                <MenuButton id="certificates" label="Certificates" />
                <MenuButton id="services" label="Services" />
              </nav>
            </div>

            <div className="hidden lg:flex relative flex-1 max-w-sm mx-8">
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/95 text-gray-800 border-none rounded-full h-9 pr-10 pl-4 shadow-sm focus:shadow-md focus:bg-white transition-all duration-200 placeholder:text-gray-500"
              />
              <Button size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 bg-[#9929EA] hover:bg-[#8B1FD6] rounded-full p-0">
                <Search className="h-3 w-3 text-white" />
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="hidden lg:flex text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-200"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button onClick={() => setIsAuthOpen(true)} className="bg-gradient-to-r from-[#00AA6C] to-[#00C774] hover:from-[#008A5A] hover:to-[#00A862] text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </div>

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

      <div className="hidden lg:block bg-[#1f2937] text-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="flex items-center gap-6 h-10">
            <Link href="/html" className="text-sm hover:text-white">HTML</Link>
            <Link href="/css" className="text-sm hover:text-white">CSS</Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-[#9929EA] to-[#B84AE8] text-white shadow-lg">
          <div className="px-6 py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/95 text-gray-800 border-none rounded-full h-10 pr-10 pl-4 shadow-md placeholder:text-gray-500"
                />
                <Button size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-[#9929EA] hover:bg-[#8B1FD6] rounded-full p-0">
                  <Search className="h-3 w-3 text-white" />
                </Button>
              </div>
              <div className="border-t border-white/20 pt-4 space-y-2">
                <Link href="/html" className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium">HTML</Link>
                <Link href="/css" className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium">CSS</Link>
                <Link href="#" className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium">Tutorials</Link>
                <Link href="#" className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium">Exercises</Link>
                <Link href="#" className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium">Certificates</Link>
                <Link href="#" className="block text-white py-3 px-4 rounded-lg hover:bg-white/10 transition-colors font-medium">Services</Link>
              </div>
              <div className="border-t border-white/20 pt-4">
                <Button onClick={() => setIsAuthOpen(true)} className="bg-gradient-to-r from-[#00AA6C] to-[#00C774] hover:from-[#008A5A] hover:to-[#00A862] text-white w-full py-3 font-semibold shadow-lg rounded-lg">
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


