import { Route, BrowserRouter as Router, Routes, useParams } from "react-router-dom";

import WhatsAppFloat from "./components/WhatsAppFloat";
import About from "./pages/About";
import AboutPage from "./pages/AboutPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Brands from "./pages/Brands";
import ContactUsPage from "./pages/Contact";
import Footer from "./pages/Footer";
import Founder from "./pages/Founder";
import HeroSection from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonial";

const BlogPostWrapper = () => {
  const { slug } = useParams();
  return <BlogPost slug={slug} />;
};

function App() {
  return (
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

            {/* Dedicated About page route */}
            <Route path="/about" element={<AboutPage />} />

            {/* Blog post route */}
            <Route path="/blog/:slug" element={<BlogPostWrapper />} />
          </Routes>
        </main>
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
