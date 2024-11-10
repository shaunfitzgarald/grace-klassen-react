import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="py-10" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-6">Contact</h2>
      <p className="text-lg text-gray-700 text-center mb-6">Feel free to schedule a consultation!</p>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/gracerebekahk/introductory-meeting"
            style={{ minWidth: '320px', height: '1000px' }} // Increased height
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;