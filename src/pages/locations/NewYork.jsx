import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function NewYork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cities = [
    {
      name: "New York City",
      path: "/locations/new-york/nyc",
      image: "https://images.ctfassets.net/1aemqu6a6t65/46MJ6ER585Rwl3NraEIoGL/784c5eb5d87f576b5548b1a2255f08e7/tripadvisortimessquare_taggeryanceyiv_5912",
      description: "Medical director services for NYC's premier aesthetic practices."
    },
    {
      name: "Yonkers",
      path: "/locations/new-york/yonkers",
      image: "https://content.r9cdn.net/rimg/dimg/70/60/83c644e0-city-4022-1753e5d42bb.jpg?width=1366&height=768&xhint=870&yhint=1101&crop=true",
      description: "Comprehensive medical oversight for Yonkers clinics."
    },
    {
      name: "Buffalo",
      path: "/locations/new-york/buffalo",
      image: "https://images.squarespace-cdn.com/content/v1/54e201c7e4b00d4519b30502/83bffeb2-ee3b-4a70-828f-a4ae2fafd405/SOAriBnb_007+copy.jpg",
      description: "Expert medical direction for Western New York practices."
    }
  ];

  return (
    <div className="bg-accent-sage">
      <PageHero 
        title="Medical Director Services in New York" 
        subtitle="Comprehensive Support Across Major New York Cities"
        backgroundImage="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9"
      />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">
          Our New York Locations
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
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
    </div>
  );
}
