import React, { useEffect } from 'react';
import WhyChooseUsSection from '../../../components/WhyChooseUsSection';
import FAQSection from '../../../components/FAQSection';
import CTASection from '../../../components/CTASection';

export default function LasVegas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-accent-sage pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-6 text-primary-dark">
              Medical Director Services in Las Vegas
            </h1>
            
            <p className="text-primary-dark mb-6">
              EliteUSMD provides comprehensive medical director services to aesthetic practices, medical spas, and wellness centers throughout Las Vegas. Our experienced medical directors ensure your practice maintains the highest standards of patient care while staying compliant with Nevada regulations.
            </p>

            <p className="text-primary-dark mb-6">
              Whether you're operating on the famous Las Vegas Strip or in the surrounding metropolitan area, we connect you with qualified medical directors who understand the unique needs of the Las Vegas aesthetic market. Our medical directors bring extensive experience in overseeing various aesthetic procedures and treatments.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">
                Our Las Vegas Coverage Areas
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center text-primary-dark">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Downtown Las Vegas
                </li>
                <li className="flex items-center text-primary-dark">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  The Strip
                </li>
                <li className="flex items-center text-primary-dark">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Summerlin
                </li>
                <li className="flex items-center text-primary-dark">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Spring Valley
                </li>
                <li className="flex items-center text-primary-dark">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Paradise
                </li>
                <li className="flex items-center text-primary-dark">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  North Las Vegas
                </li>
              </ul>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/415999/pexels-photo-415999.jpeg"
              alt="Las Vegas Medical Services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <WhyChooseUsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
