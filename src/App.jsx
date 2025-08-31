import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AchievementsCertifications from './components/AchievementsCertifications';
function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <AchievementsCertifications />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
