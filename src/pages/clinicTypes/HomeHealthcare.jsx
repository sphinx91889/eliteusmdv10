import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import CTASection from '../../components/CTASection'

export default function HomeHealthcare() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const faqItems = [
    {
      question: "What oversight does a medical director provide for home healthcare?",
      answer: "Medical directors ensure quality care delivery, establish protocols, review patient care plans, and maintain compliance with healthcare regulations for home-based services."
    },
    {
      question: "How does medical direction work in concierge medicine?",
      answer: "Medical directors help establish service standards, oversee patient care protocols, and ensure compliance while maintaining the personalized nature of concierge medicine."
    },
    {
      question: "What qualifications are required for home healthcare medical directors?",
      answer: "Medical directors should be licensed physicians with experience in home healthcare, understanding of care coordination, and knowledge of regulatory requirements."
    },
    {
      question: "How often should medical directors review home healthcare operations?",
      answer: "Regular reviews should occur monthly or quarterly, with ongoing availability for consultation and protocol updates."
    }
  ]

  return (
    <div className="pt-20">
      <PageHero 
        title="Medical Directors for Home Healthcare & Concierge Medicine" 
        subtitle="Expert Medical Oversight for Personalized Care Services"
        backgroundImage="https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Home Healthcare Excellence</h2>
              <p className="text-gray-700 mb-6">
                Our medical directors bring extensive experience in home healthcare and concierge medicine, ensuring your services meet the highest standards of patient care while maintaining compliance with healthcare regulations.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Personalized Care Support</h2>
              <p className="text-gray-700 mb-6">
                Get expert guidance on developing and maintaining effective home healthcare and concierge medicine programs. Our medical directors help establish proper protocols, ensure regulatory compliance, and support your team in delivering optimal patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <HiringProcessSection />
      <FAQSection faqs={faqItems} />
      <FeaturedClinicSection />
      <CTASection />
    </div>
  )
}
