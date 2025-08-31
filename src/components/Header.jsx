import React, { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [shrink, setShrink] = useState(false);
  const [active, setActive] = useState("home");

  const sections = ["home", "about", "projects", "achievements"];

  useEffect(() => {
    const handleScroll = () => {
      setShadow(window.scrollY > 50);
      setShrink(window.scrollY > 50);

      sections.forEach((sec) => {
        const element = document.getElementById(sec);
        if (element) {
          const top = element.offsetTop - 120;
          const bottom = top + element.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(sec);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-white dark:bg-gray-900 transition-all ${
        shadow ? "shadow-lg" : "shadow-md"
      } ${shrink ? "py-2" : "py-4"}`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 md:px-0 transition-all duration-300">
        {/* Left - Logo */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Nivas's Portfolio
        </h1>

        {/* Right - Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`relative pb-1 ${
                active === item
                  ? "text-blue-500 font-semibold"
                  : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              } transition`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span
                className={`absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                  active === item ? "w-full" : "hover:w-full"
                }`}
              ></span>
            </button>
          ))}
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded transition hover:scale-105"
            title="Toggle Dark/Light Mode"
          >
            {isDark ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-white focus:outline-none text-2xl"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 backdrop-blur-sm transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } z-40 flex flex-col items-center justify-center space-y-6`}
      >
        {sections.map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className={`text-2xl ${
              active === item
                ? "text-blue-500 font-semibold"
                : "text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white"
            } transition`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
        {/* Dark Mode Toggle for Mobile */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded mt-4"
        >
          {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
