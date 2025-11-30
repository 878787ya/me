import React from 'react';

export const SkillsCard: React.FC = () => {
  const skills = ['UI Layout', 'App Interface', '3D Modeling', '3D Printing', 'Visual Composition', 'Content Structuring', 'Front-end Design'];
  const tools = ['Figma', 'Flutter', 'Shapr3D', 'Blender', 'Procreate', 'Notion'];

  return (
    <div className="col-span-1 md:col-span-2 row-span-1 bg-white rounded-[24px] p-6 md:p-8 flex flex-col justify-center gap-5 border border-white shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      {/* Skills Section */}
      <div>
        <h3 className="text-[10px] font-extrabold text-[#bbb] tracking-[0.15em] uppercase mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map(s => (
            <span key={s} className="px-3 py-1 bg-[#F3F4F6] text-[#374151] rounded-full text-[13px] font-bold border border-[#E5E7EB] hover:-translate-y-0.5 transition-transform cursor-default">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Tools Section */}
      <div>
        <h3 className="text-[10px] font-extrabold text-[#bbb] tracking-[0.15em] uppercase mb-3">Tools</h3>
        <div className="flex flex-wrap gap-2">
          {tools.map(t => (
            <span key={t} className="px-3 py-1 bg-[#FFF7ED] text-[#C2410C] rounded-full text-[13px] font-bold border border-[#FFEDD5] hover:-translate-y-0.5 transition-transform cursor-default">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};