import React from 'react';
import { Carousel } from 'antd';
import agriculture1 from '../assets/agriculture1.jpg';
import agriculture2 from '../assets/agriculture2.jpg';
import construction1 from '../assets/construction1.jpg';
import construction2 from '../assets/construction2.jpg';
import construction3 from '../assets/construction3.jpg';
import construction4 from '../assets/construction4.jpg';
import realEstate1 from '../assets/realEstate1.jpg';
import realEstate2 from '../assets/realEstate2.jpg';
import realEstate3 from '../assets/realEstate3.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 uppercase tracking-wide text-gray-800">
          Portfolio
        </h2>

        {/* Agriculture Section */}
        <div className="mb-16 bg-white p-8 rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-700 uppercase">Agriculture</h3>
          <Carousel autoplay>
            <div className="rounded-lg overflow-hidden">
              <iframe
                src="https://drive.google.com/file/d/1FWL3-LwqJNeBQCDpvBDiSfv2cIAA2bar/preview"
                className="w-full h-[500px] rounded-lg"
                allow="autoplay"
                title="Agriculture Video"
              ></iframe>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={agriculture1} alt="Agriculture 1" className="w-full h-[500px] object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={agriculture2} alt="Agriculture 2" className="w-full h-[500px] object-cover" />
            </div>
          </Carousel>
        </div>

        {/* Construction Section */}
        <div className="mb-16 bg-white p-8 rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-700 uppercase">Construction</h3>
          <Carousel autoplay>
            <div className="rounded-lg overflow-hidden">
              <img src={construction1} alt="Construction 1" className="w-full h-[500px] object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={construction2} alt="Construction 2" className="w-full h-[500px] object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={construction3} alt="Construction 3" className="w-full h-[500px] object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={construction4} alt="Construction 4" className="w-full h-[500px] object-cover" />
            </div>
          </Carousel>
        </div>

        {/* Real Estate Section */}
        <div className="mb-16 bg-white p-8 rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-700 uppercase">Real Estate</h3>
          <Carousel autoplay>
            <div className="rounded-lg overflow-hidden">
              <img src={realEstate1} alt="Real Estate 1" className="w-full h-[500px] object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={realEstate2} alt="Real Estate 2" className="w-full h-[500px] object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={realEstate3} alt="Real Estate 3" className="w-full h-[500px] object-cover" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;