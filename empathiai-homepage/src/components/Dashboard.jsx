import { useState, useEffect } from 'react'
import { 
  MagnifyingGlassIcon, 
  BellIcon, 
  CalendarIcon, 
  GiftIcon,
  HomeIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  PuzzlePieceIcon,
  BoltIcon,
  CalculatorIcon,
  BeakerIcon,
  GlobeAltIcon,
  LanguageIcon,
  PaperAirplaneIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'
import Assessment from './Assessment'
import Chatbot from './Chatbot'
import Resources from './Resources'
import ChatBuddy from './ChatBuddy'
import Curriculum from './Curriculum'
import Questionnaire from './Questionnaire'
import Activities from './Activities'

export default function Dashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeHeaderModal, setActiveHeaderModal] = useState(null)
  const [chatMessage, setChatMessage] = useState('')

  const navigateToChat = (message) => {
    setChatMessage(message)
    setActiveTab('chatbuddy')
  }

  const sidebarItems = [
    { id: 'overview', name: 'Overview', icon: HomeIcon },
    { id: 'chatbuddy', name: 'ChatBuddy', icon: ChatBubbleLeftRightIcon },
    { id: 'curriculum', name: 'Curriculum', icon: BookOpenIcon },
    { id: 'questionnaire', name: 'Questionnaire', icon: ClipboardDocumentListIcon },
    { id: 'activities', name: 'Activities', icon: PuzzlePieceIcon }
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-lora">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">EmpathAI</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="ctrl+k to search for sessions, video lessons, etc"
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* XP Badge */}
            <div className="flex items-center bg-yellow-50 border border-yellow-200 rounded-full px-3 py-1">
              <BoltIcon className="w-4 h-4 text-yellow-600 mr-1" />
              <span className="text-yellow-700 font-semibold text-sm">385</span>
            </div>

            {/* Calendar Icon */}
            <CalendarIcon 
              onClick={() => setActiveHeaderModal('calendar')}
              className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" 
            />

            {/* Gift Icon */}
            <GiftIcon 
              onClick={() => setActiveHeaderModal('rewards')}
              className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" 
            />

            {/* Notification Bell */}
            <div className="relative">
              <BellIcon 
                onClick={() => setActiveHeaderModal('notifications')}
                className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" 
              />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
            </div>

            {/* User Avatar */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">{user.firstName?.charAt(0) || 'U'}</span>
              </div>
              <button className="text-gray-700 hover:text-gray-900">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm border-r border-gray-200 min-h-screen">
          <nav className="p-4 flex flex-col h-full">
            <ul className="space-y-2 flex-1">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-purple-50 text-purple-700 border-r-2 border-purple-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Logout Button */}
            <button
              onClick={onLogout}
              className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors text-gray-700 hover:bg-red-50 hover:text-red-600 mt-4"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && <Overview user={user} setActiveTab={setActiveTab} />}
          {activeTab === 'chatbuddy' && <ChatBuddy user={user} initialMessage={chatMessage} setChatMessage={setChatMessage} />}
          {activeTab === 'curriculum' && <Curriculum user={user} setActiveTab={setActiveTab} navigateToChat={navigateToChat} />}
          {activeTab === 'questionnaire' && <Questionnaire user={user} />}
          {activeTab === 'activities' && <Activities user={user} />}
        </main>

        {/* Right Sidebar - Only show in overview */}
        {activeTab === 'overview' && (
          <aside className="w-80 bg-white border-l border-gray-200 p-6">
            <RightSidebar />
          </aside>
        )}
      </div>

      {/* Header Modals */}
      {activeHeaderModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-purple-200 rounded-2xl shadow-xl p-8 w-full max-w-md relative">
            <button
              onClick={() => setActiveHeaderModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            
            {activeHeaderModal === 'calendar' && <CalendarModal />}
            {activeHeaderModal === 'rewards' && <RewardsModal />}
            {activeHeaderModal === 'notifications' && <NotificationsModal />}
          </div>
        </div>
      )}
    </div>
  )

  // Calendar Modal Component
  function CalendarModal() {
    const today = new Date()
    const events = [
      { date: 'Today', time: '2:00 PM', title: 'Math Study Session', type: 'study' },
      { date: 'Tomorrow', time: '10:00 AM', title: 'Emotional Check-in', type: 'wellness' },
      { date: 'Dec 25', time: '3:00 PM', title: 'Science Project Due', type: 'assignment' }
    ]

    return (
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">📅 Your Schedule</h3>
        
        <div className="space-y-4">
          {events.map((event, i) => (
            <div key={i} className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900">{event.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  event.type === 'study' ? 'bg-blue-100 text-blue-700' :
                  event.type === 'wellness' ? 'bg-green-100 text-green-700' :
                  'bg-orange-100 text-orange-700'
                }`}>
                  {event.type}
                </span>
              </div>
              <p className="text-sm text-gray-600">{event.date} at {event.time}</p>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-6 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          View Full Calendar
        </button>
      </div>
    )
  }

  // Rewards Modal Component
  function RewardsModal() {
    const rewards = [
      { name: '30 min extra screen time', cost: 50, available: true, type: 'privilege' },
      { name: 'Choose dinner menu', cost: 100, available: true, type: 'privilege' },
      { name: 'Movie night pick', cost: 150, available: false, type: 'privilege' },
      { name: 'Weekend outing', cost: 300, available: false, type: 'privilege' }
    ]

    const badges = [
      { name: 'Math Genius', icon: '🧮', earned: true, description: 'Complete 10 math chapters' },
      { name: 'Mindful Student', icon: '🧘', earned: true, description: '30 meditation sessions' },
      { name: 'Study Streak', icon: '🔥', earned: false, description: '14-day study streak' },
      { name: 'Emotion Master', icon: '💝', earned: false, description: 'Complete all assessments' }
    ]

    return (
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🎁 Rewards Store</h3>
        
        <div className="mb-6 text-center">
          <p className="text-gray-600">Your XP Balance:</p>
          <p className="text-3xl font-bold text-yellow-600">385 XP</p>
        </div>

        {/* Badges Section */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">🏆 Your Badges</h4>
          <div className="grid grid-cols-2 gap-3">
            {badges.map((badge, i) => (
              <div key={i} className={`p-3 rounded-lg border-2 text-center ${
                badge.earned 
                  ? 'border-yellow-300 bg-yellow-50' 
                  : 'border-gray-200 bg-gray-50 opacity-60'
              }`}>
                <div className="text-2xl mb-1">{badge.icon}</div>
                <h5 className="font-semibold text-sm text-gray-900">{badge.name}</h5>
                <p className="text-xs text-gray-600">{badge.description}</p>
                {badge.earned && <div className="text-xs text-yellow-600 font-medium mt-1">✓ Earned</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Notifications Modal Component
  function NotificationsModal() {
    const notifications = [
      { 
        id: 1, 
        title: 'Great job on Math!', 
        message: 'You completed Chapter 5 with 85% accuracy', 
        time: '2 hours ago',
        type: 'achievement',
        read: false
      },
      { 
        id: 2, 
        title: 'Reminder: Daily Check-in', 
        message: 'Don\'t forget to log your mood today', 
        time: '1 day ago',
        type: 'reminder',
        read: true
      },
      { 
        id: 3, 
        title: 'New Meditation Session', 
        message: 'Try our new 10-minute focus meditation', 
        time: '2 days ago',
        type: 'feature',
        read: true
      }
    ]

    return (
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🔔 Notifications</h3>
        
        <div className="space-y-3 max-h-80 overflow-y-auto">
          {notifications.map((notif) => (
            <div key={notif.id} className={`p-4 rounded-lg border ${
              !notif.read 
                ? 'border-purple-300 bg-purple-50' 
                : 'border-gray-200 bg-gray-50'
            }`}>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-gray-900">{notif.title}</h4>
                {!notif.read && <div className="w-2 h-2 bg-purple-600 rounded-full"></div>}
              </div>
              <p className="text-sm text-gray-700 mb-2">{notif.message}</p>
              <p className="text-xs text-gray-500">{notif.time}</p>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800">
          Mark All as Read
        </button>
      </div>
    )
  }
}

function Overview({ user, setActiveTab }) {
  const subjects = [
    { name: 'Mathematics', chapter: 'Algebra', progress: 75, icon: CalculatorIcon, color: 'blue' },
    { name: 'Science', chapter: 'Light & Sound', progress: 60, icon: BeakerIcon, color: 'green' },
    { name: 'English', chapter: 'Poetry', progress: 85, icon: BookOpenIcon, color: 'purple' },
    { name: 'Social Studies', chapter: 'Indian History', progress: 45, icon: GlobeAltIcon, color: 'orange' }
  ]

  return (
    <div className="font-lora">
      {/* Welcome Message */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome, {user.firstName}! 🌟
        </h1>
        <p className="text-gray-600">Ready to continue your learning journey today?</p>
      </div>

      {/* Ongoing Learning Modules */}
      <div className="mb-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BookOpenIcon className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Ongoing Learning Modules</h2>
            <BookOpenIcon className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {subjects.slice(0, 2).map((subject, index) => (
            <div key={index} className="bg-white border-2 border-purple-200 rounded-xl p-6 hover:border-purple-300 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-${subject.color}-100 rounded-lg flex items-center justify-center`}>
                    <subject.icon className={`w-6 h-6 text-${subject.color}-600`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{subject.name}</h3>
                    <p className="text-sm text-gray-600">{subject.chapter}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-purple-600">{subject.progress}% completed</span>
              </div>
              <div className="mb-4">
                <div className="bg-gray-200 rounded-full h-2">
                  <div className={`bg-green-600 h-2 rounded-full`} style={{width: `${subject.progress}%`}}></div>
                </div>
              </div>
              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Continue Learning
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Meditation Card */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Mindfulness Break</h2>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-3xl">🧘‍♀️</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">5-Minute Calm Session</h3>
              <p className="text-gray-600 text-sm mb-3">Take a mindful break to refresh your focus</p>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Start Meditation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RightSidebar() {
  const [completedTasks, setCompletedTasks] = useState({})

  const handleTaskToggle = (taskId) => {
    setCompletedTasks(prev => ({
      ...prev,
      [taskId]: !prev[taskId]
    }))
  }

  return (
    <div className="font-lora">
      {/* Emotional Wellness */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">💝 Emotional Wellness</h3>
        <div className="bg-white border-2 border-purple-200 rounded-xl p-4">
          <p className="text-sm text-gray-700 mb-3">How are you feeling today?</p>
          <div className="flex justify-center space-x-4">
            <span className="text-3xl cursor-pointer hover:scale-110 transition-transform">😊</span>
            <span className="text-3xl cursor-pointer hover:scale-110 transition-transform">😐</span>
            <span className="text-3xl cursor-pointer hover:scale-110 transition-transform">😔</span>
          </div>
        </div>
      </div>

      {/* Pending Tasks */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">📝 Tasks to be done</h3>
        <div className="bg-white border-2 border-purple-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center space-x-3">
            <input 
              type="checkbox" 
              className="rounded text-green-600 focus:ring-green-500" 
              checked={completedTasks.task1 || false}
              onChange={() => handleTaskToggle('task1')}
            />
            <span className={`text-sm ${completedTasks.task1 ? 'text-green-600 line-through' : 'text-gray-700'}`}>
              Complete Math Chapter 5 exercises
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <input 
              type="checkbox" 
              className="rounded text-green-600 focus:ring-green-500" 
              checked={completedTasks.task2 || false}
              onChange={() => handleTaskToggle('task2')}
            />
            <span className={`text-sm ${completedTasks.task2 ? 'text-green-600 line-through' : 'text-gray-700'}`}>
              Science project submission
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <input 
              type="checkbox" 
              className="rounded text-green-600 focus:ring-green-500" 
              checked={completedTasks.task3 || false}
              onChange={() => handleTaskToggle('task3')}
            />
            <span className={`text-sm ${completedTasks.task3 ? 'text-green-600 line-through' : 'text-gray-700'}`}>
              English essay writing
            </span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">⚡ Recent Activity</h3>
        <div className="bg-white border-2 border-purple-200 rounded-xl p-4 space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 text-sm">✓</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Completed Math Quiz</p>
              <p className="text-xs text-gray-600">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm">💬</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">ChatBuddy session</p>
              <p className="text-xs text-gray-600">Yesterday</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 text-sm">📝</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Feelings Explorer</p>
              <p className="text-xs text-gray-600">2 days ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-4">🏆 Achievements</h3>
        <div className="bg-white border-2 border-purple-200 rounded-xl p-4 space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">7</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">7-day study streak</p>
              <p className="text-xs text-gray-600">Keep it up!</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600">🎯</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Math Master</p>
              <p className="text-xs text-gray-600">Completed 5 chapters</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600">🧘</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Mindful Learner</p>
              <p className="text-xs text-gray-600">10 meditation sessions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}