import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import CTASection from '../../components/CTASection'

export default function Chiropractors() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const faqItems = [
    {
      question: "Do chiropractors need a medical director?",
      answer: "While chiropractors operate independently within their scope of practice, a medical director can expand service offerings and ensure compliance when providing complementary medical services."
    },
    {
      question: "What services can a chiropractic clinic offer with a medical director?",
      answer: "With proper medical oversight, chiropractic clinics can offer additional services like physical therapy, rehabilitation services, pain management, and integrated wellness programs."
    },
    {
      question: "How does medical direction benefit a chiropractic practice?",
      answer: "Medical directors help expand service offerings, ensure regulatory compliance, facilitate insurance billing, and enable comprehensive patient care through medical integration."
    },
    {
      question: "What qualifications should a medical director for a chiropractic clinic have?",
      answer: "Medical directors should be licensed physicians with experience in physical medicine, rehabilitation, or pain management, and understand integrated healthcare approaches."
    }
  ]

  return (
    <div className="pt-20">
      <PageHero 
        title="Medical Directors for Chiropractors" 
        subtitle="Expert Medical Oversight for Chiropractic Practices"
        backgroundImage="https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Integrated Care Excellence</h2>
              <p className="text-gray-700 mb-6">
                Our medical directors bring extensive experience in integrated healthcare, helping chiropractic practices expand their services and enhance patient care through medical collaboration.
              </p>
              <p className="text-gray-700">
                We understand the unique needs of chiropractic clinics and provide tailored oversight that respects your practice's philosophy while ensuring compliance and enabling service expansion.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Comprehensive Support</h2>
              <p className="text-gray-700 mb-6">
                Get expert guidance on developing and maintaining effective integrated healthcare programs. Our medical directors help establish proper protocols, ensure regulatory compliance, and support your team in delivering optimal patient outcomes.
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
