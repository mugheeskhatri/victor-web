
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32 bg-white">
      <h1 className="text-5xl font-extrabold uppercase tracking-tighter mb-10 text-black italic underline decoration-4 underline-offset-8">Terms of Service</h1>
      <p className="text-black font-bold uppercase tracking-widest text-xs mb-12">Last Updated: October 24, 2023</p>

      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">1. Acceptance of Terms</h2>
          <p className="text-gray-600 font-medium text-sm leading-relaxed">
            By accessing or using the Victor mobile application (the "App") and the related website (the "Site"), collectively referred to as the "Service", you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">2. Eligibility</h2>
          <p className="text-gray-600 font-medium text-sm leading-relaxed">
            You must be at least 18 years of age to use the Service. By using the Service, you represent and warrant that you have the right, authority, and capacity to enter into these Terms and to abide by all of the terms and conditions set forth herein.
          </p>
        </section>

        <section className="p-8 border-4 border-black bg-zinc-50 text-black">
          <h2 className="text-2xl font-bold uppercase mb-6 italic underline">3. Medical Disclaimer</h2>
          <p className="font-bold uppercase text-xs tracking-widest leading-relaxed text-black mb-4">
            VICTOR IS NOT A MEDICAL PROVIDER.
          </p>
          <p className="text-gray-700 font-medium text-sm leading-relaxed mb-4">
            The Service provides accountability for general health and fitness goals. We do not provide medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. 
          </p>
          <p className="text-gray-700 font-medium text-sm leading-relaxed">
            Reliance on any information provided by Victor is solely at your own risk. Victor is not responsible for any health problems that may result from training programs, dietary changes, or lifestyle adjustments you learn about through the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">4. User Conduct & Honesty</h2>
          <p className="text-gray-600 font-medium text-sm leading-relaxed mb-4">
            The integrity of the Victor community is paramount. You agree to provide true, accurate, and current information when documenting your weigh-ins, movement, and dietary habits.
          </p>
          <p className="text-black font-bold text-xs uppercase tracking-widest mb-4">Prohibited actions include but are not limited to:</p>
          <ul className="space-y-2 text-gray-500 font-bold uppercase text-[10px] tracking-[0.1em] list-disc pl-5">
            <li>Submitting fraudulent photos for weigh-in verification.</li>
            <li>Using third-party software or hardware to spoof step counts.</li>
            <li>Sharing account access with multiple individuals.</li>
            <li>Engaging in any activity that interferes with or disrupts the Service.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">5. Accountability & Consequences</h2>
          <p className="text-gray-600 font-medium text-sm leading-relaxed">
            You acknowledge and agree that Victor’s primary function is to enforce discipline through penalties. This includes, but is not limited to: resetting streaks to zero, assigning "Strikes", and potentially suspending accounts for repeated non-compliance or detected cheating.
          </p>
          <p className="text-gray-600 font-medium text-sm leading-relaxed mt-4">
            Victor is not liable for any psychological distress, frustration, or loss of progress perceived to be caused by these enforced accountability features. This "tough love" methodology is the core value proposition of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">6. Subscriptions and Payments</h2>
          <p className="text-gray-600 font-medium text-sm leading-relaxed mb-4">
            Certain features of the Service require a paid subscription. All payments are processed through the Apple App Store or Google Play Store. 
          </p>
          <ul className="space-y-2 text-gray-500 font-bold uppercase text-[10px] tracking-[0.1em]">
            <li>• Subscriptions automatically renew unless cancelled.</li>
            <li>• Refunds are subject to the policies of the respective App Store.</li>
            <li>• Failure to pay results in immediate revocation of premium access.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">7. Limitation of Liability</h2>
          <p className="text-gray-600 font-medium text-sm leading-relaxed italic">
            TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, VICTOR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">8. Governing Law</h2>
          <p className="text-gray-500 font-medium text-sm leading-relaxed">
            These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="pt-10 border-t border-black/10">
          <h2 className="text-2xl font-bold uppercase mb-6 text-black">9. Contact Information</h2>
          <p className="text-gray-500 font-medium text-sm">
            For legal notices or questions regarding these Terms, please contact:
          </p>
          <div className="mt-4 font-bold text-black uppercase text-sm tracking-widest">
            Email: legal@victorapp.io
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
