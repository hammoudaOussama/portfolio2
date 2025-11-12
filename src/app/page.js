'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-gray-900 text-white overflow-x-hidden">
      <Header />
      <Hero />
  <About />
  <Experience />
  <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}