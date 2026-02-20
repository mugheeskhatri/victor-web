import React from "react";

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
            Victor ("we," "us," or "our") operates the Victor mobile application
            (the "Service"). This Privacy Policy explains how we collect, use,
            and protect your personal information. Victor is an
            accountability-based habit tracking app and is not a medical,
            nutritional, or mental health service.
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
                <li>• First and last name</li>
                <li>
                  • Phone number (used for authentication and account
                  verification)
                </li>
                <li>• Usage data and device information</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">
                Phone numbers are used exclusively for login authentication,
                verification, and account-related notifications. We do not sell
                or share phone numbers with third parties for marketing
                purposes.
              </p>
            </div>

            {/* B. SMS Communications (10DLC Compliance) */}
            <div className="p-6 border-2 border-black bg-zinc-50">
              <h3 className="text-lg font-bold uppercase mb-3">
                B. SMS Communications
              </h3>

              <p className="text-gray-600 text-sm mb-4">
                Victor sends SMS messages for account verification (OTP) and
                accountability-related reminders.
              </p>

              <p className="text-gray-600 text-sm mb-4">
                During account registration inside the Victor mobile
                application, users must enter their mobile phone number and
                actively check an unchecked consent checkbox that states:
              </p>

              <p className="text-gray-800 text-sm mb-4 font-medium italic">
                "I agree to receive SMS messages from Victor regarding account
                verification, fitness reminders, and activity updates. Message
                frequency varies. Msg & data rates may apply. Reply STOP to opt
                out. Reply HELP for support."
              </p>

              <p className="text-gray-600 text-sm mb-4">
                Users cannot complete registration without checking this consent
                box. Consent is not a condition of purchase.
              </p>

              <p className="text-gray-600 text-sm mb-4">
                Users may opt out at any time by replying <strong>STOP</strong>.
                For assistance, reply <strong>HELP</strong> or contact
                privacy@victorapp.io.
              </p>

              <p className="text-black font-bold text-xs uppercase tracking-widest underline">
                Strict Non-Sharing Policy
              </p>

              <p className="text-gray-600 text-sm mt-2">
                Victor does not sell, rent, trade, or share phone numbers or SMS
                consent data with third parties for marketing or promotional
                purposes. SMS consent data is used solely for service-related
                communications.
              </p>
            </div>

            {/* C. Health Data */}
            <div>
              <h3 className="text-lg font-bold uppercase mb-3 italic">
                C. Health & Fitness Data
              </h3>
              <p className="text-gray-600 text-sm">
                Victor integrates with Apple Health (HealthKit) and Google Fit
                to access step count data for verifying daily step goals.
              </p>

              <ul className="text-gray-600 text-sm mt-3 space-y-1">
                <li>
                  • Health data is accessed solely to verify step-based goals.
                </li>
                <li>• Health data is not used for advertising or marketing.</li>
                <li>• Health data is not sold or shared with third parties.</li>
                <li>
                  • Only necessary compliance data (such as goal completion
                  status) may be stored.
                </li>
              </ul>
            </div>

            {/* D. Camera & Weigh-In Verification */}
            <div>
              <h3 className="text-lg font-bold uppercase mb-3 italic">
                D. Camera & Weigh-In Verification
              </h3>
              <p className="text-gray-600 text-sm">
                Victor uses your device camera to capture weigh-in verification
                photos. These images are used solely to confirm daily compliance
                with weigh-in rules. Photos are stored securely and are not
                shared publicly or used for marketing purposes.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Data Retention */}
        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">
            3. Data Retention
          </h2>
          <p className="text-gray-600 text-sm">
            We retain personal data only as long as necessary to provide the
            Service, comply with legal obligations, and resolve disputes.
          </p>
        </section>

        {/* 4. Security */}
        <section>
          <h2 className="text-2xl font-bold uppercase mb-6 text-black border-b-4 border-black inline-block">
            4. Security Of Data
          </h2>
          <p className="text-gray-600 text-sm">
            We implement industry-standard security measures to protect your
            information. However, no method of transmission over the Internet is
            100% secure.
          </p>
        </section>

        {/* 5. User Rights */}
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
