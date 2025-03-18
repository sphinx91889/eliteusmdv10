import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { FaUserMd, FaClipboardCheck, FaClock, FaHospital } from 'react-icons/fa'
import PageHero from '../../../components/PageHero'
import WhyChooseUsSection from '../../../components/WhyChooseUsSection'
import FAQSection from '../../../components/FAQSection'
import FeaturedClinicSection from '../../../components/FeaturedClinicSection'

export default function MedicalDirectorNP() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const clinicTypes = [
    "Aesthetic Clinics",
    "Weight Loss Clinics",
    "IV Therapy Clinics",
    "Telemedicine",
    "Hormone Therapy Clinics",
    "Primary Care Clinics",
    "Specialized Care Clinics",
    "Mental Health Practices"
  ]

  const benefits = [
    { title: "Legal and Compliance Support", description: "Ensure all clinical practices meet federal and state regulations" },
    { title: "Clinical Oversight", description: "Guidance on patient care and operational best practices" },
    { title: "Staff Development", description: "Assist with training and ensuring highest standards" },
    { title: "Quality Management", description: "Maintain high levels of patient satisfaction and care" }
  ]

  return (
    <div className="pt-20">
      <PageHero 
        title="Medical Director for NP" 
        backgroundImage="https://images.pexels.com/photos/4586741/pexels-photo-4586741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      {/* Intro Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold text-primary-dark mb-6">Physicians for NPs</h2>
            <p className="text-xl text-gray-600 mb-6">
              Are you a registered nurse (RN) that wants to start your own medical practice? At EliteUSMD we make that happen! As a nurse-owned business, we specialize in connecting nurses like you with medical directors, supervising physicians, and collaborating physicians. Our mission is simple: to empower nurses by providing the support and resources they need to open and operate successful clinics.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            The Value of<br />
            <span className="text-secondary">A Medical Director for Nurse Practitioners</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-primary-dark">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hassle-Free Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Get Started</h2>
            <h3 className="text-2xl text-secondary font-semibold">Hassle-Free Placement at No Cost</h3>
          </div>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            At EliteUSMD we've made the process of securing a nurse practitioner medical director quick, easy, and affordable. We charge no placement fees, and in many cases, we can place a Medical Director within 24 hours. Our team takes care of the nurse practitioner collaboration agreement, so you can focus on building your clinic.
          </p>
        </div>
      </section>

      {/* Clinic Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Your Options for<br />
            <span className="text-secondary">Clinic Specialization</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-primary-dark">{type}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-gray-600 mb-6">
              Whatever type of NP clinic you dream of opening, we can help you find a medical director.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
            >
              Start Your Journey Today
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <FAQSection />
      <FeaturedClinicSection />
    </div>
  )
}
