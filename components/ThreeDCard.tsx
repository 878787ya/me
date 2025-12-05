import React, { useState } from 'react';
import { ModelData } from '../types';
import { Maximize2, Box, Hand, ChevronLeft, ChevronRight } from 'lucide-react';
import { ExpandedModal } from './ExpandedModal';

const models: ModelData[] = [
  { 
    id: '1', 
    src: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', 
    thumbnail: 'https://via.placeholder.com/50/F26444/FFFFFF?text=A', 
    color: 'bg-orange-500',
    title: '穿透環',
    description: '小時候最喜歡的哆啦 A 夢道具之一，把「穿牆而過」的想像做成了可以拿在手上的版本。模型裡放了磁鐵，不只是擺設，也可以吸在金屬上當作小吊飾或小玩具，算是把童年的一個小念頭做成能帶回家的東西。',
    software: ['Blender', 'Shapr3D']
  },
  { 
    id: '2', 
    src: 'https://modelviewer.dev/shared-assets/models/RobotExpressive.glb', 
    thumbnail: 'https://via.placeholder.com/50/6A4C93/FFFFFF?text=R', 
    color: 'bg-purple-500',
    title: '愛',
    description: '靈感來自美術館空間中的裝置文字「人間有愛」。以柔和曲線與小巧體積重新詮釋，製作成可隨身吊飾或桌上擺設，將展場中的溫暖語意帶入日常生活。',
    software: ['Blender', 'Shapr3D']
  },
  { 
    id: '3', 
    src: 'https://modelviewer.dev/shared-assets/models/shishkebab.glb', 
    thumbnail: 'https://via.placeholder.com/50/1982C4/FFFFFF?text=S', 
    color: 'bg-blue-500',
    title: '禁止泡湯',
    description: '取材自美術館園區的經典警示裝置「禁止泡湯」。將其重新轉化為可帶回家的小型擺設／吊飾，以簡化造型與穩定結構保留原有的幽默感與辨識度。',
    software: ['Blender', 'Shapr3D']
  },
];

export const ThreeDCard: React.FC = () => {
  const [activeModel, setActiveModel] = useState(models[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Helper to switch models
  const switchModel = (direction: 'next' | 'prev') => {
    const currentIndex = models.findIndex(m => m.id === activeModel.id);
    let newIndex;
    if (direction === 'next') {
        newIndex = (currentIndex + 1) % models.length;
    } else {
        newIndex = (currentIndex - 1 + models.length) % models.length;
    }
    setActiveModel(models[newIndex]);
  };

  return (
    <>
      <div 
        onClick={() => setIsExpanded(true)}
        className="col-span-1 row-span-1 md:row-span-2 bg-gray-50 rounded-[24px] p-5 flex flex-col border border-white shadow-sm min-h-[350px] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-zoom-in group relative"
      >
        <div className="flex justify-between items-center mb-2 relative z-10">
           <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">3D PROJECTS</span>
           <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-blue-100 transition-colors shadow-sm">
             <Maximize2 size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
           </div>
        </div>

        <div className="flex-1 bg-white rounded-xl overflow-hidden relative border border-gray-100 shadow-inner group-hover:border-blue-200 transition-colors">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            {/* Simple static preview text */}
            <div className="text-center opacity-50 group-hover:opacity-100 transition-opacity">
               <Box size={40} className="mx-auto text-gray-300 mb-2" />
               <span className="text-xs font-bold text-gray-400 uppercase">Click to Explore</span>
            </div>
          </div>

          {/* Nav Arrows for Preview */}
          <div className="absolute inset-0 flex items-center justify-between px-2 z-20 pointer-events-none">
             <button 
                onClick={(e) => { e.stopPropagation(); switchModel('prev'); }}
                className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:text-blue-500 shadow-sm transition-all pointer-events-auto opacity-0 group-hover:opacity-100"
             >
                <ChevronLeft size={18} />
             </button>
             <button 
                onClick={(e) => { e.stopPropagation(); switchModel('next'); }}
                className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:text-blue-500 shadow-sm transition-all pointer-events-auto opacity-0 group-hover:opacity-100"
             >
                <ChevronRight size={18} />
             </button>
          </div>

          {/* @ts-ignore */}
          <model-viewer
            src={activeModel.src}
            alt="A 3D model"
            auto-rotate
            shadow-intensity="1"
            style={{ width: '100%', height: '100%', pointerEvents: 'none' }} 
            // Disable interaction in collapsed mode
          />
        </div>
      </div>

      <ExpandedModal isOpen={isExpanded} onClose={() => setIsExpanded(false)}>
        <div className="flex flex-col md:flex-row h-full">
            {/* Left: Immersive Stage (70%) */}
            <div className="w-full md:w-[70%] h-[60%] md:h-full bg-gradient-to-br from-gray-50 to-gray-100 relative">
                 {/* Drag Hint Animation */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-60 pointer-events-none animate-pulse">
                     <Hand size={24} className="animate-drag-hand" />
                     <span className="text-xs uppercase font-bold tracking-widest text-gray-500">Drag to Rotate</span>
                </div>
                
                {/* @ts-ignore */}
                <model-viewer
                    src={activeModel.src}
                    alt="A 3D model"
                    auto-rotate
                    camera-controls
                    shadow-intensity="1"
                    style={{ width: '100%', height: '100%', outline: 'none' }}
                />
            </div>

            {/* Right: Character Stats / Info (30%) */}
            <div className="w-full md:w-[30%] h-[40%] md:h-full bg-white p-8 flex flex-col border-l border-gray-100 overflow-y-auto">
                <div className="mb-8">
                     <h2 className="text-4xl font-black text-gray-900 mb-2 font-display uppercase italic">
                         {activeModel.title}
                     </h2>
                     <div className="h-2 w-20 bg-gray-900"></div>
                </div>

                <div className="space-y-6 flex-1">
                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">DESCRIPTION</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {activeModel.description}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">SOFTWARE USED</h4>
                        <div className="flex gap-3">
                            {activeModel.software.map(soft => (
                                <span key={soft} className="px-3 py-1 bg-gray-100 rounded text-xs font-bold text-gray-600">
                                    {soft}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Model Selector */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Select Model</h4>
                    <div className="flex gap-3">
                        {models.map((model) => (
                        <button
                            key={model.id}
                            onClick={() => setActiveModel(model)}
                            className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all transform hover:scale-105 ${
                            activeModel.id === model.id ? 'border-gray-900 shadow-md scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                            }`}
                        >
                            <div className={`w-full h-full flex items-center justify-center font-bold text-white text-xl ${model.color}`}>
                                {model.id}
                            </div>
                        </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </ExpandedModal>
    </>
  );
};