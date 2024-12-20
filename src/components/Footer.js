import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Social Links */}
        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/grace-klassen-b429b1208/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a href="https://www.facebook.com/grace.klassen.395" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm">
          © 2024 Grace Klassen. All rights reserved.
        </p>

        {/* Credit */}
        <p className="text-center text-sm">
          Made with <i className="fas fa-heart text-red-400"></i> by 
          <a href="https://github.com/shaunfitzgarald" target="_blank" rel="noopener noreferrer" className="ml-1 hover:underline">
            Shaun Fitzgarald
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;