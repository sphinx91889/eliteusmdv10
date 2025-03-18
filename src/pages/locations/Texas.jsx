import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Texas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cities = [
    {
      name: "Houston",
      path: "/locations/texas/houston",
      image: "https://photographylife.com/wp-content/uploads/2017/02/Houston12.jpg",
      description: "Premier medical director services for Houston's thriving aesthetic market."
    },
    {
      name: "Dallas",
      path: "/locations/texas/dallas",
      image: "https://www.parker.edu/wp-content/uploads/2022/04/Dallas-Skyline.jpg",
      description: "Comprehensive medical oversight for Dallas-Fort Worth aesthetic practices."
    },
    {
      name: "Austin",
      path: "/locations/texas/austin",
      image: "https://media.kvue.com/assets/KVUE/images/f73d4e9b-13fb-4207-9e17-721efcf9e70f/f73d4e9b-13fb-4207-9e17-721efcf9e70f_1140x641.jpg",
      description: "Expert medical direction for Austin's innovative aesthetic practices."
    },
    {
      name: "San Antonio",
      path: "/locations/texas/san-antonio",
      image: "https://skylinespace.nyc3.cdn.digitaloceanspaces.com/media/images/sanantonio_004_7632_up.jpg",
      description: "Reliable medical director services for San Antonio practices."
    },
    {
      name: "Fort Worth",
      path: "/locations/texas/fort-worth",
      image: "https://skylinespace.nyc3.cdn.digitaloceanspaces.com/media/images/fortworth_035_5761_up.jpg",
      description: "Specialized medical oversight for Fort Worth aesthetic clinics."
    },
    {
      name: "El Paso",
      path: "/locations/texas/el-paso",
      image: "https://as2.ftcdn.net/v2/jpg/03/06/19/17/1000_F_306191713_yNrjCH3abBVmVKzL9iyBbscXSyHckUHY.jpg",
      description: "Comprehensive medical director services for El Paso practices."
    },
    {
      name: "Plano",
      path: "/locations/texas/plano",
      image: "https://thumbs.dreamstime.com/b/dallas-texas-usa-downtown-drone-skyline-aerial-panorama-dallas-texas-usa-downtown-drone-skyline-aerial-panorama-205447308.jpg",
      description: "Expert medical direction for Plano's luxury aesthetic market."
    }
  ];

  return (
    <div className="bg-accent-sage pt-20">
      <PageHero 
        title="Medical Director Services in Texas" 
        subtitle="Comprehensive Support Across Major Texas Cities"
        backgroundImage="https://as2.ftcdn.net/v2/jpg/03/06/19/17/1000_F_306191713_yNrjCH3abBVmVKzL9iyBbscXSyHckUHY.jpg"
      />
      
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-dark">
          Our Texas Locations
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
    </div>
  );
}
