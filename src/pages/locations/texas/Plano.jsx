import React from 'react'
import WhyChooseUsSection from '../../../components/WhyChooseUsSection'
import FAQSection from '../../../components/FAQSection'
import CTASection from '../../../components/CTASection'

export default function Plano() {
  return (
    <>
      <div className="py-16 bg-accent-sage">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
            Medical Director Services in Plano, Texas
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">Plano Medical Director Services</h2>
              <p className="text-primary-dark mb-6">
                EliteUSMD delivers premium medical director services for Plano's sophisticated aesthetic market. 
                Our board-certified physicians provide expert oversight for North Texas's most discerning practices.
              </p>
              <ul className="space-y-3 text-primary-dark">
                <li>• Collin County regulatory compliance</li>
                <li>• Luxury medical spa support</li>
                <li>• Advanced practice strategies</li>
                <li>• Tailored oversight for high-end clinics</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://thumbs.dreamstime.com/b/dallas-texas-usa-downtown-drone-skyline-aerial-panorama-dallas-texas-usa-downtown-drone-skyline-aerial-panorama-205447308.jpg"
                alt="Plano Medical Practice"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUsSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
