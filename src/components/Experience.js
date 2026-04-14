import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="my-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8">
        Experience
      </h2>

      <div className="bg-white dark:bg-gray-900 p-7 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Pre-Service Teacher
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Baguio City Science National High School & SLU-Basic Education. • 2022 - 2023
        </p>

        <ul className="mt-6 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3">
          <li>Assisted in monitoring network traffic and identifying potential security threats</li>
          <li>Collaborated with IT and security teams to maintain secure network infrastructure</li>
          <li>Implemented basic security measures and supported vulnerability assessments</li>
        </ul>
        <br></br>

        <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Network Security Intern
        </h4>
        
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          So-and-So Network Help Co. • 2026 - Present
        </p>

        <ul className="mt-6 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-3">
          <li>Assisted in monitoring network traffic and identifying potential security threats</li>
          <li>Collaborated with IT and security teams to maintain secure network infrastructure</li>
          <li>Implemented basic security measures and supported vulnerability assessments</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;