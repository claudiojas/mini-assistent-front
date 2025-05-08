import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 py-4 px-6">
      <div className="flex justify-center space-x-6">
        <a 
          href="https://github.com/claudiosoares" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Github size={24} />
        </a>
        <a 
          href="https://linkedin.com/in/claudiosoares" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
      </div>
      <p className="text-gray-500 text-center mt-3 text-sm">
        &copy; {new Date().getFullYear()} Cláudio Soares
      </p>
    </footer>
  );
};

export default Footer;