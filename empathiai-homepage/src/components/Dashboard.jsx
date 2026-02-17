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
  ArrowRightOnRectangleIcon,
  AcademicCapIcon
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
    { id: 'curriculum', name: 'Curriculum', icon: AcademicCapIcon },
    { id: 'questionnaire', name: 'Feelings Explorer', icon: ClipboardDocumentListIcon },
    { id: 'activities', name: 'Activities', icon: PuzzlePieceIcon }
  ]

  return (
    <div className="min-h-screen bg-gray-50 font-lora">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-9 h-9 bg-purple-200 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200/50 group-hover:rotate-6 transition-transform">
              <span className="text-dark-navy font-black text-lg">E</span>
            </div>
            <h1 className="text-xl font-black text-purple-200 tracking-tight">
              EmpathAI
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search sessions, lessons, or activities..."
                className="w-full pl-12 pr-4 py-2.5 bg-gray-100 border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm transition-all"
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-5">
            {/* XP Badge */}
            <div className="flex items-center bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 shadow-sm">
              <BoltIcon className="w-4 h-4 text-yellow-500 mr-2" />
              <span className="text-yellow-700 font-bold text-sm">385 XP</span>
            </div>

            {/* Calendar Icon */}
            <CalendarIcon
              onClick={() => setActiveHeaderModal('calendar')}
              className="w-6 h-6 text-gray-400 hover:text-primary cursor-pointer transition-colors"
            />

            {/* Gift Icon */}
            <GiftIcon
              onClick={() => setActiveHeaderModal('rewards')}
              className="w-6 h-6 text-gray-400 hover:text-primary cursor-pointer transition-colors"
            />

            {/* Notification Bell */}
            <div className="relative">
              <BellIcon
                onClick={() => setActiveHeaderModal('notifications')}
                className="w-6 h-6 text-gray-400 hover:text-primary cursor-pointer transition-colors"
              />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center border-2 border-white">1</span>
            </div>

            {/* User Avatar */}
            <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-purple-200">{user.firstName}</p>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest pl-1">Student</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-light-purple rounded-2xl flex items-center justify-center shadow-md shadow-primary/20">
                <span className="text-white font-black text-base">{user.firstName?.charAt(0) || 'U'}</span>
              </div>
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
                    className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all ${activeTab === item.id
                      ? 'bg-primary/10 text-primary shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                  >
                    <item.icon className={`w-5 h-5 mr-3 transition-colors ${activeTab === item.id ? 'text-primary' : 'text-gray-400'}`} />
                    <span className="font-bold tracking-tight">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Logout Button */}
            <button
              onClick={onLogout}
              className="w-full flex items-center px-4 py-3 text-sm font-bold rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-600 transition-all mt-4"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
              <span>Logout</span>
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
                <span className={`px-2 py-1 rounded-full text-xs ${event.type === 'study' ? 'bg-blue-100 text-blue-700' :
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
              <div key={i} className={`p-3 rounded-lg border-2 text-center ${badge.earned
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
            <div key={notif.id} className={`p-4 rounded-lg border ${!notif.read
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
  const achievements = [
    { title: '7-day study streak', desc: 'Keep it up!', value: '7', icon: '🔥', color: 'bg-orange-100', textColor: 'text-orange-600' },
    { title: 'Math Master', desc: 'Completed 5 chapters', value: '🎯', icon: '🎯', color: 'bg-primary/10', textColor: 'text-primary' },
    { title: 'Mindful Learner', desc: '10 sessions done', value: '🧘', icon: '🧘', color: 'bg-blue-100', textColor: 'text-blue-600' },
    { title: 'Emotion Explorer', desc: 'Top 5% in class', value: '⭐', icon: '⭐', color: 'bg-yellow-100', textColor: 'text-yellow-600' }
  ]

  const subjects = [
    { name: 'Mathematics', chapter: 'Algebra', progress: 75, icon: CalculatorIcon, color: 'blue' },
    { name: 'Science', chapter: 'Light & Sound', progress: 60, icon: BeakerIcon, color: 'green' },
    { name: 'English', chapter: 'Poetry', progress: 85, icon: BookOpenIcon, color: 'purple' },
    { name: 'Social Studies', chapter: 'Indian History', progress: 45, icon: GlobeAltIcon, color: 'orange' }
  ]

  return (
    <div className="font-lora">
      {/* Welcome Message */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-black text-dark-navy mb-1.5 tracking-tight">
          Welcome back, {user.firstName}! 🌟
        </h1>
        <p className="text-base text-gray-500 font-medium tracking-tight">Ready to continue your personalized emotional and academic journey?</p>
      </div>

      {/* Hero Achievements Section */}
      <div className="mb-10 text-center">
        <h2 className="text-lg font-black text-dark-navy mb-5 flex items-center justify-center gap-2">
          <span className="w-6 h-1 bg-purple-200 rounded-full"></span>
          Your Milestones
          <span className="w-6 h-1 bg-purple-200 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map((ach, i) => (
            <div key={i} className="group bg-white p-5 rounded-3xl border-2 border-purple-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className={`w-12 h-12 ${ach.color} rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform`}>
                {ach.icon}
              </div>
              <h3 className="text-base font-black text-dark-navy mb-1">{ach.title}</h3>
              <p className="text-[11px] text-gray-500 font-medium">{ach.desc}</p>
              <div className="mt-3 pt-3 border-t border-purple-100 flex items-center justify-between">
                <span className={`text-[9px] font-black uppercase tracking-widest ${ach.id === 'milestone' ? 'text-purple-600' : ach.textColor}`}>Achievement</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ongoing Learning Modules */}
      <div className="mb-10 text-center">
        <div className="flex flex-col items-center justify-center mb-6">
          <h2 className="text-lg font-black text-dark-navy flex items-center gap-2 mb-2">
            <span className="w-6 h-1 bg-purple-200 rounded-full"></span>
            Ongoing Learning
            <span className="w-6 h-1 bg-purple-200 rounded-full"></span>
          </h2>
          <button className="text-xs font-bold text-purple-600 hover:underline">View all curriculum</button>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {subjects.slice(0, 2).map((subject, index) => (
            <div key={index} className="group bg-white border-2 border-purple-200 rounded-3xl p-6 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-[80px] -z-0"></div>
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-14 h-14 bg-${subject.color}-50 rounded-xl flex items-center justify-center group-hover:rotate-3 transition-transform`}>
                    <subject.icon className={`w-7 h-7 text-${subject.color}-500`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-dark-navy">{subject.name}</h3>
                    <p className="text-gray-500 font-bold uppercase text-[9px] tracking-widest">CHAPTER: {subject.chapter}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-black text-purple-600">{subject.progress}%</p>
                  <p className="text-[9px] font-bold text-gray-400 uppercase">Progress</p>
                </div>
              </div>

              <div className="mb-6 relative z-10">
                <div className="bg-purple-100 rounded-full h-2.5 p-0.5">
                  <div className={`bg-purple-400 h-full rounded-full transition-all duration-1000`} style={{ width: `${subject.progress}%` }}></div>
                </div>
              </div>

              <button className="w-full bg-black text-white font-bold rounded-xl py-3 hover:bg-gray-800 transition-all relative z-10 text-sm">
                Continue Learning
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Meditation Card */}
      <div className="mb-6">
        <div className="relative group overflow-hidden rounded-3xl border-2 border-purple-200 bg-purple-50/50">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200/50 to-transparent transition-opacity"></div>
          <div className="p-6 flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl shadow-lg border-2 border-purple-200 animate-float">
              🧘‍♀️
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-black text-dark-navy mb-1 italic">Feeling Overwhelmed?</h3>
              <p className="text-gray-600 font-medium text-base leading-relaxed">Take a quick 5-minute mindfulness break to recalibrate your emotions.</p>
            </div>
            <button className="bg-black text-white font-bold px-8 py-3 rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-black/10 whitespace-nowrap text-sm">
              Start Session
            </button>
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
      <div>
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-primary rounded-full"></span>
          Recent Activity
        </h3>
        <div className="bg-white border border-gray-100 rounded-2xl p-4 space-y-3 shadow-sm">
          <div className="flex items-center space-x-3 p-3 bg-green-50/50 rounded-xl border border-green-100">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-green-600 text-xs font-bold">✓</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-gray-900">Completed Math Quiz</p>
              <p className="text-[10px] text-gray-500 font-medium">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50/50 rounded-xl border border-blue-100">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 text-xs font-bold">💬</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-gray-900">ChatBuddy session</p>
              <p className="text-[10px] text-gray-500 font-medium">Yesterday</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-primary/5 rounded-xl border border-primary/10">
            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
              <span className="text-primary text-xs font-bold">📝</span>
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-gray-900">Feelings Explorer</p>
              <p className="text-[10px] text-gray-500 font-medium">2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}