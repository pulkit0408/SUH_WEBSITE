import WhatsAppFloat from "./components/WhatsAppFloat";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Brands from "./pages/Brands";
import ContactUsPage from "./pages/Contact";
import Founder from "./pages/Founder";
import HeroSection from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonial";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <Brands />
        <About />
        <Services />
        <Blog />
        <Testimonials />
        <Founder />
        <ContactUsPage />
      </main>
      <WhatsAppFloat />
    </div>
  );
}

export default App;
