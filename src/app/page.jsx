'use client';

import Navbar from '@/app/sections/Navbar';
import Hero from '@/app/sections/Hero';
import About from '@/app/sections/About';
import Projects from '@/app/sections/Projects';
import Contact from '@/app/sections/Contact';

const App = () => {
    return (
      <main className='max-w-7xl mx-auto relative'>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Contact />
      </main>
    )
  }
  
  export default App