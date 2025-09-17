import React from "react";
import { Github, Instagram, Linkedin } from "lucide-react";

const Logo: React.FC = () => (
  <h1 className="text-2xl font-bold text-white tracking-wider">
    Yayan<span className="text-accent">Dev</span>
  </h1>
);

const SocialLinks: React.FC = () => (
  <div className="flex space-x-4">
    <a
      href="https://github.com/yayandev"
      className="text-gray-text hover:text-accent transition-colors"
    >
      <Github size={24} />
    </a>
    <a
      href="https://www.linkedin.com/in/yayanfaturrohman"
      className="text-gray-text hover:text-accent transition-colors"
    >
      <Linkedin size={24} />
    </a>
    <a
      href="https://www.instagram.com/yayan.dev"
      className="text-gray-text hover:text-accent transition-colors"
    >
      <Instagram size={24} />
    </a>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-gray-700/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Logo />
          <p className="text-gray-text text-sm">
            &copy; {new Date().getFullYear()} YayanDev. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
