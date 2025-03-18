import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PageHero from '../../../components/PageHero'
import WhyChooseUsSection from '../../../components/WhyChooseUsSection'
import FAQSection from '../../../components/FAQSection'
import FeaturedClinicSection from '../../../components/FeaturedClinicSection'
import CTASection from '../../../components/CTASection'

export default function MedicalDirectorLayperson() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const faqItems = [
    {
      question: "Can a non-medical professional open a medical practice?",
      answer: "Yes, with proper medical oversight and compliance with state regulations, non-medical professionals can own and operate medical practices in many states."
    },
    {
      question: "What role does a medical director play for a layperson-owned practice?",
      answer: "The medical director ensures clinical compliance, oversees medical protocols, supervises medical staff, and maintains quality standards while the owner manages business operations."
    },
    {
      question: "What types of practices can laypersons open?",
      answer: "Depending on state regulations, laypersons can open various practices including medical spas, aesthetic clinics, weight loss centers, and wellness facilities with proper medical oversight."
    },
    {
      question: "How involved should the medical director be in daily operations?",
      answer: "The medical director's involvement varies by state requirements but typically includes regular oversight of medical procedures, protocol development, and staff supervision while allowing owners to manage business aspects."
    }
  ]

  return (
    <div className="pt-20">
      <PageHero 
        title="Medical Director for Non-Medical Professionals" 
        subtitle="Expert Medical Oversight for Layperson-Owned Healthcare Practices"
        backgroundImage="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Start Your Healthcare Business</h2>
              <p className="text-gray-700 mb-6">
                Are you a non-medical professional interested in starting a healthcare practice? EliteUSMD makes it possible by connecting you with qualified medical directors who ensure your practice operates safely and compliantly while you focus on business growth.
              </p>
              <p className="text-gray-700">
                Our medical directors provide comprehensive oversight that allows you to build a successful healthcare business without medical credentials.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Comprehensive Support</h2>
              <p className="text-gray-700 mb-6">
                We understand the unique challenges of non-medical professionals entering the healthcare industry. Our medical directors help you:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-secondary rounded-full"></span>
                  <span>Navigate complex healthcare regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-secondary rounded-full"></span>
                  <span>Establish proper medical protocols</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-secondary rounded-full"></span>
                  <span>Ensure quality patient care</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-2 bg-secondary rounded-full"></span>
                  <span>Maintain compliance while growing your business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Practice Types Available</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Medical Spas</h3>
              <p className="text-gray-600">Offer aesthetic treatments and wellness services under proper medical supervision.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Weight Loss Centers</h3>
              <p className="text-gray-600">Provide medically supervised weight management programs and treatments.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Wellness Clinics</h3>
              <p className="text-gray-600">Deliver integrated health and wellness services with medical oversight.</p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <FAQSection faqs={faqItems} />
      <FeaturedClinicSection />
      <CTASection />
    </div>
  )
}
