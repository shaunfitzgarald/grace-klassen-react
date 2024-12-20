import React, { useState } from 'react';
import Logo from '../assets/Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md fixed top-4 left-4 right-4 z-50 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo />
            <a href="#top" className="ml-4 text-2xl font-bold">
              Grace Klassen Marketing Solutions
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-gray-300 transition">About</a>
            <a href="#portfolio" className="hover:text-gray-300 transition">Portfolio</a>
            <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-700 rounded-b-lg">
          <a href="#about" className="block px-4 py-2 hover:bg-blue-800 transition">About</a>
          <a href="#portfolio" className="block px-4 py-2 hover:bg-blue-800 transition">Portfolio</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-blue-800 transition">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;