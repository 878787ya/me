import React, { useState, useEffect, useRef } from 'react';
import { Project } from '../types';
import { Maximize2, Smartphone, Layout, ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { ExpandedModal } from './ExpandedModal';

// --- DATA (Kept same as before) ---
const projects: Project[] = [
  {
    id: 'app-1',
    title: '詐彈拆除',
    category: 'App',
    description: '一款強調易讀性與低操作門檻的防詐應用。採用卡片式介面與去線條化排版，建立清晰而有呼吸感的資訊層級。整體設計導入跨年齡友善的 Inclusive System，支援多主題與動態字級。',
    tags: ['Social Safety Utility', 'Mobile', 'UI/UX Design', 'Accessibility'],
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=800&q=80',
    ],
    features: [
      '跨年齡可讀介面: 多主題（溫和、高對比）＋字級調整，提升長輩閱讀體驗。', 
      '直觀的資料呈現: 甜甜圈圖、長條圖等視覺化方式，即時理解詐騙趨勢與類型。', 
      '沉浸式內容排版: 大圖與雜誌式編排，讓案例解析更好讀、更具層次感。'
    ]
  },
  {
    id: 'app-2',
    title: 'ScamPet',
    category: 'App',
    description: '一款以「快速理解」與「最低操作成本」為目標的日常防詐工具。採用溫和視覺與小幫手角色減輕資訊焦慮，並以最短動線規劃操作流程。',
    tags: ['Social Safety Utility', 'Mobile', 'UI/UX Design', 'Front-end Design'],
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
    ],
    features: [
      '一眼掌握風險: 首頁滾動提醒＋簡化圖表，立即吸收防詐重點。',
      '超低門檻互動: 對話式 AI、貼上即分析、一鍵上傳截圖，流程簡單明確。',
      '清楚的紀錄與趨勢: 統計圖＋分析紀錄整合，讓使用者能回顧、追蹤可疑內容。'
    ]
  },
  {
    id: 'web-1',
    title: 'Blessing Page — 祝福小網頁',
    category: 'Web',
    description: '一款用於快速傳遞祝福訊息的互動式網頁。透過極簡排版與柔和視覺，引導使用者在最短時間內完成送出祝福的操作。整體設計專注於「單頁流暢性」與「資訊直覺理解」，讓所有年齡層都能輕鬆使用。',
    tags: ['Interactive Web', 'Front-end Design', 'UI Layout'],
    images: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80',
      'https://images.unsplash.com/photo-1481487484168-9b930d5b7d9f?w=400&q=80',
    ],
    features: [
        '聚焦單頁體驗: 將所有功能整合在同一頁面，操作動線短、理解成本低。',
        '清爽的視覺層級: 搭配大字體、柔和配色與留白設計，使祝福內容更易於閱讀與分享。',
        '前端互動友好: 按鈕回饋明確、動線不複雜；行動裝置上仍保持良好閱讀與操作體驗。'
    ]
  }
];

export const UiUxCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeProject, setActiveProject] = useState<Project>(projects[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Ref for Web Gallery Scrolling
  const webGalleryRef = useRef<HTMLDivElement>(null);

  // Reset image index when switching projects
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeProject]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeProject.images.length) return;
    setCurrentImageIndex((prev) => (prev + 1) % activeProject.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeProject.images.length) return;
    setCurrentImageIndex((prev) => (prev - 1 + activeProject.images.length) % activeProject.images.length);
  };

  // Scroll Handler for Web Gallery
  const scrollWebGallery = (direction: 'left' | 'right') => {
    if (webGalleryRef.current) {
        const scrollAmount = 340; // Approx card width + gap
        webGalleryRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    }
  };

  // --- RENDER HELPERS ---
  const renderWebCollectionContent = (project: Project) => (
    <div className="flex flex-col h-full space-y-8">
       {/* 1. Header Info Section */}
       <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 space-y-5">
                <div>
                   <h3 className="text-3xl font-display font-bold text-gray-900">{project.title}</h3>
                   <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold">{tag}</span>
                      ))}
                   </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                    {project.description}
                </p>

                <div className="space-y-3 pt-2">
                    <h4 className="font-bold text-gray-900">Key Highlights</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {project.features?.map((feat, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mb-2"></div>
                            <span className="text-gray-600 text-sm leading-relaxed block">{feat}</span>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
       </div>

       {/* 2. Horizontal Scroll Gallery (Optimized for Mobile & Buttons) */}
       <div className="flex-1 w-full flex flex-col">
          <div className="flex items-center justify-between mb-4">
             <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Project Screens ({project.images.length})</h4>
             
             {/* Navigation Arrows */}
             <div className="flex gap-2">
                <button 
                    onClick={() => scrollWebGallery('left')}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-gray-600 transition-colors"
                >
                    <ChevronLeft size={16} />
                </button>
                <button 
                    onClick={() => scrollWebGallery('right')}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 text-gray-600 transition-colors"
                >
                    <ChevronRight size={16} />
                </button>
             </div>
          </div>
          
          <div 
            ref={webGalleryRef}
            className="flex gap-5 overflow-x-auto pb-8 px-1 snap-x scrollbar-hide -mx-2 md:mx-0 scroll-smooth"
          >
             {project.images.map((img, idx) => (
                <div key={idx} className="flex-shrink-0 w-[260px] md:w-[320px] snap-center group flex flex-col">
                   {/* Browser Window Mockup Frame */}
                   <div className="w-full bg-white rounded-t-xl rounded-b-md shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative">
                      {/* Browser Header */}
                      <div className="h-7 bg-gray-50 border-b border-gray-100 flex items-center px-3 gap-1.5">
                         <div className="w-2 h-2 rounded-full bg-red-400/80"></div>
                         <div className="w-2 h-2 rounded-full bg-yellow-400/80"></div>
                         <div className="w-2 h-2 rounded-full bg-green-400/80"></div>
                      </div>
                      {/* Image Content - Aspect Ratio Changed to 4:3 for shorter height */}
                      <div className="aspect-[4/3] relative bg-gray-100 group-hover:opacity-95 transition-opacity">
                         <img src={img} alt={`Screen ${idx + 1}`} className="w-full h-full object-cover object-top" />
                      </div>
                   </div>

                   {/* Info Only (Removed Button) */}
                   <div className="mt-3 flex items-center justify-center px-1">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Page {idx + 1}</span>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </div>
  );

  const renderAppContent = (project: Project) => (
    <div className="flex flex-col md:flex-row gap-8 items-start">
      {/* Mobile Mockup Area with Carousel */}
      <div className="w-full md:w-1/2 flex justify-center bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
          <div className="relative w-full max-w-[240px] aspect-[9/19] bg-black rounded-[2.5rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden group/phone">
             <img src={project.images[currentImageIndex]} alt="App Screen" className="w-full h-full object-cover transition-opacity duration-300" />
             
             {/* Carousel Navigation */}
             {project.images.length > 1 && (
               <>
                 <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 text-white/90 rounded-full flex items-center justify-center opacity-0 group-hover/phone:opacity-100 transition-all hover:bg-black hover:scale-110 z-20">
                    <ChevronLeft size={16} />
                 </button>
                 <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 text-white/90 rounded-full flex items-center justify-center opacity-0 group-hover/phone:opacity-100 transition-all hover:bg-black hover:scale-110 z-20">
                    <ChevronRight size={16} />
                 </button>
                 {/* Dots Indicator */}
                 <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1.5 z-20">
                    {project.images.map((_, idx) => (
                      <div key={idx} className={`w-1.5 h-1.5 rounded-full shadow-sm transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/40'}`} />
                    ))}
                 </div>
               </>
             )}

             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-gray-900 rounded-b-xl z-10"></div>
          </div>
      </div>

      {/* Details Area */}
      <div className="w-full md:w-1/2 space-y-5">
         <div>
           <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900">{project.title}</h3>
           <div className="flex flex-wrap gap-2 mt-2">
             {project.tags.map(tag => (
               <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">{tag}</span>
             ))}
           </div>
         </div>
         <p className="text-gray-600 leading-relaxed text-base md:text-lg">
           {project.description}
         </p>
         <div className="space-y-3">
           <h4 className="font-bold text-gray-900">Key Features</h4>
           <ul className="space-y-3">
             {project.features?.map((feat, i) => (
               <li key={i} className="flex items-start text-gray-600 text-sm md:text-base">
                 <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 mt-2 shrink-0"></div>
                 <span className="leading-relaxed">{feat}</span>
               </li>
             ))}
           </ul>
         </div>
         <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-xl font-medium hover:bg-black transition-colors flex items-center justify-center gap-2 text-sm">
              View Case Study <ArrowRight size={16} />
            </button>
            <button className="flex-1 bg-gray-100 text-gray-900 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-sm">
              Live Prototype <ExternalLink size={16} />
            </button>
         </div>
      </div>
    </div>
  );

  return (
    <>
      <div 
        onClick={() => setIsExpanded(true)}
        className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 min-h-[300px] md:min-h-0 bg-white rounded-[24px] p-6 cursor-zoom-in relative group transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden border border-white shadow-sm"
      >
        <div className="flex justify-between items-start mb-4 relative z-10">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">UI / UX Design</span>
            <h2 className="text-2xl font-display font-bold text-gray-800 mt-1 uppercase">APP & INTERFACE</h2>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
            <Maximize2 size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
          </div>
        </div>

        {/* Preview Collage */}
        <div className="absolute bottom-0 right-0 left-0 h-64 bg-gradient-to-t from-gray-50 to-transparent"></div>
        <div className="relative mt-4 grid grid-cols-2 gap-4 opacity-80 group-hover:opacity-100 transition-opacity">
            <div className="bg-blue-50 rounded-xl p-4 h-48 transform rotate-[-6deg] translate-y-4 shadow-lg border border-blue-100">
                <div className="w-full h-4 bg-blue-200 rounded-full mb-2"></div>
                <div className="w-2/3 h-4 bg-blue-200 rounded-full"></div>
                <div className="mt-8 grid grid-cols-2 gap-2">
                    <div className="bg-white h-20 rounded-lg"></div>
                    <div className="bg-white h-20 rounded-lg"></div>
                </div>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 h-48 transform rotate-[6deg] translate-y-8 shadow-lg border border-orange-100">
               <div className="flex justify-between mb-4">
                  <div className="w-8 h-8 rounded-full bg-orange-200"></div>
                  <div className="w-16 h-4 bg-orange-200 rounded-full"></div>
               </div>
               <div className="w-full h-24 bg-white rounded-lg"></div>
            </div>
        </div>
      </div>

      <ExpandedModal isOpen={isExpanded} onClose={() => setIsExpanded(false)}>
        <div className="flex flex-col md:flex-row h-full">
            {/* Sidebar Navigation - Fixed Right Padding for Close Button */}
            <div className="w-full md:w-64 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-100 flex flex-row md:flex-col pt-4 md:pt-8 pb-4 px-4 pr-14 md:pr-4 flex-shrink-0 gap-3 overflow-x-auto no-scrollbar md:overflow-visible">
               <div className="hidden md:block mb-4 px-4">
                 <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Projects</h3>
               </div>
               <div className="flex md:flex-col gap-2 md:gap-2">
                 {projects.map((p) => (
                   <button
                    key={p.id}
                    onClick={() => setActiveProject(p)}
                    className={`flex-shrink-0 md:w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center gap-3 ${
                      activeProject.id === p.id 
                        ? 'bg-white shadow-md text-gray-900 border border-gray-100' 
                        : 'bg-gray-100 md:bg-transparent text-gray-500 hover:bg-gray-200 md:hover:bg-gray-100 hover:text-gray-700'
                    }`}
                   >
                     <div className={`p-2 rounded-lg ${activeProject.id === p.id ? 'bg-gray-900 text-white' : 'bg-gray-200'}`}>
                        {p.category === 'App' ? <Smartphone size={16} /> : <Layout size={16} />}
                     </div>
                     <div className="block flex-1 min-w-0">
                        {/* Text truncation fix */}
                        <div className="font-bold text-sm whitespace-nowrap md:whitespace-normal truncate">{p.title.split('—')[0].trim()}</div>
                        <div className="text-[10px] uppercase text-gray-400 hidden md:block">{p.category}</div>
                     </div>
                   </button>
                 ))}
               </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-full bg-white relative overflow-hidden">
               <div className="flex-1 overflow-y-auto p-6 md:p-12 pb-20 md:pb-12">
                  <div key={activeProject.id} className="max-w-4xl mx-auto animate-in fade-in slide-in-from-right-4 duration-500">
                    {activeProject.category === 'Web' 
                      ? renderWebCollectionContent(activeProject) 
                      : renderAppContent(activeProject)
                    }
                  </div>
               </div>
            </div>
        </div>
      </ExpandedModal>
    </>
  );
};