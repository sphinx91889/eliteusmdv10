import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import FAQSection from '../../components/FAQSection';
import FeaturedClinicSection from '../../components/FeaturedClinicSection';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function California() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cities = [
    {
      name: "Los Angeles",
      path: "/locations/california/los-angeles",
      image: "https://images.pexels.com/photos/10625515/pexels-photo-10625515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Medical director services for LA's premier aesthetic practices."
    },
    {
      name: "San Francisco",
      path: "/locations/california/san-francisco",
      image: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description: "Comprehensive medical oversight for Bay Area clinics."
    }
  ];

  return (
    <div className="bg-accent-sage pt-20">
      <PageHero 
        title="Medical Director Services in California" 
        subtitle="Comprehensive Support Across Major California Cities"
        backgroundImage="https://images.pexels.com/photos/2709964/pexels-photo-2709964.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">
          Our California Locations
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cities.map((city, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 aspect-square flex flex-col"
            >
              <div className="h-1/2 overflow-hidden">
                <img 
                  src={city.image} 
                  alt={`${city.name} Skyline`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 text-secondary flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-primary" />
                  {city.name}
                </h3>
                <p className="text-primary-dark mb-4 flex-grow">{city.description}</p>
                <Link 
                  to={city.path} 
                  className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition duration-300"
                >
                  Explore {city.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WhyChooseUsSection />
      <FAQSection />
      <FeaturedClinicSection />
    </div>
  );
}
