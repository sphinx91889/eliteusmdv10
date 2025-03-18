export interface PageMetaData {
  url: string;
  bundleEntryPoint: string;
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

export const pages: PageMetaData[] = [
  {
    url: "index.html",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Director Services for Healthcare & Aesthetic Practices",
    description: "EliteUSMD provides expert medical director services ensuring compliance, safety, and high-quality care for healthcare and aesthetic practices.",
    keywords: "medical director, healthcare compliance, aesthetic practice, medical oversight, physician collaboration",
    ogImage: "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c0f1541ae850c45b73eb47.png",
		schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.eliteusmd.com/#organization",
          "name": "EliteUSMD",
          "url": "https://www.eliteusmd.com",
          "logo": {
            "@type": "ImageObject",
            "@id": "https://www.eliteusmd.com/#logo",
            "url": "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c0f1541ae850c45b73eb47.png",
            "caption": "EliteUSMD"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.eliteusmd.com/#website",
          "url": "https://www.eliteusmd.com",
          "name": "EliteUSMD",
          "publisher": {
            "@id": "https://www.eliteusmd.com/#organization"
          }
        },
        {
          "@type": "WebPage",
          "@id": "https://www.eliteusmd.com/#webpage",
          "url": "https://www.eliteusmd.com/",
          "name": "EliteUSMD - Premier Medical Director Placement",
          "datePublished": "2025-03-15T09:00:00-08:00",
          "dateModified": "2025-03-15T13:09:21-08:00",
          "isPartOf": {
            "@id": "https://www.eliteusmd.com/#website"
          },
          "primaryImageOfPage": {
            "@id": "https://storage.googleapis.com/msgsndr/8ngdMjJjmckUW3DffAfv/media/67c0f1541ae850c45b73eb47.png"
          }
        }
      ]
    }
  },
  {
    url: "services/medical-director.html",
    bundleEntryPoint: "/src/main.jsx",
    title: "Medical Director Services | EliteUSMD",
    description: "Comprehensive medical director services for healthcare practices. Expert oversight, compliance management, and quality assurance.",
    keywords: "medical director services, healthcare compliance, medical oversight",
  },
  {
    url: "services/chart-review.html",
    bundleEntryPoint: "/src/main.jsx",
    title: "Chart Review Services | EliteUSMD",
    description: "Professional chart review and patient assessment services ensuring quality care and compliance.",
    keywords: "chart review, patient assessment, medical documentation",
  },
  {
    url: "contact.html",
    bundleEntryPoint: "/src/main.jsx",
    title: "Contact EliteUSMD | Medical Director Services",
    description: "Get in touch with EliteUSMD for expert medical director services and healthcare compliance solutions.",
    keywords: "contact, medical director services, healthcare consultation",
  }
]
