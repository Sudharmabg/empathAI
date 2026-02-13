import { UserGroupIcon, GlobeAltIcon, CpuChipIcon, LanguageIcon } from '@heroicons/react/24/outline'

export default function InclusivityFocus() {
  const inclusivityFeatures = [
    {
      icon: UserGroupIcon,
      title: 'Accessibility First',
      description: 'Full WCAG compliance with screen reader support, keyboard navigation, and multiple input methods'
    },
    {
      icon: GlobeAltIcon,
      title: 'Cultural Sensitivity',
      description: 'Assessments designed to respect diverse cultural backgrounds and perspectives'
    },
    {
      icon: CpuChipIcon,
      title: 'Neurodivergent Support',
      description: 'Specialized accommodations for ADHD, autism, dyslexia, and other learning differences'
    },
    {
      icon: LanguageIcon,
      title: 'Multiple Languages',
      description: 'Available in multiple languages to support international and multilingual students'
    }
  ]

  return (
    <section id="inclusivity" className="py-20 bg-white" aria-labelledby="inclusivity-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="inclusivity-heading" className="text-4xl font-bold text-gray-900 mb-4">
            <span className="text-gray-900">
              Inclusivity Focus
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supporting every student's unique journey with comprehensive accessibility and inclusive design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" role="list">
          {inclusivityFeatures.map((feature, index) => (
            <article key={index} className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all" role="listitem">
              <feature.icon className="w-8 h-8 text-purple-200 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-purple-100 text-sm leading-relaxed">{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4" id="equity-heading">
                Every Student Matters
              </h3>
              <p className="text-purple-100 leading-relaxed mb-6">
                Our platform is built from the ground up with inclusivity at its core. We believe that 
                emotional well-being support should be accessible to all students, regardless of their 
                abilities, backgrounds, or learning styles.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-purple-100">Universal Design principles</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-purple-100">Trauma-informed approaches</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-purple-100">Privacy-first design</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-500/30 rounded-xl p-6">
              <div className="text-center">
                <UserGroupIcon className="w-12 h-12 text-white mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">
                  Committed to Equity
                </h4>
                <p className="text-purple-100 text-sm">
                  Working with institutions to ensure no student is left behind in their emotional well-being journey
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}