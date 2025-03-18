import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'

export default function Oregon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-accent-sage">
      <PageHero 
        title="Medical Director Services in Oregon" 
        subtitle="Comprehensive Support Across Major Oregon Cities"
        backgroundImage="https://images.unsplash.com/photo-1494783367193-149034c05e8f"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Oregon Practice Support</h2>
            <p className="text-primary-dark mb-6">
              EliteUSMD delivers tailored medical director services that meet Oregon's specific healthcare regulations. 
              Our physicians provide expert support for aesthetic practices throughout the state.
            </p>
            <ul className="space-y-3 text-primary-dark">
              <li>• Compliance with Oregon healthcare guidelines</li>
              <li>• Specialized support for medical spas and aesthetic clinics</li>
              <li>• Comprehensive medical oversight</li>
              <li>• Good faith examination services</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/4348542/pexels-photo-4348542.jpeg"
              alt="Oregon Medical Practice"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <WhyChooseUsSection />
      <FAQSection />
      <FeaturedClinicSection />
    </div>
  )
}
