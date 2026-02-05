
import React, { useState } from 'react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left hover:text-black transition-colors group"
      >
        <span className="text-xl font-black uppercase tracking-tight text-gray-400 group-hover:text-black">{question}</span>
        <span className="text-2xl font-black text-black">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-8 text-gray-500 font-bold uppercase text-xs tracking-widest leading-loose animate-in fade-in slide-in-from-top-2 duration-300">
          {answer}
        </div>
      )}
    </div>
  );
};

const Support: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-32 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h1 className="text-7xl font-black uppercase tracking-tighter mb-8 text-black">FAQ.</h1>
          <p className="text-gray-400 font-black uppercase tracking-[0.4em] text-xs mb-12 italic">Answers for the committed.</p>
          
          <div className="space-y-2">
            <FAQItem 
              question="Can I skip a day?" 
              answer="Only if you schedule Vacation Mode 48 hours in advance. Otherwise, no. A skip is a failure." 
            />
            <FAQItem 
              question="Verification Method?" 
              answer="Photos only. No manual entry. Integrity is enforced through imagery." 
            />
            <FAQItem 
              question="Device change?" 
              answer="Log in to your account. Your streaks are synced. Maintain your gear." 
            />
            <FAQItem 
              question="Subscription?" 
              answer="Discipline requires investment. Refer to the App Store for pricing." 
            />
            <FAQItem 
              question="Cutoff changes?" 
              answer="No. 7:30 PM EST is absolute. We do not negotiate on standards." 
            />
          </div>
        </div>

        <div className="bg-zinc-50 p-12 border-4 border-black h-fit sticky top-32">
          <h2 className="text-3xl font-black uppercase mb-8 text-black italic underline underline-offset-8">Support</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-black">Email Address</label>
              <input type="email" className="w-full bg-white border border-black/10 p-4 focus:bg-white focus:border-black outline-none font-bold text-black transition-colors" />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-black">Category</label>
              <select className="w-full bg-white border border-black/10 p-4 focus:bg-white focus:border-black outline-none font-bold uppercase text-sm text-black transition-colors">
                <option>Technical</option>
                <option>Billing</option>
                <option>Rules</option>
              </select>
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-black">Message</label>
              <textarea rows={4} className="w-full bg-white border border-black/10 p-4 focus:bg-white focus:border-black outline-none font-bold text-black transition-colors" placeholder="Briefly."></textarea>
            </div>
            <button type="submit" className="w-full bg-black hover:bg-gray-800 text-white py-5 text-sm font-black uppercase tracking-[0.4em] transition-all">
              Submit
            </button>
          </form>
          <p className="mt-8 text-[9px] text-gray-400 font-black uppercase tracking-widest text-center">
            Response expectation: 24 Hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
