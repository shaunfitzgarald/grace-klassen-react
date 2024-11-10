import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between">
        <a href="https://www.linkedin.com/in/grace-klassen-b429b1208/" className="text-black hover:text-gray-700"><i className="fab fa-linkedin text-2xl"></i></a>
        <a href="https://www.facebook.com/grace.klassen.395" className="text-black hover:text-gray-700"><i className="fab fa-facebook text-2xl"></i></a>
        <p className="text-center">© 2024 Grace Klassen. All rights reserved.</p>
        <p className="text-center">Made with <i className="fas fa-heart text-red-500"></i> by <a href="https://github.com/shaunfitzgarald">shaunfitzgarald</a></p>
      </div>
    </footer>
  );
};

export default Footer;