import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-display font-bold text-white">
              Bvn.Dev
            </a>
            <p className="text-dark-400 mt-2">
              CS Student | Writer | Thinker
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Vardhan1536"
              target="_blank"
              rel="noreferrer"
              className="text-dark-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/vardhan1536" 
              target="_blank"
              rel="noreferrer"
              className="text-dark-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:balavardhantummalacherla@gmail.com" 
              className="text-dark-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-dark-800 mt-8 pt-8 text-center md:text-left text-dark-400 text-sm">
          <p>&copy; {currentYear} BVN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;