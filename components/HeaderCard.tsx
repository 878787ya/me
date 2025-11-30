import React from 'react';

export const HeaderCard: React.FC = () => {
  return (
    <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-[#F26444] to-[#FF9F43] rounded-[24px] p-8 md:p-10 flex flex-col justify-center text-white shadow-lg min-h-[200px] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent">
      <h1 className="text-[2rem] md:text-[3.25rem] font-bold leading-[1.1] mb-3 tracking-tight">
        Creative Works by<br />Tian-Bing-Chi.
      </h1>
      <p className="text-white/90 font-medium text-sm md:text-base tracking-wide">
        UI/UX • 3D Design • Illustration
      </p>
    </div>
  );
};