import React, { useEffect } from 'react';
import PageHero from '../../../components/PageHero';
import WhyChooseUsSection from '../../../components/WhyChooseUsSection';
import FAQSection from '../../../components/FAQSection';
import CTASection from '../../../components/CTASection';

export default function NYC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-accent-sage pt-20">
      <PageHero 
        title="Medical Director Services in New York City" 
        subtitle="Expert Medical Oversight for NYC Aesthetic Practices"
        backgroundImage="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary-dark">
            Medical Director Services for NYC Medical Spas
          </h2>
          
          <p className="text-primary-dark mb-6">
            EliteUSMD provides comprehensive medical director services to aesthetic practices, medical spas, and wellness centers throughout New York City. Our experienced medical directors ensure your practice maintains the highest standards of patient care while staying compliant with New York state regulations.
          </p>

          <p className="text-primary-dark mb-6">
            Whether you're operating in Manhattan, Brooklyn, Queens, the Bronx, or Staten Island, we connect you with qualified medical directors who understand the unique needs of the NYC aesthetic market. Our medical directors bring extensive experience in overseeing various aesthetic procedures and treatments.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Our NYC Coverage Areas
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Manhattan
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Brooklyn
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Queens
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                The Bronx
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Staten Island
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Long Island City
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
