import React from 'react';

const ManagedSocialMedia = () => {
  return (
    <section id="managed-social-media" className="py-10" data-aos="fade-up">
      <h2 className="text-4xl text-center font-semibold mb-6">Managed Social Media</h2>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="text-center" data-aos="fade-up-right">
            <h3 className="text-xl font-semibold mb-2">Keystone Packing</h3>
            <a href="https://keystonepacking.org" className="text-black hover:text-gray-700 block"><i className="fas fa-link text-2xl"></i> Keystone Packing</a>
            <a href="https://www.facebook.com/people/Keystone-Packing/61559563343479/" className="text-black hover:text-gray-700 block"><i className="fab fa-facebook text-2xl"></i> Keystone Packing Facebook</a>
            <a href="https://www.instagram.com/keystonepacking" className="text-black hover:text-gray-700 block"><i className="fab fa-instagram text-2xl"></i> Keystone Packing Instagram</a>
          </div>
          <div className="text-center" data-aos="fade-up">
            <h3 className="text-xl font-semibold mb-2">ProSteel</h3>
            <a href="https://prosteel-llc.com/" className="text-black hover:text-gray-700 block"><i className="fas fa-link text-2xl"></i> Prosteel LLC</a>
            <a href="https://www.facebook.com/prosteelllc" className="text-black hover:text-gray-700 block"><i className="fab fa-facebook text-2xl"></i> ProSteel Facebook</a>
            <a href="https://www.instagram.com/prosteel_llc" className="text-black hover:text-gray-700 block"><i className="fab fa-instagram text-2xl"></i> ProSteel Instagram</a>
            <a href="https://www.linkedin.com/company/prosteel-llc" className="text-black hover:text-gray-700 block"><i className="fab fa-linkedin text-2xl"></i> ProSteel LinkedIn</a>
            <a href="https://www.youtube.com/channel/UCQ5x_nPgNWsprPHhiR42OyQ?sub_confirmation=1" className="text-black hover:text-gray-700 block"><i className="fab fa-youtube text-2xl"></i> ProSteel YouTube</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagedSocialMedia;