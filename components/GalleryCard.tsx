import React, { useState } from 'react';
import { Maximize2, X, ZoomIn } from 'lucide-react';
import { ExpandedModal } from './ExpandedModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';

// --- 請在這裡新增您的海報 ---
const posters = [
    { src: 'assets/posters/poster-01.webp', title: 'Poster 1' },
    { src: 'assets/posters/poster-02.webp', title: 'Poster 2' },
    { src: 'assets/posters/poster-03.webp', title: 'Poster 3' },
    { src: 'assets/posters/poster-04.webp', title: 'Poster 4' },
    { src: 'assets/posters/poster-05.webp', title: 'Poster 5' },
    { src: 'assets/posters/poster-06.webp', title: 'Poster 6' },
    

];

export const GalleryCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

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
        <div className="h-full w-full bg-gray-50 overflow-y-auto p-4 md:p-10">
            <div className="max-w-6xl mx-auto">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">Curated Gallery</h2>
                    <p className="text-gray-500 mt-2">A collection of posters and visual experiments.</p>
                </div>

                {/* Masonry Layout using CSS Columns */}
                {/* This layout handles different aspect ratios (portrait/landscape) automatically */}
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {posters.map((p, i) => (
                        <div 
                            key={i} 
                            onClick={() => setZoomImage(p.src)}
                            className="break-inside-avoid rounded-xl overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
                        >
                            <img 
                                src={p.src} 
                                alt={p.title} 
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-500" 
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                                    <ZoomIn size={24} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Simple Lightbox Overlay */}
        {zoomImage && (
            <div className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setZoomImage(null)}>
                <button className="absolute top-6 right-6 text-white/70 hover:text-white">
                    <X size={32} />
                </button>
                <img 
                    src={zoomImage} 
                    className="max-w-full max-h-full object-contain rounded shadow-2xl" 
                    onClick={(e) => e.stopPropagation()} 
                />
            </div>
        )}
      </ExpandedModal>
    </>
  );
};