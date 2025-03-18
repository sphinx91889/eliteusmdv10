import React from 'react'
import WhyChooseUsSection from '../../../components/WhyChooseUsSection'
import FAQSection from '../../../components/FAQSection'
import CTASection from '../../../components/CTASection'

export default function Austin() {
  return (
    <>
      <div className="py-16 bg-accent-sage">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
            Medical Director Services in Austin, Texas
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">Austin Medical Director Services</h2>
              <p className="text-primary-dark mb-6">
                EliteUSMD provides innovative medical director services for Austin's cutting-edge aesthetic practices. 
                Our physicians offer comprehensive support tailored to the unique needs of this tech-forward market.
              </p>
              <ul className="space-y-3 text-primary-dark">
                <li>• Travis County compliance expertise</li>
                <li>• Innovative practice support</li>
                <li>• Tech-industry focused medical oversight</li>
                <li>• Customized protocols for Austin's dynamic market</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://media.kvue.com/assets/KVUE/images/f73d4e9b-13fb-4207-9e17-721efcf9e70f/f73d4e9b-13fb-4207-9e17-721efcf9e70f_1140x641.jpg"
                alt="Austin Medical Practice"
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
