import React from 'react';

const WebsiteSteps = () => {
  const steps = [
    {
      number: '01',
      phase: 'DO WE MATCH?',
      title: 'DISCOVERY CALL',
      description: 'Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can be solve with a new website?',
      duration: '1 hour',
      highlights: [
        'We get to know each other better',
        'Determine how I can best assist you',
        'Understand the goals you have for your website'
      ]
    },
    {
      number: '02',
      phase: 'LOREM IPSUM',
      title: 'CONCEPT & STRATEGY',
      description: 'Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface.',
      duration: '1 week',
      highlights: [
        'UX Design',
        'Wireframes',
        'Interactive Prototype'
      ]
    },
    {
      number: '03',
      phase: 'SOME MAGIC',
      title: 'WEB DESIGN',
      description: 'Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience.',
      duration: '1 week',
      highlights: [
        'High-end web design tailored to your brand',
        'Interactive prototype of the design'
      ]
    },
    {
      number: '04',
      phase: 'MORE MAGIC',
      title: 'DEVELOPMENT',
      description: 'In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.',
      duration: '2 weeks',
      highlights: [
        'Custom development',
        'CMS integration',
        'Smooth animations'
      ]
    },
    {
      number: '05',
      phase: 'READY TO GO',
      title: 'LAUNCH & SUPPORT',
      description: 'Your website is ready to launch! I ensure everything runs smoothly and provide training so you can manage your content. Ongoing support is available to keep your site performing at its best.',
      duration: '1 week',
      highlights: [
        'Website launch',
        'Content management training',
        'Ongoing support available'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-6xl md:text-7xl font-light mb-4">
          Your Website
        </h1>
        <p className="text-4xl md:text-5xl font-light italic text-gray-400">
          in 5 steps
        </p>
        <p className="text-sm text-gray-500 mt-6">
          Our process ensures that we create a website<br />
          tailored to your business needs.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-linear-to-b from-blue-500 via-blue-400 to-blue-500 h-full"></div>

        {steps.map((step, index) => (
          <div key={step.number} className="relative mb-32 last:mb-0">
            {/* Step number circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0">
              <div className="w-12 h-12 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center">
                <span className="text-xs text-blue-400">{step.number}</span>
              </div>
            </div>

            {/* Content card - alternating sides */}
            <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                <div className="bg-linear-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-lg relative group hover:border-blue-500/50 transition-all duration-300">
                  {/* Duration badge */}
                  <div className="absolute top-4 right-4 bg-blue-500/10 border border-blue-500/30 px-3 py-1 rounded text-xs text-blue-400">
                    {step.duration}
                  </div>

                  {/* Phase */}
                  <p className="text-xs text-gray-500 mb-2 tracking-wider">
                    {step.phase}
                  </p>

                  {/* Title */}
                  <h3 className="text-2xl font-light mb-4 tracking-wide">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {step.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-gray-500 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteSteps;