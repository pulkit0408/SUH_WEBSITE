import { HelmetProvider } from 'react-helmet-async';
import { Route, BrowserRouter as Router, Routes, useParams } from "react-router-dom";

import SEOHead from "./components/SEOHead";
import WhatsAppFloat from "./components/WhatsAppFloat";
import About from "./pages/About";
import AboutPage from "./pages/AboutPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Brands from "./pages/Brands";
import CareersPage from "./pages/CareersPage.jsx"; // Create this
import ContactUsPage from "./pages/Contact";
import Footer from "./pages/Footer";
import Founder from "./pages/Founder";
import HeroSection from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Services from "./pages/Services";
import ServicesPage from "./pages/ServicesPage.jsx"; // Create this
import Testimonials from "./pages/Testimonial";

const BlogPostWrapper = () => {
  const { slug } = useParams();
  return <BlogPost slug={slug} />;
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 flex flex-col">
            <Routes>
              {/* Home page route */}
              <Route
                path="/"
                element={
                  <>
                    <SEOHead />
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
                      title="Services - SUH TECH | SEO, Web Development, Digital Marketing India"
                      description="Explore SUH TECH's comprehensive digital services: SEO Services, Web Development, Digital Marketing, Mobile App Development, IT Solutions across India with proven results."
                      canonical="https://suhtech.top/services"
                      keywords="SEO Services India, Web Development Services, Digital Marketing Agency, Mobile App Development, IT Solutions India, SUH TECH Services"
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
                      title="About SUH TECH - Leading Digital Solutions Company India | Our Story"
                      description="Learn about SUH TECH's journey as India's premier digital solutions company. Founded in 2020, serving 500+ clients with expert SEO, web development & digital marketing services."
                      canonical="https://suhtech.top/about"
                      keywords="About SUH TECH, Digital Solutions Company India, SUH TECH Team, Company History, Greater Noida IT Company"
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
                      title="Careers at SUH TECH - Join India's Leading Digital Solutions Company"
                      description="Explore exciting career opportunities at SUH TECH. Join our team of 50+ professionals in SEO, Web Development, Digital Marketing, Software Development roles across India."
                      canonical="https://suhtech.top/careers"
                      keywords="SUH TECH Careers, Digital Marketing Jobs India, Web Developer Jobs, SEO Jobs Greater Noida, IT Jobs India, Software Developer Career"
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
                      title="Contact SUH TECH - Digital Solutions Company Greater Noida India"
                      description="Get in touch with SUH TECH for digital solutions. Located in Greater Noida, serving pan-India. Free consultation available. Email: info@suhtech.top"
                      canonical="https://suhtech.top/contact"
                      keywords="Contact SUH TECH, Digital Marketing Consultation, SUH TECH Greater Noida Office, Get Quote Digital Services"
                    />
                    <ContactUsPage />
                    <Footer />
                  </>
                }
              />

              {/* Blog post route */}
              <Route path="/blog/:slug" element={<BlogPostWrapper />} />
            </Routes>
          </main>
          <WhatsAppFloat />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
