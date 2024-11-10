import React from 'react';
import { Carousel } from 'antd';
import agriculture1 from '../images/agriculture1.jpg';
import agriculture2 from '../images/agriculture2.jpg';
import construction1 from '../images/construction1.jpg';
import construction2 from '../images/construction2.jpg';
import construction3 from '../images/construction3.jpg';
import construction4 from '../images/construction4.jpg';
import realEstate1 from '../images/realEstate1.jpg';
import realEstate2 from '../images/realEstate2.jpg';
import realEstate3 from '../images/realEstate3.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-10" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-6">Portfolio</h2>

      {/* Agriculture Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Agriculture</h3>
        <Carousel autoplay>
          <div>
            <iframe
              src="https://drive.google.com/file/d/1FWL3-LwqJNeBQCDpvBDiSfv2cIAA2bar/preview"
              style={{ width: '100%', height: '600px' }}
              allow="autoplay"
              title="Agriculture Video"
            ></iframe>
          </div>
          <div>
            <iframe
              src="https://drive.google.com/file/d/1T4HM2RovUDwnKzG-TXuxQIGau76vSxaI/preview"
              style={{ width: '100%', height: '600px' }}
              allow="autoplay"
              title="Construction Video"
            ></iframe>
          </div>
          <div>
            <img src={agriculture1} alt="Agriculture 1" className="w-full h-[600px] object-cover" />
          </div>
          <div>
            <img src={agriculture2} alt="Agriculture 2" className="w-full h-[600px] object-cover" />
          </div>
        </Carousel>
      </div>

      {/* Construction Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Construction</h3>
        <Carousel autoplay>
          <div>
            <img src={construction1} alt="Construction 1" className="w-full h-[600px] object-cover" />
          </div>
          <div>
            <img src={construction2} alt="Construction 2" className="w-full h-[600px] object-cover" />
          </div>
          <div>
            <img src={construction3} alt="Construction 3" className="w-full h-[600px] object-cover" />
          </div>
          <div>
            <img src={construction4} alt="Construction 4" className="w-full h-[600px] object-cover" />
          </div>
        </Carousel>
      </div>

      {/* Real Estate Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Real Estate</h3>
        <Carousel autoplay>
          <div>
            <img src={realEstate1} alt="Real Estate 1" className="w-full h-[600px] object-cover" />
          </div>
          <div>
            <img src={realEstate2} alt="Real Estate 2" className="w-full h-[600px] object-cover" />
          </div>
          <div>
            <img src={realEstate3} alt="Real Estate 3" className="w-full h-[600px] object-cover" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Portfolio;