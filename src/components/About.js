import React from 'react';
import graceImage from '../assets/IMG_0511.JPG'; 

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50 text-gray-800" data-aos="fade-right">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold mb-6 uppercase tracking-wide">About Me</h2>
          <p className="text-lg leading-relaxed mb-6">
            Welcome to <span className="font-bold text-blue-600">Grace Klassen Marketing Solutions</span>. I specialize in crafting innovative marketing strategies that empower businesses to thrive in today’s competitive market. My focus on creativity, results, and client success helps brands make a lasting impact.
          </p>
          <p className="text-lg leading-relaxed">
            Whether it’s developing a cohesive marketing plan, creating engaging content, or managing your social media presence, I’m here to guide you every step of the way.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            className="w-full max-w-sm rounded-full shadow-2xl transform hover:scale-105 transition-transform duration-500"
            src={graceImage}
            alt="Grace Klassen"
          />
        </div>
      </div>
    </section>
  );
};

export default About;