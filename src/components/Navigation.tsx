import React from 'react';
import Container from './Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Navigation: React.FC = () => {
  return (
    <nav className="py-4 w-full">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-900 font-opensans">UXbO</div>
          {/* Links */}
          <div className="flex gap-[56px]">
            <a href="#home" className="text-gray-700 hover:text-[#265645] font-medium font-montserrat">Home</a>
            <a href="#case-studies" className="text-gray-700 hover:text-[#265645] font-medium font-montserrat">Case Studies</a>
            <a href="#contact" className="text-gray-700 hover:text-[#265645] font-medium font-montserrat">Contact</a>
          </div>
          {/* Button */}
          <div className="flex items-center gap-2 bg-[#265645] text-white px-4 py-1 rounded-lg font-semibold hover:bg-[#1e4637] transition font-montserrat cursor-pointer">
            CV
            <FontAwesomeIcon icon={faFilePdf} />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;