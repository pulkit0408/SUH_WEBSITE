import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title = "SUH TECH | Leading Digital Solutions Company India - SEO, Web Development & Digital Marketing",
  description = "SUH TECH is India's premier Digital Solutions Company offering expert SEO services, web development, digital marketing, software development, and IT solutions. Based in Greater Noida, serving clients across Delhi NCR, Mumbai, Bangalore, and pan-India with proven results.",
  keywords = "Digital Solutions India, Best SEO Company India, Digital Marketing Agency India, Web Development Company India, Software Development India, IT Solutions Provider India, SUH TECH Greater Noida",
  canonical = "https://suhtech.top/",
  ogImage = "https://suhtech.top/logo_Suh.jpg",
  pageType = "website",
  publishedTime,
  modifiedTime,
  author = "SUH TECH Team",
  section = "Technology"
}) => {

  // Enhanced Organization Schema with more comprehensive data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://suhtech.top/#organization",
    "name": "SUH TECH",
    "alternateName": ["SUH TECH PRIVATE LIMITED", "SuhTech", "Suh Tech"],
    "url": "https://suhtech.top/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://suhtech.top/logo_Suh.jpg",
      "width": "300",
      "height": "300"
    },
    "image": "https://suhtech.top/logo_Suh.jpg",
    "description": "Leading Digital Solutions Company in India offering SEO, Web Development, Digital Marketing, and IT Solutions with proven expertise serving 500+ clients across India",
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "SUH TECH Founder"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "50-100"
    },
    "slogan": "Transforming Businesses Digitally",
    "email": "info@suhtech.top",
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "₹₹₹",
    "currenciesAccepted": "INR, USD",
    "paymentAccepted": "Cash, Credit Card, UPI, NEFT, Bank Transfer",
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
        "areaServed": "IN",
        "hoursAvailable": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        ]
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "sales@suhtech.top",
        "availableLanguage": ["en", "hi"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "technical support",
        "email": "support@suhtech.top",
        "availableLanguage": ["en", "hi"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/suhtech",
      "https://www.facebook.com/suhtech",
      "https://twitter.com/suhtech",
      "https://www.instagram.com/suhtech",
      "https://www.youtube.com/channel/suhtech",
      "https://in.pinterest.com/suhtech"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "India",
        "@id": "https://en.wikipedia.org/wiki/India"
      },
      {
        "@type": "State",
        "name": "Uttar Pradesh",
        "containedIn": {
          "@type": "Country",
          "name": "India"
        }
      },
      {
        "@type": "City",
        "name": "Greater Noida",
        "containedIn": {
          "@type": "State",
          "name": "Uttar Pradesh"
        }
      },
      {
        "@type": "City",
        "name": "Delhi",
        "containedIn": {
          "@type": "Country",
          "name": "India"
        }
      },
      {
        "@type": "City",
        "name": "Mumbai",
        "containedIn": {
          "@type": "Country",
          "name": "India"
        }
      },
      {
        "@type": "City",
        "name": "Bangalore",
        "containedIn": {
          "@type": "Country",
          "name": "India"
        }
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
            "description": "Professional SEO services to improve search engine rankings and drive organic traffic",
            "provider": {
              "@type": "Organization",
              "name": "SUH TECH"
            },
            "areaServed": {
              "@type": "Country",
              "name": "India"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SEO Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local SEO",
                    "description": "Local search optimization for businesses"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Technical SEO",
                    "description": "Website technical optimization for search engines"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "E-commerce SEO",
                    "description": "SEO optimization for online stores"
                  }
                }
              ]
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development India",
            "description": "Custom website and web application development using modern technologies",
            "provider": {
              "@type": "Organization",
              "name": "SUH TECH"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing India",
            "description": "Comprehensive digital marketing solutions including social media, PPC, and content marketing",
            "provider": {
              "@type": "Organization",
              "name": "SUH TECH"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile application development for iOS and Android",
            "provider": {
              "@type": "Organization",
              "name": "SUH TECH"
            }
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Anonymous Client"
        },
        "reviewBody": "Excellent digital marketing services. SUH TECH helped us increase our online visibility significantly."
      }
    ],
    "award": [
      "Best Digital Solutions Company Greater Noida 2023",
      "Top SEO Agency India 2023",
      "Excellence in Web Development 2023"
    ]
  };

  // Enhanced Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://suhtech.top/#website",
    "name": "SUH TECH - Digital Solutions Company India",
    "alternateName": "SuhTech",
    "url": "https://suhtech.top/",
    "description": "India's leading digital solutions company offering SEO, web development, digital marketing, and IT services",
    "publisher": {
      "@id": "https://suhtech.top/#organization"
    },
    "inLanguage": "en-IN",
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://suhtech.top/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "mainEntity": {
      "@id": "https://suhtech.top/#organization"
    }
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://suhtech.top/#service",
    "name": "SUH TECH Digital Solutions",
    "image": "https://suhtech.top/logo_Suh.jpg",
    "description": "Professional digital solutions including SEO, web development, digital marketing, and IT services across India",
    "provider": {
      "@id": "https://suhtech.top/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@id": "https://suhtech.top/#services"
    },
    "priceRange": "₹₹₹",
    "telephone": "+91-XXXXXXXXXX",
    "url": "https://suhtech.top/",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "17:00"
      }
    ]
  };

  // Enhanced Breadcrumb Schema
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

  // Enhanced FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does SUH TECH offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SUH TECH offers comprehensive digital solutions including SEO services, web development, digital marketing, mobile app development, software development, branding, e-commerce development, cloud solutions, and IT consulting services across India. We specialize in helping businesses grow their online presence and achieve digital transformation with proven results."
        }
      },
      {
        "@type": "Question",
        "name": "Where is SUH TECH located and which areas do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SUH TECH is headquartered in Greater Noida, India, at Habitech Crystal Mall, Knowledge Park III, 4th Floor, D-8. We serve clients across India including Delhi NCR (Noida, Gurgaon, Faridabad), Mumbai, Pune, Bangalore, Hyderabad, Chennai, Kolkata, Ahmedabad, and all major cities with remote and on-site support options."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose SUH TECH for digital marketing and web development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SUH TECH is a trusted digital solutions partner with 500+ successful projects, 95% client retention rate, expert team of 50+ professionals, affordable pricing, 24/7 support, proven ROI results, cutting-edge technology stack, and comprehensive services. We have helped businesses achieve 300% increase in website traffic, 250% boost in lead generation, and 200% improvement in online sales."
        }
      },
      {
        "@type": "Question",
        "name": "What makes SUH TECH different from other digital agencies in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SUH TECH stands out with our data-driven approach, transparent pricing, dedicated account managers, custom solutions tailored to Indian market needs, multilingual support (English & Hindi), local market expertise, proven track record with startups to enterprises, and comprehensive post-launch support. We focus on delivering measurable business growth rather than just vanity metrics."
        }
      },
      {
        "@type": "Question",
        "name": "Does SUH TECH offer career opportunities and what positions are available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SUH TECH offers exciting career opportunities in SEO, Digital Marketing, Web Development (React.js, Node.js), Software Development, Mobile App Development, UI/UX Design, Content Writing, Project Management, and Business Development with competitive salaries, flexible work options, skill development programs, health insurance, and growth opportunities in India's leading digital company."
        }
      },
      {
        "@type": "Question",
        "name": "How to get started with SUH TECH services and what is the process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Getting started with SUH TECH is easy: 1) Contact us via email (info@suhtech.top) or phone (+91-XXXXXXXXXX) for a free consultation, 2) We analyze your business needs and current digital presence, 3) Receive a customized proposal with timeline and pricing, 4) Project kickoff with dedicated team assignment, 5) Regular progress updates and transparent reporting. We offer free 30-minute consultations to discuss your digital needs."
        }
      },
      {
        "@type": "Question",
        "name": "What is SUH TECH's pricing structure and do you offer packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SUH TECH offers flexible pricing options including project-based fixed costs, monthly retainers, and custom enterprise packages. We provide transparent pricing with no hidden costs, competitive rates suitable for startups to large enterprises, payment plans, and ROI-focused pricing models. Contact us for a detailed quote based on your specific requirements and budget."
        }
      }
    ]
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://suhtech.top/#localbusiness",
    "name": "SUH TECH",
    "image": "https://suhtech.top/logo_Suh.jpg",
    "url": "https://suhtech.top/",
    "telephone": "+91-XXXXXXXXXX",
    "email": "info@suhtech.top",
    "priceRange": "₹₹₹",
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
      "https://www.facebook.com/suhtech",
      "https://twitter.com/suhtech",
      "https://www.instagram.com/suhtech"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "150"
    }
  };

  // Article Schema (for blog posts and pages)
  const articleSchema = pageType === 'article' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": ogImage,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@id": "https://suhtech.top/#organization"
    },
    "datePublished": publishedTime,
    "dateModified": modifiedTime || publishedTime,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical
    },
    "articleSection": section
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />

      {/* Enhanced SEO Meta Tags */}
      <meta name="revisit-after" content="1 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="language" content="English" />
      <meta name="expires" content="never" />
      <meta name="copyright" content="SUH TECH" />
      <meta name="designer" content="SUH TECH Design Team" />
      <meta name="publisher" content="SUH TECH" />
      <meta name="web_author" content="SUH TECH Development Team" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="en-in" href={canonical} />
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="hi-in" href={`${canonical}?lang=hi`} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="SUH TECH - Leading Digital Solutions Company India" />
      <meta property="og:site_name" content="SUH TECH" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="hi_IN" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      <meta property="article:author" content={author} />
      <meta property="article:section" content={section} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@suhtech" />
      <meta name="twitter:creator" content="@suhtech" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="SUH TECH - Digital Solutions Company India" />

      {/* LinkedIn */}
      <meta property="linkedin:owner" content="SUH TECH" />

      {/* Geo Location Tags */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Greater Noida, Uttar Pradesh, India" />
      <meta name="geo.position" content="28.4744;77.5040" />
      <meta name="ICBM" content="28.4744, 77.5040" />
      <meta name="DC.title" content={title} />

      {/* Mobile & App */}
      <meta name="theme-color" content="#1a365d" />
      <meta name="msapplication-TileColor" content="#1a365d" />
      <meta name="msapplication-TileImage" content="/logo_Suh.jpg" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="SUH TECH" />

      {/* Favicon Links */}
      <link rel="icon" type="image/jpg" href="/logo_Suh.jpg" />
      <link rel="apple-touch-icon" href="/logo_Suh.jpg" />
      <link rel="shortcut icon" href="/logo_Suh.jpg" />

      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />

      {/* Structured Data Schemas */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
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

      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}

      {/* Additional SEO Tags for Rich Snippets */}
      <meta name="application-name" content="SUH TECH" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

    </Helmet>
  );
};

export default SEOHead;
