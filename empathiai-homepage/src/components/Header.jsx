export default function Header({ activeTab, setActiveTab, user, setIsAuthenticated }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'assessment', label: 'Assessment' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'interventions', label: 'Interventions' },
    { id: 'chatbot', label: 'AI Tutor' }  ]

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">EmpathAI</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-light-purple text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="bg-light-purple text-white px-4 py-2 rounded-md hover:bg-light-purple/80"
          >
            Sign In
          </button>
        </div>
      </div>
    </header>
  )
}