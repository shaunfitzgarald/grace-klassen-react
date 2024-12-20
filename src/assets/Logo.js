import React from 'react';
// import logo from '../assets/logo.svg';
import Star from  './new-star.png';

const Logo = () => (
  <div className="flex items-center">
    <img
      src={Star}
      alt="Grace Klassen Marketing Solutions"
      className="h-12 w-12"
    />
  </div>
);

export default Logo;