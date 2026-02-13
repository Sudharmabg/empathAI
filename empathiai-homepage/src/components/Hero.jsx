export default function Hero({ onStartJourney }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-light-purple/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-300/20 rounded-full blur-lg"></div>
      </div>
      
      <div className="text-center relative z-10">
        <div className="mb-8">
          <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-6xl">🌟</span>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome to our
          <span className="block bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
            Learning Journey
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover emotional intelligence through AI-powered learning, interactive experiences, 
          and personalized growth designed especially for children.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={onStartJourney}
            className="bg-dark-navy text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Begin Your Journey ✨
          </button>
          <button className="bg-light-purple/80 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-light-purple transition-all duration-300 border border-purple-300">
            Learn More 📚
          </button>
        </div>
      </div>
    </div>
  )
}