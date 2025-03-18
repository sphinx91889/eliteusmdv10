import React from "react";
import type { PageMetaData } from "./pageMetaMap";

const PageTemplate: React.FC<PageMetaData> = ({ 
  title, 
  description, 
  keywords,
  ogImage 
}) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862e5336578330e5c232.x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862e4a8459017cc831c4.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862e5336570958e5c233.png" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862ee4d4f59a31303da9.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862f22c233092b5d0b98.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="https://storage.googleapis.com/msgsndr/AV0uABeJizFuDAswYLbY/media/67d9862f22c233603e5d0b99.png" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {ogImage && <meta property="og:image" content={ogImage} />}
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div id="root"></div>
        <script src="https://website-widgets.pages.dev/dist/sienna.min.js" defer></script>
        <script 
          src="https://widgets.leadconnectorhq.com/loader.js" 
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
          data-widget-id="67c0f6cba81d1ca4bed77244"  
        ></script>
        <h1>EliteUSMD: Expert Medical Director Services for Compliance & Safety</h1>
        <h2>Start Your Journey with EliteUSMD Today</h2>
      </body>
    </html>
  );
};

export default PageTemplate;
