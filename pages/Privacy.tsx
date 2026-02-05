
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32 bg-white">
      <h1 className="text-5xl font-extrabold uppercase tracking-tighter mb-10 text-black italic underline decoration-4 underline-offset-8">Privacy Policy</h1>
      <p className="text-black font-bold uppercase tracking-widest text-xs mb-12">Effective Date: October 24, 2023</p>
      
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">1. Introduction</h2>
          <p className="text-gray-600 font-medium text-sm leading-relaxed mb-4">
            Victor ("we," "us," or "our") operates the Victor mobile application (the "Service"). This Privacy Policy is designed to inform you of our practices regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>
          <p className="text-gray-600 font-medium text-sm leading-relaxed">
            We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">2. Information Collection And Use</h2>
          <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold uppercase mb-3 italic">A. Personal Data</h3>
              <p className="text-gray-500 text-sm mb-4">While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-400 font-bold uppercase text-[10px] tracking-[0.1em]">
                <li>• Email address</li>
                <li>• First name and last name</li>
                <li>• Phone number (for SMS & Verification)</li>
                <li>• Address, State, Province, ZIP/Postal code, City</li>
                <li>• Cookies and Usage Data</li>
              </ul>
            </div>

            <div className="p-6 border-2 border-black bg-zinc-50">
              <h3 className="text-lg font-bold uppercase mb-3">B. SMS & Phone Number Usage (10DLC Compliance)</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Victor collects your phone number for the primary purposes of account verification, security, and the delivery of critical accountability reminders.
              </p>
              <p className="text-black font-bold text-xs uppercase tracking-widest leading-relaxed mb-4 underline">
                Strict Non-Sharing Policy:
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties. We do not sell, rent, or lease our customer lists to third parties.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold uppercase mb-3 italic">C. Health & Fitness Data</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Victor integrates with Apple Health (HealthKit) and Google Fit. We access your step count and active energy data to verify your daily movement goals.
              </p>
              <ul className="space-y-2 text-gray-500 text-[11px] font-medium italic">
                <li>• We do not use Health Data for marketing or advertising purposes.</li>
                <li>• We do not share Health Data with third parties other than as necessary to provide the Service's core functionality.</li>
                <li>• We do not store your raw health data longer than required to calculate your daily compliance status.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">3. Usage Data</h2>
          <p className="text-gray-600 font-medium text-sm leading-relaxed">
            We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device ("Usage Data").
          </p>
          <p className="text-gray-600 font-medium text-sm leading-relaxed mt-2">
            This Usage Data may include information such as your device's IP address, browser type, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">4. Data Retention</h2>
          <p className="text-gray-600 font-medium text-sm leading-relaxed">
            Victor will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
          </p>
          <p className="text-gray-600 font-medium text-sm leading-relaxed mt-2">
            We will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of our Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">5. Security Of Data</h2>
          <p className="text-gray-600 font-medium text-sm leading-relaxed">
            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security. We employ industry-standard encryption for all data at rest and in transit.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">6. Your Data Protection Rights</h2>
          <p className="text-gray-600 font-medium text-sm leading-relaxed mb-4">
            Victor aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
          </p>
          <ul className="space-y-4 text-gray-500 font-bold uppercase text-[10px] tracking-[0.1em]">
            <li>• Access: You can request copies of your Personal Data.</li>
            <li>• Rectification: You can request that we correct any information you believe is inaccurate.</li>
            <li>• Erasure: You can request that we erase your Personal Data, under certain conditions.</li>
            <li>• Withdraw Consent: Where we rely on your consent to process data, you have the right to withdraw that consent at any time.</li>
          </ul>
        </section>

        <section className="pt-10 border-t border-black/10">
          <h2 className="text-2xl font-bold uppercase mb-6 text-black">7. Contact Us</h2>
          <p className="text-gray-500 font-medium text-sm">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <div className="mt-4 font-bold text-black uppercase text-sm tracking-widest">
            Email: privacy@victorapp.io
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
