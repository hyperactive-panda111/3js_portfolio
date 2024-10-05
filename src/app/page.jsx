
import Navbar from '@/app/sections/Navbar';
import Hero from '@/app/sections/Hero';
import About from '@/app/sections/About';

const App = () => {
    return (
      <main className='max-w-7xl mx-auto relative'>
          <Navbar />
          <Hero />
          <About />
      </main>
    )
  }
  
  export default App