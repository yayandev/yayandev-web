import React from 'react';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

const Logo: React.FC = () => (
  <div className="flex items-center gap-2 mb-4">
     <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
      Y
    </div>
    <span className="text-2xl font-bold text-white tracking-wide">
      Yayan<span className="text-primary">Dev</span>
    </span>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Helping businesses grow with modern, high-performance websites and applications. Let's build something amazing together.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: Github, href: 'https://github.com/yayandev' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/yayanfaturrohman' },
                { icon: Instagram, href: 'https://www.instagram.com/yayan.dev' },
                { icon: Mail, href: 'mailto:contact@yayandev.com' },
              ].map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Technical Consulting'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {['About', 'Process', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} YayanDev. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
