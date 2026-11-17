import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Education from '../sections/Education';
import Experience from '../sections/Experience';
import Certifications from '../sections/Certifications';
import Contact from '../sections/Contact';

/**
 * HomePage - Phase 8 Assembly.
 * Incorporates the Hero, About Me, Skills, Projects, Education, Experience,
 * Certifications, and Contact sections with smooth scroll anchors.
 */
export default function HomePage() {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}
