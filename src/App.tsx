import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import './App.css';
import Experience from './components/Experience';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => (
  <div className="flex flex-col gap-[120px]">
    <Navigation />
    <Hero />
    <Experience />
    <CaseStudies />
    <Contact />
    <Footer />
  </div>
);

export default App;
  