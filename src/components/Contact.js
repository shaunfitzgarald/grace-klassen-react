import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-gray-250 to-gray-300 text-gray-800" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6 uppercase tracking-wide">
          Contact Me
        </h2>
        <p className="text-lg mb-8">
          Ready to elevate your business? Schedule a consultation and let's make something amazing together!
        </p>

        {/* Calendly Widget */}
        <div className="rounded-lg overflow-hidden shadow-xl">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/gracerebekahk/introductory-meeting"
            style={{ minWidth: '320px', height: '1000px' }}  
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;