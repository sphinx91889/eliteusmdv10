import React from 'react';
import { Link } from 'react-router-dom';

const allArticles = [
  {
    id: 'medical-director-role',
    title: "Understanding Medical Director Responsibilities",
    image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c252cb1831d32b51494ff9.webp",
    path: "/resources/medical-director-role",
    description: "Comprehensive guide to medical director responsibilities and roles in healthcare facilities."
  },
  {
    id: 'medical-director-vs-supervisor',
    title: "Medical Director vs Medical Supervisor: Understanding the Differences",
    image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d0af343d108822a1dd4825.jpeg",
    path: "/resources/medical-director-vs-supervisor",
    description: "Key differences between medical directors and supervisors in healthcare settings."
  },
  {
    id: 'effective-medical-director',
    title: "Key Qualities of an Effective Medical Director",
    image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d0afed2d5caf9ceb4feac8.jpeg",
    path: "/resources/effective-medical-director",
    description: "Essential qualities and skills that make an outstanding medical director."
  },
  {
    id: 'compliance-requirements',
    title: "Medical Director Compliance Requirements by State",
    image: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67d0ad38cbf30b41deb46450.jpeg",
    path: "/resources/compliance-requirements",
    description: "State-by-state guide to medical director compliance requirements."
  }
];

export default function RelatedArticles({ currentArticleId }) {
  const relatedArticles = allArticles
    .filter(article => article.id !== currentArticleId)
    .slice(0, 3);

  return (
    <div className="border-t border-gray-200 pt-8">
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
      <div className="grid grid-cols-3 gap-6">
        {relatedArticles.map((article) => (
          <Link 
            key={article.id}
            to={article.path}
            className="group"
          >
            <div className="aspect-video mb-3 overflow-hidden rounded-lg">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="font-semibold text-gray-900 group-hover:text-primary-dark transition-colors">
              {article.title}
            </h4>
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
              {article.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
