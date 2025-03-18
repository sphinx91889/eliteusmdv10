import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero';
import CTASection from '../../components/CTASection';
import RelatedArticles from '../../components/RelatedArticles';

export default function MedicalDirectorRole() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 120;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const sections = [
    {
      title: "Core Responsibilities",
      content: `Medical directors play a pivotal role in healthcare organizations, overseeing clinical operations and ensuring the highest standards of patient care. Their core responsibilities include:

• Developing and implementing clinical policies and procedures
• Ensuring compliance with state and federal regulations
• Supervising medical staff and providing clinical guidance
• Reviewing and approving treatment protocols
• Managing quality assurance programs
• Participating in risk management activities`
    },
    {
      title: "Strategic Leadership",
      content: `Beyond day-to-day clinical oversight, medical directors provide strategic leadership by:

• Establishing long-term clinical goals and objectives
• Collaborating with administrative leadership
• Driving quality improvement initiatives
• Implementing evidence-based practices
• Managing relationships with external healthcare partners
• Leading medical staff development programs`
    },
    {
      title: "Quality Assurance",
      content: `Quality assurance is a critical aspect of medical directorship, involving:

• Regular chart reviews and clinical audits
• Performance metric monitoring and evaluation
• Patient satisfaction assessment
• Adverse event investigation and resolution
• Implementation of best practices
• Continuous quality improvement programs`
    },
    {
      title: "Regulatory Compliance",
      content: `Medical directors must ensure compliance with various regulatory requirements:

• State medical board regulations
• Federal healthcare laws and guidelines
• HIPAA compliance
• Facility licensing requirements
• Professional standards and ethics
• Documentation and reporting requirements`
    }
  ];

  const sources = [
    "American Medical Association - Medical Director Guidelines",
    "Journal of Healthcare Management",
    "Healthcare Compliance Association",
    "Federation of State Medical Boards",
    "American College of Healthcare Executives"
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 pt-52 md:pt-32 pb-16">
      <div className="grid grid-cols-12 gap-8">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3">
          <div className="sticky top-24">
            <h3 className="text-base md:text-lg font-semibold mb-4">Content</h3>
            <nav className="space-y-2 text-sm md:text-base">
              {sections.map((section, index) => (
                <a 
                  key={index}
                  href={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block text-gray-600 hover:text-primary-dark"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="col-span-12 md:col-span-9">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Understanding Medical Director Responsibilities</h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
              <span>Published 03/14/2024</span>
              <span>•</span>
              <span>Written by EliteUSMD Team</span>
            </div>
            <p className="text-xl text-gray-600">
              Medical directors serve as the cornerstone of healthcare organizations, bridging clinical excellence with operational efficiency. Understanding their responsibilities is crucial for both aspiring medical directors and healthcare facilities seeking their services.
            </p>
          </div>

          {sections.map((section, index) => (
            <div 
              key={index} 
              id={section.title.toLowerCase().replace(/\s+/g, '-')}
              className="mb-12 scroll-mt-24"
            >
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                {section.title}
              </h2>
              <div className="prose prose-lg max-w-none whitespace-pre-line text-gray-700">
                {section.content}
              </div>
            </div>
          ))}

          {/* Sources Section */}
          <div className="border-t border-gray-200 pt-8 mb-12">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-lg font-semibold">{sources.length} Sources</h3>
              <button className="text-primary-dark hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Here at EliteUSMD, we use strict sourcing guidelines to ensure our content is accurate and current. We rely on peer-reviewed studies, academic research institutions, and medical associations.
            </p>
            <ul className="text-sm text-primary-dark space-y-2">
              {sources.map((source, index) => (
                <li key={index}>{source}</li>
              ))}
            </ul>
          </div>

          {/* Author Section */}
          <div className="border-t border-gray-200 pt-8 mb-12">
            <div className="flex items-start gap-4">
              <img 
                src="https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c0f1541ae850c45b73eb47.png" 
                alt="Medical Advisor"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">EliteUSMD Content Team</h3>
                <p className="text-gray-600 mb-2">Medical Content Advisor at EliteUSMD</p>
                <p className="text-sm text-gray-600">
                  The EliteUSMD team has over 15 years of experience as a medical director and healthcare consultant. They specializes in medical compliance and healthcare management.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <RelatedArticles currentArticleId="medical-director-role" />

          <div className="bg-accent-sage p-8 rounded-lg my-12">
            <h3 className="text-xl font-semibold text-primary-dark mb-4">
              Ready to Take the Next Step?
            </h3>
            <p className="mb-6">
              Whether you're seeking a medical director position or looking to hire one for your facility, EliteUSMD can help you navigate the process efficiently and effectively.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
            >
              Start Consultation
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
