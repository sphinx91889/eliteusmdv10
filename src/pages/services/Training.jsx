import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import CTASection from '../../components/CTASection'

export default function Training() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "What types of training does EliteUSMD provide?",
      answer: "We provide elite-level training in advanced aesthetic procedures, including injectable treatments, laser therapies, skin rejuvenation techniques, and cutting-edge medical spa services."
    },
    {
      question: "How is your training program structured?",
      answer: "Our programs combine comprehensive theoretical education with intensive hands-on practice sessions, tailored to each practitioner's experience level and learning goals."
    },
    {
      question: "What makes EliteUSMD's training unique?",
      answer: "Our training is led by industry-leading practitioners and focuses on both technical excellence and patient safety protocols, incorporating the latest advancements in aesthetic medicine."
    },
    {
      question: "Do you provide ongoing support after training?",
      answer: "Yes, we offer continuous support through mentorship, advanced workshops, and regular updates on industry best practices to ensure your long-term success."
    }
  ];

  return (
    <div className="pt-20">
      <PageHero 
        title="Advanced Aesthetic Training Programs" 
        backgroundImage="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d0ad38cbf30b1c91b4644f.jpeg"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              EliteUSMD sets the gold standard in aesthetic medicine training. Our comprehensive programs are designed to elevate practitioners to the highest levels of expertise in the aesthetics industry.
            </p>
            
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Elite Training for Elite Practitioners
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              In the rapidly evolving field of aesthetic medicine, excellence isn't optional—it's essential. Our advanced training programs are meticulously crafted to transform skilled practitioners into industry leaders.
            </p>

            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              The EliteUSMD Advantage
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Personalized Excellence</h3>
                <p className="text-gray-600">
                  Every practitioner's journey is unique. Our training programs adapt to your expertise level, whether you're establishing core competencies or mastering advanced techniques. We ensure your learning path aligns with your professional goals.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Industry-Leading Expertise</h3>
                <p className="text-gray-600">
                  Learn from the best in aesthetic medicine. Our instructors are renowned practitioners who bring decades of experience and cutting-edge knowledge to every training session, ensuring you master both fundamental and advanced techniques.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Hands-On Mastery</h3>
                <p className="text-gray-600">
                  Excellence comes through practice. Our training emphasizes extensive hands-on experience under expert supervision, ensuring you develop the confidence and precision needed for optimal patient outcomes.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-gray-600 mb-8">
              At EliteUSMD, we don't just teach procedures—we cultivate excellence. Our training programs are designed to transform talented practitioners into aesthetic medicine leaders, equipped with the skills and confidence to deliver exceptional results.
            </p>
          </div>
        </div>
      </div>
      <WhyChooseUsSection />
      <HiringProcessSection />
      <FAQSection title="Training Program FAQs" faqs={faqItems} />
      <FeaturedClinicSection />
      <CTASection 
        title="Elevate Your Practice" 
        description="Join the elite ranks of aesthetic practitioners with our advanced training programs."
      />
      <CTASection 
        title="Start Your Journey" 
        description="Ready to transform your practice? Contact us to discuss our elite training programs."
        isContact={true}
      />
    </div>
  )
}
