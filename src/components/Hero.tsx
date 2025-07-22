import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full py-16">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto px-4 md:gap-[120px]">
        {/* Left: Text */}
        <div className="flex-1 mb-8 md:mb-0">
          <h1 className="font-bold mb-4 font-montserrat text-gray-900" style={{ fontSize: '32px' }}>Hi, I'm UXbO</h1>
          <h2 className="mb-2 font-montserrat text-gray-900" style={{ fontSize: '20px' }}>Web Designer & Developer</h2>
          <p className="text-gray-700 mb-6 font-montserrat" style={{ fontSize: '16px' }}>
            I design and build beautiful web experiences. Explore my work and case studies below.
          </p>
          <a href="#case-studies" className="inline-block bg-[#265645] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e4637] transition font-montserrat">View Case Studies</a>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img src="/vite.svg" alt="Hero" className="w-64 h-64 object-contain rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 