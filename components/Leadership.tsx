
import React, { useState } from 'react';
import { BOARD_MEMBERS } from '../constants';

export const Leadership: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-12 border-t border-[#8B0000]/10 pt-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-4 group focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className={`w-10 h-10 rounded-full bg-[#8B0000]/5 flex items-center justify-center text-[#8B0000] transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#8B0000] transition-colors">
          Meet Our Leadership Team
        </h3>
      </button>

      <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'mt-10 max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {BOARD_MEMBERS.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center group">
            <div className="relative mb-4">
              <div className="absolute inset-0 bg-[#8B0000] rounded-full scale-105 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <img 
                src={member.image} 
                alt={member.name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-[#8B0000]/20 group-hover:border-[#8B0000] transition-all duration-300"
              />
            </div>
            <h4 className="font-bold text-gray-900 leading-tight">{member.name}</h4>
            <p className="text-xs text-[#8B0000] font-semibold uppercase tracking-wider mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
