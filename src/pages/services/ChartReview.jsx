import React, { useEffect } from 'react'
import PageHero from '../../components/PageHero'
import WhyChooseUsSection from '../../components/WhyChooseUsSection'
import HiringProcessSection from '../../components/HiringProcessSection'
import FAQSection from '../../components/FAQSection'
import FeaturedClinicSection from '../../components/FeaturedClinicSection'
import CTASection from '../../components/CTASection'

export default function ChartReview() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqItems = [
    {
      question: "How often should chart reviews be conducted?",
      answer: "Chart reviews should be conducted regularly, typically monthly, to ensure compliance and maintain high standards of patient care documentation."
    },
    {
      question: "What does a chart review include?",
      answer: "Our chart reviews include examination of patient history, treatment plans, procedure documentation, consent forms, and follow-up care notes."
    },
    {
      question: "How do chart reviews improve patient care?",
      answer: "Chart reviews help identify documentation gaps, ensure treatment consistency, and maintain compliance with medical standards and regulations."
    },
    {
      question: "Who performs the chart reviews?",
      answer: "Our experienced medical directors conduct thorough chart reviews, bringing their expertise in medical documentation and compliance."
    }
  ];

  return (
    <div className="pt-20">
      <PageHero 
        title="Chart Review And Patient Assessment" 
        backgroundImage="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d0afedcbf30b8201b466fd.jpeg"
      />
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="prose max-w-none">
            <div className="mb-12">
              <p className="text-xl text-gray-600 mb-6">
                When it comes to the security and welfare of your patients, EliteUSMD offers comprehensive chart reviews and patient evaluation services to ensure your patients are healthy enough to have the procedures and surgeries they want.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">In-Depth Analysis of Patient's Medical Records</h2>
              <p className="text-gray-600 mb-6">
                The security and wellbeing of your clients is a top priority for us at EliteUSMD. Our patient evaluation and record review services are committed to ensuring that each person who enters your spa is not just in the finest possible physical condition but is also medically qualified for the aesthetic operations they are seeking.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">What We Offer</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Comprehensive Chart Review</h3>
                  <p className="text-gray-600">
                    We thoroughly examine the medical records of your patients. Their health status at the time of evaluation, past medical history, and any potential contraindications are all considered by our experts. Every facet of their well-being is taken into account thanks to our all-encompassing strategy.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Patient Assessment</h3>
                  <p className="text-gray-600">
                    In addition to reviewing the records, we interview patients in-person to fully analyze their physical condition and suitability for the planned procedures. Our evaluations have a high priority on patient safety, enabling you to deliver the finest care.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg mb-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Peace of Mind</h3>
              <p className="text-gray-600 mb-6">
                By having EliteUSMD oversee record reviews and patient evaluations, you can be sure to provide your clients with the best possible care while lowering your risk exposure. Our services give you the comfort of knowing that your clients' safety is in capable hands.
              </p>
              <p className="text-gray-600">
                Our dedication to excellence at EliteUSMD goes beyond aesthetics. Every client's experience with you is safe and pleasurable because we set the bar for quality and safety.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUsSection />
      <HiringProcessSection />
      <FAQSection title="Chart Review FAQs" faqs={faqItems} />
      <FeaturedClinicSection />
      <CTASection 
        title="Enhance Your Practice" 
        description="Ensure your patient documentation meets the highest standards with our professional chart review services."
      />
      <CTASection 
        title="Let's Chat" 
        description="Ready to improve your chart review process? Contact us today to get started."
        isContact={true}
      />
    </div>
  )
}
