import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-32 bg-white">
      <h1 className="text-5xl font-extrabold uppercase tracking-tighter mb-10 text-black italic underline decoration-4 underline-offset-8">
        Privacy Policy
      </h1>
      <p className="text-black font-bold uppercase tracking-widest text-xs mb-12">
        Effective Date: October 24, 2023
      </p>

      <div className="space-y-16">

        {/* 1. Introduction */}
        
        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">
            1. Introduction
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Victor ("we," "us," or "our") operates the Victor mobile application (the "Service").
            This Privacy Policy explains how we collect, use, and protect your personal information.
          </p>
        </section>

        {/* 2. Information Collection */}
        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">
            2. Information Collection And Use
          </h2>

          <div className="space-y-10">

            {/* A. Personal Data */}
            <div>
              <h3 className="text-lg font-bold uppercase mb-3 italic">
                A. Personal Data
              </h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>• Email address</li>
                <li>• First and last name</li>
                <li>• Phone number (for SMS notifications & verification)</li>
                <li>• Address and location data</li>
                <li>• Usage data and device information</li>
              </ul>
            </div>

            {/* B. SMS Section - 10DLC REQUIRED */}
            <div className="p-6 border-2 border-black bg-zinc-50">
              <h3 className="text-lg font-bold uppercase mb-3">
                B. SMS Communications (10DLC Compliance)
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                By providing your mobile phone number during account registration,
                you consent to receive automated SMS notifications related to your account activity,
                including fitness reminders, verification messages, and accountability alerts.
              </p>

              <p className="text-gray-600 text-sm mb-4">
                Message frequency varies depending on your activity within the app.
                Message and data rates may apply.
              </p>

              <p className="text-gray-600 text-sm mb-4">
                You may opt out of SMS communications at any time by replying <strong>STOP</strong>.
                For assistance, reply <strong>HELP</strong> or contact us at privacy@victorapp.io.
              </p>

              <p className="text-black font-bold text-xs uppercase tracking-widest leading-relaxed underline">
                Strict Non-Sharing Policy
              </p>

              <p className="text-gray-600 text-sm mt-2">
                We do not sell, rent, trade, or share your personal information,
                including your mobile phone number, with third parties for marketing
                or promotional purposes. SMS consent and opt-in data are not shared
                with any third parties.
              </p>
            </div>

            {/* C. Health Data */}
            <div>
              <h3 className="text-lg font-bold uppercase mb-3 italic">
                C. Health & Fitness Data
              </h3>
              <p className="text-gray-600 text-sm">
                Victor integrates with Apple Health (HealthKit) and Google Fit
                to access step count and activity data for fitness tracking.
              </p>
              <ul className="text-gray-600 text-sm mt-3 space-y-1">
                <li>• Health data is not used for marketing.</li>
                <li>• Health data is not sold or shared with third parties.</li>
                <li>• Data is retained only as necessary to provide core functionality.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* 3. Data Retention */}
        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">
            3. Data Retention
          </h2>
          <p className="text-gray-600 text-sm">
            We retain personal data only as long as necessary to provide the Service,
            comply with legal obligations, and resolve disputes.
          </p>
        </section>

        {/* 4. Security */}
        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">
            4. Security Of Data
          </h2>
          <p className="text-gray-600 text-sm">
            We implement industry-standard security measures to protect your information.
            However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        {/* 5. Your Rights */}
        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">
            5. Your Data Protection Rights
          </h2>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Access your data</li>
            <li>• Correct inaccurate data</li>
            <li>• Request deletion of data</li>
            <li>• Withdraw consent at any time</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="pt-10 border-t border-black/10">
          <h2 className="text-2xl font-bold uppercase mb-6 text-black">
            Contact Us
          </h2>
          <p className="text-gray-600 text-sm">
            If you have any questions about this Privacy Policy, contact us at:
          </p>
          <p className="mt-3 font-bold text-black text-sm">
            privacy@victorapp.io
          </p>
        </section>

      </div>
    </div>
  );
};

export default Privacy;
