import { SparklesIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

export default function Hero({ onStartJourney }) {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Dynamic Animated Background Components */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-light-purple/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[10%] left-[20%] w-64 h-64 bg-sage-green/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] rotate-12 scale-150">
          <div className="w-full h-full border-[1px] border-primary/20 rounded-full"></div>
          <div className="absolute inset-20 border-[1px] border-primary/20 rounded-full"></div>
          <div className="absolute inset-40 border-[1px] border-primary/20 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/50 shadow-sm mb-8 animate-fade-in">
          <SparklesIcon className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold tracking-wide text-primary uppercase">Empowering Young Minds</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-lora font-bold text-dark-navy mb-8 leading-[1.1] animate-fade-in tracking-tight">
          Welcome to our <br />
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-primary via-light-purple to-dusty-lilac bg-clip-text text-transparent">
              Learning Journey
            </span>
            <span className="absolute bottom-2 left-0 w-full h-3 bg-warm-apricot/30 -z-10 rounded-full"></span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Discover emotional intelligence through AI-powered learning,
          interactive experiences, and personalized growth designed
          especially for children.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <button
            onClick={onStartJourney}
            className="btn-primary group flex items-center gap-3"
          >
            Begin Your Journey
            <SparklesIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
          <button className="btn-secondary flex items-center gap-3">
            Learn More
            <AcademicCapIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Floating Graphics Elements */}
        <div className="hidden lg:block absolute -left-20 top-1/2 -translate-y-1/2 animate-float">
          <div className="glass p-6 rounded-2xl rotate-[-15deg] max-w-[200px]">
            <div className="w-12 h-12 bg-sage-green/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <p className="text-sm font-bold text-gray-800">Growth Mindset</p>
            <p className="text-xs text-gray-500">Cultivate emotional resilience</p>
          </div>
        </div>

        <div className="hidden lg:block absolute -right-20 top-1/3 animate-float animation-delay-2000">
          <div className="glass p-6 rounded-2xl rotate-[12deg] max-w-[200px]">
            <div className="w-12 h-12 bg-powder-blue/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <p className="text-sm font-bold text-gray-800">AI Tutor</p>
            <p className="text-xs text-gray-500">Personalized support 24/7</p>
          </div>
        </div>
      </div>
    </div>
  )
}