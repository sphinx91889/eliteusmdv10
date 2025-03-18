import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import CTASection from '../../components/CTASection'

export default function MedicalSpas() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const medSpaFaqs = [
    {
      question: "What's the difference between hiring a Collaborative Physician for a Medspa or hiring a Medical director?",
      answer: "The terms \"medical director\" and \"collaborating physician for medspa\" are interchangeable in the context of medspas, as both roles involve overseeing clinical operations and ensuring compliance with healthcare regulations. While \"medical director\" emphasizes the leadership and management aspects, \"collaborating physician\" highlights the collaborative nature of the relationship between MDs, RNs, NPs and PAs."
    },
    {
      question: "Can a Nurse open a Medspa?",
      answer: "Yes, nurses can open medspas but typically require a medical director for oversight and compliance with state regulations."
    },
    {
      question: "Can a Nurse Practitioner open a Medspa?",
      answer: "Yes, Nurse Practitioners can open medspas, though specific requirements vary by state regarding medical director oversight."
    },
    {
      question: "Does a physician assistant need a medical Director for a Medspa?",
      answer: "Yes, Physician Assistants typically need a medical director to operate a medspa, as they work under physician supervision."
    },
    {
      question: "What are Collaborative agreements for medspas?",
      answer: "Collaborative agreements are formal documents outlining the working relationship between medical professionals and their supervising physicians in a medspa setting."
    },
    {
      question: "Can I call in prescriptions for my patients with a medical director?",
      answer: "Prescription authority depends on your license type and state regulations, but having a medical director can facilitate this process within proper protocols."
    }
  ]

  return (
    <div className="pt-20">
      <PageHero 
        title="Medical Directors For Medspas"
        subtitle="Medical Director for Medspa Made Easy!"
        backgroundImage="https://images.pexels.com/photos/4586708/pexels-photo-4586708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">What Does A Medical Director Do?</h2>
              <p className="text-gray-700">
                A medical director for a medspa fills a critical role for those looking to establish their aesthetics practice. Their primary responsibility is to ensure that your facility remains compliant with state regulations and healthcare laws. Most states will not allow a nurse to open a medspa without a medical director. For nurses, nurse practitioners, and physician assistants, this means it is necessary to have a seasoned professional who understands the complexities of medical oversight.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-secondary">Saving Time & Money</h2>
              <p className="text-gray-700">
                At EliteUSMD we pride ourselves on offering a cost-effective solution for those looking to start their medspas. With our services starting at just $799 a month, you can gain immediate access to a medical director without paying a placement fee. Our streamlined process allows us to place aesthetic medical directors as quickly as the next day in many states.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-secondary">Included with every Medspa Medical Director</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Full MD Oversight: Enjoy comprehensive medical oversight to ensure that all procedures and practices in your aesthetics practice comply with state regulations and best practices.",
                "Priority Complication Support: Gain peace of mind with priority support for any complications that may arise during practice.",
                "Free Compliance Agreements: Receive complimentary compliance agreements, including the essential aesthetics MD collaborative agreement.",
                "30% Discount on Injectables: Benefit from significant savings on injectable products like fillers and toxins.",
                "No Placement Fees: Access a medical director without any placement fees; you only pay a straightforward monthly fee.",
                "Fast Setup: Quickly establish your medspa by hiring a medspa collaborating physician in as little as 24 hours."
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow">
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <HiringProcessSection />
      <FAQSection faqs={medSpaFaqs} />
      <FeaturedClinicSection />
      <CTASection />
    </div>
  )
}
