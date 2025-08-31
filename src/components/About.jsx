import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex items-center justify-center px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-6">
          I'm Nivas, A passionate Full Stack Developer with a strong focus on building efficient, scalable, and visually appealing web applications. 
          With expertise in frontend technologies like React.js, Tailwind CSS, and JavaScript combined with backend frameworks such as Node.js, Express.js, and Python, I specialize in delivering end-to-end solutions that balance performance and user experience.
        </p>

        <a
          href="/Nivas'sresume.pdf"  // Make sure 'resume.pdf' is placed inside the 'public' folder
          download
          className="inline-block bg-black text-white font-medium py-2 px-6 rounded-full shadow-md hover:bg-gray-800 transition duration-300"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default About;
