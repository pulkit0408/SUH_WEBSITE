import About from "./pages/About";
import Brands from "./pages/Brands";
import HeroSection from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Services from "./pages/Services";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <Brands />
        <About />
        <Services />
      </main>
    </div>
  );
}

export default App;
