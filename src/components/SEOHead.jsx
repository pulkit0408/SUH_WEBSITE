import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title = "SUH TECH | Leading Digital Solutions Company India - SEO, Web Development & Digital Marketing",
  description = "SUH TECH is India's premier Digital Solutions Company offering expert SEO services, web development, digital marketing, software development, and IT solutions. Based in Greater Noida, serving clients across Delhi NCR, Mumbai, Bangalore, and pan-India with proven results.",
  keywords = "Digital Solutions India, Best SEO Company India, Digital Marketing Agency India, Web Development Company India, Software Development India, IT Solutions Provider India, SUH TECH Greater Noida",
  canonical = "https://suhtech.top/",
  ogImage = "https://suhtech.top/logo_Suh.jpg"
}) => {
  // Main Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SUH TECH",
    "alternateName": "SUH TECH PRIVATE LIMITED",
    "url": "https://suhtech.top/",
    "logo": "https://suhtech.top/logo_Suh.jpg",
    "image": "https://suhtech.top/logo_Suh.jpg",
    "description": "Leading Digital Solutions Company in India offering SEO, Web Development, Digital Marketing, and IT Solutions",
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "slogan": "Transforming Businesses Digitally",
    "email": "info@suhtech.top",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Habitech Crystal Mall, Knowledge Park III, 4th Floor, D-8",
      "addressLocality": "Greater Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201310",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4744,
      "longitude": 77.5040
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "customer service",
        "email": "info@suhtech.top",
        "availableLanguage": ["en", "hi"],
        "areaServed": "IN"
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "sales@suhtech.top",
        "availableLanguage": ["en", "hi"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/suhtech",
      "https://www.facebook.com/suhtech",
      "https://twitter.com/suhtech",
      "https://www.instagram.com/suhtech"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "City",
        "name": "Greater Noida"
      },
      {
        "@type": "City",
        "name": "Delhi"
      },
      {
        "@type": "City",
        "name": "Mumbai"
      },
      {
        "@type": "City",
        "name": "Bangalore"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Solutions Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Services India",
            "description": "Professional SEO services to improve search engine rankings and drive organic traffic"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development India",
            "description": "Custom website and web application development using modern technologies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing India",
            "description": "Comprehensive digital marketing solutions including social media, PPC, and content marketing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile application development for iOS and Android"
          }
        }
      ]
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SUH TECH",
    "url": "https://suhtech.top/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://suhtech.top/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://suhtech.top/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://suhtech.top/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About",
        "item": "https://suhtech.top/about"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Careers",
        "item": "https://suhtech.top/careers"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://suhtech.top/contact"
      }
    ]
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does SUH TECH offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SUH TECH offers comprehensive digital solutions including SEO services, web development, digital marketing, mobile app development, software development, branding, and IT solutions across India. We specialize in helping businesses grow their online presence and achieve digital transformation."
        }
      },
      {
        "@type": "Question",
        "name": "Where is SUH TECH located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SUH TECH is headquartered in Greater Noida, India, at Habitech Crystal Mall, Knowledge Park III, 4th Floor, D-8. We serve clients across India including Delhi NCR, Mumbai, Bangalore, Hyderabad, Chennai, Kolkata, and Pune."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose SUH TECH for digital solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SUH TECH is a trusted digital solutions partner with 500+ successful projects, 95% client retention rate, expert team of 50+ professionals, affordable pricing, 24/7 support, and proven results across various industries in India."
        }
      },
      {
        "@type": "Question",
        "name": "Does SUH TECH offer career opportunities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SUH TECH offers exciting career opportunities in SEO, Digital Marketing, Web Development, Software Development, UI/UX Design, Content Writing, and Project Management with competitive salaries and growth opportunities."
        }
      },
      {
        "@type": "Question",
        "name": "How to contact SUH TECH for services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact SUH TECH via email at info@suhtech.top, phone at +91-XXXXXXXXXX, or visit our office in Greater Noida. We offer free 30-minute consultations to discuss your digital needs."
        }
      }
    ]
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SUH TECH",
    "image": "https://suhtech.top/logo_Suh.jpg",
    "@id": "https://suhtech.top/",
    "url": "https://suhtech.top/",
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Habitech Crystal Mall, Knowledge Park III, 4th Floor, D-8",
      "addressLocality": "Greater Noida",
      "addressRegion": "UP",
      "postalCode": "201310",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4744,
      "longitude": 77.5040
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/suhtech",
      "https://www.facebook.com/suhtech"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="SUH TECH" />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="SUH TECH" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@suhtech" />
      <meta name="twitter:creator" content="@suhtech" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Geo Location Tags */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Greater Noida, India" />
      <meta name="geo.position" content="28.4744;77.5040" />
      <meta name="ICBM" content="28.4744, 77.5040" />

      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#1a365d" />
      <meta name="msapplication-TileColor" content="#1a365d" />

      {/* Structured Data Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
