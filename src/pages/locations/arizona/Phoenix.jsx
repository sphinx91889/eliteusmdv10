import React, { useEffect } from 'react';
import PageHero from '../../../components/PageHero';
import WhyChooseUsSection from '../../../components/WhyChooseUsSection';
import FAQSection from '../../../components/FAQSection';
import CTASection from '../../../components/CTASection';

export default function Phoenix() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-accent-sage pt-20">
      <PageHero 
        title="Medical Director Services in Phoenix" 
        subtitle="Expert Medical Oversight for Phoenix Aesthetic Practices"
        backgroundImage="https://images.pexels.com/photos/3855433/pexels-photo-3855433.jpeg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary-dark">
            Medical Director Services for Phoenix Medical Spas
          </h2>
          
          <p className="text-primary-dark mb-6">
            EliteUSMD provides comprehensive medical director services to aesthetic practices, medical spas, and wellness centers throughout Phoenix. Our experienced medical directors ensure your practice maintains the highest standards of patient care while staying compliant with Arizona regulations.
          </p>

          <p className="text-primary-dark mb-6">
            From Downtown Phoenix to the surrounding Valley areas, we connect you with qualified medical directors who understand the unique needs of the Phoenix aesthetic market. Our medical directors bring extensive experience in overseeing various aesthetic procedures and treatments.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Our Phoenix Coverage Areas
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Downtown Phoenix
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Biltmore
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Arcadia
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Desert Ridge
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Ahwatukee
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Paradise Valley
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
