export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Complete Assessment',
      description: 'Students take a comprehensive, non-diagnostic emotional well-being assessment'
    },
    {
      number: '2',
      title: 'AI Analysis',
      description: 'Our AI processes responses to identify patterns, rhythms, and insights'
    },
    {
      number: '3',
      title: 'Personalized Report',
      description: 'Receive detailed insights and recommendations tailored to each student'
    }
  ]

  return (
    <section id="how" className="py-20 bg-gray-50" aria-labelledby="how-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="how-heading" className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, secure, and supportive process designed with student privacy in mind
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-light-purple text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6" id="dashboard-heading">Sample Dashboard</h3>
            <div className="space-y-6">
              <div className="bg-purple-500/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Sleep Cycle</span>
                  <span className="text-purple-100 text-sm">7.2 hrs avg</span>
                </div>
                <div className="bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-3/4"></div>
                </div>
              </div>
              
              <div className="bg-purple-500/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Stress Levels</span>
                  <span className="text-purple-100 text-sm">Moderate</span>
                </div>
                <div className="bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-1/2"></div>
                </div>
              </div>

              <div className="bg-purple-500/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">Well-being Score</span>
                  <span className="text-purple-100 text-sm">Good</span>
                </div>
                <div className="bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}