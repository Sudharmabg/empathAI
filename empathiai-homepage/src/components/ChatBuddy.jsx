import { useState, useRef, useEffect } from 'react'
import { SparklesIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

export default function ChatBuddy({ user, initialMessage, setChatMessage }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: `Hi ${user.firstName}! I'm your ChatBuddy 🤖 I'm here to help you with your studies and support you emotionally. How are you feeling today?`,
      sender: 'bot',
      time: '2:30 PM'
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [showCrisisModal, setShowCrisisModal] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (initialMessage) {
      setInputMessage(initialMessage)
      setChatMessage('')
    }
  }, [initialMessage, setChatMessage])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const quickReplies = [
    "Help me with Math",
    "I'm feeling stressed",
    "Explain this topic",
    "I need motivation"
  ]

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('algebraic expressions')) {
      return {
        text: "Great topic! 📊 Algebraic expressions are mathematical phrases that combine numbers, variables, and operations. For example, 3x + 5 is an algebraic expression where:\n\n• 3x is a term (coefficient 3, variable x)\n• 5 is a constant term\n• + is the operation\n\nThey're the building blocks of algebra! What specific part would you like to explore - simplifying expressions, combining like terms, or working with identities?",
        image: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=300&h=200&fit=crop&crop=center'
      }
    }
    
    if (message.includes('overwhelmed') && message.includes('math')) {
      return {
        text: "I completely understand that feeling! Math homework can seem like a mountain sometimes, but remember - every expert was once a beginner. Let's tackle this together, one step at a time. What specific part is giving you trouble? 💪",
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop&crop=center'
      }
    }
    
    if (message.includes('algebraic') && message.includes('solve for x')) {
      return {
        text: "Algebra is like solving puzzles! 🧩 Think of 'x' as a mystery number we need to find. Here's my simple 3-step method:\n\n1. Get all x terms on one side\n2. Get all numbers on the other side\n3. Divide to find x\n\nWould you like me to show you with a real example?",
        image: 'https://images.unsplash.com/photo-1635372722656-389f87a941b7?w=300&h=200&fit=crop&crop=center'
      }
    }
    
    if (message.includes('helpful') && message.includes('motivation')) {
      return {
        text: "You've got this! 🌟 Let me solve 2x + 5 = 13 step by step:\n\nStep 1: Subtract 5 from both sides\n2x = 13 - 5 = 8\n\nStep 2: Divide both sides by 2\nx = 8 ÷ 2 = 4\n\nSee? You just solved for x! Every time you solve one equation, you're building your math superpowers! 🚀 Keep going - you're stronger than you think!",
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&h=200&fit=crop&crop=center'
      }
    }
    
    return {
      text: "I understand! Let me help you with that. Can you tell me more about what specific area you'd like assistance with?"
    }
  }

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const message = inputMessage.toLowerCase()
      
      // Check for crisis keywords
      if (message.includes('suicide') || message.includes('kill myself') || message.includes('end my life') || message.includes('want to die')) {
        setShowCrisisModal(true)
        return
      }
      
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: 'user',
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }
      setMessages([...messages, newMessage])
      const userMsg = inputMessage
      setInputMessage('')
      
      setTimeout(() => {
        const response = getBotResponse(userMsg)
        const botResponse = {
          id: messages.length + 2,
          text: response.text,
          sender: 'bot',
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
          image: response.image
        }
        setMessages(prev => [...prev, botResponse])
      }, 1000)
    }
  }

  const handleQuickReply = (reply) => {
    setInputMessage(reply)
  }

  return (
    <div className="font-lora max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">ChatBuddy</h1>
        <p className="text-gray-600">Your AI companion for learning and emotional support</p>
      </div>

      <div className="bg-white border-2 border-purple-200 rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 border-b border-purple-200">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <SparklesIcon className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">ChatBuddy</h3>
              <p className="text-sm text-green-600 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Online
              </p>
            </div>
          </div>
        </div>

        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === 'user' 
                  ? 'bg-black text-white' 
                  : 'bg-gray-100 text-gray-900'
              }`}>
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                {message.image && (
                  <img 
                    src={message.image} 
                    alt="Chat illustration" 
                    className="mt-2 rounded-lg w-full h-32 object-cover"
                  />
                )}
                <p className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-gray-300' : 'text-gray-500'
                }`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="px-4 py-2 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Quick replies:</p>
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((reply, index) => (
              <button
                key={index}
                onClick={() => handleQuickReply(reply)}
                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm hover:bg-purple-200 transition-colors"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your message here..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center"
            >
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="bg-white border border-purple-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">📚 Study Help</h4>
          <p className="text-sm text-gray-600">Get explanations for any CBSE topic</p>
        </div>
        <div className="bg-white border border-purple-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">💭 Emotional Support</h4>
          <p className="text-sm text-gray-600">Share your feelings and get guidance</p>
        </div>
        <div className="bg-white border border-purple-200 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-2">🎯 Motivation</h4>
          <p className="text-sm text-gray-600">Stay motivated with personalized tips</p>
        </div>
      </div>

      {/* Crisis Modal */}
      {showCrisisModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border-2 border-red-200 rounded-2xl shadow-xl p-8 w-full max-w-md relative">
            <div className="text-center">
              <div className="text-6xl mb-4">🆘</div>
              <h3 className="text-2xl font-bold text-red-800 mb-4">Crisis Support</h3>
              <p className="text-gray-700 mb-6">
                We're here to help. Please reach out to our crisis manager immediately.
              </p>
              
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-6">
                <p className="text-lg font-bold text-red-800 mb-2">Crisis Manager</p>
                <a 
                  href="tel:9111111111"
                  className="text-3xl font-bold text-red-600 hover:text-red-800 transition-colors"
                >
                  911-111-1111
                </a>
                <p className="text-sm text-gray-600 mt-2">Tap to call immediately</p>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">
                You are not alone. Help is available 24/7.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}