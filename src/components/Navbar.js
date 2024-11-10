import React from 'react';
import logo from '../images/star.png'

const Navbar = () => {
  return (
    <nav className="bg-white text-black shadow" data-aos="fade-down">
      <div className="max-w-7xl mx-auto px-16 sm:px-24 lg:px-32">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-16 w-16" src={logo} alt="Logo" />
              <a href="#top" className="ml-2 font-bold text-xl">Grace Klassen Marketing Solutions</a>
            </div>
          </div>
          <div className="hidden md:ml-6 md:flex md:items-center">
            <a href="#about" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm">About Me</a>
            <a href="#portfolio" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm">Portfolio</a>
            <a href="#contact" className="text-black hover:text-gray-700 px-3 py-2 rounded-md text-sm">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;