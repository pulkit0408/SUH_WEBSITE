import About from "./pages/About";
import Brands from "./pages/Brands";
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
        <Testimonials />
      </main>
    </div>
  );
}

export default App;
