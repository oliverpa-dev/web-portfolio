import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faXTwitter, faLinkedinIn } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => (
  <section className="flex items-center min-w-[1200px] max-w-[1200px] mx-auto bg-[#325e51] text-white py-10 rounded-t-2xl">
    <div className="px-4 flex flex-col md:flex-row justify-evenly gap-8">
      {/* Left */}
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <div className="font-bold text-xl font-montserrat">UXbO</div>
          <div className="text-sm text-gray-200 font-montserrat">© 2025 All Rights Reserved</div>
        </div>
        <div className="flex gap-6 mt-2">
          {/* <a href="#" className="text-white hover:text-gray-300 text-2xl"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="text-white hover:text-gray-300 text-2xl"><FontAwesomeIcon icon={faXTwitter} /></a>
          <a href="#" className="text-white hover:text-gray-300 text-2xl"><FontAwesomeIcon icon={faLinkedinIn} /></a> */}
        </div>
        <button
          className="bg-black text-white px-4 py-2 rounded mt-2 font-montserrat font-semibold flex items-center gap-2 w-max"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          BACK TOP TOP <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
      {/* Right */}
      <div className="flex-1 flex flex-col gap-4 items-start md:items-end">
        <div>
          <div className="font-bold font-montserrat mb-2">Site Map</div>
          <ul className="space-y-1 font-montserrat">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#case-studies" className="hover:underline">Case Studies</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <button className="bg-black text-white px-4 py-2 rounded font-montserrat font-semibold flex items-center gap-2 mt-2">
          CV <FontAwesomeIcon icon={faFilePdf} />
        </button>
      </div>
    </div>
  </section>
);

export default Footer; 