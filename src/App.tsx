import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import './App.css';
import Experience from './components/Experience';

const App: React.FC = () => (
  <div className="flex flex-col gap-[120px]">
    <Navigation />
    <Hero />
    <Experience />
    {/* Add other main components here */}
    <CaseStudies />
    <Contact />
  </div>
);

export default App;
