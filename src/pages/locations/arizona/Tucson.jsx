import React, { useEffect } from 'react';
import PageHero from '../../../components/PageHero';
import WhyChooseUsSection from '../../../components/WhyChooseUsSection';
import FAQSection from '../../../components/FAQSection';
import CTASection from '../../../components/CTASection';

export default function Tucson() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-accent-sage pt-20">
      <PageHero 
        title="Medical Director Services in Tucson" 
        subtitle="Expert Medical Oversight for Tucson Aesthetic Practices"
        backgroundImage="https://content.r9cdn.net/rimg/dimg/5c/8e/509f84f8-city-29704-166fa069103.jpg?width=1366&height=768&xhint=1155&yhint=1426&crop=true"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary-dark">
            Medical Director Services for Tucson Medical Spas
          </h2>
          
          <p className="text-primary-dark mb-6">
            EliteUSMD provides comprehensive medical director services to aesthetic practices, medical spas, and wellness centers throughout Tucson. Our experienced medical directors ensure your practice maintains the highest standards of patient care while staying compliant with Arizona regulations.
          </p>

          <p className="text-primary-dark mb-6">
            From Downtown Tucson to the Catalina Foothills, we connect you with qualified medical directors who understand the unique needs of the Tucson aesthetic market. Our medical directors bring extensive experience in overseeing various aesthetic procedures and treatments.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Our Tucson Coverage Areas
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Downtown Tucson
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Catalina Foothills
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Oro Valley
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                East Tucson
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Marana
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Rita Ranch
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
