import React, { useState } from "react";

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-black/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left hover:text-black transition-colors group"
      >
        <span className="text-xl font-black uppercase tracking-tight text-gray-400 group-hover:text-black">
          {question}
        </span>
        <span className="text-2xl font-black text-black">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <p dangerouslySetInnerHTML={{ __html: answer }} className="pb-8 text-gray-500 font-bold uppercase text-xs tracking-widest leading-loose animate-in fade-in slide-in-from-top-2 duration-300">
        </p>
      )}
    </div>
  );
};

const Support: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-32 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* LEFT — FAQ */}
        <div>
          <h1 className="text-7xl font-black uppercase tracking-tighter mb-8 text-black">
            FAQ.
          </h1>

          <p className="uppercase tracking-[0.4em] text-sm text-black mb-12 italic">
            Answers for the committed.
          </p>

          <div className="space-y-2">
            <FAQItem
              question="Can I skip a day?"
              answer="Only if you schedule Vacation Mode 48 hours in advance. Otherwise, a skipped day counts as failure."
            />

            <FAQItem
              question="Verification Method?"
              answer="Photos only. Manual entries are not allowed to preserve accountability integrity."
            />

            <FAQItem
              question="Device change?"
              answer="Simply log back into your account. Your data and streaks automatically sync."
            />


            <FAQItem
              question="Cutoff changes?"
              answer="Cutoff timing enforces discipline and cannot be modified."
            />

            {/* Apple-friendly technical FAQs */}
            <FAQItem
              question="I cannot login?"
              answer="Check your credentials and internet connection. Reinstall the app if the issue continues."
            />

            <FAQItem
              question="App crashing?"
              answer="Update the app to the latest version and restart your device before contacting support."
            />

            <FAQItem
              question="How can I delete my account?"
              answer="You can request full account and data deletion by emailing <a href='mailto:harsh@relibit.com' class='text-black underline'>harsh@relibit.com</a>."
            />
          </div>
        </div>

        {/* RIGHT — SUPPORT FORM */}
        <div className="bg-zinc-50 p-12 border-4 border-black h-fit sticky top-32">
          <h2 className="text-3xl font-black uppercase mb-4 text-black italic underline underline-offset-8">
            Support
          </h2>

          {/* Direct email (Apple requirement) */}
          <p className="text-[14px] uppercase tracking-[0.2em] mb-6 text-black-600">
            Direct contact:
            <a
              href="mailto:harsh@relibit.com"
              className="text-black underline ml-1"
            >
              harsh@relibit.com
            </a>
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-black">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-white border border-black/10 p-4 focus:border-black outline-none font-bold text-black"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-black">
                Category
              </label>
              <select className="w-full bg-white border border-black/10 p-4 focus:border-black outline-none font-bold uppercase text-sm text-black">
                <option>Technical</option>
                <option>Billing</option>
                <option>Rules</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-black">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-white border border-black/10 p-4 focus:border-black outline-none font-bold text-black"
                placeholder="Briefly."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white py-5 text-sm font-black uppercase tracking-[0.4em]"
            >
              Submit
            </button>
          </form>

          <p className="mt-8 text-[9px] text-gray-400 font-black uppercase tracking-widest text-center">
            Response expectation: 24 Hours.
          </p>

          {/* Account deletion box (VERY IMPORTANT) */}
          <div className="mt-10 border-t border-black/10 pt-8 text-center">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-black mb-3">
              Account & Data Deletion
            </p>

            <a
              href="mailto:support@victorapp.com?subject=Delete%20My%20Account"
              className="inline-block border border-black px-6 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition"
            >
              Request Deletion
            </a>
          </div>

          {/* Footer links */}
          <div className="mt-12 text-center text-[10px] uppercase tracking-widest text-gray-400 font-black">
            <a href="/privacy" className="mx-2 underline">
              Privacy Policy
            </a>
            <a href="/terms" className="mx-2 underline">
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;