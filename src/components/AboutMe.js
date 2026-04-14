import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="my-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="w-64 h-64 flex-shrink-0">
          <img 
            src="/images/profile-photo.jpg"
            alt="Marcelo Profile"
            className="w-full h-full object-cover rounded-2xl shadow-lg border-4 border-white dark:border-gray-800"
          />
        </div>

        <div className="flex-1">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hi, I'm Marcelo — a passionate network security student who loves creating clean, 
            responsive, and user-friendly network designs and secure connections.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
            Currently studying Information Technology and focusing on modern network architecure and security concepts 
            like Cisco Packet Tracer and Secure++.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;