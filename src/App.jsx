import HeroSection from './components/Hero';
import Navbar from './components/Navbar';

function App() {


  return (

     <div className="min-h-screen flex flex-col">
     <Navbar />
     <main className="flex-1 flex flex-col">
       <HeroSection />

     </main>
   </div>
  );
}

export default App;
