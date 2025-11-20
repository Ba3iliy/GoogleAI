import React, { useState, useEffect } from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Sections/Hero';
import { Products } from './components/Sections/Products';
import { Services } from './components/Sections/Services';
import { Documents } from './components/Sections/Documents';
import { Clients } from './components/Sections/Clients';
import { Contact } from './components/Sections/Contact';
import { ParticleBackground } from './components/UI/ParticleBackground';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80&auto=format&fit=crop')] bg-cover bg-center opacity-10"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/95 to-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-40" />
        <ParticleBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Hero />
          <Products />
          <Services />
          <Documents />
          <Clients />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;