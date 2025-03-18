import React, { useEffect } from 'react';
import PageHero from '../../../components/PageHero';
import WhyChooseUsSection from '../../../components/WhyChooseUsSection';
import FAQSection from '../../../components/FAQSection';
import CTASection from '../../../components/CTASection';

export default function Buffalo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-accent-sage pt-20">
      <PageHero 
        title="Medical Director Services in Buffalo" 
        subtitle="Expert Medical Oversight for Buffalo Aesthetic Practices"
        backgroundImage="https://images.squarespace-cdn.com/content/v1/54e201c7e4b00d4519b30502/83bffeb2-ee3b-4a70-828f-a4ae2fafd405/SOAriBnb_007+copy.jpg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary-dark">
            Medical Director Services for Buffalo Medical Spas
          </h2>
          
          <p className="text-primary-dark mb-6">
            EliteUSMD provides comprehensive medical director services to aesthetic practices, medical spas, and wellness centers throughout Buffalo. Our experienced medical directors ensure your practice maintains the highest standards of patient care while staying compliant with New York state regulations.
          </p>

          <p className="text-primary-dark mb-6">
            As Western New York's largest city, Buffalo offers unique opportunities in the aesthetic medicine market. We connect you with qualified medical directors who understand the specific needs of Buffalo's diverse communities and bring extensive experience in overseeing various aesthetic procedures and treatments.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Our Buffalo Coverage Areas
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Downtown Buffalo
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                North Buffalo
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                South Buffalo
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                East Side
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                West Side
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Elmwood Village
              </li>
            </ul>
          </div>
        </div>
      </div>

      <WhyChooseUsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
