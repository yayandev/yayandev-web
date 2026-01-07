import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Logo: React.FC = () => (
  <a href="#" className="flex items-center gap-1 group">
    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
      Y
    </div>
    <span className="text-xl font-bold text-white tracking-wide">
      Yayan<span className="text-primary">Dev</span>
    </span>
  </a>
);

const NavLinks: React.FC<{
  className?: string;
  onItemClick?: () => void;
  mobile?: boolean;
}> = ({ className, onItemClick, mobile }) => {
  const links = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={className}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onItemClick}
          className={`relative text-slate-300 hover:text-white transition-colors duration-300 font-medium ${
            mobile ? 'text-lg py-2 block' : 'text-sm'
          }`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks className="flex space-x-8" />
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium text-sm shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
          >
            Start a Project
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col space-y-4">
              <NavLinks
                className="flex flex-col space-y-4"
                mobile
                onItemClick={() => setIsOpen(false)}
              />
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-6 py-3 rounded-xl bg-primary text-white font-bold shadow-lg"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
