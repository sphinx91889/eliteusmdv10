import React, { useEffect } from 'react';
import WhyChooseUsSection from '../../../components/WhyChooseUsSection';
import FAQSection from '../../../components/FAQSection';
import CTASection from '../../../components/CTASection';

export default function Henderson() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-accent-sage pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-6 text-primary-dark">
              Medical Director Services in Henderson
            </h1>
            
            <p className="text-lg mb-6 text-primary-dark">
              EliteUSMD delivers expert medical director services to healthcare practices throughout Henderson, supporting the community's diverse medical needs. Our medical directors bring extensive experience in overseeing medical spas, wellness centers, and aesthetic clinics.
            </p>

            <p className="text-lg mb-6 text-primary-dark">
              From Green Valley to MacDonald Ranch, we provide comprehensive medical oversight services that ensure your practice operates at the highest professional standards while maintaining full compliance with Nevada regulations.
            </p>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-secondary">
                Henderson Areas We Serve
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center text-primary-dark">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Green Valley
                </li>
                <li className="flex items-center text-primary-dark">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  MacDonald Ranch
                </li>
                <li className="flex items-center text-primary-dark">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Anthem
                </li>
                <li className="flex items-center text-primary-dark">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Seven Hills
                </li>
              </ul>
            </div>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://imagescdn.homes.com/i2/MXMRYnE4gyZmYfR4SWpkqZfZn4tozlr7CIGG8s6LJx0/117/image.jpg?p=1"
              alt="Henderson Medical Services"
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
