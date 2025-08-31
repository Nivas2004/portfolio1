import React from "react";
 // 👈 must match file name exactly
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-900 text-black dark:text-white shadow-lg fixed top-0 z-50 transition-colors duration-500">
      <h1 className="text-2xl font-bold tracking-wide hover:scale-105 transition-transform">
        Nivas's Portfolio
      </h1>

      <div className="flex gap-8 items-center text-lg">
        <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
        <a href="#about" className="hover:text-blue-500 transition-colors">About</a>
        <a href="#projects" className="hover:text-blue-500 transition-colors">Projects</a>
        <a href="#achievementscertifications" className="hover:text-blue-500 transition-colors">
          Achievements & Certifications
        </a>

        {/* Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
