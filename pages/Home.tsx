
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden border-b border-black/5">
        <div className="max-w-5xl mx-auto px-4 text-center z-10">
          <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8 text-black">
            RESULTS OR <br />EXCUSES.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium uppercase tracking-[0.2em] max-w-2xl mx-auto mb-12">
            The no-BS accountability coach for those who have stopped lying to themselves.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto bg-black text-white px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">
              Download on iOS
            </button>
            <button className="w-full sm:w-auto border border-black text-black px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Download on Android
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-tight text-black">
              Most apps want you to feel good. <br />
              Victor wants you to work.
            </h2>
            <p className="text-gray-500 text-base leading-relaxed font-medium uppercase tracking-wide mb-6">
              Inspiration is for amateurs. Discipline is for professionals. Victor doesn't offer "gentle reminders" or "motivational quotes." It enforces a structure that makes failure impossible.
            </p>
            <p className="text-gray-500 text-base leading-relaxed font-medium uppercase tracking-wide">
              We track the basics. No fluff. No complex macros. Just the numbers that matter.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-zinc-50 p-8 border border-black/10">
              <h3 className="text-xl font-black uppercase mb-2 text-black">Weigh-In Verification</h3>
              <p className="text-gray-400 font-medium uppercase text-xs tracking-widest">Photos don't lie. Scales don't care. Every morning, you prove you're on track.</p>
            </div>
            <div className="bg-zinc-50 p-8 border border-black/10">
              <h3 className="text-xl font-black uppercase mb-2 text-black">Movement Minimums</h3>
              <p className="text-gray-400 font-medium uppercase text-xs tracking-widest">10,000 steps. Not 9,999. If the sensor doesn't see it, it didn't happen.</p>
            </div>
            <div className="bg-zinc-50 p-8 border border-black/10">
              <h3 className="text-xl font-black uppercase mb-2 text-black">The 7:30 Cutoff</h3>
              <p className="text-gray-400 font-medium uppercase text-xs tracking-widest">Discipline is won in the evening. The kitchen closes. No exceptions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Rules */}
      <section className="py-32 px-4 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="mb-20">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-4 text-black">The Standard Rules</h2>
            <p className="text-black font-medium uppercase tracking-[0.3em] text-sm">Failure is not an option. Mistakes have consequences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="text-7xl font-black text-black/5 italic">01</div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black underline decoration-black/10 underline-offset-8">Daily Weigh-In</h3>
              <p className="text-gray-500 font-medium uppercase text-xs tracking-widest leading-loose">
                Log your weight every morning. You must provide a photo verification of the scale. No photo, no log. No log, one strike.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-7xl font-black text-black/5 italic">02</div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black underline decoration-black/10 underline-offset-8">10,000 Steps</h3>
              <p className="text-gray-500 font-medium uppercase text-xs tracking-widest leading-loose">
                Automatically synced via Apple Health or Google Fit. Your body was made to move. If you finish the day under 10k, you failed.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-7xl font-black text-black/5 italic">03</div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-black underline decoration-black/10 underline-offset-8">7:30 PM Cutoff</h3>
              <p className="text-gray-500 font-medium uppercase text-xs tracking-widest leading-loose">
                Eating after 7:30 PM EST is prohibited. This is where your willpower is tested. Log your final meal and lock the door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability System */}
      <section className="py-32 px-4 bg-zinc-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-12 text-black">The Accountability Engine</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-black p-10 border border-black shadow-xl">
              <h4 className="text-xl font-black uppercase text-white mb-4">Strikes & Streaks</h4>
              <p className="text-white/80 font-medium uppercase text-xs tracking-widest leading-relaxed">
                Miss a rule? That's a strike. Get three strikes in a month? You're done. Your streak is nuked. Start over.
              </p>
            </div>
            <div className="bg-white p-10 border border-black/10 shadow-sm">
              <h4 className="text-xl font-black uppercase text-black mb-4">Hardcore Mode</h4>
              <p className="text-gray-500 font-medium uppercase text-xs tracking-widest leading-relaxed">
                For the obsessed. One single missed day resets you back to Day 1. No warnings. No mercy.
              </p>
            </div>
            <div className="bg-white p-10 border border-black/10 md:col-span-2 shadow-sm">
              <h4 className="text-xl font-black uppercase text-gray-400 mb-4 tracking-widest">Vacation Mode</h4>
              <p className="text-gray-500 font-medium uppercase text-xs tracking-widest leading-relaxed">
                Scheduled downtime exists, but it must be earned and declared 48 hours in advance. No panic-pausing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/10 border border-black/10">
          <div className="bg-black text-white p-12 flex flex-col justify-between">
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 italic">Victor is for you if:</h3>
            <ul className="space-y-6 text-sm font-bold uppercase tracking-widest">
              <li>• You are tired of your own excuses</li>
              <li>• You crave cold, hard structure</li>
              <li>• You want to be held to a high standard</li>
              <li>• You value results over comfort</li>
            </ul>
          </div>
          <div className="bg-white text-black p-12 flex flex-col justify-between">
            <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 italic text-black">Victor is NOT for:</h3>
            <ul className="space-y-6 text-sm font-bold uppercase tracking-widest">
              <li>• People looking for "hacks"</li>
              <li>• Those who need constant validation</li>
              <li>• Anyone prone to making "exceptions"</li>
              <li>• The undisciplined</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-4 bg-white text-center border-t border-black/5">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-10 text-black">STOP TALKING. <br />START DOING.</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
          <Link to="/" className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-12 py-6 text-lg font-black uppercase tracking-widest transition-all border border-black">
            Get Access
          </Link>
          <Link to="/features" className="w-full sm:w-auto border border-black text-black px-12 py-6 text-lg font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">
            The Arsenal
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
