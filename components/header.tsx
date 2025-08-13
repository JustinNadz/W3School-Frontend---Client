'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Search, Menu, X, Moon, Sun, User, ChevronDown, Code, BookOpen, Award, Settings, Play, Database, Globe, Zap, Users as UsersIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

// Types
interface NavItem {
  readonly title: string
  readonly description: string
  readonly href: string
  readonly icon: React.ReactNode
  readonly badge?: string
}

interface NavSection {
  readonly title: string
  readonly items: readonly NavItem[]
}

// Navigation Data
const NAVIGATION_DATA = {
  tutorials: [
    {
      title: "Web Development",
      items: [
        { title: "HTML", description: "Learn HTML markup", href: "/html", icon: <Code className="h-4 w-4" /> },
        { title: "CSS", description: "Style your web pages", href: "/css", icon: <Code className="h-4 w-4" /> },
        { title: "JavaScript", description: "Add interactivity", href: "/javascript", icon: <Code className="h-4 w-4" /> },
        { title: "React", description: "Build modern UIs", href: "/react", icon: <Code className="h-4 w-4" /> }
      ]
    },
    {
      title: "Programming",
      items: [
        { title: "Python", description: "Learn Python programming", href: "/python", icon: <Code className="h-4 w-4" /> },
        { title: "Java", description: "Object-oriented programming", href: "/java", icon: <Code className="h-4 w-4" /> },
        { title: "C++", description: "System programming", href: "/cpp", icon: <Code className="h-4 w-4" /> },
        { title: "SQL", description: "Database management", href: "/sql", icon: <Database className="h-4 w-4" /> }
      ]
    }
  ],
  exercises: [
    {
      title: "Practice",
      items: [
        { title: "HTML Exercises", description: "Practice HTML coding", href: "/exercises/html", icon: <Play className="h-4 w-4" />, badge: "Free" },
        { title: "CSS Exercises", description: "Style challenges", href: "/exercises/css", icon: <Play className="h-4 w-4" />, badge: "Free" },
        { title: "JavaScript Exercises", description: "Coding challenges", href: "/exercises/javascript", icon: <Play className="h-4 w-4" />, badge: "Free" },
        { title: "React Exercises", description: "Component building", href: "/exercises/react", icon: <Play className="h-4 w-4" />, badge: "Pro" }
      ]
    },
    {
      title: "Projects",
      items: [
        { title: "Portfolio Website", description: "Build your portfolio", href: "/projects/portfolio", icon: <Globe className="h-4 w-4" />, badge: "Free" },
        { title: "E-commerce Site", description: "Online store project", href: "/projects/ecommerce", icon: <Globe className="h-4 w-4" />, badge: "Pro" },
        { title: "Blog Platform", description: "Content management", href: "/projects/blog", icon: <Globe className="h-4 w-4" />, badge: "Pro" }
      ]
    }
  ],
  certificates: [
    {
      title: "Web Development",
      items: [
        { title: "HTML5 Developer", description: "Master HTML fundamentals", href: "/certificates/html", icon: <Award className="h-4 w-4" />, badge: "Free" },
        { title: "CSS Specialist", description: "Advanced styling skills", href: "/certificates/css", icon: <Award className="h-4 w-4" />, badge: "Free" },
        { title: "Full Stack Developer", description: "Complete web development", href: "/certificates/fullstack", icon: <Award className="h-4 w-4" />, badge: "Pro" }
      ]
    },
    {
      title: "Programming",
      items: [
        { title: "Python Developer", description: "Python programming", href: "/certificates/python", icon: <Award className="h-4 w-4" />, badge: "Pro" },
        { title: "JavaScript Expert", description: "Advanced JS skills", href: "/certificates/javascript", icon: <Award className="h-4 w-4" />, badge: "Pro" },
        { title: "React Developer", description: "Modern UI development", href: "/certificates/react", icon: <Award className="h-4 w-4" />, badge: "Pro" }
      ]
    }
  ],
  services: [
    {
      title: "Learning",
      items: [
        { title: "Personalized Learning", description: "AI-powered paths", href: "/services/learning", icon: <BookOpen className="h-4 w-4" />, badge: "Pro" },
        { title: "Code Review", description: "Expert feedback", href: "/services/code-review", icon: <Code className="h-4 w-4" />, badge: "Pro" },
        { title: "Mentorship", description: "1-on-1 guidance", href: "/services/mentorship", icon: <User className="h-4 w-4" />, badge: "Premium" }
      ]
    },
    {
      title: "Business",
      items: [
        { title: "Team Training", description: "Corporate learning", href: "/services/team-training", icon: <UsersIcon className="h-4 w-4" />, badge: "Enterprise" },
        { title: "Custom Content", description: "Tailored materials", href: "/services/custom-content", icon: <Settings className="h-4 w-4" />, badge: "Enterprise" },
        { title: "API Access", description: "Integrate our platform", href: "/services/api", icon: <Zap className="h-4 w-4" />, badge: "Enterprise" }
      ]
    }
  ]
} as const

// Components
const Logo = () => (
  <Link href="/" className="flex items-center space-x-3 flex-shrink-0 group">
    <div className="bg-white text-[#9929EA] px-3 py-2 rounded-lg font-bold text-xl shadow-md group-hover:shadow-lg transition-shadow duration-200">
      W³
    </div>
    <span className="text-lg font-semibold tracking-wide">schools</span>
  </Link>
)

const SearchBar = ({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (query: string) => void }) => (
  <div className="hidden lg:flex relative flex-1 max-w-sm mx-8">
    <Input
      type="text"
      placeholder="Search tutorials, exercises, certificates..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full bg-white/95 text-gray-800 border-none rounded-full h-9 pr-10 pl-4 shadow-sm focus:shadow-md focus:bg-white transition-all duration-200 placeholder:text-gray-500"
    />
    <Button 
      size="sm" 
      className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 bg-[#9929EA] hover:bg-[#8B1FD6] rounded-full p-0"
    >
      <Search className="h-3 w-3 text-white" />
    </Button>
  </div>
)

const ActionButtons = ({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean; setIsDarkMode: (dark: boolean) => void }) => (
  <div className="flex items-center space-x-4">
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="hidden lg:flex text-white hover:bg-white/10 p-2 rounded-lg transition-all duration-200"
    >
      {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
    <Button className="bg-gradient-to-r from-[#00AA6C] to-[#00C774] hover:from-[#008A5A] hover:to-[#00A862] text-white px-4 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
      <User className="h-4 w-4 mr-2" />
      Sign In
    </Button>
  </div>
)

const Badge = ({ type }: { type: string }) => {
  const badgeStyles = {
    Free: 'bg-green-100 text-green-800',
    Pro: 'bg-blue-100 text-blue-800',
    Premium: 'bg-purple-100 text-purple-800',
    Enterprise: 'bg-gray-100 text-gray-800'
  } as const

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${badgeStyles[type as keyof typeof badgeStyles] || badgeStyles.Enterprise}`}>
      {type}
    </span>
  )
}

const DropdownContent = ({ data, type }: { data: readonly NavSection[]; type: string }) => (
  <>
    <div className="px-4 pb-2 border-b border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 capitalize">{type}</h3>
    </div>
    <div className="max-h-96 overflow-y-auto">
      {data.map((section, sectionIndex) => (
        <div key={sectionIndex} className="px-4 py-3">
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">{section.title}</h4>
          <div className="space-y-2">
            {section.items.map((item, itemIndex) => (
              <Link
                key={itemIndex}
                href={item.href}
                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#9929EA] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-[#9929EA] transition-colors">
                      {item.title}
                    </p>
                    {item.badge && <Badge type={item.badge} />}
                  </div>
                  <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
)

const DropdownButton = ({ 
  children, 
  type, 
  data, 
  isActive, 
  onToggle, 
  onMouseEnter 
}: { 
  children: React.ReactNode
  type: string
  data: readonly NavSection[]
  isActive: boolean
  onToggle: () => void
  onMouseEnter: () => void
}) => (
  <div className="relative">
    <button
      className="flex items-center space-x-1 px-3 py-2 text-sm font-medium hover:bg-white/10 rounded-lg transition-all duration-200"
      onMouseEnter={onMouseEnter}
      onClick={onToggle}
    >
      {children}
      <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`} />
    </button>
    <div 
      className={`absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50 transition-all duration-200 ${
        isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
    >
      <DropdownContent data={data} type={type} />
    </div>
  </div>
)

const Navigation = ({ 
  activeDropdown, 
  setActiveDropdown,
  dropdownRef
}: { 
  activeDropdown: string | null
  setActiveDropdown: (dropdown: string | null) => void
  dropdownRef: React.RefObject<HTMLDivElement | null>
}) => (
  <nav className="hidden lg:flex items-center space-x-6" ref={dropdownRef}>
    <DropdownButton 
      type="tutorials" 
      data={NAVIGATION_DATA.tutorials}
      isActive={activeDropdown === "tutorials"}
      onToggle={() => setActiveDropdown(activeDropdown === "tutorials" ? null : "tutorials")}
      onMouseEnter={() => setActiveDropdown("tutorials")}
    >
      <BookOpen className="h-4 w-4 mr-1" />
      Tutorials
    </DropdownButton>
    
    <DropdownButton 
      type="exercises" 
      data={NAVIGATION_DATA.exercises}
      isActive={activeDropdown === "exercises"}
      onToggle={() => setActiveDropdown(activeDropdown === "exercises" ? null : "exercises")}
      onMouseEnter={() => setActiveDropdown("exercises")}
    >
      <Play className="h-4 w-4 mr-1" />
      Exercises
    </DropdownButton>
    
    <DropdownButton 
      type="certificates" 
      data={NAVIGATION_DATA.certificates}
      isActive={activeDropdown === "certificates"}
      onToggle={() => setActiveDropdown(activeDropdown === "certificates" ? null : "certificates")}
      onMouseEnter={() => setActiveDropdown("certificates")}
    >
      <Award className="h-4 w-4 mr-1" />
      Certificates
    </DropdownButton>
    
    <DropdownButton 
      type="services" 
      data={NAVIGATION_DATA.services}
      isActive={activeDropdown === "services"}
      onToggle={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
      onMouseEnter={() => setActiveDropdown("services")}
    >
      <Settings className="h-4 w-4 mr-1" />
      Services
    </DropdownButton>
  </nav>
)

const MobileMenu = ({ 
  isOpen, 
  searchQuery, 
  setSearchQuery 
}: { 
  isOpen: boolean
  searchQuery: string
  setSearchQuery: (query: string) => void
}) => (
  isOpen && (
    <div className="lg:hidden bg-gradient-to-b from-[#9929EA] to-[#B84AE8] text-white shadow-lg">
      <div className="px-6 py-4">
        <div className="flex flex-col space-y-4">
          {/* Mobile Search */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Search tutorials, exercises, certificates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/95 text-gray-800 border-none rounded-full h-10 pr-10 pl-4 shadow-md placeholder:text-gray-500"
            />
            <Button 
              size="sm" 
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 bg-[#9929EA] hover:bg-[#8B1FD6] rounded-full p-0"
            >
              <Search className="h-3 w-3 text-white" />
            </Button>
          </div>
          
          {/* Mobile Navigation */}
          <div className="border-t border-white/20 pt-4 space-y-2">
            {Object.entries(NAVIGATION_DATA).map(([key, sections]) => (
              <div key={key} className="space-y-2">
                <div className="text-white py-2 px-4 font-medium text-sm uppercase tracking-wide opacity-75">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </div>
                {sections[0].items.slice(0, 2).map((item) => (
                  <Link 
                    key={item.title}
                    href={item.href} 
                    className="block text-white py-2 px-6 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          
          {/* Mobile Actions */}
          <div className="border-t border-white/20 pt-4">
            <Button className="bg-gradient-to-r from-[#00AA6C] to-[#00C774] hover:from-[#008A5A] hover:to-[#00A862] text-white w-full py-3 font-semibold shadow-lg rounded-lg">
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
)

// Main Header Component
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Effects
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${isScrolled ? 'shadow-lg' : 'border-b border-gray-200'}`}>
      <div className="bg-gradient-to-r from-[#9929EA] to-[#B84AE8] text-white shadow-lg">
        <div className="w-full px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 w-full">
            {/* Left Section: Logo + Navigation */}
            <div className="flex items-center space-x-8">
              <Logo />
              <Navigation 
                activeDropdown={activeDropdown} 
                setActiveDropdown={setActiveDropdown}
                dropdownRef={dropdownRef}
              />
            </div>

            {/* Center Section: Search Bar */}
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {/* Right Section: Actions */}
            <ActionButtons isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

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

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </header>
  )
}


