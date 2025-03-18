import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import CTASection from '../../components/CTASection'

export default function DeviceConsultations() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "How do you help with device selection?",
      answer: "We analyze your practice needs, budget, and goals to recommend the most suitable devices and equipment."
    },
    {
      question: "Do you provide ROI analysis?",
      answer: "Yes, we provide detailed return on investment analysis for different device options to help you make informed decisions."
    },
    {
      question: "Can you help negotiate with vendors?",
      answer: "Yes, we can assist in vendor negotiations and help you secure the best possible terms for your device purchases."
    },
    {
      question: "Do you offer post-purchase support?",
      answer: "Yes, we provide guidance on device implementation, staff training, and marketing strategies after purchase."
    }
  ];

  return (
    <div className="pt-16 md:pt-20">
      <PageHero 
        title="Laser/Device Purchase Consultations" 
        backgroundImage="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d0b55bcbf30be31fb47004.jpeg"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Expert consultation services for laser and medical device purchases to optimize your practice investments.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
                <p className="text-gray-600">
                  Get professional advice on selecting the right equipment for your specific practice needs and goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">ROI Analysis</h3>
                <p className="text-gray-600">
                  Detailed analysis of potential return on investment for different device options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUsSection />
      <HiringProcessSection />
      <FAQSection title="Device Consultation FAQs" faqs={faqItems} />
      <FeaturedClinicSection />
      <CTASection 
        title="Enhance Your Practice" 
        description="Make informed decisions about your medical device investments with our expert consultation services."
      />
      <CTASection 
        title="Let's Chat" 
        description="Ready to optimize your device investments? Contact us for a consultation."
        isContact={true}
      />
    </div>
  )
}
