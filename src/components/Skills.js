import React from 'react';

const Skills = () => {
  const skills = [
    "React JS", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", 
    "CSS3", "Git & GitHub", "Responsive Design", "API Integration"
  ];

  return (
    <section id="skills" className="my-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8">
        Skills
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-900 px-6 py-5 rounded-2xl text-center font-medium 
                       shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-800
                       hover:border-blue-500 dark:hover:border-blue-400"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;