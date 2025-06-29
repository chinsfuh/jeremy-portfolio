import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import { Toaster } from '@/components/ui/toaster';
import ContactButton from '@/components/portfolio/ContactButton';

function App() {
  return (
    <>
      <Helmet>
        <title>Jeremy Chin - Front-end Web Developer</title>
        <meta name="description" content="Front-end Developer and UI/UX Designer creating amazing digital experiences. Specializing in React, Node.js, and modern web technologies." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster />
        <ContactButton />
      </div>
    </>
  );
}

export default App;