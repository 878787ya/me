import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { ExpandedModal } from './ExpandedModal';

const artPieces = [
    { src: 'public/assets/art/art-01.webp', rot: '-rotate-6' },
    { src: 'public/assets/art/art-02.webp', rot: 'rotate-3' },
    { src: 'public/assets/art/art-03.webp', rot: '-rotate-2' },
    { src: 'public/assets/art/art-04.webp', rot: 'rotate-6' },
    { src: 'public/assets/art/art-05.webp', rot: '-rotate-3' },
    { src: 'public/assets/art/art-06.webp', rot: 'rotate-1' },
];

export const ArtCard: React.FC = () => {
  const [isScattered, setIsScattered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsExpanded(true)}
        className="col-span-1 row-span-1 bg-white rounded-[24px] p-4 flex flex-col items-center justify-center relative cursor-zoom-in border border-white shadow-sm min-h-[200px] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group overflow-visible"
        onMouseEnter={() => setIsScattered(true)}
        onMouseLeave={() => setIsScattered(false)}
      >
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
           <span className="text-[10px] font-bold text-gray-400 uppercase">DIGITAL ART</span>
        </div>
        
        {/* Updated Icon to match other cards */}
        <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors opacity-0 group-hover:opacity-100">
           <Maximize2 size={16} className="text-gray-400 group-hover:text-blue-500" />
        </div>

        {/* Pile Effect */}
        <div className="relative w-24 h-32 flex items-center justify-center mt-2">
          {artPieces.slice(0, 3).map((img, i) => (
              <img 
                  key={i}
                  src={img.src} 
                  alt="Art"
                  style={{ zIndex: 10 + i * 10 }}
                  className={`absolute w-full h-full object-cover rounded-lg border-4 border-white shadow-lg transition-all duration-500 ease-out 
                      ${isScattered 
                          ? i === 0 ? '-translate-x-8 -rotate-12' : i === 1 ? 'translate-x-8 rotate-12' : 'scale-110' 
                          : img.rot
                      }
                  `}
              />
          ))}
        </div>
        <div className="absolute bottom-4 opacity-50 text-xs font-bold text-gray-400 group-hover:opacity-0 transition-opacity">
          Click to View All
        </div>
      </div>

      <ExpandedModal isOpen={isExpanded} onClose={() => setIsExpanded(false)}>
        <div className="w-full h-full bg-gray-50 flex flex-col justify-center overflow-hidden relative">
            
            <div className="absolute top-10 left-0 w-full text-center z-10 pointer-events-none">
                <h1 className="text-6xl md:text-9xl font-black text-gray-200 uppercase opacity-50 tracking-tighter">
                    Creativity
                </h1>
            </div>

            {/* Infinite Marquee Rows - Smaller images, 3 rows */}
            <div className="space-y-6 md:space-y-8 rotate-[-2deg] scale-105">
                
                {/* Row 1: Left to Right */}
                <div className="flex w-full overflow-hidden">
                    <div className="flex animate-scroll-left w-max gap-4 md:gap-6 px-4 hover:[animation-play-state:paused]">
                        {[...artPieces, ...artPieces, ...artPieces].map((img, i) => (
                             <div key={i} className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0 bg-white rounded-xl shadow-md border-4 border-white overflow-hidden transform transition-transform hover:scale-110 hover:z-20 hover:shadow-xl">
                                <img src={img.src} className="w-full h-full object-cover" />
                             </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="flex w-full overflow-hidden">
                    <div className="flex animate-scroll-right w-max gap-4 md:gap-6 px-4 hover:[animation-play-state:paused]">
                        {[...artPieces, ...artPieces, ...artPieces].reverse().map((img, i) => (
                             <div key={i} className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0 bg-white rounded-xl shadow-md border-4 border-white overflow-hidden transform transition-transform hover:scale-110 hover:z-20 hover:shadow-xl">
                                <img src={img.src} className="w-full h-full object-cover" />
                             </div>
                        ))}
                    </div>
                </div>

                {/* Row 3: Left to Right (New) */}
                 <div className="flex w-full overflow-hidden">
                    <div className="flex animate-scroll-left w-max gap-4 md:gap-6 px-4 hover:[animation-play-state:paused]">
                        {[...artPieces, ...artPieces, ...artPieces].map((img, i) => (
                             <div key={i} className="w-40 h-40 md:w-56 md:h-56 flex-shrink-0 bg-white rounded-xl shadow-md border-4 border-white overflow-hidden transform transition-transform hover:scale-110 hover:z-20 hover:shadow-xl">
                                <img src={img.src} className="w-full h-full object-cover" />
                             </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </ExpandedModal>
    </>
  );
};