import React from 'react';
import { Mail } from 'lucide-react';

export const ProfileCard: React.FC = () => {
  return (
    <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-white rounded-[24px] p-8 flex flex-col items-center justify-evenly relative shadow-sm border border-white min-h-[400px] md:min-h-0 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* 1. Centered Header - Made Bolder */}
      <div className="absolute top-8 w-full text-center">
        <h2 className="text-[11px] font-black text-gray-800 tracking-[0.25em] uppercase">Profile</h2>
      </div>

      {/* 2. Avatar - Yellow Background */}
      <div className="mt-6 mb-2">
        <div className="w-36 h-36 rounded-full bg-[#FFD579] flex items-center justify-center shadow-inner relative overflow-hidden group">
             {/* Replaced Emoji with Image - User should place file at this path */}
             <img 
                src="assets/avatar/my__head.png" 
                alt="Bing-Chi Tian" 
                className="w-[115%] h-auto object-cover mt-4 group-hover:scale-110 transition-transform duration-500"
             />
        </div>
      </div>

      {/* 3. Info Section */}
      <div className="flex flex-col items-center w-full gap-2 text-center">
        <div className="bg-gray-50/50 px-6 py-2 rounded-full">
            <h1 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] tracking-tight">Bing-Chi Tian</h1>
        </div>
        
        {/* Updated Text and Increased Font Size */}
        <p className="text-[#999] text-sm font-normal tracking-wide mt-1">
          田秉麒，田旋丸秉麒
        </p>

        {/* 4. Contact Button */}
        <a 
          href="mailto:Tbg920119@gmail.com"
          className="mt-4 flex items-center gap-2 bg-white text-gray-600 border border-gray-200 px-6 py-2.5 rounded-full text-sm font-bold hover:border-gray-800 hover:text-gray-900 transition-all"
        >
          <Mail size={14} strokeWidth={2.5} />
          Contact Me
        </a>
      </div>
    </div>
  );
};