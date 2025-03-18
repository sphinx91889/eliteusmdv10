import React from 'react'
import WhyChooseUsSection from '../../../components/WhyChooseUsSection'
import FAQSection from '../../../components/FAQSection'
import CTASection from '../../../components/CTASection'

export default function Houston() {
  return (
    <div className="pt-16">
      <div className="bg-accent-sage py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary-dark text-center">
            Medical Director Services in Houston, Texas
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-secondary">Houston Medical Director Services</h2>
              <p className="text-primary-dark mb-6">
                EliteUSMD provides comprehensive medical director services for Houston's dynamic aesthetic market. 
                Our experienced physicians ensure compliance while supporting your practice's growth in the nation's fourth-largest city.
              </p>
              <ul className="space-y-3 text-primary-dark">
                <li>• Harris County compliance expertise</li>
                <li>• Medical spa oversight</li>
                <li>• Comprehensive practice support</li>
                <li>• Regulatory guidance for Houston's healthcare landscape</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://photographylife.com/wp-content/uploads/2017/02/Houston12.jpg"
                alt="Houston Medical Practice"
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
