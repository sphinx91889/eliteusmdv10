import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function Resources() {
  const resourceSections = [
    { 
      title: "Understanding Medical Director Responsibilities: What You Need to Know", 
      path: "/resources/medical-director-role",
      description: "Explore the critical responsibilities and strategic importance of medical directors in modern healthcare settings.",
      imageUrl: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d0b55bcbf30be31fb47004.jpeg"
    },
    { 
      title: "The Future of Medical Directorship", 
      path: "/resources/medical-directorship-future",
      description: "Insights into emerging trends, technological advancements, and evolving roles in medical leadership.",
      imageUrl: "https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    { 
      title: "How to Become a Medical Director", 
      path: "/resources/becoming-medical-director",
      description: "Comprehensive guide to career paths, qualifications, and strategies for aspiring medical directors.",
      imageUrl: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    { 
      title: "Challenges Faced in Medical Direction", 
      path: "/resources/medical-direction-challenges",
      description: "Addressing complex issues in medical leadership, compliance, and organizational management.",
      imageUrl: "https://images.pexels.com/photos/5699431/pexels-photo-5699431.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    { 
      title: "Why Medical Directors Are Vital", 
      path: "/resources/medical-directors-importance",
      description: "Understanding the pivotal role medical directors play in ensuring quality care and operational excellence.",
      imageUrl: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    { 
      title: "Key Responsibilities of a Medical Director", 
      path: "/resources/medical-director-responsibilities",
      description: "Detailed overview of core duties, strategic planning, and leadership expectations for medical directors.",
      imageUrl: "https://images.pexels.com/photos/5327659/pexels-photo-5327659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <div>
      <PageHero 
        title="Resources for Medical Directors"
        backgroundImage="https://images.pexels.com/photos/5452220/pexels-photo-5452220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive insights, guidance, and professional development resources for medical directors navigating the complex healthcare landscape.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {resourceSections.map((section, index) => (
              <Link 
                key={index} 
                to={section.path} 
                className="block bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={section.imageUrl} 
                    alt={section.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-primary-dark mb-4">{section.title}</h2>
                  <p className="text-gray-600 mb-4">{section.description}</p>
                  <div className="text-secondary font-medium">Learn More →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
