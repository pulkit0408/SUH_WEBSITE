import { Suspense, lazy, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Routes, useLocation, useParams } from "react-router-dom";

import SEOHead from "./components/SEOHead";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { debugAnalytics, initGA, trackPageView, trackWebVitals } from './utils/analytics';

// Lazy load components for better performance
const About = lazy(() => import("./pages/About"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Brands = lazy(() => import("./pages/Brands"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const ContactUsPage = lazy(() => import("./pages/Contact"));
const Footer = lazy(() => import("./pages/Footer"));
const Founder = lazy(() => import("./pages/Founder"));
const HeroSection = lazy(() => import("./pages/Hero"));
const Navbar = lazy(() => import("./pages/Navbar"));
const Services = lazy(() => import("./pages/Services"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const Testimonials = lazy(() => import("./pages/Testimonial"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
      <p className="text-lg text-gray-600">Loading SUH TECH...</p>
    </div>
  </div>
);

// Error component
const ErrorFallback = ({ error, resetError }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center p-8">
      <div className="text-6xl mb-4">⚠️</div>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Something went wrong</h1>
      <p className="text-gray-600 mb-6">We apologize for the inconvenience. Please try refreshing the page.</p>
      <div className="space-x-4">
        <button
          onClick={resetError}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          Go Home
        </button>
      </div>
    </div>
  </div>
);

// Simple Error Boundary using hook
const useErrorHandler = () => {
  return (error, errorInfo) => {
    console.error('Error caught:', error, errorInfo);
    // Track error in analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false,
      });
    }
  };
};

// Analytics tracking hook
const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views when location changes
    trackPageView(location.pathname + location.search, document.title);
  }, [location]);
};

// Blog Post Wrapper
const BlogPostWrapper = () => {
  const { slug } = useParams();
  return <BlogPost slug={slug} />;
};

// Analytics Wrapper Component
const AnalyticsWrapper = ({ children }) => {
  useAnalytics();
  return children;
};

// 404 Page Component
const NotFoundPage = () => (
  <>
    <SEOHead
      title="Page Not Found - SUH TECH | Digital Solutions Company India"
      description="The page you're looking for doesn't exist. Return to SUH TECH homepage for digital solutions, SEO services, web development, and digital marketing services across India."
      canonical="https://suhtech.top/404"
    />
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <div className="text-9xl font-bold text-gray-300 mb-4">404</div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <div className="space-y-4">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
          >
            Return to Homepage
          </a>
          <div className="text-gray-500">
            <p>Or try one of these popular pages:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="/services" className="text-blue-600 hover:underline">Services</a>
              <a href="/about" className="text-blue-600 hover:underline">About</a>
              <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Suspense fallback={<div></div>}>
      <Footer />
    </Suspense>
  </>
);

function App() {
  const handleError = useErrorHandler();

  useEffect(() => {
    // Initialize Google Analytics
    initGA();

    // Track Core Web Vitals
    trackWebVitals();

    // Debug analytics in development
    if (process.env.NODE_ENV === 'development') {
      setTimeout(debugAnalytics, 1000);
    }

    // Add structured data for better search results
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "SUH TECH",
      "url": "https://suhtech.top",
      "description": "India's Leading Digital Solutions Company offering SEO, Web Development, Digital Marketing, and IT Solutions",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "browserRequirements": "Requires JavaScript. Requires HTML5.",
      "softwareVersion": "1.0",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "description": "Free consultation and quote"
      },
      "featureList": [
        "SEO Services",
        "Web Development",
        "Digital Marketing",
        "Mobile App Development",
        "IT Solutions"
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Preload critical resources
    const preloadResources = [
      { href: '/logo_Suh.jpg', as: 'image' },
      { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
      { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossorigin: 'anonymous' }
    ];

    preloadResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = resource.rel || 'preload';
      link.as = resource.as;
      link.href = resource.href;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      document.head.appendChild(link);
    });

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Handle global errors
  useEffect(() => {
    const handleGlobalError = (event) => {
      handleError(event.error, { componentStack: '' });
    };

    const handleUnhandledRejection = (event) => {
      handleError(event.reason, { componentStack: 'Promise rejection' });
    };

    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [handleError]);

  return (
    <HelmetProvider>
      <Router>
        <AnalyticsWrapper>
          <div className="min-h-screen flex flex-col">
            <Suspense fallback={<LoadingSpinner />}>
              <Navbar />
            </Suspense>

            <main className="flex-1 flex flex-col">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  {/* Home page route */}
                  <Route
                    path="/"
                    element={
                      <>
                        <SEOHead
                          title="SUH TECH | Leading Digital Solutions Company India - SEO, Web Development & Digital Marketing"
                          description="SUH TECH is India's premier Digital Solutions Company offering expert SEO services, web development, digital marketing, software development, and IT solutions. Based in Greater Noida, serving clients across Delhi NCR, Mumbai, Bangalore, and pan-India with proven results."
                          canonical="https://suhtech.top/"
                          pageType="website"
                        />
                        <HeroSection />
                        <Brands />
                        <About />
                        <Services />
                        <Blog />
                        <Testimonials />
                        <Founder />
                        <ContactUsPage />
                        <Footer />
                      </>
                    }
                  />

                  {/* Services page route */}
                  <Route
                    path="/services"
                    element={
                      <>
                        <SEOHead
                          title="Digital Services - SUH TECH | Best SEO, Web Development & Digital Marketing Company India"
                          description="Explore SUH TECH's comprehensive digital services: Professional SEO Services, Custom Web Development, Result-Driven Digital Marketing, Mobile App Development, IT Solutions across India with proven ROI and 500+ successful projects."
                          canonical="https://suhtech.top/services"
                          keywords="SEO Services India, Professional Web Development India, Digital Marketing Agency India, Mobile App Development India, IT Solutions India, SUH TECH Services, Best Digital Agency Greater Noida"
                          pageType="website"
                        />
                        <ServicesPage />
                        <Footer />
                      </>
                    }
                  />

                  {/* About page route */}
                  <Route
                    path="/about"
                    element={
                      <>
                        <SEOHead
                          title="About SUH TECH - India's Leading Digital Solutions Company | Our Story, Mission & Team"
                          description="Learn about SUH TECH's journey as India's premier digital solutions company. Founded in 2020, serving 500+ clients with expert SEO, web development & digital marketing services. Meet our team of 50+ certified professionals in Greater Noida."
                          canonical="https://suhtech.top/about"
                          keywords="About SUH TECH, Digital Solutions Company India, SUH TECH Team, Company History, Greater Noida IT Company, Best Digital Agency India, SUH TECH Founder"
                          pageType="website"
                        />
                        <AboutPage />
                        <Footer />
                      </>
                    }
                  />

                  {/* Careers page route */}
                  <Route
                    path="/careers"
                    element={
                      <>
                        <SEOHead
                          title="Careers at SUH TECH - Join India's Leading Digital Solutions Company | Latest Job Openings 2024"
                          description="Explore exciting career opportunities at SUH TECH. Join our team of 50+ professionals in SEO, Web Development, Digital Marketing, Software Development roles across India. Apply now for latest openings with competitive salary and growth opportunities."
                          canonical="https://suhtech.top/careers"
                          keywords="SUH TECH Careers, Digital Marketing Jobs India, Web Developer Jobs Greater Noida, SEO Jobs India, IT Jobs Noida, Software Developer Career, Digital Agency Jobs, Remote Work Opportunities"
                          pageType="website"
                        />
                        <CareersPage />
                        <Footer />
                      </>
                    }
                  />

                  {/* Contact page route */}
                  <Route
                    path="/contact"
                    element={
                      <>
                        <SEOHead
                          title="Contact SUH TECH - Get Free Digital Marketing Consultation | Call +91-XXXXXXXXXX"
                          description="Get in touch with SUH TECH for digital solutions. Located in Greater Noida, serving pan-India. Free 30-minute consultation available. Email: info@suhtech.top | Phone: +91-XXXXXXXXXX | Office: Knowledge Park III, Greater Noida"
                          canonical="https://suhtech.top/contact"
                          keywords="Contact SUH TECH, Digital Marketing Consultation India, SUH TECH Greater Noida Office, Get Quote Digital Services, Free SEO Consultation, Best Digital Agency Contact"
                          pageType="website"
                        />
                        <ContactUsPage />
                        <Footer />
                      </>
                    }
                  />

                  {/* Additional Service Pages for Better SEO */}
                  <Route
                    path="/services/seo-services-india"
                    element={
                      <>
                        <SEOHead
                          title="Best SEO Services India - Rank #1 on Google | SUH TECH SEO Company"
                          description="Professional SEO services in India by SUH TECH. Increase website traffic by 300%, improve Google rankings, and boost online visibility. Local SEO, Technical SEO, E-commerce SEO with guaranteed results."
                          canonical="https://suhtech.top/services/seo-services-india"
                          keywords="Best SEO Services India, Professional SEO Company India, Local SEO Services, Google Ranking Optimization, SEO Agency Greater Noida"
                          pageType="service"
                        />
                        <ServicesPage />
                        <Footer />
                      </>
                    }
                  />

                  <Route
                    path="/services/web-development-india"
                    element={
                      <>
                        <SEOHead
                          title="Custom Web Development India - Responsive Websites | SUH TECH"
                          description="Professional web development services in India. Custom websites, e-commerce development, React.js applications, WordPress development. Mobile-responsive, SEO-optimized websites with modern design."
                          canonical="https://suhtech.top/services/web-development-india"
                          keywords="Web Development India, Custom Website Development, React.js Development India, E-commerce Website Development, WordPress Development Services"
                          pageType="service"
                        />
                        <ServicesPage />
                        <Footer />
                      </>
                    }
                  />

                  <Route
                    path="/services/digital-marketing-india"
                    element={
                      <>
                        <SEOHead
                          title="Digital Marketing Agency India - Social Media, PPC, Content Marketing | SUH TECH"
                          description="Complete digital marketing services in India. Social media marketing, Google Ads, content marketing, email marketing, influencer marketing. Boost your online presence with proven strategies."
                          canonical="https://suhtech.top/services/digital-marketing-india"
                          keywords="Digital Marketing Agency India, Social Media Marketing India, Google Ads Management, Content Marketing Services, PPC Agency India"
                          pageType="service"
                        />
                        <ServicesPage />
                        <Footer />
                      </>
                    }
                  />

                  {/* Blog post route */}
                  <Route
                    path="/blog/:slug"
                    element={<BlogPostWrapper />}
                  />

                  {/* 404 Page */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Suspense>
            </main>

            <WhatsAppFloat />
          </div>
        </AnalyticsWrapper>
      </Router>
    </HelmetProvider>
  );
}

export default App;
