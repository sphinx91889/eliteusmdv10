import React, { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'

export default function MedicalDirector() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const serviceTypes = [
    {
      title: "Medical Director for RN",
      description: "Specialized services for Registered Nurses",
      link: "/services/medical-director/rn"
    },
    {
      title: "Medical Director for NP",
      description: "Tailored solutions for Nurse Practitioners",
      link: "/services/medical-director/np"
    },
    {
      title: "Medical Director for PA",
      description: "Expert oversight for Physician Assistants",
      link: "/services/medical-director/pa"
    },
    {
      title: "Medical Director for Laypersons",
      description: "Professional oversight for non-medical business owners",
      link: "/services/medical-director/layperson"
    }
  ]

  return (
    <div className="pt-20">
      <PageHero 
        title="Medical Director" 
        backgroundImage="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d0af343d1088d36fdd4826.jpeg"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-6">
              Expert medical direction services providing oversight, guidance, and compliance assurance for your practice.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {serviceTypes.map((service, index) => (
                <Link 
                  key={index}
                  to={service.link}
                  className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUsSection />
      <FAQSection />
      <FeaturedClinicSection />
    </div>
  )
}
