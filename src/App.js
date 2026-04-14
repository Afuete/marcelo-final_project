import React, { useState, useEffect } from 'react';
import './index.css';

import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen font-sans transition-colors">

      <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            My Tech Portfolio
          </h1>

          <div className="flex items-center gap-8">
            <div className="flex gap-8 text-sm font-medium">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</a>
              <a href="#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Education</a>
              <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      <header className="text-white py-28 text-center relative overflow-hidden">

        <img
          src="/images/hero-background.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">

          <div className="mx-auto mb-8 w-52 h-52">
            <img
              src="/images/profile.jpg"
              alt="Marcelo Profile"
              className="w-full h-full object-cover rounded-full border-8 border-white/30 shadow-2xl"
            />
          </div>
          <h1 className="text-6xl font-bold mb-4">
            Welcome
          </h1>

          <p className="text-2xl opacity-90">
            Passionate Network and Security Intern | Cisco Packet Tracer & Secure++
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="bg-gray-900 dark:bg-black text-gray-400 py-12 text-center">
        <p>© 2026 Marcelo • Built with React + Tailwind CSS</p>
      </footer>

    </div>
  );
}

export default App;