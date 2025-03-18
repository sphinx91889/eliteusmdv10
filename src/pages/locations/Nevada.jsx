import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { FaMapMarkerAlt } from 'react-icons/fa';
import WhyChooseUsSection from '../../components/WhyChooseUsSection';
import FAQSection from '../../components/FAQSection';
import FeaturedClinicSection from '../../components/FeaturedClinicSection';

export default function Nevada() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cities = [
    {
      name: "Las Vegas",
      path: "/locations/nevada/las-vegas",
      image: "https://as2.ftcdn.net/v2/jpg/02/87/17/95/1000_F_287179504_v7YOqsSLLFj51TdSfuOdddnXwEdwmy5X.jpg",
      description: "Medical director services for Las Vegas luxury aesthetic practices."
    },
    {
      name: "Reno",
      path: "/locations/nevada/reno",
      image: "https://travelnevada.com/wp-content/uploads/2014/04/DowntownRiverwalk_Desktop.jpg",
      description: "Comprehensive medical oversight for Northern Nevada clinics."
    },
    {
      name: "Henderson",
      path: "/locations/nevada/henderson",
      image: "https://imagescdn.homes.com/i2/MXMRYnE4gyZmYfR4SWpkqZfZn4tozlr7CIGG8s6LJx0/117/image.jpg?p=1",
      description: "Expert medical direction for Henderson area practices."
    }
  ];

  return (
    <div className="bg-accent-sage pt-20">
      <PageHero 
        title="Medical Director Services in Nevada" 
        subtitle="Comprehensive Support Across Major Nevada Cities"
        backgroundImage="https://images.pexels.com/photos/2837909/pexels-photo-2837909.jpeg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">
          Our Nevada Locations
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <Link 
              key={index}
              to={city.path}
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
                <div
                  className="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition-colors inline-block text-center"
                >
                  Explore {city.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <WhyChooseUsSection />
      <FAQSection />
      <FeaturedClinicSection />
    </div>
  );
}
