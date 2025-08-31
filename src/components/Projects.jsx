import React from 'react';
import { motion } from 'framer-motion';

const projects = [
{
    title: 'AI Resume Analyzer',
    description: 'An AI-powered tool that analyzes resumes, provides skill and keyword insights, and gives tailored improvement suggestions.',
    link: 'https://ai-resume-analyzer-frontend-gilt.vercel.app/',
  },
 {
    title: 'Imagify – Text to Image Generator',
    description: 'A creative AI tool that generates images from textual descriptions using advanced machine learning models.',
    link: 'https://imagify-frontend-etio.vercel.app/', // Replace with your live link if deployed
  },
   {
    title: 'Personal Portfolio',
    description: 'A fully responsive and interactive portfolio website built with React and TailwindCSS, showcasing projects, achievements, and professional profile.',
    link: 'https://portfolio1-one-ashen.vercel.app/', // Replace with your live portfolio link if deployed
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-6 py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-md rounded-lg p-6 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
