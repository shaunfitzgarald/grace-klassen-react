import React from 'react';

const services = [
  {
    title: 'Strategy and Planning',
    description: 'Develop comprehensive marketing strategies to achieve your business goals.',
    icon: 'fas fa-bullseye',
  },
  {
    title: 'Content Creation',
    description: 'Create engaging content to captivate your audience and drive traffic.',
    icon: 'fas fa-pencil-alt',
  },
  {
    title: 'Aerial Drone Filming',
    description: 'Certified drone pilot offering stunning aerial footage for your projects.',
    icon: 'fas fa-helicopter',
  },
  {
    title: 'Website Alignment',
    description: 'Ensure your website aligns with your marketing goals for maximum impact.',
    icon: 'fas fa-globe',
  },
  {
    title: 'Social Media Management',
    description: 'Manage your social media presence to engage your audience effectively.',
    icon: 'fas fa-thumbs-up',
  },
  {
    title: 'Analytics and Reporting',
    description: 'Detailed analytics and reports to measure your marketing success.',
    icon: 'fas fa-chart-pie',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800 uppercase">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl text-center"
            >
              <div className="text-blue-600 mb-6">
                <i className={`${service.icon} text-6xl`}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;