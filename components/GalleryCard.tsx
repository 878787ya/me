import React, { useState } from 'react';
import { Maximize2, X, ZoomIn } from 'lucide-react';
import { ExpandedModal } from './ExpandedModal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';

// Mock Posters
const posters = [
    { src: 'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=600&q=80', title: 'Neon Nights' },
    { src: 'https://images.unsplash.com/photo-1563207153-f403bf28390b?w=600&q=80', title: 'Abstract Flow' },
    { src: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&q=80', title: 'Glass Morph' },
    { src: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80', title: 'Geometric' },
    { src: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=600&q=80', title: 'Retro Wave' },
    { src: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=600&q=80', title: 'Cyber Punk' },
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

         {/* Swiper Preview */}
         <div className="flex-1 w-full h-full rounded-xl overflow-hidden mt-2">
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                className="w-full h-full"
            >
                {posters.slice(0, 4).map((p, i) => (
                    <SwiperSlide key={i} className="rounded-xl overflow-hidden">
                        <img src={p.src} alt={p.title} className="w-full h-full object-cover" />
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
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {posters.map((p, i) => (
                        <div 
                            key={i} 
                            onClick={() => setZoomImage(p.src)}
                            className="break-inside-avoid rounded-xl overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <img src={p.src} alt={p.title} className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-500" />
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
            <div className="fixed inset-0 z-[150] bg-black/95 flex items-center justify-center p-4" onClick={() => setZoomImage(null)}>
                <button className="absolute top-6 right-6 text-white/70 hover:text-white">
                    <X size={32} />
                </button>
                <img src={zoomImage} className="max-w-full max-h-full object-contain rounded shadow-2xl" onClick={(e) => e.stopPropagation()} />
            </div>
        )}
      </ExpandedModal>
    </>
  );
};