
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-32 bg-white text-black">
      <div className="max-w-3xl">
        <h1 className="text-7xl font-black uppercase tracking-tighter mb-10 text-black">THE MISSION.</h1>
        <p className="text-2xl text-gray-400 font-black uppercase tracking-widest leading-tight mb-16 italic">
          Most apps are designed to be used. <br />
          Victor is designed to be <span className="text-black not-italic">OBEYED.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div className="space-y-8 text-gray-500 font-black uppercase text-xs tracking-widest leading-loose">
          <p>
            Victor was born from the realization that modern health advice is too soft. We are surrounded by apps that celebrate "showing up" and "trying your best."
          </p>
          <p>
            In the real world, "trying your best" doesn't lower your resting heart rate or shed fat. Compliance does.
          </p>
          <p>
            We didn't build a tracker. We built an enforcer. Victor is for the 1% who are tired of negotiating with their own weakness. We provide the boundary. You provide the will.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-square bg-zinc-50 text-black flex items-center justify-center p-20 border-8 border-black shadow-[0_0_0_8px_rgba(0,0,0,0.05)]">
             <div className="text-[200px] font-black italic text-black/10">V</div>
             <div className="absolute text-center mt-40">
                <h3 className="text-2xl font-black uppercase tracking-widest bg-black text-white px-4 py-1">Discipline.</h3>
             </div>
          </div>
        </div>
      </div>

      <div className="mt-40 border-t border-black/10 pt-20">
        <h2 className="text-[10px] font-black uppercase tracking-[0.8em] mb-12 text-center text-gray-400 italic">Core Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          <div>
            <h4 className="text-xl font-black uppercase mb-4 tracking-tighter text-black">Integrity</h4>
            <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">No shortcuts. No cheating.</p>
          </div>
          <div>
            <h4 className="text-xl font-black uppercase mb-4 tracking-tighter text-black">Strictness</h4>
            <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">Rules are binary.</p>
          </div>
          <div>
            <h4 className="text-xl font-black uppercase mb-4 tracking-tighter text-black">Simplicity</h4>
            <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">No hiding places.</p>
          </div>
          <div>
            <h4 className="text-xl font-black uppercase mb-4 tracking-tighter text-black">Ownership</h4>
            <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">Absolute Responsibility.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
