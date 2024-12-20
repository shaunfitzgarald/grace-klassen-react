import React from 'react';

const managedAccounts = [
  {
    name: 'Keystone Packing',
    website: 'https://keystonepacking.org',
    facebook: 'https://www.facebook.com/people/Keystone-Packing/61559563343479/',
    instagram: 'https://www.instagram.com/keystonepacking',
  },
  {
    name: 'ProSteel',
    website: 'https://prosteel-llc.com/',
    facebook: 'https://www.facebook.com/prosteelllc',
    instagram: 'https://www.instagram.com/prosteel_llc',
    linkedin: 'https://www.linkedin.com/company/prosteel-llc',
    youtube: 'https://www.youtube.com/channel/UCQ5x_nPgNWsprPHhiR42OyQ?sub_confirmation=1',
  },
];

const ManagedSocialMedia = () => {
  return (
    <section id="managed-social-media" className="py-16 bg-gradient-to-b from-gray-200 to-gray-250">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 uppercase tracking-wide text-gray-800">
          Managed Social Media
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {managedAccounts.map((account, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-2xl transform transition-transform hover:scale-105 hover:shadow-3xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">{account.name}</h3>
              <div className="flex flex-col space-y-4">
                {account.website && (
                  <a
                    href={account.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 transition"
                  >
                    <i className="fas fa-globe text-3xl"></i>
                    <span className="text-lg font-semibold">Website</span>
                  </a>
                )}
                {account.facebook && (
                  <a
                    href={account.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-800 transition"
                  >
                    <i className="fab fa-facebook text-3xl"></i>
                    <span className="text-lg font-semibold">Facebook</span>
                  </a>
                )}
                {account.instagram && (
                  <a
                    href={account.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 text-pink-500 hover:text-pink-700 transition"
                  >
                    <i className="fab fa-instagram text-3xl"></i>
                    <span className="text-lg font-semibold">Instagram</span>
                  </a>
                )}
                {account.linkedin && (
                  <a
                    href={account.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 text-blue-700 hover:text-blue-900 transition"
                  >
                    <i className="fab fa-linkedin text-3xl"></i>
                    <span className="text-lg font-semibold">LinkedIn</span>
                  </a>
                )}
                {account.youtube && (
                  <a
                    href={account.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 text-red-500 hover:text-red-700 transition"
                  >
                    <i className="fab fa-youtube text-3xl"></i>
                    <span className="text-lg font-semibold">YouTube</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagedSocialMedia;