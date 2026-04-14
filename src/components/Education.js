import React from 'react';

const Education = () => {
  return (
    <section id="education" className="my-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8">
        Education
      </h2>

      <div className="bg-white dark:bg-gray-900 p-7 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
        
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Bachelor of Secondary Education: Major in Social Studies
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Saint Louis University • 2019 - 2023
        </p>
        
        <p className="mt-5 text-gray-700 dark:text-gray-300">
          Relevant coursework: Professional Communication , Mentorship, Work Management, 
          and School Learning Management Design.
        </p>
        <br></br>

        <h4 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Bachelor of Science in Information Technology: Major in Network Security 
        </h4>
        
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          University of the Cordillera • 2024 - Present
        </p>
        
        <p className="mt-5 text-gray-700 dark:text-gray-300">
          Relevant coursework: Network Architecture, Web Development, Database Management, Software Engineering, 
          and UI/UX Design.
        </p>

      </div>
    </section>
  );
};

export default Education;