// import React from "react";
// import {
//   Scale,
//   UserCheck,
//   ShieldAlert,
//   MessageSquare,
//   Ban,
//   AlertCircle,
//   FileCheck,
//   Globe,
//   Handshake
// } from "lucide-react";

// const TermsAndConditions = () => {
//   return (
//     <div className="w-full pt-40 min-h-screen px-4 sm:px-6 md:px-16 lg:px-40 py-12 bg-[var(--bg-main)] font-[var(--ff-primary)]">
//       <header className="text-center mb-12">
//         <Scale
//           className="mx-auto mb-4"
//           style={{
//             width: "clamp(3rem, 4vw, 6rem)",
//             height: "clamp(3rem, 4vw, 6rem)",
//             color: "var(--color-primary)",
//           }}
//         />
//         <h1
//           style={{
//             fontFamily: "var(--ff-primary)",
//             fontSize: "var(--fs-h1)",
//             fontWeight: "var(--fw-bold)",
//             color: "var(--color-primary)",
//             lineHeight: 1.2,
//           }}
//         >
//           Terms & Conditions
//         </h1>
//         <p
//           style={{
//             fontFamily: "var(--ff-secondary)",
//             fontSize: "var(--fs-body)",
//             color: "var(--text-secondary)",
//             opacity: 0.8,
//             marginTop: "1rem",
//           }}
//         >
//           Last updated: February 2026
//         </p>
//       </header>

//       {/* 1. Acceptance of Terms */}
//       <div className="w-full max-w-[1200px] mx-auto py-10">
//         <div className="flex items-center gap-4 mb-8">
//           <Handshake className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
//           <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
//             Acceptance of Agreement
//           </h2>
//         </div>
//         <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
//           <p>
//             By accessing or using <span className="font-semibold text-[var(--color-primary)]">LoveLink</span>,
//             you agree to be bound by these Terms and Conditions. Our platform is designed to connect individuals for
//             meaningful relationships, and your use of the service signifies your acceptance of these rules. If you
//             do not agree with any part of these terms, you must not use our services.
//           </p>
//         </div>
//       </div>

//       {/* 2. Eligibility */}
//       <div className="w-full max-w-[1200px] mx-auto py-10">
//         <div className="flex items-center gap-4 mb-8">
//           <UserCheck className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
//           <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
//             Membership Eligibility
//           </h2>
//         </div>
//         <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
//           <p>
//             To register as a member of LoveLink, you must be of legal marriageable age according to the laws of your
//             country (minimum <span className="font-semibold">18 years</span> for dating and matrimonial purposes).
//             By using this site, you represent and warrant that you have the right, authority, and legal capacity to
//             enter into this agreement and that you are not prohibited by any law from using such services.
//           </p>
//         </div>
//       </div>

//       {/* 3. Code of Conduct */}
//       <div className="w-full max-w-[1200px] mx-auto py-10">
//         <div className="flex items-center gap-4 mb-8">
//           <ShieldAlert className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
//           <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
//             User Conduct & Safety
//           </h2>
//         </div>
//         <div className="space-y-4 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)]">
//           <p>LoveLink aims to provide a secure environment. As a user, you agree NOT to:</p>
//           <ul className="list-disc pl-6 space-y-3">
//             <li>Create multiple or fake profiles to mislead other members.</li>
//             <li>Post offensive, defamatory, or inappropriate content/images.</li>
//             <li>Harass, stalk, or abuse any member of the community.</li>
//             <li>Use the platform for commercial solicitations or financial scams.</li>
//           </ul>
//         </div>
//       </div>

//       {/* 4. Content Ownership */}
//       <div className="w-full max-w-[1200px] mx-auto py-10">
//         <div className="flex items-center gap-4 mb-8">
//           <FileCheck className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
//           <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
//             Content & Proprietary Rights
//           </h2>
//         </div>
//         <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
//           <p>
//             You are solely responsible for the content, photos, and information that you publish on LoveLink.
//             While you retain ownership of your photos, by posting them, you grant us a non-exclusive license to
//             display them on our platform to facilitate your matchmaking process. LoveLink reserves the right
//             to remove any content that violates these terms.
//           </p>
//         </div>
//       </div>

//       {/* 5. Account Termination */}
//       <div className="w-full max-w-[1200px] mx-auto py-10">
//         <div className="flex items-center gap-4 mb-8">
//           <Ban className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
//           <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
//             Termination of Service
//           </h2>
//         </div>
//         <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
//           <p>
//             LoveLink reserves the right to terminate or suspend your account without prior notice if we believe
//             you have breached these Terms & Conditions. In case of account deletion due to a violation of conduct,
//             any active premium memberships may be forfeited without a refund.
//           </p>
//         </div>
//       </div>

//       {/* 6. Disclaimer of Liability */}
//       <div className="w-full max-w-[1200px] mx-auto py-10">
//         <div className="flex items-center gap-4 mb-8">
//           <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
//           <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
//             Disclaimer
//           </h2>
//         </div>
//         <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
//           <p>
//             LoveLink provides the platform "as is." While we verify profiles, we cannot guarantee the
//             authenticity of every user or the success of any relationship. We are not responsible for
//             any personal interactions that happen offline. Users are encouraged to practice safety
//             precautions when meeting anyone in person.
//           </p>
//           <p className="pt-2 text-[var(--fs-caption)] opacity-80 border-t border-[var(--border)] italic">
//             By continuing to use our site, you acknowledge that you have read and understood these Terms.
//             LoveLink is committed to maintaining a respectful and safe community for all.
//           </p>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="w-full max-w-[1200px] mx-auto py-10 border-t border-[var(--border)]">
//         <h2 className="font-[var(--ff-primary)] text-[var(--fs-h3)] font-[var(--fw-bold)] text-[var(--color-primary)] uppercase tracking-tight mb-8">
//           Support & Help
//         </h2>
//         <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] font-[var(--ff-secondary)]">
//           <p>
//             If you have questions regarding these Terms, please contact our legal team: <br />
//             <span className="font-[var(--fw-semibold)] uppercase text-[var(--color-primary)]">
//               LoveLink Legal Dept:
//             </span> <br />
//             Ballabhgarh, Faridabad, Haryana - 121004 <br />
//             Email:{" "}
//             <a href="mailto:legal@lovelink.com" className="text-[var(--color-primary)] hover:underline">
//               legal@lovelink.com
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsAndConditions;

import React from "react";
import { Info } from "lucide-react";
import {
  Database,
  Handshake,
  FileText,
  Shield,
  BellRing,
  Ban,
  UserCheck,
  DatabaseBackup,
  Scale,
  Gavel,
  CheckCircle,
  AlertCircle,
  RefreshCcw,
  AlertTriangle,
  Trash2,
  Lock,
  FileBadge,
  MessageSquareWarning,
} from "lucide-react";

import { RotateCcw, UserX, MessageSquare, ShieldAlert } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="w-full pt-20 min-h-screen px-4 sm:px-6 md:px-16 lg:px-40 py-12 bg-[var(--bg-main)] font-[var(--ff-primary)]">
      <header className="text-center mb-12">
        <Scale
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
          Terms & Conditions
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

      {/* Introduction Section */}
      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <Info className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            Introduction
          </h2>
        </div>

        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          <p>
            Welcome to Love Link In order to use the Love Link
            Site, you must Register as a member ("Member") and agree to be bound
            by these Terms of Use ("Agreement"). If you wish to become a Member
            interact with other Members and access the services provided
            ("Service"), please read these Terms of Use carefully and complete
            the Registration process. By completing the online registration,
            checking the box stating "I have read and understand the Terms of
            Use and agree to be bound by all of its terms" and using any part of
            services, you expressly agree to be bound by the terms and
            conditions of this Agreement. This Agreement sets out the legally
            binding terms for your membership and usage of the site. This
            Agreement may be updated or modified by {" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            from time to time. Any such modifications will become effective upon
            being posted on the Site or communicated to you by any reasonable
            means. Continued use of the Site pursuant to such change will
            constitute your deemed acceptance of the revised Agreement.
          </p>

          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Legal Compliance
          </h3>

          <p className="mb-4 font-medium italic">
            By registering on and using{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            , you agree to comply with all applicable laws of India. This
            includes, but is not limited to:
          </p>
          <ul className="list-disc ml-5 space-y-3 text-sm">
            <li>
              <strong>The Information Technology Act, 2000:</strong> Including
              the IT Rules 2021, governing online content, intermediary
              responsibilities, and data handling.
            </li>
            <li>
              <strong>The Indian Contract Act, 1872:</strong> Governing the
              enforceability of this Agreement.
            </li>
            <li>
              <strong>The Consumer Protection Act, 2019:</strong> With respect
              to any paid or premium services offered.
            </li>
            <li>
              <strong>
                Indian Penal Code & Bharatiya Nyaya Samhita, 2023:
              </strong>{" "}
              Particularly in relation to impersonation, fraud, or misuse of the
              platform.
            </li>
            <li>
              <strong>The Digital Personal Data Protection Act, 2023:</strong>{" "}
              Governing the collection, storage, and use of personal and
              sensitive data.
            </li>
            <li>
              <strong>Community-Specific Laws:</strong> Including the Hindu
              Marriage Act, 1955, the Special Marriage Act, 1954, or other
              relevant statutes.
            </li>
          </ul>
          <p className="mt-6 p-3 bg-[var(--color-accent)]/5 rounded border border-[var(--color-accent)]/20 text-xs italic">
            Users and Members are solely responsible for the legality and
            accuracy of the information they provide and for ensuring compliance
            with all applicable legal obligations.
          </p>
        </div>
      </div>

      {/* Information We Collect */}
      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <UserCheck className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            Membership Eligibility & Requirements
          </h2>
        </div>
        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          <p className="font-medium italic opacity-90">
            To use the Services, you must meet the following eligibility
            criteria and agree to be bound by these Terms of Use:
          </p>

          <ul className="space-y-4 list-none">
            <li className="pl-4 border-l-2 border-[var(--color-primary)]">
              <strong className="text-[var(--color-primary)]">a) Age:</strong>{" "}
              You must be of legal age (the age of majority) in your
              jurisdiction of residence and capable of forming a binding legal
              agreement under applicable laws.
            </li>
            <li className="pl-4 border-l-2 border-[var(--color-primary)]">
              <strong className="text-[var(--color-primary)]">
                b) Eligibility to Use the Services:
              </strong>{" "}
              You must not be subject to any legal restrictions that prevent you
              from using the Services or creating an account with{" "}
              <span className="font-semibold italic">LoveLink</span>, including,
              but not limited to, restrictions based on your age, location, or
              legal status.
            </li>
            <li className="pl-4 border-l-2 border-[var(--color-primary)]">
              <strong className="text-[var(--color-primary)]">
                c) Non-Compete Use:
              </strong>{" "}
              You are not a competitor of{" "}
              <span className="font-semibold italic">LoveLink</span> or using
              the Services for competitive purposes.
            </li>
            <li className="pl-4 border-l-2 border-[var(--color-primary)]">
              <strong className="text-[var(--color-primary)]">
                d) One Account:
              </strong>{" "}
              You agree to maintain only one{" "}
              <span className="font-semibold italic">LoveLink</span> account at
              any time.
            </li>
            <li className="pl-4 border-l-2 border-[var(--color-primary)]">
              <strong className="text-[var(--color-primary)]">
                e) Legal Authority:
              </strong>{" "}
              You have the full right, power, authority, and legal capacity to
              enter into this Agreement and comply with all of its terms and
              conditions.
            </li>
            <li className="pl-4 border-l-2 border-[var(--color-primary)]">
              <strong className="text-[var(--color-primary)]">
                f) Respecting Rights:
              </strong>{" "}
              You will not infringe upon the rights of{" "}
              <span className="font-semibold italic">LoveLink</span>, other
              users, or third parties, including intellectual property and
              privacy rights.
            </li>
            <li className="pl-4 border-l-2 border-[var(--color-primary)]">
              <strong className="text-[var(--color-primary)]">
                g) Necessary Equipment:
              </strong>{" "}
              You agree to provide, at your own expense, all necessary
              equipment, software, and internet access required for your
              personal use of the Services.
            </li>
            <li className="pl-4 border-l-2 border-[var(--color-primary)]">
              <strong className="text-[var(--color-primary)]">
                h) Registration Information:
              </strong>{" "}
              You agree to provide accurate information, including your first
              name and email address, during registration.
            </li>
          </ul>

          <p>
            By continuing with the registration, you confirm that you fulfill
            all the above criteria.{" "}
            <span className="font-semibold italic">LoveLink</span> reserves the
            right to terminate accounts that are found to be in violation of
            these eligibility terms.
          </p>
        </div>
      </div>

      {/* Security Section */}
      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <Ban className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            Prohibited Use
          </h2>
        </div>
        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          <p>
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            is a matrimony platform and is
            <span className="font-bold underline decoration-red-500 ml-1">
              not intended
            </span>{" "}
            to facilitate or promote illicit sexual relations, extra-marital
            affairs, or any form of inappropriate or illegal activity.
          </p>

          <p>
            If <span className="font-semibold italic">LoveLink</span> discovers
            or is made aware that any Member is using the Services to promote or
            engage in such activities, their membership will be
            <span className="font-bold text-red-600 uppercase">
              {" "}
              terminated immediately
            </span>
            .
          </p>

          <ul className="space-y-3 list-none pt-2">
            <li className="flex gap-2 items-start">
              <span className="text-red-500 font-bold">•</span>
              <span>
                Termination will be processed <strong>without a refund</strong>.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-red-500 font-bold">•</span>
              <span>
                <span className="font-semibold italic">LoveLink</span> will not
                be held liable for such termination.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-red-500 font-bold">•</span>
              <span>
                The decision to terminate a membership under this clause shall
                be <strong>final and binding</strong>.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Security Section */}
      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <Gavel className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            Compliance with Laws
          </h2>
        </div>
        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          <p>
            You agree to comply with all applicable laws, including the
            <span className="font-semibold text-[var(--color-primary)]">
              {" "}
              Information Technology Act, 2000
            </span>
            ,
            <span className="font-semibold text-[var(--color-primary)]">
              {" "}
              Digital Personal Data Protection Act, 2023
            </span>
            , and any other relevant regulations governing online platforms and
            user conduct in India.
          </p>

          <p className="p-4 bg-[var(--color-accent)]/5 rounded-xl border border-[var(--color-accent)]/10 italic opacity-90">
            You are{" "}
            <span className="font-bold underline">solely responsible</span> for
            ensuring that your actions on the Site are in compliance with all
            applicable legal requirements.{" "}
            <span className="font-semibold italic">LoveLink</span>
            disclaims any liability arising from your failure to adhere to these
            statutory obligations.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <Lock className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            Password Use and Security
          </h2>
        </div>

        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          <p>
            You must not reveal your password to any third party and must take
            reasonable steps to keep your password confidential and secure. You
            agree to immediately notify artoflivingmatrimony.org if you become
            aware of or have reason to believe that there is any unauthorised
            use of your password or account or any other breach of security.
            Artoflivingmatrimony.org will not be liable for any claims, losses
            or damages resulting from the use or misuse of your password or
            account due to the activities of any third party outside of our
            control or due to your failure to maintain their confidentiality and
            security of your password. You are solely responsible for all
            activities that occur under your account. Artoflivingmatrimony.org
            may, at its discretion, suspend, or terminate your account if it
            believes that your password or account is being used
            inappropriately.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <UserCheck className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            User Account Responsibilities
          </h2>
        </div>

        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          <p>
            To use or access certain Services, you must register for and be
            granted an account with{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>
            . By maintaining an account, you agree to:
          </p>

          {/* Structured List a-f */}
          <ul className="space-y-3 list-none font-medium">
            <li className="flex gap-3 items-start">
              <span className="text-[var(--color-primary)] font-bold min-w-[20px]">
                a)
              </span>
              <span>Keep your password secure and confidential;</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[var(--color-primary)] font-bold min-w-[20px]">
                b)
              </span>
              <span>Not permit others to use your account;</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[var(--color-primary)] font-bold min-w-[20px]">
                c)
              </span>
              <span>Refrain from using other users’ accounts;</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[var(--color-primary)] font-bold min-w-[20px]">
                d)
              </span>
              <span>
                Refrain from selling, trading, or transferring your{" "}
                <span className="italic">LoveLink</span> account;
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[var(--color-primary)] font-bold min-w-[20px]">
                e)
              </span>
              <span>
                Refrain from charging anyone for access to the Services;
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-[var(--color-primary)] font-bold min-w-[20px]">
                f)
              </span>
              <span>
                Keep all information associated with your account accurate and
                complete.
              </span>
            </li>
          </ul>

          <div className="pt-6">
            <p className="mb-2 font-semibold italic text-[var(--color-primary)] uppercase text-xs tracking-widest">
              Full Liability & Omissions
            </p>
            <p className="text-sm opacity-90 mb-4">
              You are responsible for anything that happens through your account
              until it is closed. You agree to be responsible for any act or
              omission of any users that access the Services under your account,
              which shall be deemed a violation of these Terms of Use if
              undertaken by you.
            </p>
            <p className="text-sm font-bold border-t border-[var(--color-accent)]/20 pt-4">
              You further agree to promptly notify{" "}
              <span className="font-semibold italic">LoveLink</span> of any
              unauthorised use or security breach and to take reasonable actions
              to safeguard your account's integrity.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto py-10 border-t border-[var(--border)]">
        <div className="flex items-center gap-4 mb-8">
          <ShieldAlert className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            User Verification Disclaimer
          </h2>
        </div>

        <p>
          <span className="font-bold italic">LoveLink</span> does not conduct
          any background verification, identity authentication, criminal checks,
          financial checks, or marital status verification of any Member
          registered on the platform. You are solely responsible for verifying
          the identity, background, and credentials of other Members before
          interacting, communicating, or entering into any engagement or
          alliance.
          <span className="font-semibold italic">LoveLink</span> shall not be
          liable for any misrepresentation, concealment, fraud, deception, or
          inaccuracy in profiles or communications. This includes but is not
          limited to:
        </p>

        {/* Structured List a-g */}
        <ul className="space-y-3 list-none font-medium">
          {[
            {
              id: "a",
              text: "Concealment of physical disabilities or medical conditions (including hereditary or terminal illnesses);",
            },
            { id: "b", text: "Mental health issues or disorders;" },
            {
              id: "c",
              text: "Previous marriages, divorces, annulments, or ongoing legal proceedings;",
            },
            { id: "d", text: "Criminal history or pending investigations;" },
            { id: "e", text: "Financial liabilities or bankruptcies;" },
            {
              id: "f",
              text: "Misrepresentation of employment, education, income, or social status;",
            },
            {
              id: "g",
              text: "False claims regarding family background, religion, caste, or other identifiers.",
            },
          ].map((item) => (
            <li key={item.id} className="flex gap-3 items-start">
              <span className="text-[var(--color-primary)] font-bold min-w-[20px]">
                {item.id})
              </span>
              <span className="text-sm opacity-90">{item.text}</span>
            </li>
          ))}
        </ul>

        <div className="pt-6 border-t border-[var(--color-accent)]/20">
          <p className="text-sm opacity-90 mb-4">
            Caution to Users: Users are cautioned that individuals with
            malicious intent—such as fraudsters, scammers, or individuals
            associated with unlawful, exploitative, or immoral activities—may
            attempt to misuse the platform.
          </p>
          <p className="text-sm font-medium italic p-4 bg-slate-50 rounded-xl">
            <span className="font-bold text-[var(--color-primary)] not-italic uppercase">
              LoveLink
            </span>{" "}
            strictly prohibits such use and reserves the right to suspend or
            remove any suspected profile. However, the platform shall not be
            held responsible for any harm, loss, or consequences resulting from
            such interactions.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto py-10 border-t border-[var(--border)]">
        <div className="flex items-center gap-4 mb-8">
          <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            Safety Advisory & Reporting Mechanism
          </h2>
        </div>

        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          <p>
            To ensure a secure experience, we strongly advise all Members to:
          </p>
          <ul className="list-disc ml-5 space-y-3 text-sm">
            <li>
              <strong>Information Privacy:</strong> Avoid sharing personal,
              financial, or sensitive information with other users too soon.
            </li>
            <li>
              <strong>Financial Caution:</strong> Be cautious of users who
              pressure you for money, investment opportunities, or emotional
              commitments early on.
            </li>
            <li>
              <strong>Conduct Standards:</strong> Refrain from engaging in or
              entertaining any explicit, vulgar, or inappropriate content or
              behaviour.
            </li>
            <li>
              <strong>Independent Verification:</strong> Conduct independent
              verification of a Member’s claims before progressing with
              discussions or alliances.
            </li>
            <li>
              <strong>Immediate Reporting:</strong> Report any suspicious,
              inappropriate, or unlawful behaviour immediately using our
              platform tools.
            </li>
          </ul>
          {/* Paragraph 1: Reporting Mechanism */}
          <p>
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            provides a<strong> "Report Abuse" </strong> feature available on
            each profile to ensure community safety. You may also write to us
            directly at
            <a
              href="mailto:support@lovelink.com"
              className="text-[var(--color-primary)] font-bold hover:underline mx-1"
            >
              support@lovelink.com
            </a>
            with evidence or concerns regarding any Member’s conduct. We take
            all such reports seriously and reserve the right to suspend or
            permanently remove any profile that violates our Terms of Use or is
            found to be engaged in malicious or illegal activity.
          </p>

          {/* Paragraph 2: Responsibility Disclaimer */}
          <p className="p-5 bg-orange-50/50 rounded-2xl border border-orange-100 text-sm italic text-orange-900">
            <span className="font-bold not-italic text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            disclaims all responsibility for any harm, loss, or consequences
            resulting from misuse of the platform or interactions between
            Members. All users are urged to act responsibly, exercise due
            diligence, seek appropriate background checks, and use maximum
            discretion and caution while interacting with others on the
            platform.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto py-10">
        {/* 8. Grant of License */}
        <div className="flex items-center gap-4 mb-8">
          <FileBadge className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            Grant of License
          </h2>
        </div>

        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          <p>
            As a registered user of a Service,{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            grants you a limited, non-transferable, non-exclusive, revocable
            license to access and use the Service strictly in accordance with
            the terms and conditions set forth in this Agreement.
          </p>
          <p>
            Except as expressly permitted in this Agreement, you do not acquire
            right, title or license in the Service or in any data, content,
            application, software, or other materials accessed through or
            incorporated in the Service. All rights not expressly granted herein
            are reserved.
          </p>

          {/* 9. Services */}
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Platform Services & Interactions
          </h3>
          <p>
            The Services provide an online platform to enable you to discover,
            interact with and connect with other Members.{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            does not participate in, control, or influence your interactions or
            communications with other Members.
          </p>
          <p>
            We do not and cannot verify the quality, reliability, timing,
            legality, integrity, authenticity, accuracy, appropriateness, or
            completeness of any information or representations made by Members
            or third parties on the platform.{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            does not guarantee that any registered user or visitor is who they
            claim to be, and disclaims all responsibility or liability in this
            regard.
          </p>

          {/* 10. Term */}
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Term & Termination
          </h3>
          <p>
            This Agreement will remain in full force and effect while you access
            or use the Site and/or maintain a registered membership. You may
            terminate your membership at any time by providing a written
            request. Upon termination by you,{" "}
            <span className="font-bold">no refund</span> shall be payable for
            any unutilised or remaining portion of your subscription or fees
            paid.
          </p>
          <p>
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            may, at its sole discretion, suspend or terminate your access to the
            Site with or without cause. If termination is due to a violation or
            breach of this Agreement, you will not be entitled to any refund,
            compensation, or reinstatement.
          </p>

          {/* 11. Non-Commercial Use */}
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Non-Commercial Use by Members
          </h3>
          <p>
            The{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            Site is intended solely for the personal and non-commercial use of
            individual Members. It may not be used in connection with any
            commercial endeavours, including but not limited to advertising,
            soliciting, or promoting any services, products, or websites.
          </p>
          <p className="mt-6 p-3 bg-[var(--color-accent)]/5 rounded border border-[var(--color-accent)]/20 text-xs italic">
            Any unauthorised use of the Site, including but not limited to
            unauthorised framing, scraping, or automated data collection, will
            be investigated. We reserve the right to take appropriate legal
            action, including civil, criminal, and injunctive remedies.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto py-10">
        {/* Icon and Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <ShieldAlert className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            Other Terms of Use by Members
          </h2>
        </div>

        {/* Inner Content Div */}
        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          <p>
            You may not engage in advertising to, or solicitation of, other
            Members to buy or sell any products or services through the Service.
            You will not transmit any chain letters, junk email, or unsolicited
            messages to other{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            Members. Although we do not actively monitor the conduct of all
            Members, it is a violation of this Agreement to use any information
            obtained through the Service to harass, abuse, or cause harm to
            another person, or to solicit any Member without their prior
            explicit consent.
          </p>

          <p>
            To protect{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            and its community from abuse, we reserve the right to restrict the
            number of communications, profile views, and contact requests a
            Member may send in any 24-hour period at our sole discretion. You
            are prohibited from sending messages that are obscene, vulgar, lewd,
            offensive, defamatory, threatening, harassing, abusive, racially or
            ethically objectionable, or otherwise unlawful.
          </p>

          <p className="p-4 bg-[var(--color-accent)]/5 rounded-xl border border-[var(--color-accent)]/10 italic">
            Transmission of such messages constitutes a material breach, and{" "}
            <span className="font-semibold italic">LoveLink</span> shall be
            entitled to terminate your membership forthwith, without notice. We
            also reserve the right to screen or review messages to regulate chat
            sessions at our sole discretion.
          </p>

          <p>
            You shall not use any automated processes, including but not limited
            to IRC Bots, executable files (.EXE's), CGI scripts, or any other
            programs to view content or interact with{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            and its Members. Any such automated activity is strictly prohibited
            and will result in immediate account review.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <FileText className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            Content Posted on the Site
          </h2>
        </div>

        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          <p>
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            owns and retains all proprietary rights, including without
            limitation, all intellectual property rights in the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Site and the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Service. The Site contains the copyrighted material, trademarks, and
            other proprietary information of{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            , and its licensors. Except for that information which is in the
            public domain or for which you have been given express permission by{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            , you may not copy, modify, publish, transmit, distribute, perform,
            display, or sell any such proprietary information. All lawful, legal
            and non-objectionable messages (in the sole discretion of{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            ), content and/or other information, content or material that you
            post on the forum boards shall become the property of{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            .{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            reserves the right to scrutinise all such information, content
            and/or material posted on the forum boards and shall have the
            exclusive right to either remove, edit and/or display such
            information, material and/or content. You understand and agree that{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            may delete any content, messages, photos or profiles (collectively,
            "Content") that in the sole judgment of{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            violates this Agreement or which might be offensive, illegal,
            defamatory, obscene, libelous, or that might violate the rights,
            harm, or threaten the safety of other{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Members.
          </p>
          <p>
            You are solely responsible for the Content that you publish or
            display (hereinafter, "post") on the Site through the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Service, or transmit to other{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Members.{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            reserves the right to verify the authenticity of Content posted on
            the Site. In exercising this right,{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            may ask you to provide any documentary or other form of evidence
            supporting the Content you post on the Site. If you fail to produce
            such evidence, or if such evidence does not in the reasonable
            opinion of{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            establish or justify the claim,{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            may, in its sole discretion, terminate your Membership without a
            refund of your subscription fees. By posting Content to any public
            area of{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            , you automatically grant, and you represent and warrant that you
            have the right to grant, to{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            , and other{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Members, an irrevocable, perpetual, non-exclusive, worldwide
            unlimited, assignable, sub-licenseable, fully paid-up and
            royalty-free right to use, copy, perform, publish, display, and
            distribute such information and content and to prepare derivative
            works of, improve, remove, retain, add, process, analyse, use and
            commercialise, in any way now known or in the future discovered, the
            information you provide, directly or indirectly to{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            , including, without limitation, user-generated content, ideas,
            concepts, techniques and/or data, or incorporate such information
            and content into other works, and to grant and authorise
            sublicensees of the foregoing. Any information you submit to us is
            at your own risk of loss.
          </p>
          <p>
            The following is a partial list of the kind of Content that is
            illegal or prohibited on the Site.{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            will investigate and take appropriate legal action in its sole
            discretion against anyone who violates this provision, including
            without limitation, removing the offending communication from the
            Service and the Site and terminating the Membership of such
            violators without a refund. It includes (but is not limited to)
            Content that: Newly created profile will be checked for correctness
            and will be immediately activated after quality declaration is
            verified by{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            .{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            reserves the rights to discontinue, deactivate, or terminate any
            profile if the profile is found to exhibit bad manners and contains
            unacceptable content, violent language or inappropriate material.
            Members are solely liable for their connections and interactions
            with other members through{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            .{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            bears no responsibility for outcomes arising from member-to-member
            communication. Contact information of member’s profile will be
            displayed only to paid members. Members agree that they are legally
            eligible to marry as per the applicable law.{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            will not be responsible for misuse of any facility or service it
            provides, violation of the local government laws. Every member
            submitting a matrimonial profile is required to disclose all facts
            essential for establishing a marital relationship. Concealment of
            facts relevant to marriage could result in loss or damage to
            individuals and{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            shall not be held responsible in any manner for such concealment.{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            does not guarantee the genuineness or accuracy of the information
            provided by its members. Members shall have no claim against{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            for any delay in posting their information on the website due to any
            technical or other unforeseen reasons.{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            is not liable for any damages caused due to incorrect information
            provided by Members regarding religion, caste, creed, financial or
            any other personal details. If a members’ profile is deemed to be
            unfit,{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            reserves the right to delete, alter or refuse such a profile at any
            point of time without prior notice.
          </p>
          <p>
            <span className="text-[var(--color-primary)] not-italic font-bold">
              {" "}
              LoveLink{" "}
            </span>
            cannot be held responsible for any loss or damage resulting from
            discontinuation of the services, for any unauthorised access to
            Members’ profiles or any misuse of member profile information by
            other members.
            <span className="text-[var(--color-primary)] not-italic font-bold">
              {" "}
              LoveLink{" "}
            </span>
            does not guarantee that Members will receive responses and shall not
            be held responsible for no replies. In such cases,
            <span className="text-[var(--color-primary)] not-italic font-bold">
              {" "}
              LoveLink{" "}
            </span>
            will not offer any refunds or credits.
            <span className="text-[var(--color-primary)] not-italic font-bold">
              {" "}
              LoveLink{" "}
            </span>
            is not legally responsible for any delays in operation due to
            technical or other reasons beyond their control. Prohibited content
            includes material that: Harasses or advocates harassment of another
            person; Involves the transmission of "junk mail", "chain letters,"
            or unsolicited mass mailing or "spamming"; Promotes information that
            the person posting it is aware that it is false, misleading or
            promotes illegal activities or conduct that is abusive, threatening,
            obscene, defamatory or libellous; Promotes an illegal or
            unauthorised copy of another person's copyrighted work, such as
            providing pirated computer programs or links to them, or providing
            pirated music files; Contains restricted or password only access
            pages, or hidden pages or images; Displays pornographic or sexually
            explicit material of any kind; Provides material that exploits
            people who are minors as per the jurisdiction of their residence in
            a sexual or violent manner, or solicits personal information from
            such minors.
          </p>

          <p>
            Provides instructional information about illegal activities such as
            making or buying illegal weapons, violating someone's privacy, or
            providing or creating computer viruses; solicits passwords or
            personal identifying information for commercial or unlawful purposes
            from other users / Members; and engages in commercial activities
            and/or sales without the prior written consent of{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            such as contests, sweepstakes, barter, advertising, and pyramid
            schemes. Encourages, invites or solicits extra marital affairs. You
            must use the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Service in compliance with any and all applicable local, state, and
            federal laws and regulations. You are not permitted to create
            multiple profiles. If{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            becomes aware that you have created multiple profiles, your
            membership is liable to be terminated forthwith without any refund
            of subscription fees. If at any time{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            is of the view in its sole discretion, believes that your profile
            contains any information, material or content that is objectionable,
            unlawful or illegal,{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            reserves the right to either forthwith terminate your membership
            without refund or delete such objectionable, illegal or unlawful
            information, material or content from your profile and allow you to
            continue as a Member.
          </p>

          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Legal Compliance
          </h3>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto py-10 ">
        {/* Icon and Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <FileText className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            Copyright Policy
          </h2>
        </div>

        {/* Inner Content Div */}
        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          <p>
            You may not post, distribute, or reproduce in any way any
            copyrighted material, trademarks, or other proprietary information
            without obtaining the prior written consent of the owner of such
            proprietary rights. Without limiting the foregoing, if you believe
            that your work has been copied and posted on the Site through the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Service in a way that constitutes copyright infringement, please
            provide our Copyright Agent with the following information: an
            electronic or physical signature of the person authorised to act on
            behalf of the owner of the copyright interest; a description of the
            copyrighted work that you claim has been infringed; a description of
            where the material that you claim is infringing is located on the
            Site; your address, telephone number, and email address; a written
            statement by you that you have a good faith belief that the use of
            the material in the manner complained of is not authorised by the
            copyright owner, its agent, or the law; where applicable a copy of
            the registration certificate proving registration of the copyright
            or any other applicable intellectual property right; and a statement
            by you, made under penalty of perjury, that the above information in
            your Notice is accurate and that you are the copyright owner or are
            authorised to act on the copyright owner's behalf.
          </p>

          <p className="p-4 bg-[var(--color-accent)]/5 rounded-xl border border-[var(--color-accent)]/10 italic">
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            's Copyright Agent for Notice of claims of copyright infringement
            can be reached by writing to the Bangalore address located under the
            Help/Contact section on the site.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <Gavel className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            Disputes, Privacy & Disclaimers
          </h2>
        </div>


        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          {/* Member Disputes */}
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Member Disputes
          </h3>
          <p>
            You are solely responsible for your interactions with other{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Members.{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            reserves the right, but has no obligation, to monitor disputes
            between you and other Members.
          </p>

          {/* Privacy */}
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Privacy
          </h3>
          <p>
            Use of the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Site and/or the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Service is governed by the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Privacy Policy.
          </p>

          {/* Disclaimers */}
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Disclaimers
          </h3>
          <p>
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            is not responsible for any incorrect or inaccurate Content posted on
            the Site or in connection with the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Service, whether caused by users visiting the Site, Members or by
            any of the equipment or programming associated with or utilised in
            the Service, nor for the conduct of any user and/or Member of the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Service whether online or offline.{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            assumes no responsibility for any error, omission, interruption,
            deletion, defect, delay in operation or transmission, communications
            line failure, theft or destruction or unauthorised access to, or
            alteration of, user and/or Member communications.{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            is not responsible for any problems or technical malfunction of any
            telephone network or lines, computer on-line-systems, servers or
            providers, computer equipment, software, failure of email or players
            on account of technical problems or traffic congestion on the
            Internet or at any website or combination thereof, including injury
            or damage to users and/or Members or to any other person's computer
            related to or resulting from participating or downloading materials
            in connection with the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Site and/or in connection with the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Service. Under no circumstances will{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            be responsible for any loss or damage to any person resulting from
            anyone's use of the Site or the Service and/or any Content posted on
            the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Site or transmitted to{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Members. The exchange of profile(s) through or by{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            should not in any way be construed as any offer, endorsement and/or
            recommendation from/by{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            .{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            shall not be responsible for any loss or damage to any individual
            arising out of, or subsequent to, relations established pursuant to
            the use of{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            . The Site and the Service are provided "AS-IS AVAILABLE BASIS" and{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            expressly disclaims any warranty of fitness for a particular purpose
            or non-infringement.{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            cannot guarantee and does not promise any specific results from use
            of the Site and/or the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Service.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto py-10 ">
        {/* Icon and Header Section */}
        <div className="flex items-center gap-4 mb-8">
          <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            Legal Liability, Arbitration & Indemnity
          </h2>
        </div>

        {/* Inner Content Div */}
        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          {/* Limitation of Liability */}
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Limitation on Liability
          </h3>
          <p>
            Except in jurisdictions where such provisions are restricted, in no
            event will{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            be liable to you or any third person for any indirect,
            consequential, exemplary, incidental, special or punitive damages,
            including also lost profits arising from your use of the Site or the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Service, even if{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            has been advised of the possibility of such damages. Notwithstanding
            anything to the contrary contained anywhere in this Agreement, the
            total aggregate liability of{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            under this Agreement for any cause whatsoever, and regardless of the
            form of the action, shall at all times be limited to the amount
            paid, if any, by you to{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            , for the Service during the term of membership. This clause shall
            be read in conjunction with the Disclaimers provided in Clause 13
            above.
          </p>

          {/* Disputes and Arbitration */}
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Disputes and Arbitration
          </h3>
          <p>
            If there is any dispute arising out of or in connection with the use
            of the Site and/or the Service, including any question regarding its
            existence, validity, or termination, you agree that such dispute
            shall be first attempted to be resolved amicably through mutual
            discussions. If such efforts fail, the dispute shall be referred to
            and finally resolved by arbitration in accordance with the
            Arbitration and Conciliation Act, 1996, as amended from time to
            time. The arbitration shall be conducted by a sole arbitrator
            mutually appointed by the parties. If the Parties are unable to
            agree on a sole arbitrator, the arbitrator shall be appointed in
            accordance with the Arbitration and Conciliation Act. The
            arbitration proceedings shall be conducted in English, and the seat
            and venue of arbitration shall be Bangalore, India. The award of the
            arbitrator shall be final and binding on both parties. Subject to
            the foregoing, you agree to the exclusive jurisdiction of the courts
            at Bangalore, India, for any legal proceedings related to this
            Agreement.
          </p>

          {/* Indemnity */}
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Indemnity
          </h3>
          <p>
            You agree to indemnify and hold{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            , its subsidiaries, directors, affiliates, officers, agents, and
            other partners and employees, harmless from any loss, liability,
            claim, or demand, including reasonable attorney's fees, made by any
            third party due to or arising out of your use of the Service in
            violation of this Agreement and/or arising from a breach of these
            Terms of Use and/or any breach of your representations and
            warranties set forth above or any third party liability in relation
            to any Content or post provided by you pursuant to this Agreement.
          </p>

          {/* Others */}
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            General Provisions
          </h3>
          <p>
            By becoming a Member of the Site /{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Service, you agree to receive certain specific emails from{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>
            . This Agreement, accepted upon use of the Site and further affirmed
            by becoming a Member of the{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            Service, contains the entire agreement between you and{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            regarding the use of the Site and/or the Service. If any provision
            of this Agreement is held to be invalid, the remainder of this
            Agreement shall continue in full force and effect. You are under an
            obligation to report any misuse or abuse of the Site promptly to{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            by writing to Customer Care. Upon receipt,{" "}
            <span className="text-[var(--color-primary)] not-italic font-bold">
              LoveLink
            </span>{" "}
            may investigate and if necessary terminate the membership of the
            Member responsible for such violation without any refund. Any false
            complaint made by a Member shall make such Member liable for
            termination of his / her membership without any refund of the
            subscription fee.
          </p>
        </div>
      </div>


      {/* contact */}

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

export default TermsAndConditions;
