import React, { useState } from 'react';

export const CounterCard: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="col-span-1 bg-[#F26444] rounded-[24px] p-4 flex flex-col items-center justify-center text-white relative overflow-hidden group min-h-[200px] shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent">
      <span className="font-mono text-xs opacity-60 mb-2">不知道為什麼在這裡的計數器</span>
      
      <div className="text-5xl font-display font-bold text-black/20 mb-2 tabular-nums">
        {count.toString().padStart(3, '0')}
      </div>
      
      <button 
        onClick={() => setCount(c => c + 1)}
        className="px-6 py-2 bg-white/20 border border-white/50 rounded-full font-mono text-lg backdrop-blur-sm active:scale-95 transition-transform hover:bg-white/30"
      >
        Click
      </button>
      
      <div className="absolute bottom-3 text-[10px] opacity-50 font-mono flex items-center gap-1">
        <span></span> You clicked last
      </div>
    </div>
  );
};