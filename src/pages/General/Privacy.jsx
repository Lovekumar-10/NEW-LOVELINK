// import React from "react";
// import { Info } from "lucide-react";
// import {
//   Database,
//   Handshake,
//   FileText,
//   Shield,
//   BellRing,
//   UserCheck,
//   DatabaseBackup,
//   Scale,
//   CheckCircle,
// } from "lucide-react";

// const PrivacyPolicy = () => {
//   return (
//     <div className="w-full pt-20 min-h-screen px-4 sm:px-6 md:px-16 lg:px-40 py-12 bg-[var(--bg-main)] font-[var(--ff-primary)]">
//       <header className="text-center mb-12">
//         <Shield
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
//           Privacy Policy
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
//             At{" "}
//             <span className="font-semibold text-[var(--color-primary)]">
//               LoveLink
//             </span>
//             , we value the trust that our customers, clients, and website
//             visitors place in us. Protecting your privacy and ensuring the
//             security of your personal information is an important part of how we
//             operate our business. This Privacy Policy explains how we collect,
//             use, manage, and safeguard the limited information that may be
//             shared with us through our website or during business communication.
//             LoveLink is committed to maintaining transparency in how we
//             handle user information. Our website is designed to provide basic
//             communication and service-related support to individuals and
//             businesses who wish to connect with us regarding logistics and
//             transportation services. We aim to collect only the minimum
//             information that is necessary to respond to user queries, provide
//             assistance, and maintain professional communication with our
//             customers.
//           </p>
//           <p>
//             We understand that privacy is a significant concern in today’s
//             digital environment. Therefore, LoveLink follows
//             responsible data handling practices and ensures that any information
//             shared with us is treated with care and confidentiality. We do not
//             engage in unnecessary data collection, intrusive tracking methods,
//             or the collection of sensitive personal details through our website.
//             Our primary goal is to ensure that users can contact us conveniently
//             while feeling secure about how their information is being handled.
//           </p>

//           <p>
//             This Privacy Policy applies to all visitors who interact with our
//             website, submit inquiries, or communicate with LoveLink
//             through digital or offline channels. By accessing our website or
//             providing your information to us, you acknowledge and agree to the
//             practices described in this policy. LoveLink reserves the
//             right to update or modify this Privacy Policy whenever necessary to
//             reflect improvements in our services, legal requirements, or changes
//             in operational practices. We encourage users to review this policy
//             periodically to stay informed about how their information is
//             protected. Our commitment is to maintain honesty, accountability,
//             and respect for user privacy while delivering reliable logistics
//             support and customer service.
//           </p>
//         </div>
//       </div>

//       {/* Information We Collect */}
//       <div className="w-full max-w-[1200px] mx-auto py-10">
//         <div className="flex items-center gap-4 mb-8">
//           <Database className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
//           <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
//             Information We Collect
//           </h2>
//         </div>
//         <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
//           <p>
//             At{" "}
//             <span className="font-semibold text-[var(--color-primary)]">
//               LoveLink
//             </span>
//             , we are committed to collecting only the information that is
//             necessary to provide you with the best service and support. We
//             respect your privacy and want to be transparent about the data we
//             handle. Our website is designed to be simple and user-friendly, and
//             we collect information only when you{" "}
//             <span className="font-semibold text-[var(--color-primary)]">
//               voluntarily provide it
//             </span>{" "}
//             to us.
//           </p>
//           <div className="space-y-4">
//             <div>
//               <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
//                 Contact Information:
//               </h3>
//               <p>
//                 When you reach out via our website forms or email, we may
//                 collect details such as your{" "}
//                 <span className="font-medium italic text-[var(--color-primary)]">
//                   name, phone number, and email address
//                 </span>
//                 . This allows us to respond to inquiries, provide assistance,
//                 and maintain communication in a professional and timely manner.
//               </p>
//             </div>
//             <div>
//               <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
//                 Inquiry Details:
//               </h3>
//               <p>
//                 We collect information related to your queries, requests, or
//                 feedback. This helps us understand your requirements better and
//                 provide{" "}
//                 <span className="font-medium text-[var(--color-primary)]">
//                   accurate and helpful responses
//                 </span>
//                 . The information collected is specific to your inquiry and is
//                 used solely for the purpose of resolving your request.
//               </p>
//             </div>
//           </div>
//           <p>
//             We want to emphasize our commitment to{" "}
//             <span className="font-bold uppercase tracking-wider text-[var(--color-primary)]">
//               data minimization
//             </span>{" "}
//             —we only collect what is required to respond to your inquiry. We do
//             not track your activity, use cookies, or gather information from
//             other sources. Any personal information you provide is handled
//             responsibly, stored securely, and{" "}
//             <span className="font-bold text-[var(--color-primary)]">
//               never sold, shared, or distributed
//             </span>{" "}
//             to third parties for commercial purposes.
//           </p>
//         </div>
//       </div>

//       {/* Security Section */}
//       <div className="w-full max-w-[1200px] mx-auto py-10">
//         <div className="flex items-center gap-4 mb-8">
//           <Shield className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
//           <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
//             Security
//           </h2>
//         </div>
//         <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
//           <p>
//             At{" "}
//             <span className="font-semibold text-[var(--color-primary)]">
//               LoveLink
//             </span>
//             , we prioritize the safety and security of the information you share
//             with us. We implement appropriate measures to protect your data from
//             unauthorized access, alteration, disclosure, or destruction. All
//             information provided to us is handled with care and stored securely
//             to ensure its{" "}
//             <span className="font-bold underline decoration-[var(--color-accent)]">
//               confidentiality and integrity
//             </span>
//             .
//           </p>
//           <p className="pt-2 text-[var(--fs-caption)] opacity-80 border-t border-[var(--border)] italic">
//             By clearly focusing on the security of your information, we aim to
//             build your trust and confidence. At LoveLink, protecting
//             your data is an essential part of our commitment to transparency,
//             reliability, and professionalism.
//           </p>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="w-full max-w-[1200px] mx-auto py-10 border-t border-[var(--border)]">
//         <h2 className="font-[var(--ff-primary)] text-[var(--fs-h3)] font-[var(--fw-bold)] text-[var(--color-primary)] uppercase tracking-tight mb-8">
//           Contact Information
//         </h2>
//         <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] font-[var(--ff-secondary)]">
//           <p>
//             <span className="font-[var(--fw-semibold)] uppercase text-[var(--color-primary)]">
//               Registered Office:
//             </span> <br />
//             LoveLink Global HQ <br />
//             Ballabhgarh, Faridabad, Haryana - 121004 <br />
//             Email:{" "}
//             <a href="mailto:info@lovelink.com" className="text-[var(--color-primary)] hover:underline">
//               info@lovelink.com
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrivacyPolicy;









import React from "react";
import { Info } from "lucide-react";
import {
  Database,
  Handshake,
  FileText,
  Shield,
  BellRing,
  UserCheck,
  DatabaseBackup,
  Scale,
  CheckCircle,
  RefreshCcw,
  AlertTriangle,
  Trash2,
  MessageSquareWarning,
} from "lucide-react";

import { 
  RotateCcw, 
  UserX, 
  MessageSquare,
 
  ShieldAlert 
} from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="w-full pt-20 min-h-screen px-4 sm:px-6 md:px-16 lg:px-40 py-12 bg-[var(--bg-main)] font-[var(--ff-primary)]">
      <header className="text-center mb-12">
        <Shield
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
          Privacy Policy
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
            At{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            is an online matrimonial portal commited to constantly providing
            matrimonial services (“services”). This Privacy Statement applies to
            all the matrimonial services operated under
            LoveLink. Since we are strongly committed to
            protecting your right to privacy, we have drawn out a privacy
            statement to explain how we collect and use the information you
            provide to us. You acknowledge that you are disclosing information
            voluntarily. By using the website and/or by providing your
            information, you consent to the collection and use of the
            information by us in accordance with this Privacy Policy. If you do
            not agree with the use of your information as described herein,
            please do not use or access this website. This electronic platform
            is being operated and owned by LoveLink  This
            Privacy Policy is published on web site to protect user’s privacy
            and is directly linked to our Terms and Conditions/Terms of Use.
          </p>
          <p>
            Our Payment services are provided by third- party service providers,
            selected after careful due diligence. These partners use secure
            servers for processing credit card transactions ensuring protection
            of our user’s credit card information. Each User/Member is solely
            responsible for maintaining confidentiality of their User Name and
            Password and all activities and transactions conducted under their
            User identity. This includes both any online and off-line
            transactions using credit/debit cards or such other payment
            instruments. Any negligence on the part of the user in safeguarding
            this information will not render, LoveLink 
            liable in any manner. We assume no responsibility/liability for the
            improper use of credit/debit cards information or other
            transactional data resulting from user negligence.
          </p>

          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            What information you need to give in to use this site?
          </h3>

          <p>
            The information we gather from members and visitors who apply for
            the various services on our site offers includes, but may not be
            limited to, contact details such as email address, first name, last
            name, date of birth, educational qualifications, a user- specified
            password, mailing address, zip/pin code and telephone/mobile number,
            educational and professional background information, usernames and
            passwords, any comments, feedback, posts and/or other content you
            submit to the service, and along with your interests and
            communication preferences. If you choose to register and sign in
            using a third-party account (such as your Facebook account), the
            authentication of your login is handled by the third-party, and the
            Service will collect your name, email address and any other
            information associated with your third-party account that you agree
            to share with us at the time you grant permission for your account
            on the service to be linked to your third-party account. We do not
            have control on the credit account with the payment gateway vendor
            used to pay the fees we charge., However, some additional
            information, including a billing address, payment information such
            as a credit/debit card number, credit/debit card expiration date,
            and tracking information from cheques or demand drafts, is collected
            by the Payment engine third party.
          </p>
          <p>
            The service also automatically collects, through our servers and
            through the use of cookies (small text files sent to your computer),
            web beacons (also known as clear or single pixel .gifs) and other
            technologies, information that tells us how you use the service,
            such as: Internet Protocol ("IP") address used to connect your
            computer to the Internet; computer, device and connection
            information, such as browser type and version, operating system,
            mobile platform and unique device identifier ("UDID") and other
            technical identifiers; Uniform Resource Locator ("URL") click stream
            data, including date and time stamp, referring and exit URLs, search
            terms used, and pages visited or searched for on the service; and
            for location-aware services, the physical location of your device in
            order to provide more relevant content for your region. Cookies are
            used to store the login information. Cookies are small files placed
            on your hard drive that will assist us deliver our services more
            efficiently. You may also encounter cookies or identical/related
            tracking devices on certain pages of the website that are placed by
            third parties. Please note that we do not control the use of cookies
            by such third parties.
          </p>

          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            How the site uses the information it collects/tracks?
          </h3>
          <p>
            The{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            collects information from our users primarily to ensure that we are
            able to fulfil your requirements and to deliver Personalised
            experience.
          </p>

          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            With whom the site shares the information it collects/tracks?
          </h3>

          <p>
            The{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            does not sell, rent, or loan any identifiable information at the
            individual level regarding its customers to any third party.
            However, we may share such identifiable information with our
            associates/affiliates/subsidiaries and such
            associates/affiliates/subsidiaries may market to you as a result of
            such sharing. The users who enter into site such as Builders,
            Agents/Brokers or any individual has provided their contact
            information for advertisement on our portal then users can contact
            them at their request through us. Any information you give us is
            held with the utmost care and security. We are also bound to
            cooperate fully should a situation arise where we are required by
            law or legal process to provide information about a
            customer/visitor. Our Website links to other websites may collect
            personally identifiable information about you. We are not
            responsible for the privacy policy or the contents of those linked
            websites. We may use your personal information to offer you
            customised content and individualised personalisation of the service
            to make it more relevant to your interests and needs, enhance,
            evaluate and improve the service, its advertisements and promotional
            campaigns and our products and services and to develop new products
            and services, identify and analyse usage trends, notify you about
            changes or updates to the service and our products and services; and
            to provide you special offers, promotions, surveys and other
            information about the service as well as products, events and
            services of ours, our affiliates and non-affiliated third parties
            such as societies and sponsors relevant to your use of the website.
            To receive such information, you accept for our terms and condition
            and privacy policy. We also may need to disclose your personal
            information to respond to or comply with any law, regulation,
            subpoena, court order or other legal obligation, or to enforce and
            protect our rights and properties, or to detect, investigate and
            help prevent security threats, fraud or other malicious activity, or
            to protect the rights, property or safety of our users, employees or
            others, and if artoflivingmatrimony.org, the service or a related
            asset or line of business is acquired by, transferred to or merged
            with another company.
          </p>

          <p>
            The service may let you post and share personal information,
            comments, materials and other content. Any information you disclose
            publicly may be collected and used by others, may be indexed by
            search engines, and might not be able to be removed. Please be
            careful when disclosing personal information in these public areas.
            The service may allow registered users to access their account
            information and make corrections or updates upon log in at any time.
            The accuracy of such information is solely the responsibility of the
            user. You may also request access to other personal information
            about you that may be held in the service. If you request to
            deactivate your account or delete your personal information, we will
            endeavour to fulfil your request but some personal information may
            persist in backup copies for a certain period of time and may be
            retained as necessary for legitimate business purposes or to comply
            with our legal obligations. Your personal information may be
            transferred to other countries for processing. By using the Service
            you consent to the transfer of information to countries outside of
            your country of residence, which may have different personal data
            protection rules than in your country. www.artoflivingmatrimony.org
            cannot be held liable for any errors or inconsistencies. However, we
            take every care to give you accuracy and clarity of the information.
            www.artoflivingmatrimony.org disclaims any and all responsibility or
            liability for the accuracy, content, completeness, legality,
            reliability, or operability or availability of information or
            material displayed on this web site by the third parties.
          </p>
        </div>
      </div>

      {/* Information We Collect */}
      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <Database className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            Data Retention
          </h2>
        </div>
        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          <p>
            We retain your personal information only for as long as necessary to
            fulfil the purposes for which it was collected, including for
            satisfying any legal, regulatory, tax, accounting, or reporting
            requirements. We may retain your data for a longer period in the
            event of a compliant or if we reasonably believe there is a prospect
            of litigation in respect to our relationship with you. Data that is
            no longer required is securely deleted or anonymised.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
                User Rights under Applicable Law:
              </h3>
              <p className="mb-2">
                Depending on your jurisdiction, you may have the right to:
              </p>
              <ul className="list-disc ml-5 mb-4 space-y-1">
                <li>Access the personal data we hold about you;</li>
                <li>Request correction or deletion of your personal data;</li>
                <li>Withdraw your consent at any time;</li>
                <li>Object to or request restriction of processing;</li>
                <li>Lodge a complaint with a data protection authority.</li>
              </ul>
              <p className="mb-4">
                To exercise these rights, please contact our Grievance Officer
                as provided in the Contact section.
              </p>
            </div>
          </div>
          <p>
            We want to emphasize our commitment to{" "}
            <span className="font-bold uppercase tracking-wider text-[var(--color-primary)]">
              data minimization
            </span>{" "}
            —we only collect what is required to respond to your inquiry. We do
            not track your activity, use cookies, or gather information from
            other sources. Any personal information you provide is handled
            responsibly, stored securely, and{" "}
            <span className="font-bold text-[var(--color-primary)]">
              never sold, shared, or distributed
            </span>{" "}
            to third parties for commercial purposes.
          </p>
        </div>
      </div>

      {/* Security Section */}
      <div className="w-full max-w-[1200px] mx-auto py-10">
        <div className="flex items-center gap-4 mb-8">
          <Shield className="w-6 h-6 md:w-8 md:h-8 text-[var(--color-primary)]" />
          <h2 className="font-[var(--ff-primary)] text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-[var(--text-primary)] uppercase tracking-tight">
            Security
          </h2>
        </div>
        <div className="space-y-6 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify md:text-left">
          <p>
            At{" "}
            <span className="font-semibold text-[var(--color-primary)]">
              LoveLink
            </span>{" "}
            takes the security of personal information seriously. We employ
            industry-standard physical, technical, and administrative safeguards
            to protect your data from unauthorised access, disclosure,
            alteration, and destruction. However, no method of transmission over
            the Internet or method of electronic storage is 100% secure.
            Therefore, while we strive to use commercially acceptable means to
            protect your information, we cannot guarantee its absolute security.
          </p>

          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            Do all visitors have to pay?
          </h3>
          <p>
            NO. All visitors to our site may browse the site, search the ads and
            view any articles or features our site has to offer without entering
            any personal information or paying money. Some advanced or
            member-only features may require registration or payment, as
            specified in our Terms of Use. We reserve the right to update this
            policy as needed.
          </p>
          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            How to unsubscribe the membership?
          </h3>
          <p>
            The members are requested to login to the relevant pages to
            unsubscribe as a member by sending an email to
            info@artoflivingmatrimony.org with reason to remove profile. The
            request must be sent from the registered email address associated
            with the account. Upon verification, the profile will be removed
            within a reasonable time. Please note that deleted profiles cannot
            be restored. We reserve the right to decline incomplete or
            unverified requests.
          </p>

          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            What happens after account deletion?
          </h3>
          <p>
            Upon receiving a verified request for account deletion, your profile
            will be removed from public viewing and the membership will be
            terminated. However, we may retain certain personal data, where
            required, for a reasonable period of time as necessary for
            legitimate business purposes, such as maintaining records of
            transactions, preventing fraud, resolving disputes, enforcing our
            terms and complying with legal obligations under applicable laws,
            including but not limited to the Information Technology Act, 2000
            and relevant data protection regulations. Such retained data will be
            securely stored and not used for any marketing or profiling
            purposes.
          </p>

          <h3 className="font-bold underline decoration-[var(--color-accent)] mb-1">
            User Reactivation Policy
          </h3>
          <p>
            If a member wishes to reactivate a previously deleted account, they
            must create a new profile by registering again on the Site. Once a
            profile is deleted, it cannot be restored, and all associated data,
            preferences, and history will be permanently removed from public
            access. For security and compliance purposes, the system does not
            support restoration of deleted profiles.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto py-10 px-4">
        <div className="grid gap-12 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)]">
          {/* 1. User Reactivation Policy */}
          <section>
            <div className="flex items-center gap-3 mb-3 text-[var(--color-primary)]">
              <RotateCcw className="w-6 h-6" />
              <h3 className="font-bold text-lg uppercase tracking-wide">
                User Reactivation Policy
              </h3>
            </div>
            <p>
              If a member wishes to reactivate a previously deleted account,
              they must create a new profile by registering again on the Site.
              <span className="font-bold text-red-600 ml-1">
                Once a profile is deleted, it cannot be restored.
              </span>{" "}
              All associated data, preferences, and history are permanently
              removed. For security and compliance purposes, our system does not
              support the restoration of deleted profiles.
            </p>
          </section>

          {/* 2. Platform-Initiated Account Deletion */}
          <section className="bg-slate-50 p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
            <div className="flex items-center gap-3 mb-4 text-red-600">
              <UserX className="w-7 h-7" />
              <h3 className="font-bold text-xl uppercase">
                Platform-Initiated Account Deletion
              </h3>
            </div>
            <p className="mb-4 font-medium opacity-90">
              LoveLink reserves the right to suspend or delete accounts without
              prior notice for violations including:
            </p>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {[
                "Fraudulent activity or Impersonation",
                "Abusive behavior or Harassment",
                "Concealing health conditions affecting marriage",
                "Misuse of contact details/Spamming",
                "Uploading objectionable/obscene content",
                "Promotion of extramarital relationships",
                "Harassment or exploitation of members",
                "Illegal activities (Swindling, Cybercrime)",
                "Prolonged account inactivity",
              ].map((item, index) => (
                <div key={index} className="flex gap-2 items-start">
                  <span className="text-red-500 font-bold">•</span> {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs opacity-75 italic">
              Users will be informed via registered email. We cooperate fully
              with law enforcement as required by law.
            </p>
          </section>

          {/* 3. Messaging & Contact Limits */}
          <section>
            <div className="flex items-center gap-3 mb-3 text-[var(--color-primary)]">
              <MessageSquare className="w-6 h-6" />
              <h3 className="font-bold text-lg uppercase tracking-wide">
                Messaging & Contact Limits
              </h3>
            </div>
            <p>
              As a paid member, you have the privilege to contact numerous
              profiles. However, to ensure a respectful user experience and
              protect against spam, we enforce a
              <span className="font-bold text-[var(--color-primary)]">
                {" "}
                limit of 100 messages per day
              </span>
              . This cap is part of our fair online usage policy to maintain
              platform integrity.
            </p>
          </section>

          {/* 4. Change of Privacy Policy */}
          <section className="bg-[var(--color-accent)]/5 p-6 rounded-xl border border-[var(--color-accent)]/20">
            <div className="flex items-center gap-3 mb-3 text-[var(--color-primary)]">
              <RefreshCcw className="w-6 h-6" />
              <h3 className="font-bold text-lg uppercase tracking-wide">
                Policy Updates
              </h3>
            </div>
            <p>
              We may change this Privacy Policy periodically based on feedback
              or company changes. We suggest reviewing this page regularly, as
              you are bound by the
              <span className="italic font-medium underline underline-offset-4 decoration-[var(--color-primary)]">
                {" "}
                most current version in force
              </span>
              . Significant changes affecting your rights will be notified via
              email or service alerts.
            </p>
          </section>

          {/* 5. Disclaimer & User Responsibility */}
          <section className="border-t border-[var(--color-accent)]/30 pt-8">
            <div className="flex items-center gap-3 mb-4 text-orange-600">
              <ShieldAlert className="w-7 h-7" />
              <h3 className="font-bold text-xl uppercase tracking-tighter">
                Disclaimer & Responsibility
              </h3>
            </div>
            <div className="space-y-4 text-sm md:text-base opacity-90">
              <p>
                While LoveLink strives to provide a secure platform, we cannot
                guarantee the accuracy, completeness, or legality of content
                posted by users.
                <span className="font-semibold underline">
                  Users are advised to exercise due caution
                </span>{" "}
                and verify details independently before making matrimonial
                decisions.
              </p>
              <div className="p-4 bg-orange-50 rounded-lg flex gap-3 items-start">
                <AlertTriangle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <p className="text-xs md:text-sm text-orange-800 italic">
                  LoveLink shall not be liable for any damages—direct or
                  indirect—resulting from the use of the platform, including
                  identity impersonation, data misuse, or disputes between
                  users. Users acknowledge they use the service at their own
                  risk.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-[1200px] mx-auto py-10 border-t border-[var(--border)]">
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

export default PrivacyPolicy;
