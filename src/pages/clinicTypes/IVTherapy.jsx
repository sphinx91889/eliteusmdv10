import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import CTASection from '../../components/CTASection'

export default function IVTherapy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const faqItems = [
    {
      question: "What role does a medical director play in an IV therapy clinic?",
      answer: "A medical director oversees all medical aspects of IV therapy services, including treatment protocols, patient safety guidelines, and staff training. They ensure all services meet appropriate medical standards."
    },
    {
      question: "Can IV therapy clinics operate without a medical director?",
      answer: "Most states require IV therapy clinics to have medical oversight. A medical director ensures services are provided safely and in compliance with state regulations."
    },
    {
      question: "What qualifications should an IV therapy clinic medical director have?",
      answer: "Medical directors should be licensed physicians with experience in IV therapy, understanding of nutritional medicine, and knowledge of wellness-focused treatments."
    },
    {
      question: "How often should the medical director review protocols?",
      answer: "Protocol reviews should occur regularly, typically quarterly, or when introducing new treatments to ensure safety and efficacy."
    }
  ]

  return (
    <div className="pt-20">
      <PageHero 
        title="Medical Directors for IV Therapy & Wellness Clinics" 
        subtitle="Expert Medical Oversight for IV Therapy Services"
        backgroundImage="https://images.pexels.com/photos/5206949/pexels-photo-5206949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Specialized IV Therapy Expertise</h2>
              <p className="text-gray-700 mb-6">
                Our medical directors bring extensive experience in IV therapy and wellness services, ensuring your clinic provides safe and effective treatments. They help establish and oversee various IV therapy programs and wellness protocols.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Comprehensive Program Support</h2>
              <p className="text-gray-700 mb-6">
                Get expert guidance on developing and maintaining effective IV therapy programs. Our medical directors help establish proper protocols, ensure regulatory compliance, and support your team in delivering optimal patient outcomes.
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
