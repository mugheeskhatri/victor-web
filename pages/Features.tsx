
import React from 'react';

const Features: React.FC = () => {
  const featureList = [
    {
      title: "Photo-Verified Weigh-ins",
      description: "Victor requires a high-contrast photo of your scale's readout every morning. Our system ensures integrity. No manual entry cheats. No 'I forgot the scale' excuses.",
      status: "Active"
    },
    {
      title: "Seamless Step Tracking",
      description: "Direct integration with Apple Health and Google Fit. We pull the data raw. If the phone or watch didn't record it, you didn't do it. 10,000 is the floor, not the ceiling.",
      status: "Active"
    },
    {
      title: "Eating Cutoff Lockout",
      description: "The app enforces a strict 7:30 PM EST cutoff. A push notification at 7:00 PM warns you. At 7:30 PM, your day's consumption is finalized. Any failure here is a strike.",
      status: "Active"
    },
    {
      title: "Hardcore Mode",
      description: "Toggle this if you're serious. A single missed metric—one missed weigh-in, one step under 10k—instantly resets your streak to zero. No strikes. Just failure.",
      status: "Active"
    },
    {
      title: "Vacation Scheduling",
      description: "Life happens, but it should be planned. Schedule 'Restricted Duty' or 'Off-Grid' periods at least 48 hours in advance. You can't declare a vacation at 10:00 PM because you were lazy.",
      status: "Active"
    },
    {
      title: "Accountability Teams",
      description: "Form small squads of 5. If one person misses their goal, the entire squad gets a collective penalty. Peer pressure is the best fuel for discipline.",
      status: "Phase 2 – Coming Soon"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-32 animate-in slide-in-from-bottom-10 duration-700 bg-white">
      <div className="mb-20">
        <h1 className="text-7xl font-black uppercase tracking-tighter mb-4 text-black">THE ARSENAL.</h1>
        <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-sm">Built for one purpose: Absolute Compliance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
        {featureList.map((feature, idx) => (
          <div key={idx} className="bg-white p-12 group hover:bg-black transition-colors duration-300">
            <div className="flex justify-between items-start mb-6">
              <span className={`text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1 border ${feature.status.includes('Coming Soon') ? 'border-gray-200 text-gray-400' : 'border-black text-black group-hover:text-white group-hover:border-white'}`}>
                {feature.status}
              </span>
              <span className="text-4xl font-black text-black/5 group-hover:text-white/10 transition-colors">
                {String(idx + 1).padStart(2, '0')}
              </span>
            </div>
            <h3 className="text-3xl font-black uppercase tracking-tight mb-4 text-black group-hover:text-white">{feature.title}</h3>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.15em] leading-relaxed max-w-sm group-hover:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-32 p-16 border-4 border-black text-center">
        <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 text-black">Ready to commit?</h2>
        <button className="bg-black text-white px-16 py-6 text-sm font-black uppercase tracking-[0.3em] hover:bg-gray-800 transition-all">
          Join the ranks
        </button>
      </div>
    </div>
  );
};

export default Features;
