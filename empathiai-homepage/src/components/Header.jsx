import { useState, useEffect } from 'react'
import { SparklesIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'assessment', label: 'Assessment' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'interventions', label: 'Interventions' },
    { id: 'chatbot', label: 'AI Tutor' }
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 rounded-2xl px-6 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg border border-white/20 py-3' : 'bg-transparent py-4'}`}>
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform shadow-lg shadow-primary/20">
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-lora font-bold bg-gradient-to-r from-primary to-light-purple bg-clip-text text-transparent">
              EmpathAI
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                className="px-5 py-2 rounded-xl text-sm font-bold text-gray-700 hover:text-primary hover:bg-primary/5 transition-all"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-bold text-gray-700 hover:text-primary transition-colors">
              Help Center
            </button>
            <button
              className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-navy-purple transition-all shadow-md active:scale-95"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}