import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Hero: React.FC = () => {
  return (
    <section className="w-full py-16">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-4 md:gap-[120px]">
        {/* Left: Text */}
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="font-bold mb-4 font-montserrat text-gray-900" style={{ fontSize: '32px' }}>👋🏻 Hi there, I'm Oliver</h1>
          <h2 className="mb-2 font-montserrat text-gray-900" style={{ fontSize: '20px' }}>UX/UI Researcher & Designer</h2>
          <p className="text-gray-700 mb-6 font-montserrat" style={{ fontSize: '16px' }}>
            I solve end <span className="font-bold text-[#265645]">user challenges</span> by creating <span className="font-bold text-[#265645]">meaningful experiences</span> and <span className="font-bold text-[#265645]">design</span>.
          </p>
          <a href="#case-studies" className="inline-block bg-[#265645] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e4637] transition font-montserrat">
            View Case Studies
            <FontAwesomeIcon icon={faArrowDown} className="ml-4" />
          </a>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-80 h-80 flex items-center justify-center">
            <img src="/Vector.svg" alt="Hero background" className="object-contain w-full h-full" />
            <img src="/peep.svg" alt="Hero peep" className="object-contain absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 