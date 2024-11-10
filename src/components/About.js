import React from 'react';
import graceImage from '../images/grace.jpeg'; // Adjust the path as necessary

const About = () => {
  return (
    <section id="about" className="py-10" data-aos="fade-right">
      <h2 className="text-4xl font-bold text-left mb-6">About</h2>
      <div className="flex flex-col items-center lg:flex-row lg:items-start">
        <img className="w-full lg:w-1/3 h-auto mb-6 lg:mb-0 lg:mr-6 rounded-lg" src={graceImage} alt="Grace Klassen" />
        <div className="max-w-2xl mx-auto text-left">
          <p className="text-lg text-gray-700">
            Welcome to Grace Klassen Marketing Solutions. I specialize in providing top-notch marketing strategies that help businesses thrive in a competitive market. With a focus on creativity, innovation, and results, I am dedicated to helping you achieve your marketing goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;