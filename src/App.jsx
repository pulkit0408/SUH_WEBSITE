import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <HeroSection/>
      </div>
    </>
  )
}

export default App
