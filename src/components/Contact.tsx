import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowRight, faPen } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  const [message, setMessage] = useState('');
  const maxChars = 300;

  return (
    <section className="w-full py-16">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row gap-12 items-start">
        {/* Left: Form */}
        <form className="flex-1 max-w-xl">
          <h2 className="text-3xl font-bold font-montserrat mb-2">Let's Get In Touch</h2>
          <p className="text-lg font-montserrat mb-6">
            Or just reach out manually to{' '}
            <span className="text-[#265645] font-semibold">example@example.com</span>
          </p>
          <label className="block font-semibold mb-1 font-montserrat">Email Address</label>
          <div className="relative mb-6">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#265645]">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full pl-10 pr-4 py-2 border border-[#265645] rounded-lg font-montserrat focus:outline-none"
            />
          </div>
          <label className="block font-semibold mb-1 font-montserrat">Message</label>
          <div className="relative mb-2">
            <textarea
              placeholder="Enter your main text here..."
              maxLength={maxChars}
              rows={6}
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full p-4 border border-[#265645] rounded-lg font-montserrat focus:outline-none resize-none"
            />
            <span className="absolute bottom-2 right-4 text-[#265645]">
              <FontAwesomeIcon icon={faPen} />
            </span>
          </div>
          <div className="text-right text-sm text-gray-500 mb-4 font-montserrat">
            {maxChars - message.length}/{maxChars}
          </div>
          <button
            type="submit"
            className="bg-[#265645] text-white px-6 py-2 rounded-lg font-semibold font-montserrat flex items-center gap-2 hover:bg-[#1e4637] transition"
          >
            Submit Form <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-end">
          <img
            src="/contact-illustration.svg"
            alt="Contact illustration"
            className="max-w-xs w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact; 