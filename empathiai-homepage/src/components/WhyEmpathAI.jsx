import { ChartBarIcon, PuzzlePieceIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function WhyEmpathAI() {
  const features = [
    {
      icon: ChartBarIcon,
      title: 'Emotional Calibration',
      description: 'Insight into emotional patterns',
      details: 'Understand and track emotional well-being patterns to support student mental health and academic success.'
    },
    {
      icon: PuzzlePieceIcon,
      title: 'Neurodiversity Inclusion',
      description: 'Honor diverse thinking styles',
      details: 'Celebrate and support different learning styles, cognitive approaches, and neurodivergent perspectives.'
    },
    {
      icon: SparklesIcon,
      title: 'AI-Led Insights',
      description: 'Personalized patterns and reports',
      details: 'Advanced AI analysis provides personalized insights and actionable recommendations for each student.'
    }
  ]

  return (
    <section id="why" className="py-20 bg-white" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="why-heading" className="text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-gray-900">EmpathAI</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering educational institutions with compassionate, data-driven insights
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8" role="list">
          {features.map((feature, index) => (
            <article key={index} className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg" role="listitem">
              <feature.icon className="w-12 h-12 text-purple-200 mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-purple-100 font-medium mb-4">{feature.description}</p>
              <p className="text-purple-200 leading-relaxed">{feature.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}