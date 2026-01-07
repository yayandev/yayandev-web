import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background text-slate-200 font-sans selection:bg-primary/30 selection:text-white">
      <Header />
      <main className="relative overflow-hidden">
        {/* Background Gradients */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] opacity-20 animate-pulse" />
          <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-accent/20 rounded-full blur-[100px] opacity-20" />
          <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] bg-secondary/20 rounded-full blur-[120px] opacity-20" />
        </div>

        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
