
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Logo: React.FC = () => (
  <h1 className="text-2xl font-bold text-white tracking-wider">
    Yayan<span className="text-accent">Dev</span>
  </h1>
);

const NavLinks: React.FC<{ className?: string, onItemClick?: () => void }> = ({ className, onItemClick }) => {
  const links = ['Layanan', 'Portfolio', 'Proses', 'Testimoni', 'Kontak'];
  const linkHrefs = ['#services', '#portfolio', '#process', '#testimonials', '#contact'];

  return (
    <nav className={className}>
      {links.map((link, index) => (
        <a 
          key={link} 
          href={linkHrefs[index]}
          onClick={onItemClick}
          className="text-light hover:text-accent transition-colors duration-300 py-2"
        >
          {link}
        </a>
      ))}
    </nav>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary/80 backdrop-blur-sm sticky top-0 z-50 py-4 px-4 md:px-8 lg:px-16 border-b border-secondary">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks className="flex space-x-8" />
          <a href="#contact" className="bg-accent text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
            Konsultasi Gratis
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 bg-secondary rounded-lg p-4">
          <NavLinks 
            className="flex flex-col space-y-4 items-center" 
            onItemClick={() => setIsOpen(false)}
          />
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-accent text-white w-full text-center mt-4 block px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
            Konsultasi Gratis
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
