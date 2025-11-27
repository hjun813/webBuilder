import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import PortfolioSection from './components/Portfolio/PortfolioSection';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import { NAV_LINKS } from './constants';
import { Code2, Menu, X, ArrowUp } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 font-bold text-xl md:text-2xl z-50 group">
            <div className={`p-1.5 rounded-lg transition-colors ${isScrolled ? 'bg-indigo-50' : 'bg-white/10'}`}>
              <Code2 size={24} className={isScrolled ? 'text-indigo-600' : 'text-white'} />
            </div>
            <span className={`tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>CodeCraft</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors text-sm hover:translate-y-[-2px] inline-block duration-200 ${
                  isScrolled 
                    ? 'text-slate-600 hover:text-indigo-600' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-40 flex items-center justify-center transition-all duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col gap-8 text-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Comparison />
        <PortfolioSection />
        <Pricing />
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-2 font-bold text-white text-xl mb-2">
              <Code2 size={24} className="text-indigo-500" />
              <span>CodeCraft Studio</span>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} CodeCraft Studio. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 z-30 ${
          isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default App;