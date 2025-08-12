import About from './components/About';
import Brands from './components/Brands';
import HeroSection from './components/Hero';
import Navbar from './components/Navbar';

function App() {


  return (

     <div className="min-h-screen flex flex-col">
     <Navbar />
     <main className="flex-1 flex flex-col">
       <HeroSection />
       <Brands/>
       <About/>

     </main>
   </div>
  );
}

export default App;
