import React from "react";
import {
  ShieldAlert,
  Gavel,
  Phone,
  Search,
  Scale,
  FileText,
} from "lucide-react";

const Disclaimer = () => {
  const BrandName = () => (
    <>
      {" "}
      <span className="font-semibold text-[var(--color-primary)]">
        LoveLink
      </span>{" "}
    </>
  );

  return (
    <div className="w-full pt-20 min-h-screen px-4 sm:px-6 md:px-16 lg:px-40 py-12 bg-[var(--bg-main)] font-[var(--ff-primary)]">
      {/* Header Section */}
      <header className="text-center mb-12">
        <ShieldAlert
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
          Disclaimer
        </h1>
        <p className="mt-4 text-[var(--text-secondary)] opacity-80 italic">
          Please read these terms carefully before using our services.
        </p>
      </header>

      <div className="w-full max-w-[1200px] mx-auto space-y-12 text-[var(--text-primary)] leading-relaxed text-[var(--fs-body)] text-justify">
        {/* Intro */}
        <section>
          <p className="font-bold mb-4">
            This Disclaimer expresses as follows:
          </p>
          <p>
            It must be clearly understood that each profile you find on this
            website is the resultant consequence of a process and procedure,
            which is expected to be adhered by our clients with due diligence.
          </p>
        </section>

        {/* Core Role */}
        <section className="flex gap-6 items-start">
          <Search className="w-12 h-12 text-[var(--color-primary)] flex-shrink-0 hidden sm:block" />
          <div className="space-y-4">
            <p>
              <BrandName /> (“site”) does not engage in any matchmaking
              whatsoever. <BrandName /> shall not be held responsible in any way
              for the character, conduct, and/or integrity of a person whose
              profile is found on this site.
            </p>
            <p>
              <BrandName /> makes no representations or warranties regarding the
              accuracy, reliability, or significance of any detail of a person
              found on this website, and shall not be responsible for any abuse,
              fraud, misconduct, or misrepresentation that may be done by any
              third party using the platform.
            </p>
            <p>
              Furthermore, the management of <BrandName /> does not guarantee
              the authenticity, background, or credentials of any person who has
              registered for membership on <BrandName />.
            </p>
          </div>
        </section>

        {/* Content & Communication */}
        <section className="flex gap-6 items-start">
          <Phone className="w-12 h-12 text-[var(--color-primary)] flex-shrink-0 hidden sm:block" />
          <div className="space-y-4">
            <p>
              The web site <BrandName /> makes no warranty or representation
              regarding any content or products advertised on this website. We
              expressly disclaim any and all warranties, express or implied,
              including, but not limited to, any warranties as to the
              availability, accuracy, completeness or content of information,
              products or services, which belong to and are provided by other
              parties.
            </p>
            <p>
              We may, from time to time, make calls and/or send text messages to
              you at any telephone number associated with your account, to
              ensure that consumers’ inquiries and engagement are handled
              accurately, courteously, and promptly. You certify/ and warrant
              that the telephone numbers provided to us are your contact numbers
              and that you are authorised to receive communications on them
              same. You agree that <BrandName /> may send emails to the email
              address you have provided, or use other electronic means of
              communication to the extent permitted by law.
            </p>
          </div>
        </section>

        {/* As-Is Warranty */}
        <section className="bg-[var(--bg-secondary)] p-8 rounded-xl border border-[var(--color-primary)]/20">
          <p className="mb-4">
            <BrandName /> also disclaims any or all warranties of any
            merchantability, or fitness for a particular purpose, or
            non-infringement. In no event will <BrandName /> or its employees,
            be liable for any damages or losses, including, without, limitation,
            indirect, consequential, special, incidental or punitive damages
            directly or indirectly resulting from the use of this web site, its
            content or any errors or omissions therein, even if advised of the
            possibility of such damages.
          </p>
          <p>
            You expressly agree that the use of the services is at your sole
            risk. The services are provided on an “as is” and “as available”
            basis. <BrandName /> does not warrant that the services will meet
            your requirements or that the services will be uninterrupted,
            timely, secure, or error-free. We make no warranty regarding the
            results that may be obtained from the use of the services, or nor do
            we guarantee that any defects in the will be corrected.
          </p>
        </section>

        {/* Responsibility */}
        <section className="space-y-4">
          <p>
            You understand and agree that any material downloaded or otherwise
            obtained through the use of the services is done at your own
            discretion and risk, and that you will be solely responsible for any
            damage to your system or loss of data resulting from the download of
            such material and/or information.
          </p>
          <p>
            No advice or information, whether oral or written, obtained by you
            from <BrandName /> or through the services will create any warranty
            not expressly made herein. Any discussions, views, and/or
            recommendations published on the Site are the sole responsibility of
            the respective authors and do not represent the views of{" "}
            <BrandName />.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section className="p-8 border-l-4 border-red-600 bg-red-50/10">
          <h2 className="font-bold text-xl mb-4 uppercase text-red-600">
            LIMITATION OF LIABILITY:
          </h2>
          <p className="mb-4">
            Under no circumstances and under no legal theory, tort, contract, or
            otherwise, shall <BrandName /> or its management be liable to the
            user or any other person for any indirect, special, incidental, or
            consequential damages of any character including, without
            limitation, damages resulting from the use of or the inability to
            use the <BrandName /> service or other damages for loss of goodwill,
            business profit, business stoppage, loss of data or business
            information, computer damage, or damages resulting from unauthorized
            access to or changes made to user's transmissions or data, or any
            and all other commercial damages or other losses including, without
            limitation, personal losses, death, cruelty or injury. It is
            understood that the materials provided are for your personal
            information only and shall not be construed to be any specific
            advice to you.
          </p>
          <p>
            <BrandName /> shall not be held responsible for personal or business
            losses arising from using or not using our services in any way.
            Please use your own discretion when following our services.
          </p>
        </section>

        {/* Legal Jurisdiction */}
        <section className="space-y-4">
          <p>
            Any action taken by the user on the basis of the information
            contained in this site is the user’s responsibility alone, and{" "}
            <BrandName /> will not be liable in any manner for the consequences
            of such action taken by the user.
          </p>
          <p>
            The relationship between the user and <BrandName /> shall be
            governed by the laws of the Republic of India without regard to its
            conflict of law provisions.
          </p>
          <p>
            This site is the property of <BrandName /> and is subject to Indian
            laws. <BrandName /> reserves the right to make modifications and
            alterations to the material contained on this site without any prior
            notice of such modifications or alterations whatsoever.
          </p>
        </section>

        {/* Prediction & Background Checks */}
        <section className="bg-amber-50/10 p-8 rounded-xl border border-amber-500/20">
          <p className="mb-6 italic">
            You are advised to exercise due caution while relying, in any manner
            whatsoever, upon any astrological predictions or other predictive
            services of any kind. Any of your actions, resulting from your
            reliance on <BrandName /> or the website(s) of its business
            affiliates or other service providers, shall purely be one for which{" "}
            <BrandName /> and its business affiliates or providers have no
            responsibility or liability of any kind whatsoever.
          </p>
          <p className="font-bold">
            <BrandName /> is in no way responsible for the disputes that arise
            out of the issues of marriage(s) from either party. The
            responsibility lies with the interested parties to perform the
            background checks of the probable Bride or Bridegroom to be in
            advance before entering into any nuptial confirmations, especially
            regarding financial status and financial issues of any sort in
            particular.
          </p>
        </section>

        {/* Third Party */}
        <section>
          <p>
            <BrandName /> does not claim ownership of, endorse, or take
            responsibility for any third-party products, information,
            guidelines, materials, or services that may be offered, advertised,
            provided, or displayed on the site. At no time shall any marriage of
            the bride or the bridegroom listed on the website create any
            obligations or liabilities for <BrandName />.
          </p>
        </section>
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

export default Disclaimer;
