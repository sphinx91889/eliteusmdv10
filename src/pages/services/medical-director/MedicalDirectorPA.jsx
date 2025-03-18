import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PageHero from '../../../components/PageHero'
import WhyChooseUsSection from '../../../components/WhyChooseUsSection'
import FAQSection from '../../../components/FAQSection'
import FeaturedClinicSection from '../../../components/FeaturedClinicSection'

export default function MedicalDirectorPA() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const clinicTypes = [
    'Aesthetic Clinics',
    'Weight Management Clinics',
    'IV Therapy Centers',
    'Telemedicine Services',
    'Hormone Replacement Therapy Clinics',
    'Primary Care Practices',
    'Specialized Medical Clinics',
    'Mental Health and Psychiatric Services'
  ]

  return (
    <div className="pt-20">
      <PageHero 
        title="Medical Director for PA" 
        backgroundImage="https://images.pexels.com/photos/7581575/pexels-photo-7581575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-primary-dark">
              Collaborating Physicians for<br />
              Physician Assistants Made Easy
            </h2>
            <p className="text-xl text-gray-600">
              Are you a Physician Assistant that wants to start your own medical practice? At EliteUSMD we make that happen! As a healthcare-focused business, we specialize in connecting PAs like you with medical directors and collaborating physicians. Our mission is simple: to empower healthcare professionals by providing the support and resources they need to open and operate successful clinics.
            </p>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-dark">
            How a<br />Medical Director Can Help You
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Compliance and Licensing</h3>
              <p>They ensure that your clinic complies with all local and federal healthcare regulations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Clinical Consultation</h3>
              <p>Offering insights on clinical protocols and improving patient outcomes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Staff Supervision</h3>
              <p>Helping to train your team and maintain a high standard of care.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Risk Management</h3>
              <p>Identifying and mitigating potential risks to enhance patient safety and clinic efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fast Placement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary-dark">
            Get Started Fast, No-Cost<br />Medical Director Placement
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            At EliteUSMD, we believe that starting your own clinic should be simple and stress-free. That's why we offer placement services for Medical Directors, and in many cases, we can place one within 24 hours. We handle the paperwork and administrative details so you can focus on setting up and growing your clinic.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-3 rounded-lg transition duration-300"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Clinic Types Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-dark">
            Types of<br />Clinics Physician Assistants Can Open
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600">
            As a Physician Assistant, you have the flexibility to open a wide range of medical clinics. Here are just a few examples of the types of practices we support:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {clinicTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-secondary">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <FAQSection />
      <FeaturedClinicSection />
    </div>
  )
}
