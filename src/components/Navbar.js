import React, { useState, useEffect } from 'react';
import logo from '../images/star.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompactTitle, setIsCompactTitle] = useState(false);

  // Check the width to decide whether to use the compact title
  useEffect(() => {
    const checkTitleWidth = () => {
      const titleElement = document.getElementById('navbar-title');
      if (titleElement) {
        setIsCompactTitle(titleElement.offsetWidth > window.innerWidth - 100);
      }
    };

    checkTitleWidth();
    window.addEventListener('resize', checkTitleWidth);
    return () => window.removeEventListener('resize', checkTitleWidth);
  }, []);

  return (
    <nav className="bg-white text-black shadow" data-aos="fade-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img className="h-16 w-16" src={logo} alt="Logo" />
            <a
              href="#top"
              id="navbar-title"
              className="ml-2 font-bold text-xl whitespace-nowrap overflow-hidden overflow-ellipsis"
            >
              {isCompactTitle ? 'Grace Klassen Marketing' : 'Grace Klassen Marketing Solutions'}
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center space-x-4">
            <a href="#about" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm">
              About Me
            </a>
            <a href="#portfolio" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm">
              Portfolio
            </a>
            <a href="#contact" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm">
              Contact
            </a>
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#about" className="block text-black hover:text-gray-700 px-4 py-2">
            About Me
          </a>
          <a href="#portfolio" className="block text-black hover:text-gray-700 px-4 py-2">
            Portfolio
          </a>
          <a href="#contact" className="block text-black hover:text-gray-700 px-4 py-2">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;