import React from 'react';

const caseStudies = [
  {
    title: 'UX & UI Research / Design & Development',
    subtitle: 'Components Library - Web App',
    image: '/case1.png',
  },
  {
    title: 'UX & UI Research / Design & Development',
    subtitle: 'Settings Management Interface',
    image: '/case2.png',
  },
  {
    title: 'UX & UI Research / Design',
    subtitle: 'Content Excellence Suite - Web App',
    image: '/case3.png',
  },
];

const CaseStudies: React.FC = () => (
  <section className="w-full py-16">
    <div className="max-w-[1200px] mx-auto px-4">
      <h2 className="text-3xl font-bold font-montserrat mb-2">My Latest Case Studies</h2>
      <p className="text-lg text-gray-700 font-montserrat mb-8">Researching experiences and not only</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudies.map((cs, idx) => (
          <div
            key={idx}
            className="rounded-2xl p-6 h-[370px] flex flex-col justify-between bg-gradient-to-br from-[#3ba17c] to-[#265645] relative overflow-hidden"
          >
            <div>
              <div className="text-white font-bold text-xl font-montserrat leading-tight">{cs.title}</div>
              <div className="text-white text-lg font-montserrat mt-2">{cs.subtitle}</div>
            </div>
            <img
              src={cs.image}
              alt={cs.title}
              className="absolute bottom-4 right-4 w-[85%] max-w-[320px] rounded-xl shadow-lg rotate-[-10deg]"
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudies; 