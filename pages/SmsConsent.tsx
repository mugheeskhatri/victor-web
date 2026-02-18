import React from "react";
import signupscreen from "../assets/signupscreen.png"

const SmsConsent: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 bg-white">
      <h1 className="text-4xl font-extrabold uppercase tracking-tight mb-10 text-black">
        SMS Consent & Opt-In Information
      </h1>

      <div className="space-y-12 text-sm text-gray-700 leading-relaxed">
        
        {/* How Users Opt In */}
        <section>
          <h2 className="text-xl font-bold uppercase mb-4 text-black">
            How Users Opt In
          </h2>

          <p>
            Users opt in to receive SMS messages from <strong>Victor</strong> 
             during account registration inside the Victor mobile application.
          </p>

          <ul className="list-disc ml-6 mt-4 space-y-2">
            <li>Users enter their mobile phone number</li>
            <li>Users actively check an unchecked SMS consent checkbox</li>
            <li>Consent is not pre-selected</li>
          </ul>
        </section>

        {/* Screenshot Section */}
        <section>
          <h2 className="text-xl font-bold uppercase mb-4 text-black">
            Signup Screen Screenshot
          </h2>

          <p className="mb-4">
            Below is a screenshot of the registration screen showing the 
            phone number field and required SMS consent checkbox.
          </p>

          <div className="border-2 border-black p-4 bg-zinc-50">
            <img
              src={signupscreen}
              alt="Victor App Signup Screen Showing SMS Consent Checkbox"
              className="w-full rounded"
            />
          </div>
        </section>

        {/* Consent Language */}
        <section className="border-2 border-black p-6 bg-zinc-50">
          <h2 className="text-lg font-bold uppercase mb-4 text-black">
            Consent Language Displayed
          </h2>

          <p className="italic text-gray-800">
            "I agree to receive SMS messages from Victor regarding account 
            verification, fitness reminders, and activity updates. 
            Message frequency varies. Msg & data rates may apply. 
            Reply STOP to opt out. Reply HELP for support."
          </p>
        </section>

        {/* Important Info */}
        <section>
          <h2 className="text-xl font-bold uppercase mb-4 text-black">
            Additional Information
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>Users cannot complete registration without checking the consent box.</li>
            <li>Victor does not use third-party marketing lists.</li>
            <li>SMS consent data is not shared with third parties.</li>
            <li>Users may opt out anytime by replying <strong>STOP</strong>.</li>
            <li>For support, reply <strong>HELP</strong> or email privacy@victorapp.io.</li>
          </ul>
        </section>

        <p className="text-xs text-gray-500 mt-10">
          This page is provided for carrier and regulatory compliance verification.
        </p>
      </div>
    </div>
  );
};

export default SmsConsent;
