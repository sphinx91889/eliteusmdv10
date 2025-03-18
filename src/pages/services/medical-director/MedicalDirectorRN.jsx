import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { FaClipboardCheck, FaUserMd, FaClock, FaClinicMedical } from 'react-icons/fa'
import PageHero from '../../../components/PageHero'
import WhyChooseUsSection from '../../../components/WhyChooseUsSection'
import FAQSection from '../../../components/FAQSection'
import FeaturedClinicSection from '../../../components/FeaturedClinicSection'

export default function MedicalDirectorRN() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const benefits = [
    {
      title: "Regulatory Compliance",
      description: "Ensure your practice adheres to state and federal regulations, keeping operations lawful and ethical."
    },
    {
      title: "Clinical Oversight",
      description: "Guide clinical procedures and protocols to enhance patient care."
    },
    {
      title: "Staff Training",
      description: "Assist in educating and training your staff to maintain high-quality services."
    },
    {
      title: "Quality Assurance",
      description: "Implement policies for continuous improvement and patient safety."
    }
  ]

  const clinicTypes = [
    "MedSpas & Medical Aesthetics",
    "Weight Loss Centers",
    "IV Hydration Clinics",
    "Telehealth Clinics",
    "Hormone Clinics",
    "General Practices",
    "Specialty Care Clinics",
    "Psychiatric Practices"
  ]

  return (
    <div className="pt-20">
      <PageHero 
        title="Medical Director for RN" 
        backgroundImage="https://images.pexels.com/photos/7581584/pexels-photo-7581584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">Physicians for RNs</h2>
            <p className="text-xl text-gray-600 mb-8">
              Are you a registered nurse (RN) that wants to start your own medical practice? At EliteUSMD we make that happen! As a nurse-owned business, we specialize in connecting nurses like you with medical directors, supervising physicians, and collaborating physicians. Our mission is simple: to empower nurses by providing the support and resources they need to open and operate successful clinics.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-dark mb-2">Why You Need</h2>
          <h3 className="text-2xl font-bold text-secondary mb-8">A Medical Director as a Nurse</h3>
          <p className="text-lg text-gray-600 mb-12">
            Navigating the complexities of healthcare regulations can be challenging. A medical director is crucial in ensuring your clinic complies with all medical laws and standards. Here's how our medical director can assist you:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-primary-dark mb-4">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-dark mb-2">Our</h2>
          <h3 className="text-2xl font-bold text-secondary mb-8">Swift & Cost-Free Placement Process</h3>
          <p className="text-lg text-gray-600 mb-8">
            We understand that you need to start your clinic quickly. That's why we've streamlined our placement process to be fast and efficient. There are no placement costs, and in many cases, we can connect you with a Medical Director in less than 24 hours. We handle the RN collaborative agreements, allowing you to concentrate on setting up your practice without unnecessary delays.
          </p>
        </div>
      </section>

      {/* Clinic Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-dark mb-2">Types of</h2>
          <h3 className="text-2xl font-bold text-secondary mb-8">Clinics You Can Open</h3>
          <p className="text-lg text-gray-600 mb-8">
            There are a lot of possibilities with what types of clinics our clients can open. Here are some areas where we've helped nurses like you find nurse supervising physicians:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicTypes.map((clinic, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-primary-dark font-semibold">{clinic}</p>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-600 mt-8">
            Whatever your passion, we're here to support you in creating a clinic that reflects your expertise and interests.
          </p>
        </div>
      </section>

      <WhyChooseUsSection />
      <FAQSection />
      <FeaturedClinicSection />
    </div>
  )
}
