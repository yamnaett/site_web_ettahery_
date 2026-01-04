
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';

import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Contact from './components/Contact';



function App() {
  return (
    <div className="min-h-screen font-sans text-gray-800 antialiased selection:bg-primary/20">
      <Header />

      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />

        <FAQ />
        <Testimonials />
        <Booking />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
