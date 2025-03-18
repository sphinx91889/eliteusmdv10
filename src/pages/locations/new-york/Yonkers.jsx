import React, { useEffect } from 'react';
import PageHero from '../../../components/PageHero';
import WhyChooseUsSection from '../../../components/WhyChooseUsSection';
import FAQSection from '../../../components/FAQSection';
import CTASection from '../../../components/CTASection';

export default function Yonkers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-accent-sage pt-20">
      <PageHero 
        title="Medical Director Services in Yonkers" 
        subtitle="Expert Medical Oversight for Yonkers Aesthetic Practices"
        backgroundImage="https://content.r9cdn.net/rimg/dimg/70/60/83c644e0-city-4022-1753e5d42bb.jpg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary-dark">
            Medical Director Services for Yonkers Medical Spas
          </h2>
          
          <p className="text-primary-dark mb-6">
            EliteUSMD provides comprehensive medical director services to aesthetic practices, medical spas, and wellness centers throughout Yonkers. Our experienced medical directors ensure your practice maintains the highest standards of patient care while staying compliant with New York state regulations.
          </p>

          <p className="text-primary-dark mb-6">
            As Yonkers continues to grow as a hub for aesthetic medicine, we provide qualified medical directors who understand the unique needs of the local market. Our medical directors bring extensive experience in overseeing various aesthetic procedures and treatments.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-secondary">
              Our Yonkers Coverage Areas
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Downtown Yonkers
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Northwest Yonkers
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Northeast Yonkers
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Southwest Yonkers
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Southeast Yonkers
              </li>
              <li className="flex items-center text-primary-dark">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                Cross County
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
