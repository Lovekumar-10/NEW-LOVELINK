

// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   MapPin,
//   Phone,
//   Mail,
//   ChevronRight,
// } from "lucide-react";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   // Simple array-based data management for cleaner JSX
//   const navigationLinks = [
//     { text: "Home", to: "/" },
//     { text: "About Us", to: "/about" },
//     { text: "Member Login", to: "/login" },
//     { text: "Success Stories", to: "/" },
//     { text: "Membership Plans", to: "/pricing" },
//     { text: "Contact Us", to: "/contact" },
//   ];

//   const legalLinks = [
//     { text: "Refund Policy", to: "/refund-policy" },
//     { text: "Disclaimer", to: "/disclaimer" },
//     { text: "Privacy Policy", to: "/privacy" },
//     { text: "Terms & Conditions", to: "/terms" },
//     { text: "Safety Protocol", to: "/be-safe-online" },
//   ];

//   const socialIcons = [
//     { icon: <Facebook size={18} />, link: "#" },
//     { icon: <Twitter size={18} />, link: "#" },
//     { icon: <Instagram size={18} />, link: "#" },
//     { icon: <Linkedin size={18} />, link: "#" },
//   ];

//   return (
//     <footer
//       className="w-full pt-20 pb-10 text-white"
//       style={{
//         background: `linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)`,
//         fontFamily: "var(--ff-primary)",
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
//           {/* Column 1: Brand Identity */}
//           <div className="space-y-8">
//             <div className="flex items-center gap-3">
//               <Link
//                 to="/"
//                 className="relative w-14 h-14 overflow-hidden rotate-3 border-2 border-white/10 shadow-lg rounded-xl transition-transform hover:rotate-0 duration-300"
//               >
//                 <img
//                   src="/logoo.png"
//                   alt="Logo"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_2s_infinite]" />
//               </Link>
//               <h2 className="font-black uppercase tracking-tighter text-2xl">
//                 Love<span style={{ color: "var(--color-base)" }}>Link</span>
//               </h2>
//             </div>
//             <p className="leading-relaxed opacity-80 text-sm">
//               Connecting families through LoveLink. Discover meaningful,
//               lifelong relationships within our trusted global matrimonial
//               community.
//             </p>
//             <div className="flex items-center gap-4">
//               {socialIcons.map((soc, i) => (
//                 <a
//                   key={i}
//                   href={soc.link}
//                   className="w-10 h-10 border border-white/10 flex items-center justify-center bg-white/5 rounded-lg text-white/60 hover:bg-[var(--color-accent)] hover:text-white hover:border-transparent transition-all"
//                 >
//                   {soc.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Column 2: Navigation */}
//           <div className="lg:ml-10">
//             <h3 className="mb-8 uppercase tracking-[0.2em] font-bold text-xs border-b border-white/10 pb-2 w-fit">
//               Navigation
//             </h3>
//             <ul className="space-y-4">
//               {navigationLinks.map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     to={link.to}
//                     className="flex items-center gap-2 text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm group"
//                   >
//                     <ChevronRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 text-[var(--color-accent)] transition-all"
//                     />
//                     {link.text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 3: Important Links */}
//           <div className="lg:ml-5">
//             <h3 className="mb-8 uppercase tracking-[0.2em] font-bold text-xs border-b border-white/10 pb-2 w-fit">
//               Important Links
//             </h3>
//             <ul className="space-y-4">
//               {legalLinks.map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     to={link.to}
//                     className="flex items-center gap-2 text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm group"
//                   >
//                     <ChevronRight
//                       size={12}
//                       className="opacity-0 group-hover:opacity-100 text-[var(--color-accent)] transition-all"
//                     />
//                     {link.text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Column 4: Stay in Touch */}
//           <div className="space-y-6">
//             <h3 className="mb-8 uppercase tracking-[0.2em] font-bold text-xs border-b border-white/10 pb-2 w-fit">
//               Stay in Touch
//             </h3>
//             <div className="space-y-5 text-white/80 text-sm">
//               <div className="flex gap-3">
//                 <MapPin
//                   size={20}
//                   className="text-[var(--color-accent)] shrink-0"
//                 />
//                 <p className="leading-snug text-white/70">
//                   A-24, 2nd Floor, <br />
//                   Near Rajouri Garden Metro Station, <br />
//                   Rajouri Garden, New Delhi 110027
//                 </p>
//               </div>
//               <div className="flex items-center gap-3 text-white/70">
//                 <Phone size={18} className="text-[var(--color-accent)]" />
//                 +91-9900038442
//               </div>
//               <div className="flex items-center gap-3 text-white/70">
//                 <Mail size={18} className="text-[var(--color-accent)]" />
//                 info@lovelink.org
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Bottom Bar */}
//         <div className="pt-10 border-t border-white/10 flex flex-col items-center justify-center text-center gap-4">


//           {/* Text Details */}
//           <div className="flex flex-col items-center">
//             <span className="uppercase tracking-widest font-black text-white/60 text-[10px]">
//               LoveLink Global
//             </span>
//             <span className="text-white/30 text-xs font-medium">
//               © {new Date().getFullYear()} All rights reserved.
//             </span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { text: "Home", to: "/" },
    { text: "About Us", to: "/about" },
    { text: "Member Login", to: "/login" },
    { text: "Success Stories", to: "/success stories/" },
    { text: "Membership Plans", to: "/pricing" },
    { text: "Contact Us", to: "/contact" },
  ];

  const legalLinks = [
    { text: "Refund Policy", to: "/refund-policy" },
    { text: "Disclaimer", to: "/disclaimer" },
    { text: "Privacy Policy", to: "/privacy" },
    { text: "Terms & Conditions", to: "/terms" },
    { text: "Safety Protocol", to: "/be-safe-online" },
  ];

  const socialIcons = [
    { icon: <Facebook size={18} />, link: "#" },
    { icon: <Twitter size={18} />, link: "#" },
    { icon: <Instagram size={18} />, link: "#" },
    { icon: <Linkedin size={18} />, link: "#" },
  ];

  return (
    <footer
      className="w-full pt-20 pb-10 text-white"
      style={{
        background: `linear-gradient(135deg, var(--color-secondary) 0%, var(--color-primary) 100%)`,
        fontFamily: "var(--ff-primary)",
      }}
    >
      {/* Applied px-6 as requested. 
         max-w-7xl keeps content centered on ultra-wide screens.
      */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid: Responsive column counts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand (Naturally Left) */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="relative w-14 h-14 overflow-hidden rotate-3 border-2 border-white/10 shadow-lg rounded-xl transition-transform hover:rotate-0 duration-300"
              >
                <img
                  src="/logoo.png"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full hover:animate-[shimmer_2s_infinite]" />
              </Link>
              <h2 className="font-black uppercase tracking-tighter text-2xl">
                Love<span style={{ color: "var(--color-base)" }}>Link</span>
              </h2>
            </div>
            <p className="leading-relaxed opacity-80 text-sm max-w-xs">
              Connecting families through LoveLink. Discover meaningful,
              lifelong relationships within our trusted global matrimonial
              community.
            </p>
            <div className="flex items-center gap-4">
              {socialIcons.map((soc, i) => (
                <a
                  key={i}
                  href={soc.link}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center bg-white/5 rounded-lg text-white/60 hover:bg-[var(--color-accent)] hover:text-white hover:border-transparent transition-all"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:flex lg:justify-center">
            <div className="w-full lg:w-fit">
              <h3 className="mb-8 uppercase tracking-[0.2em] font-bold text-xs border-b border-white/10 pb-2 w-fit">
                Navigation
              </h3>
              <ul className="space-y-4">
                {navigationLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="flex items-center gap-2 text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm group"
                    >
                      <ChevronRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 text-[var(--color-accent)] transition-all"
                      />
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Important Links */}
          <div className="lg:flex lg:justify-center">
            <div className="w-full lg:w-fit">
              <h3 className="mb-8 uppercase tracking-[0.2em] font-bold text-xs border-b border-white/10 pb-2 w-fit">
                Important Links
              </h3>
              <ul className="space-y-4">
                {legalLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="flex items-center gap-2 text-white/60 hover:text-white hover:translate-x-2 transition-all duration-300 text-sm group"
                    >
                      <ChevronRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 text-[var(--color-accent)] transition-all"
                      />
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4: Stay in Touch (Aligned Right on Large Screens) */}
          <div className="lg:flex lg:justify-end">
            <div className="w-full lg:w-fit space-y-6">
              <h3 className="mb-8 uppercase tracking-[0.2em] font-bold text-xs border-b border-white/10 pb-2 w-fit">
                Stay in Touch
              </h3>
              <div className="space-y-5 text-white/80 text-sm">
                <div className="flex gap-3">
                  <MapPin size={20} className="text-[var(--color-accent)] shrink-0" />
                  <p className="leading-snug text-white/70">
                    LoveLink Global HQ, <br />
                    Ballabhgarh, Faridabad, <br />
                     Haryana - 121004
                  </p>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Phone size={18} className="text-[var(--color-accent)]" />
                  +91-9900038442
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Mail size={18} className="text-[var(--color-accent)]" />
                  info@lovelink.org
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR: "Left and Right" Logic
           - md:flex-row turns it into a row on tablet/desktop
           - justify-between pushes content to the far left and far right
        */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="uppercase tracking-[0.3em] font-blacktext-white/100  text-[10px]">
              LoveLink Global
            </span>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <span className="text-white/100 text-xs font-medium">
              © {currentYear} All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;