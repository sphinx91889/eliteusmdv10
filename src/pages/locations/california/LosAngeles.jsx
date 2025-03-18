import React from 'react'
import PageHero from '../../../components/PageHero'
import WhyChooseUsSection from '../../../components/WhyChooseUsSection'
import FAQSection from '../../../components/FAQSection'
import CTASection from '../../../components/CTASection'

export default function LosAngeles() {
  return (
    <div className="bg-white">
      <PageHero 
        title="Medical Director Services in Los Angeles, California"
        backgroundImage="https://images.pexels.com/photos/10625515/pexels-photo-10625515.jpeg"
      />
      
      <div className="py-16 bg-accent-sage">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">Los Angeles Medical Director Services</h2>
              <p className="text-primary-dark mb-6">
                EliteUSMD delivers expert medical director services for LA's thriving aesthetic practices. 
                Our board-certified physicians provide comprehensive oversight tailored to Los Angeles's diverse market.
              </p>
              <ul className="space-y-3 text-primary-dark">
                <li>• LA County regulatory compliance expertise</li>
                <li>• Entertainment industry-focused aesthetic support</li>
                <li>• Comprehensive medical oversight</li>
                <li>• Customized protocols for LA's discerning clientele</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/10625515/pexels-photo-10625515.jpeg"
                alt="Los Angeles Medical Practice"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUsSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}
