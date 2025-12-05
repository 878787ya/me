import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { ExpandedModal } from './ExpandedModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';

// --- 請在這裡新增您的海報 ---
const posters = [
    // 建議將您的海報命名為 poster-01.webp, poster-02.webp ... 放在 assets/posters 資料夾中
    { src: 'assets/posters/poster-01.webp', title: 'Poster 1' },
    { src: 'assets/posters/poster-02.webp', title: 'Poster 2' },
    { src: 'assets/posters/poster-03.webp', title: 'Poster 3' },
    { src: 'assets/posters/poster-04.webp', title: 'Poster 4' },
    { src: 'assets/posters/poster-05.webp', title: 'Poster 5' },
];

export const GalleryCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsExpanded(true)}
        className="col-span-1 row-span-1 md:row-span-2 bg-white rounded-[24px] p-4 flex flex-col gap-3 border border-white shadow-sm min-h-[300px] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-zoom-in group relative overflow-hidden"
      >
         <div className="flex justify-between items-center px-1 relative z-10">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">VISUAL DESIGN</span>
            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
               <Maximize2 size={16} className="text-gray-400 group-hover:text-blue-500" />
            </div>
         </div>

         {/* Swiper Preview - Shows first 5 posters */}
         <div className="flex-1 w-full h-full rounded-xl overflow-hidden mt-2">
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className="w-full h-full"
            >
                {posters.slice(0, 5).map((p, i) => (
                    <SwiperSlide key={i} className="rounded-xl overflow-hidden bg-gray-100">
                        <img 
                            src={p.src} 
                            alt={p.title} 
                            loading="lazy"
                            className="w-full h-full object-cover" 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
         </div>
      </div>

      <ExpandedModal isOpen={isExpanded} onClose={() => setIsExpanded(false)}>
        <div className="h-full w-full bg-white overflow-y-auto p-4 md:p-10">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">Curated Gallery</h2>
                    <p className="text-gray-500 mt-2">A collection of posters and visual experiments.</p>
                </div>

                {/* Simple Grid Layout (Evenly Placed, No special effects) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
                    {posters.map((p, i) => (
                        <div 
                            key={i} 
                            className="flex flex-col gap-2"
                        >
                            <img 
                                src={p.src} 
                                alt={p.title} 
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto rounded-xl border border-gray-100 shadow-sm" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </ExpandedModal>
    </>
  );
};