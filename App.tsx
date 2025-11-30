import React from 'react';
import { HeaderCard } from './components/HeaderCard';
import { ProfileCard } from './components/ProfileCard';
import { SkillsCard } from './components/SkillsCard';
import { UiUxCard } from './components/UiUxCard';
import { ThreeDCard } from './components/ThreeDCard';
import { GalleryCard } from './components/GalleryCard';
import { ArtCard } from './components/ArtCard';
import { CounterCard } from './components/CounterCard';

function App() {
  return (
    <main className="w-full max-w-[1400px] mx-auto p-4 md:p-8">
      {/* 
        Grid Layout Strategy Updated for Mobile:
        - Mobile: grid-cols-1, auto-rows-auto (Height defined by content)
        - Tablet/Desktop: grid-cols-2/4, auto-rows-[200px] (Strict Bento Grid)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto md:auto-rows-[200px] gap-5">
        
        {/* Row 1: Header (2x1) & Profile (2x2) */}
        <HeaderCard />
        <ProfileCard />

        {/* Row 2: Skills (2x1) */}
        <SkillsCard />
        
        {/* Row 3: UI/UX (2x2) & 3D (1x2) & Gallery (1x2) */}
        <UiUxCard />
        <ThreeDCard />
        <GalleryCard />

        {/* Row 4: Art (1x1) & Counter (1x1) */}
        <ArtCard />
        <CounterCard />

      </div>
      
      <footer className="mt-12 text-center text-gray-400 text-sm font-medium pb-8">
        © {new Date().getFullYear()} Bing-Chi Tian. Built with React & Tailwind.
      </footer>
    </main>
  );
}

export default App;
