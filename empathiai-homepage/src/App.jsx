import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WhyEmpathAI from './components/WhyEmpathAI'
import HowItWorks from './components/HowItWorks'
import InclusivityFocus from './components/InclusivityFocus'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import LoginModal from './components/LoginModal'
import AdminPanel from './components/admin/AdminPanel'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [user, setUser] = useState(null)
  const [showLoginModal, setShowLoginModal] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser)
      setUser(parsedUser)
      if (parsedUser.role === 'admin' || parsedUser.email === 'admin@empathai.com') {
        setCurrentPage('admin')
      } else {
        setCurrentPage('dashboard')
      }
    }
  }, [])

  const navigateToAuth = () => {
    setShowLoginModal(true)
  }


  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    if (userData.role === 'admin' || userData.email === 'admin@empathai.com') {
      setCurrentPage('admin')
    } else {
      setCurrentPage('dashboard')
    }
    setShowLoginModal(false)
  }

  const navigateToHome = () => {
    setCurrentPage('home')
  }

  const navigateToDashboard = (userData) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    if (userData.role === 'admin' || userData.email === 'admin@empathai.com') {
      setCurrentPage('admin')
    } else {
      setCurrentPage('dashboard')
    }
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('user')
    setCurrentPage('home')
  }

  if (currentPage === 'auth') {
    return <Auth onBackToHome={navigateToHome} onLoginSuccess={navigateToDashboard} />
  }

  if (currentPage === 'admin' && user) {
    return <AdminPanel onLogout={handleLogout} />
  }

  if (currentPage === 'dashboard' && user) {
    return <Dashboard user={user} onLogout={handleLogout} />
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero onStartJourney={navigateToAuth} />
        <WhyEmpathAI />
        <HowItWorks />
        <InclusivityFocus />
      </main>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </div>
  )
}

export default App