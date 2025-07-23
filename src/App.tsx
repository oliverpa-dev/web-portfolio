import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import './App.css';

const App: React.FC = () => (
  <div className="flex flex-col gap-[120px]">
    <Navigation />
    <Hero />
    {/* Add other main components here */}
  </div>
);

export default App;
