import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import CTASection from '../../components/CTASection'

export default function MedicalSupervision() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <PageHero 
        title="Professional Medical Supervision" 
        backgroundImage="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d0ad38cbf30b41deb46450.jpeg"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Comprehensive medical supervision ensuring the highest standards of patient care and safety in your aesthetic practice.
            </p>
          </div>
        </div>
      </div>
      <WhyChooseUsSection />
      <HiringProcessSection />
      <FAQSection />
      <FeaturedClinicSection />
      <CTASection />
    </div>
  )
}
