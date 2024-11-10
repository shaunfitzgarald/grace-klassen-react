import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-10" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-6">Services</h2>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center" data-aos="fade-up-right">
            <i className="fas fa-bullseye text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Strategy and Planning</h3>
            <p className="text-gray-700">Developing comprehensive marketing strategies to achieve your business goals.</p>
          </div>
          <div className="text-center" data-aos="fade-up">
            <i className="fas fa-mobile text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Content Creation</h3>
            <p className="text-gray-700">Creating engaging content to captivate your audience and drive traffic.</p>
          </div>
          <div className="text-center" data-aos="fade-up-left">
            <i className="fas fa-helicopter text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Aerial Drone Filming</h3>
            <p className="text-gray-700">Certified drone pilot offering stunning aerial footage for your projects.</p>
          </div>
          <div className="text-center" data-aos="fade-up-right">
            <i className="fas fa-chart-line text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Website Alignment</h3>
            <p className="text-gray-700">Ensuring your website aligns with your marketing goals for maximum impact.</p>
          </div>
          <div className="text-center" data-aos="fade-up">
            <i className="fas fa-thumbs-up text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Social Media Management</h3>
            <p className="text-gray-700">Managing your social media presence to engage with your audience effectively.</p>
          </div>
          <div className="text-center" data-aos="fade-up-left">
            <i className="fas fa-chart-pie text-4xl mb-4"></i>
            <h3 className="text-xl font-semibold mb-2">Analytics and Reporting</h3>
            <p className="text-gray-700">Providing detailed analytics and reports to measure your marketing success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;