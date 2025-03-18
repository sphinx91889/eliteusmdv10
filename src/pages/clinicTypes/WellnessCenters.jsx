import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import CTASection from '../../components/CTASection'

export default function WellnessCenters() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const wellnessFaqs = [
    {
      question: "What services can a wellness center offer with a medical director?",
      answer: "With proper medical oversight, wellness centers can offer services like IV therapy, hormone optimization, nutritional counseling, regenerative medicine, and other integrative health treatments."
    },
    {
      question: "How does a medical director support a wellness center's operations?",
      answer: "Medical directors develop treatment protocols, ensure regulatory compliance, oversee patient care standards, and provide guidance on integrative medicine approaches."
    },
    {
      question: "Can wellness centers provide medical services without a medical director?",
      answer: "Most medical services require proper medical oversight. A medical director ensures services are provided safely and in compliance with state regulations."
    },
    {
      question: "What qualifications should a wellness center medical director have?",
      answer: "Medical directors should be licensed physicians with experience in integrative medicine, understanding of holistic health approaches, and knowledge of wellness-focused treatments."
    }
  ]

  return (
    <div className="pt-20">
      <PageHero 
        title="Wellness Centers Medical Director Services"
        subtitle="Comprehensive Medical Oversight for Your Wellness Center"
        backgroundImage="https://destinationdeluxe.com/wp-content/uploads/2019/08/City-Wellness-Centers-New-York-Destination-Deluxe-1.jpg"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Holistic Health Expertise</h2>
              <p className="text-gray-700">
                Our medical directors bring comprehensive knowledge of integrative medicine and wellness practices, ensuring your center provides safe and effective holistic health solutions. They help establish and oversee various wellness programs and treatments.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Integrated Care Support</h2>
              <p className="text-gray-700">
                Get expert guidance on developing and maintaining effective wellness programs. Our medical directors help establish proper protocols, ensure regulatory compliance, and support your team in delivering comprehensive care solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <HiringProcessSection />
      <FAQSection faqs={wellnessFaqs} />
      <FeaturedClinicSection />
      <CTASection />
    </div>
  )
}
