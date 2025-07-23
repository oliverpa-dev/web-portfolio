import React from 'react';

const experiences = [
  {
    company: 'iO Digital Agency',
    logo: '/io.svg',
    period: 'Feb 2025 - Jul 2025 Eindhoven',
    role: 'UX Researcher | Designer',
    project: 'Masters Graduation Project',
    description:
      'My research, "Enhancing Content Quality with Prompt Engineering and Output Visualization", focused on improving AI-assisted writing tool. I explored how prompt design and the visualization of AI suggestions can help writers better align content tone and improve the efficiency of content revision.',
    badges: ['Design Thinking', 'UI Research', 'UX Research', 'UX Design'],
  },
  {
    company: 'Cape',
    logo: '/cape.svg',
    period: 'Sep 2023 - Jan 2024 Tilburg',
    role: 'Frontend Developer',
    project: 'Bachelors Graduation Project',
    description:
      'My research, "Enhancing Content Quality with Prompt Engineering and Output Visualization", focused on improving AI-assisted writing tool. I explored how prompt design and the visualization of AI suggestions can help writers better align content tone and improve the efficiency of content revision.',
    badges: ['Design Thinking', 'React.js', 'UX Research', 'UX Design'],
  },
  {
    company: 'Cape',
    logo: '/cape.svg',
    period: 'Dec 2022 - Jun 2023 Tilburg',
    role: 'Template Designer',
    project: 'Part-time',
    description:
      'My research, "Enhancing Content Quality with Prompt Engineering and Output Visualization", focused on improving AI-assisted writing tool. I explored how prompt design and the visualization of AI suggestions can help writers better align content tone and improve the efficiency of content revision.',
    badges: ['JavaScript', 'HTML', 'CSS'],
  },
  {
    company: 'Cape',
    logo: '/cape.svg',
    period: 'Feb 2022 - Jun 2022 Tilburg',
    role: 'Frontend Developer',
    project: 'Internship',
    description:
      'My research, "Enhancing Content Quality with Prompt Engineering and Output Visualization", focused on improving AI-assisted writing tool. I explored how prompt design and the visualization of AI suggestions can help writers better align content tone and improve the efficiency of content revision.',
    badges: ['Design Thinking', 'React.js', 'UX Research', 'UX Design'],
  },
];

const Experience: React.FC = () => {
  return (
    <section className="w-full py-16">
      <h2 className="text-3xl font-bold text-center mb-16 font-montserrat">My Work Experience</h2>
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col gap-16">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex items-start gap-8 relative">
            {/* Left: Logo and Company Info */}
            <div className="flex justify-center w-[576px] min-w-[220px]">
              <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-lg bg-gray-100 object-contain mr-4" />
              <div>
                <div className="font-semibold text-gray-900 font-montserrat">{exp.company}</div>
                <div className="text-gray-500 text-sm font-montserrat">{exp.period}</div>
              </div>
            </div>
            {/* Center: Timeline */}
            <div className="relative w-12 flex flex-col items-center h-full">
              {/* Dashed line: full height of right content */}
              {idx !== experiences.length - 1 && (
                <div className="absolute left-1/2 top-6 -translate-x-1/2 h-full border-r-2 border-dashed border-gray-300 z-0" />
              )}
              {/* Circle */}
              <div className="w-6 h-6 rounded-full bg-white border-2 border-[#265645] flex items-center justify-center z-10 mt-0">
                <div className="w-3 h-3 rounded-full bg-[#5cb28c]" />
              </div>
            </div>
            {/* Right: Role, Project, Description, Badges */}
            <div className="flex-1">
              <div className="font-bold text-gray-900 font-montserrat text-lg mb-1">{exp.role}</div>
              <div className="text-sm text-gray-500 font-montserrat mb-2">{exp.project}</div>
              <div className="text-gray-700 text-sm font-montserrat mb-4">{exp.description}</div>
              <div className="flex flex-wrap gap-2">
                {exp.badges.map((badge, i) => (
                  <span key={i} className="bg-[#265645] text-white px-3 py-1 rounded-full text-xs font-semibold font-montserrat">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience; 