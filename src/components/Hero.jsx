import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen flex items-center bg-black text-white relative"
      style={{
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between w-full h-full">
        {/* Left Side */}
        <div className="flex flex-col justify-center items-start h-full w-full md:w-1/2 space-y-6">
          {/* Animated "Hello" */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-3xl md:text-5xl font-semibold text-white"
          >
            Hello
          </motion.h2>

          {/* Animated Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white"
          >
            I'm Nivas S
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg md:text-xl text-white max-w-lg"
          >
            A Full Stack Developer passionate about creating elegant, responsive web applications.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4 mt-4"
          >
            <a
              href="https://www.linkedin.com/in/nivas-s-813494290/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-white hover:text-black border border-white text-white py-2 px-6 rounded-full font-medium transition duration-300"
            >
              Get In Touch
            </a>
            <a
              href="mailto:nivas7624@gmail.com"
              className="text-white underline underline-offset-4 hover:text-gray-300 transition"
            >
              nivas7624@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Right Side Placeholder */}
        <div className="hidden md:block w-1/2" />
      </div>
    </section>
  );
};

export default Hero;
