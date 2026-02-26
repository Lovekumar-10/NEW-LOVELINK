import React from "react";
import { ShieldCheck, Info, AlertTriangle } from "lucide-react";

const SafetyProtocal = () => {
  return (
    <div className="w-full pt-20 min-h-screen px-4 sm:px-6 md:px-16 lg:px-40 py-12 bg-[var(--bg-main)] font-[var(--ff-primary)]">
      {/* Header */}
      <header className="text-center mb-12">
        <ShieldCheck
          className="mx-auto mb-4"
          style={{
            width: "clamp(3rem, 4vw, 6rem)",
            height: "clamp(3rem, 4vw, 6rem)",
            color: "var(--color-primary)",
          }}
        />
        <h1
          style={{
            fontFamily: "var(--ff-primary)",
            fontSize: "var(--fs-h1)",
            fontWeight: "var(--fw-bold)",
            color: "var(--color-primary)",
            lineHeight: 1.2,
          }}
        >
          Be safe online
        </h1>
        <p
          style={{
            fontFamily: "var(--ff-secondary)",
            fontSize: "var(--fs-body)",
            color: "var(--text-secondary)",
            opacity: 0.8,
            marginTop: "1rem",
          }}
        >
          Last updated: February 2026
        </p>
      </header>

      {/* Section 1: Why Safe Matrimony */}
      <div className="w-full max-w-[1200px] mx-auto py-10 space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <Info className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Why Safe Matrimony?
          </h3>
        </div>
        <p className="text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify">
          Today, a large number of people use online matrimony services to
          search for a life partner, and millions have found success through
          such platforms. However, a few instances of fraud have been reported.{" "}
          <span className="text-[var(--color-primary)] not-italic font-bold">
            LoveLink
          </span>{" "}
          promotes responsible behavior to help users stay protected while
          searching for a partner online.
        </p>
      </div>

      {/* Section 2: Never Give Money */}
      <div className="w-full max-w-[1200px] mx-auto py-10 space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            1. Never Ever Give Money to Anyone
          </h3>
        </div>
        <p className="text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify">
          Anybody requesting money through the platform should be treated with
          extreme caution and is likely a fraudster. Common tactics include
          posing as separated, divorced, or foreign-based individuals targeting
          men and women aged 30–40, divorcees, or widowers. They often:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-[var(--text-primary)]">
          <li>Avoid video calls or in-person meetings.</li>
          <li>Use fake identities or stolen photos.</li>
          <li>Manipulate emotionally through sweet talk or false promises.</li>
        </ul>
        <p className="text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify">
          Common fraudulent stories include being stuck at the airport, lost
          credit cards, sudden accidents, or critically ill family members. Some
          may claim they want to send you money to settle down in India, then
          demand payments for “customs clearance” later.
        </p>
        <p className="text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify font-bold">
          Never transfer or share money with anyone met through the platform
          under any circumstance.
        </p>
      </div>

      {/* Section 3: No Physical Relationship Before Marriage */}
      <div className="w-full max-w-[1200px] mx-auto py-10 space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            2. No Physical Relationship Before Marriage
          </h3>
        </div>
        <p className="text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify">
          Engaging in a physical relationship before marriage can place you at
          significant emotional, social, or legal risk. Avoid private or
          isolated meetings. Prefer meeting in public places or with trusted
          family members or friends. Always prioritize your personal safety.
        </p>
      </div>

      {/* Section 4: Background Checks */}
      <div className="w-full max-w-[1200px] mx-auto py-10 space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <Info className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            3. Check Background Details Before Committing to Marriage
          </h3>
        </div>
        <p className="text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify">
          A commitment to marriage should only be made after:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-[var(--text-primary)]">
          <li>Face-to-face meetings with the prospective partner.</li>
          <li>Meeting their family and relatives.</li>
          <li>Verifying workplace and job credentials.</li>
          <li>Conducting personal reference checks.</li>
          <li>Reviewing their online/social media presence, if any.</li>
        </ul>
        <p className="text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify">
          Be cautious if someone avoids meeting in person, refuses to share work
          or family details, or rushes the process. Report suspicious behavior
          immediately and discontinue contact with such individuals.
        </p>
      </div>

      {/* Section 5: Important Declaration */}
      <div className="w-full max-w-[1200px] mx-auto py-10 space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <Info className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Important Declaration
          </h3>
        </div>
        <p className="text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify">
          We declare that{" "}
          <span className="text-[var(--color-primary)] not-italic font-bold">
            LoveLink
          </span>{" "}
          is not a dating platform. It is intended strictly for lawful
          matrimonial purposes only, according to the user’s genuine intention
          to find a life partner. Any misuse of the platform for dating, casual
          relationships, or non-matrimonial activities may result in suspension
          or termination of the user profile.
        </p>
      </div>

      {/* Section 6: Disclaimer */}
      <div className="w-full max-w-[1200px] mx-auto py-10 space-y-6">
        <div className="flex items-center gap-4 mb-4">
          <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Disclaimer
          </h3>
        </div>
        <p className="text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify">
          While we make every effort to safeguard users,{" "}
          <span className="text-[var(--color-primary)] not-italic font-bold">
            LoveLink
          </span>{" "}
          does not conduct background checks and is not responsible for actions
          or representations made by members. Users are solely responsible for
          exercising discretion, due diligence, and personal judgment during
          their matrimonial search. Report any suspicious or fraudulent activity
          immediately so that appropriate action can be taken.
        </p>
      </div>

      <div className="w-full max-w-[1200px] mx-auto py-10 ">
        <h2 className="font-[var(--ff-primary)] text-[var(--fs-h3)] font-[var(--fw-bold)] text-[var(--color-primary)] uppercase tracking-tight mb-8">
          Contact Information
        </h2>
        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] font-[var(--ff-secondary)]">
          <p>
            <span className="font-[var(--fw-semibold)] uppercase text-[var(--color-primary)]">
              Registered Office:
            </span>{" "}
            <br />
            LoveLink Global HQ <br />
            Ballabhgarh, Faridabad, Haryana - 121004 <br />
            Email:{" "}
            <a
              href="mailto:info@lovelink.com"
              className="text-[var(--color-primary)] hover:underline"
            >
              info@lovelink.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafetyProtocal;
