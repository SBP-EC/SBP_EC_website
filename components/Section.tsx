
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bg?: 'white' | 'creme';
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, bg = 'white' }) => {
  return (
    <section 
      id={id} 
      className={`py-24 px-4 sm:px-6 lg:px-8 ${bg === 'creme' ? 'bg-[#FAFAF5]' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#8B0000] mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="mt-4 w-12 h-1 bg-[#8B0000] mx-auto opacity-30"></div>
        </div>
        {children}
      </div>
    </section>
  );
};
