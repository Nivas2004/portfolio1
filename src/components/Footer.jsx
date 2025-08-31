import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Nivas. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/Nivas2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition cursor-pointer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nivas-s-813494290/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition cursor-pointer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
