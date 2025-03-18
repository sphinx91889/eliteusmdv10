import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import FAQSection from '../../components/FAQSection';
import FeaturedClinicSection from '../../components/FeaturedClinicSection';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Arizona() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cities = [
    {
      name: "Phoenix",
      path: "/locations/arizona/phoenix",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Downtown_Phoenix_Aerial_Looking_Northeast.jpg",
      description: "Medical director services for Phoenix metropolitan practices."
    },
    {
      name: "Scottsdale",
      path: "/locations/arizona/scottsdale",
      image: "https://www.redfin.com/blog/wp-content/uploads/2023/03/Scottsdale_GettyImages-169960380.jpg",
      description: "Comprehensive medical oversight for luxury Scottsdale clinics."
    },
    {
      name: "Tucson",
      path: "/locations/arizona/tucson",
      image: "https://content.r9cdn.net/rimg/dimg/5c/8e/509f84f8-city-29704-166fa069103.jpg?width=1366&height=768&xhint=1155&yhint=1426&crop=true",
      description: "Expert medical direction for Southern Arizona practices."
    }
  ];

  return (
    <div className="bg-accent-sage pt-20">
      <PageHero 
        title="Medical Director Services in Arizona" 
        subtitle="Comprehensive Support Across Major Arizona Cities"
        backgroundImage="https://www.redfin.com/blog/wp-content/uploads/2023/03/Scottsdale_GettyImages-169960380.jpg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">
          Our Arizona Locations
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <img 
                src={city.image} 
                alt={`${city.name} Skyline`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-secondary flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-primary" />
                  {city.name}
                </h3>
                <p className="text-primary-dark mb-4">{city.description}</p>
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
