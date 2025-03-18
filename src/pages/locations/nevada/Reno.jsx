import React, { useEffect } from 'react';
import WhyChooseUsSection from '../../../components/WhyChooseUsSection';
import FAQSection from '../../../components/FAQSection';
import CTASection from '../../../components/CTASection';

export default function Reno() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-accent-sage pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-6 text-primary-dark">
              Medical Director Services in Reno
            </h1>
            
            <p className="text-lg mb-6 text-primary-dark">
              EliteUSMD provides comprehensive medical director services to healthcare practices across Reno, supporting the city's growing medical and aesthetic industry. Our experienced medical directors ensure your practice maintains the highest standards of care while meeting all regulatory requirements.
            </p>

            <p className="text-lg mb-6 text-primary-dark">
              Whether you're operating in Downtown Reno, Midtown, or South Meadows, our medical directors are ready to support your practice's success with expert oversight and guidance.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">
                Areas We Serve in Reno
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center text-primary-dark">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Downtown Reno
                </li>
                <li className="flex items-center text-primary-dark">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Midtown
                </li>
                <li className="flex items-center text-primary-dark">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  South Meadows
                </li>
                <li className="flex items-center text-primary-dark">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Northwest Reno
                </li>
              </ul>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://travelnevada.com/wp-content/uploads/2014/04/DowntownRiverwalk_Desktop.jpg"
              alt="Downtown Reno Riverwalk"
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
