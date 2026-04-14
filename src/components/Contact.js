import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="my-16 scroll-mt-20">
      <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8">
        Get In Touch
      </h2>
      
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
        {submitted && (
          <p className="text-green-600 dark:text-green-400 text-center mb-6 font-medium">
            ✅ Thank you! Your message has been received.
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-900 dark:text-white resize-y"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;