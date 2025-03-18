import React, { useEffect } from 'react';
import PageHero from '../../../components/PageHero';
import WhyChooseUsSection from '../../../components/WhyChooseUsSection';
import FAQSection from '../../../components/FAQSection';
import CTASection from '../../../components/CTASection';

export default function Scottsdale() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-accent-sage pt-20">
      <PageHero 
        title="Medical Director Services in Scottsdale" 
        subtitle="Premium Medical Oversight for Scottsdale Aesthetic Practices"
        backgroundImage="https://www.redfin.com/blog/wp-content/uploads/2023/03/Scottsdale_GettyImages-169960380.jpg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary-dark">
            Medical Director Services for Scottsdale Medical Spas
          </h2>
          
          <p className="text-primary-dark mb-6">
            EliteUSMD delivers premium medical director services to aesthetic practices, medical spas, and wellness centers throughout Scottsdale. Our experienced medical directors ensure your practice maintains the highest standards of patient care while staying compliant with Arizona regulations.
          </p>

          <p className="text-primary-dark mb-6">
            From Old Town Scottsdale to North Scottsdale, we connect you with qualified medical directors who understand the sophisticated needs of the Scottsdale aesthetic market. Our medical directors bring extensive experience in overseeing luxury aesthetic procedures and treatments.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Our Scottsdale Coverage Areas
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Old Town
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                North Scottsdale
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Gainey Ranch
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                McCormick Ranch
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                DC Ranch
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Kierland
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
