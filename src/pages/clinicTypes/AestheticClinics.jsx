import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import CTASection from '../../components/CTASection'

export default function AestheticClinics() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const aestheticFaqs = [
    {
      question: "What qualifications should a medical director have for an aesthetic clinic?",
      answer: "A medical director for an aesthetic clinic should be a licensed physician (MD/DO) with experience in aesthetic medicine. They should understand various aesthetic procedures, safety protocols, and regulatory requirements."
    },
    {
      question: "How involved is the medical director in day-to-day operations?",
      answer: "The medical director's involvement varies based on state requirements and clinic needs, but typically includes protocol development, treatment oversight, and regular chart reviews while not requiring daily physical presence."
    },
    {
      question: "Can aesthetic clinics operate without a medical director?",
      answer: "Most states require aesthetic clinics to have a medical director for oversight of medical procedures. Operating without one could result in legal issues and regulatory non-compliance."
    },
    {
      question: "What services can be offered with a medical director?",
      answer: "With proper medical oversight, clinics can offer services like Botox, dermal fillers, laser treatments, chemical peels, and other medical aesthetic procedures within state guidelines."
    }
  ]

  return (
    <div className="pt-20">
      <PageHero 
        title="Aesthetic Clinics Medical Director Services"
        subtitle="Expert Medical Direction for Your Aesthetic Practice"
        backgroundImage="https://quintessentially.com/assets/noted/Header-1_2023-11-28-115744_dhxd.webp"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Comprehensive Aesthetic Oversight</h2>
              <p className="text-gray-700">
                Our medical directors bring extensive experience in aesthetic medicine, ensuring your clinic maintains the highest standards of patient care and safety. They provide crucial oversight for procedures like Botox, dermal fillers, laser treatments, and other aesthetic services.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Expert Compliance Management</h2>
              <p className="text-gray-700">
                Navigate the complex regulatory landscape with confidence. Our medical directors help ensure your aesthetic clinic remains compliant with all state regulations while maintaining efficient operations and high-quality patient care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <HiringProcessSection />
      <FAQSection faqs={aestheticFaqs} />
      <FeaturedClinicSection />
      <CTASection />
    </div>
  )
}
