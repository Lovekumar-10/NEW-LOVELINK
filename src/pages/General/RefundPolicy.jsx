// import React from "react";
// import { Info } from "lucide-react";
// import {
//   Database,
//   Handshake,
//   FileText,
//   Shield,
//   BellRing,
//   Ban,
//   UserCheck,
//   RotateCcw,
//   DatabaseBackup,
//   Scale,
//   Gavel,
//   CheckCircle,
//   AlertCircle,
//   RefreshCcw,
//   AlertTriangle,
//   Trash2,
//   Lock,
//   FileBadge,
//   MessageSquareWarning,
// } from "lucide-react";

// import { RotateCcw, UserX, MessageSquare, ShieldAlert } from "lucide-react";

// const RefundPolicy = () => {
//   return (
//     <div className="w-full pt-20 min-h-screen px-4 sm:px-6 md:px-16 lg:px-40 py-12 bg-[var(--bg-main)] font-[var(--ff-primary)]">
//       <header className="text-center mb-12">
//          <RotateCcw
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
//           Refund Policy
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

//       {/* Introduction Section */}
//       <div className="w-full max-w-[1200px] mx-auto py-10">
//         <div className="flex items-center gap-4 mb-8">
//           <Info className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
//           <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
//             Introduction
//           </h2>
//         </div>

//         <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
//           <p>
//             Welcome to Love Link In order to use the Love Link
//             Site, you must Register as a member ("Member") and agree to be bound
//             by these Terms of Use ("Agreement"). If you wish to become a Member
//             interact with other Members and access the services provided
//             ("Service"), please read these Terms of Use carefully and complete
//             the Registration process. By completing the online registration,
//             checking the box stating "I have read and understand the Terms of
//             Use and agree to be bound by all of its terms" and using any part of
//             services, you expressly agree to be bound by the terms and
//             conditions of this Agreement. This Agreement sets out the legally
//             binding terms for your membership and usage of the site. This
//             Agreement may be updated or modified by {" "}
//             <span className="text-[var(--color-primary)] not-italic font-bold">
//               LoveLink
//             </span>{" "}
//             from time to time. Any such modifications will become effective upon
//             being posted on the Site or communicated to you by any reasonable
//             means. Continued use of the Site pursuant to such change will
//             constitute your deemed acceptance of the revised Agreement.
//           </p>

//           <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
//             Legal Compliance
//           </h3>

//           <p className="mb-4 font-medium italic">
//             By registering on and using{" "}
//             <span className="text-[var(--color-primary)] not-italic font-bold">
//               LoveLink
//             </span>
//             , you agree to comply with all applicable laws of India. This
//             includes, but is not limited to:
//           </p>
//           <ul className="list-disc ml-5 space-y-3 text-sm">
//             <li>
//               <strong>The Information Technology Act, 2000:</strong> Including
//               the IT Rules 2021, governing online content, intermediary
//               responsibilities, and data handling.
//             </li>
//             <li>
//               <strong>The Indian Contract Act, 1872:</strong> Governing the
//               enforceability of this Agreement.
//             </li>
//             <li>
//               <strong>The Consumer Protection Act, 2019:</strong> With respect
//               to any paid or premium services offered.
//             </li>
//             <li>
//               <strong>
//                 Indian Penal Code & Bharatiya Nyaya Samhita, 2023:
//               </strong>{" "}
//               Particularly in relation to impersonation, fraud, or misuse of the
//               platform.
//             </li>
//             <li>
//               <strong>The Digital Personal Data Protection Act, 2023:</strong>{" "}
//               Governing the collection, storage, and use of personal and
//               sensitive data.
//             </li>
//             <li>
//               <strong>Community-Specific Laws:</strong> Including the Hindu
//               Marriage Act, 1955, the Special Marriage Act, 1954, or other
//               relevant statutes.
//             </li>
//           </ul>
//           <p className="mt-6 p-3 bg-[var(--color-accent)]/5 rounded border border-[var(--color-accent)]/20 text-xs italic">
//             Users and Members are solely responsible for the legality and
//             accuracy of the information they provide and for ensuring compliance
//             with all applicable legal obligations.
//           </p>
//         </div>
//       </div>

//       {/* Information We Collect */}
//       <div className="w-full max-w-[1200px] mx-auto py-10">
//         <div className="flex items-center gap-4 mb-8">
//           <UserCheck className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
//           <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
//             Membership Eligibility & Requirements
//           </h2>
//         </div>
//         <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
//           <p className="font-medium italic opacity-90">
//             To use the Services, you must meet the following eligibility
//             criteria and agree to be bound by these Terms of Use:
//           </p>

//           <ul className="space-y-4 list-none">
//             <li className="pl-4 border-l-2 border-[var(--color-primary)]">
//               <strong className="text-[var(--color-primary)]">a) Age:</strong>{" "}
//               You must be of legal age (the age of majority) in your
//               jurisdiction of residence and capable of forming a binding legal
//               agreement under applicable laws.
//             </li>
//             <li className="pl-4 border-l-2 border-[var(--color-primary)]">
//               <strong className="text-[var(--color-primary)]">
//                 b) Eligibility to Use the Services:
//               </strong>{" "}
//               You must not be subject to any legal restrictions that prevent you
//               from using the Services or creating an account with{" "}
//               <span className="font-semibold italic">LoveLink</span>, including,
//               but not limited to, restrictions based on your age, location, or
//               legal status.
//             </li>
//             <li className="pl-4 border-l-2 border-[var(--color-primary)]">
//               <strong className="text-[var(--color-primary)]">
//                 c) Non-Compete Use:
//               </strong>{" "}
//               You are not a competitor of{" "}
//               <span className="font-semibold italic">LoveLink</span> or using
//               the Services for competitive purposes.
//             </li>
//             <li className="pl-4 border-l-2 border-[var(--color-primary)]">
//               <strong className="text-[var(--color-primary)]">
//                 d) One Account:
//               </strong>{" "}
//               You agree to maintain only one{" "}
//               <span className="font-semibold italic">LoveLink</span> account at
//               any time.
//             </li>
//             <li className="pl-4 border-l-2 border-[var(--color-primary)]">
//               <strong className="text-[var(--color-primary)]">
//                 e) Legal Authority:
//               </strong>{" "}
//               You have the full right, power, authority, and legal capacity to
//               enter into this Agreement and comply with all of its terms and
//               conditions.
//             </li>
//             <li className="pl-4 border-l-2 border-[var(--color-primary)]">
//               <strong className="text-[var(--color-primary)]">
//                 f) Respecting Rights:
//               </strong>{" "}
//               You will not infringe upon the rights of{" "}
//               <span className="font-semibold italic">LoveLink</span>, other
//               users, or third parties, including intellectual property and
//               privacy rights.
//             </li>
//             <li className="pl-4 border-l-2 border-[var(--color-primary)]">
//               <strong className="text-[var(--color-primary)]">
//                 g) Necessary Equipment:
//               </strong>{" "}
//               You agree to provide, at your own expense, all necessary
//               equipment, software, and internet access required for your
//               personal use of the Services.
//             </li>
//             <li className="pl-4 border-l-2 border-[var(--color-primary)]">
//               <strong className="text-[var(--color-primary)]">
//                 h) Registration Information:
//               </strong>{" "}
//               You agree to provide accurate information, including your first
//               name and email address, during registration.
//             </li>
//           </ul>

//           <p>
//             By continuing with the registration, you confirm that you fulfill
//             all the above criteria.{" "}
//             <span className="font-semibold italic">LoveLink</span> reserves the
//             right to terminate accounts that are found to be in violation of
//             these eligibility terms.
//           </p>
//         </div>
//       </div>

//       {/* Security Section */}
//       <div className="w-full max-w-[1200px] mx-auto py-10">
//         <div className="flex items-center gap-4 mb-8">
//           <Ban className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
//           <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
//             Prohibited Use
//           </h2>
//         </div>
//         <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
//           <p>
//             <span className="font-semibold text-[var(--color-primary)]">
//               LoveLink
//             </span>{" "}
//             is a matrimony platform and is
//             <span className="font-bold underline decoration-red-500 ml-1">
//               not intended
//             </span>{" "}
//             to facilitate or promote illicit sexual relations, extra-marital
//             affairs, or any form of inappropriate or illegal activity.
//           </p>

//           <p>
//             If <span className="font-semibold italic">LoveLink</span> discovers
//             or is made aware that any Member is using the Services to promote or
//             engage in such activities, their membership will be
//             <span className="font-bold text-red-600 uppercase">
//               {" "}
//               terminated immediately
//             </span>
//             .
//           </p>

//           <ul className="space-y-3 list-none pt-2">
//             <li className="flex gap-2 items-start">
//               <span className="text-red-500 font-bold">•</span>
//               <span>
//                 Termination will be processed <strong>without a refund</strong>.
//               </span>
//             </li>
//             <li className="flex gap-2 items-start">
//               <span className="text-red-500 font-bold">•</span>
//               <span>
//                 <span className="font-semibold italic">LoveLink</span> will not
//                 be held liable for such termination.
//               </span>
//             </li>
//             <li className="flex gap-2 items-start">
//               <span className="text-red-500 font-bold">•</span>
//               <span>
//                 The decision to terminate a membership under this clause shall
//                 be <strong>final and binding</strong>.
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* contact */}

//       <div className="w-full max-w-[1200px] mx-auto py-10 ">
//         <h2 className="font-[var(--ff-primary)] text-[var(--fs-h3)] font-[var(--fw-bold)] text-[var(--color-primary)] uppercase tracking-tight mb-8">
//           Contact Information
//         </h2>
//         <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] font-[var(--ff-secondary)]">
//           <p>
//             <span className="font-[var(--fw-semibold)] uppercase text-[var(--color-primary)]">
//               Registered Office:
//             </span>{" "}
//             <br />
//             LoveLink Global HQ <br />
//             Ballabhgarh, Faridabad, Haryana - 121004 <br />
//             Email:{" "}
//             <a
//               href="mailto:info@lovelink.com"
//               className="text-[var(--color-primary)] hover:underline"
//             >
//               info@lovelink.com
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RefundPolicy;

import React from "react";
import {
  Scale,
  RotateCcw,
  ReceiptIndianRupee,
  AlertTriangle,
  ShieldAlert,
  Gavel,
  FileBadge,
  Lock,
  RefreshCcw,
} from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="w-full pt-20 min-h-screen px-4 sm:px-6 md:px-16 lg:px-40 py-12 bg-[var(--bg-main)] font-[var(--ff-primary)]">
      {/* Header */}
      <header className="text-center mb-12">
        <ReceiptIndianRupee
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
          Refund Policy
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

      {/* Nature of Services */}
      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <FileBadge className="w-8 h-8 text-[var(--color-primary)]" />
          <h2 className="font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-[var(--text-primary)] uppercase">
            Nature of Digital Services
          </h2>
        </div>

        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify">
          <p>
            LoveLink operates as a digital matrimony and matchmaking platform
            providing subscription-based access to premium features, enhanced
            visibility tools, and communication privileges. All services offered
            through LoveLink are intangible, digitally delivered, and made
            accessible immediately upon successful payment confirmation. By
            purchasing any membership plan or paid feature, the Member
            acknowledges that the services begin execution instantly and are
            considered consumed upon activation.
          </p>

          <p>
            LoveLink does not guarantee marriage, engagement, compatibility,
            relationship success, response from other Members, or any specific
            outcome. Matchmaking results depend entirely on user participation,
            accuracy of profile information, mutual consent between Members, and
            personal compatibility factors beyond the control of LoveLink.
          </p>
        </div>
      </div>

      {/* No Refund Principle */}
      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <AlertTriangle className="w-8 h-8 text-red-600" />
          <h2 className="font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-[var(--text-primary)] uppercase">
            Strict No-Refund Policy
          </h2>
        </div>

        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify">
          <p>
            All payments made to LoveLink, including but not limited to
            subscription fees, promotional plans, premium upgrades, visibility
            boosts, profile verification charges, or any auxiliary paid
            services, are strictly non-refundable. Once a transaction has been
            successfully processed and the service has been activated, no
            refund, reversal, or cancellation shall be permitted.
          </p>

          <p>
            Refunds shall not be granted on grounds of dissatisfaction,
            inability to find a suitable match, lack of responses from other
            Members, change of mind after purchase, personal circumstances,
            inactivity, partial usage of subscription period, or expiration of
            membership plan. The Member expressly agrees that the decision to
            purchase is voluntary and informed.
          </p>

          <p>
            In cases where an account is suspended or terminated due to
            violation of platform policies, misrepresentation, fraudulent
            conduct, abusive behavior, or use of the platform for unlawful or
            prohibited activities, no refund shall be issued under any
            circumstances.
          </p>
        </div>
      </div>

      {/* Limited Exception */}
      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <RefreshCcw className="w-8 h-8 text-[var(--color-primary)]" />
          <h2 className="font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-[var(--text-primary)] uppercase">
            Limited Exception for Technical Errors
          </h2>
        </div>

        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify">
          <p>
            A refund may be considered solely in circumstances involving a
            verifiable technical billing error directly attributable to
            LoveLink, such as duplicate transactions or incorrect amount charged
            due to system malfunction. Any request for review must be submitted
            within seven (7) days of the transaction date along with valid
            transaction proof and registered account details.
          </p>

          <p>
            LoveLink reserves the right to independently investigate all claims
            and determine the validity of such requests. If approved, refunds
            will be processed to the original payment method within a reasonable
            timeframe. Claims arising from user negligence, payment
            authorization errors, or third-party banking issues shall not
            qualify for refund consideration.
          </p>
        </div>
      </div>

      {/* Liability & Legal Protection */}
      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <ShieldAlert className="w-8 h-8 text-[var(--color-primary)]" />
          <h2 className="font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-[var(--text-primary)] uppercase">
            Limitation of Liability
          </h2>
        </div>

        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify">
          <p>
            LoveLink functions solely as an intermediary platform facilitating
            introductions between consenting adults. Under no circumstances
            shall LoveLink be held liable for emotional distress, relationship
            failure, marriage cancellation, financial disputes, family
            disagreements, dowry-related issues, or any personal loss arising
            from interactions between Members.
          </p>

          <p>
            Members acknowledge that all decisions made after connecting through
            the platform are undertaken at their own discretion and risk.
            LoveLink does not participate in personal negotiations, offline
            meetings, or matrimonial arrangements.
          </p>
        </div>
      </div>

      {/* Jurisdiction */}
      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <Gavel className="w-8 h-8 text-[var(--color-primary)]" />
          <h2 className="font-bold text-[clamp(1.5rem,3vw,2.5rem)] text-[var(--text-primary)] uppercase">
            Dispute Resolution & Jurisdiction
          </h2>
        </div>

        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify">
          <p>
            Any dispute arising from payments, refund claims, subscription
            matters, or related financial issues shall first be addressed
            through amicable written communication. If unresolved, such disputes
            shall be subject to arbitration in accordance with the Arbitration
            and Conciliation Act, 1996. The courts located in Haryana, India,
            shall have exclusive jurisdiction over all legal proceedings.
          </p>

          <p>
            This Refund Policy is governed by the applicable laws of India,
            including the Consumer Protection Act, 2019, the Information
            Technology Act, 2000, and the Indian Contract Act, 1872. Members
            agree that this written policy constitutes the complete and binding
            understanding regarding refunds and supersedes any prior verbal or
            informal representations.
          </p>
        </div>
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

export default RefundPolicy;
