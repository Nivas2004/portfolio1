"use client";
import React from "react";
import { Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const AchievementsCertifications = () => {
  const achievements = [
    {
      title: "Winner - Intercollege Hackathon 2024",
      description:
        "Led a 4-member team to develop an AI-powered attendance tracking app, winning 1st place among 30+ teams.",
    },
    {
      title: "Certified Full Stack Developer",
      description:
        "Completed a comprehensive MERN stack course with real-world projects and deployment experience.",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      description:
        "Validated knowledge of AWS cloud concepts, security, and architecture best practices.",
    },
    {
      title: "LeetCode 200+ Problem Solver",
      description:
        "Achieved a streak of solving 200+ DSA problems to improve problem-solving skills.",
    },
{
  title: "Frontend & Backend Intern - Techvolt Software Pvt Ltd",
  description:
    "Completed a full-stack internship working on frontend (React, Tailwind) and backend (Node.js, Express, MongoDB) projects, gaining real-world software development experience.",
},
{
  title: "NPTEL Certification - Learning Analytical Tools",
  description:
    "Successfully completed the NPTEL exam on Learning Analytical Tools with a score of 53%, gaining foundational knowledge in data analytics.",
},
{
  title: "NASSCOM Certification - Gold Medal",
  description:
    "Successfully completed NASSCOM certification and awarded a Gold Medal for outstanding performance.",
},
{
  title: "Coursera Project Network - Getting Started with Microsoft OneDrive",
  description:
    "Completed a guided Coursera project on using Microsoft OneDrive effectively for file storage, sharing, and collaboration.",
},




  ];

  return (
    <section
      className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      id="achievements"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Award className="w-8 h-8 text-yellow-500" />
          Achievements & Certifications
        </motion.h2>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-green-500" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsCertifications;
