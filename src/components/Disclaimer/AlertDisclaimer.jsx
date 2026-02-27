


// import React, { useState, useEffect } from 'react';
// import { X, ShieldCheck, AlertTriangle } from 'lucide-react';

// const DisclaimerModal = () => {
//   const [shouldRender, setShouldRender] = useState(false);
//   const [isAnimate, setIsAnimate] = useState(false);

//   useEffect(() => {
//     // 1. Check if user has already dismissed it
//     const isDismissed = localStorage.getItem('matrimony_disclaimer_closed');

//     if (!isDismissed) {
//       // 2. Wait for 3 seconds before showing
//       const timer = setTimeout(() => {
//         setShouldRender(true);
//         // Small delay to trigger the CSS transition
//         setTimeout(() => setIsAnimate(true), 100);
//       }, 3000);

//       return () => clearTimeout(timer);
//     }
//   }, []);

//   const handleClose = () => {
//     setIsAnimate(false);
//     // Wait for animation to finish before unmounting
//     setTimeout(() => {
//       setShouldRender(false);
//       localStorage.setItem('matrimony_disclaimer_closed', 'true');
//     }, 500);
//   };

//   if (!shouldRender) return null;

//   return (
//     <div 
//       className={`fixed inset-0 z-[10000] flex items-end md:items-center justify-center p-4 transition-all duration-700 ease-in-out ${
//         isAnimate ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'
//       }`}
//     >
//       <div 
//         className={`bg-[var(--bg-card)] w-full max-w-[450px] rounded-[var(--radius-lg)] shadow-[var(--shadow-hover)] border border-[var(--border)] overflow-hidden transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${
//           isAnimate ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-full md:translate-y-20 opacity-0 scale-90'
//         }`}
//         style={{ fontFamily: 'var(--ff-primary)' }}
//       >
//         {/* Header */}
//         <div className="relative flex flex-col items-center justify-center p-6 text-center border-b border-[var(--border)] bg-[var(--bg-main)]">
//           <button 
//             onClick={handleClose}
//             className="absolute p-2 transition-all rounded-full top-3 right-3 hover:bg-[var(--color-primary-2)] group"
//           >
//             <X size={20} className="text-[var(--text-light)] group-hover:text-[var(--color-primary)]" />
//           </button>
          
//           <div className="p-3 mb-3 rounded-full bg-[var(--color-primary-2)]">
//             <ShieldCheck size={32} className="text-[var(--color-primary)]" />
//           </div>
          
//           <h2 className="text-[var(--fs-h4)] font-[var(--fw-bold)] text-[var(--text-primary)] leading-tight">
//             Security & Safety <br/> <span className="text-[var(--color-primary)]">Guidelines</span>
//           </h2>
//         </div>

//         {/* Body */}
//         <div className="p-6 md:p-8">
//           <ul className="space-y-4">
//             <li className="flex gap-4">
//               <div className="mt-1"><AlertTriangle size={18} className="text-[var(--color-accent-base)]" /></div>
//               <p className="text-[var(--fs-body)] text-[var(--text-secondary)]">
//                 <strong>Verify Profiles:</strong> Always meet in public places and verify family backgrounds independently.
//               </p>
//             </li>
//             <li className="flex gap-4">
//               <div className="mt-1"><AlertTriangle size={18} className="text-[var(--color-accent-base)]" /></div>
//               <p className="text-[var(--fs-body)] text-[var(--text-secondary)]">
//                 <strong>Stay Safe:</strong> Do not share financial info or OTPs with anyone claiming to be from our team.
//               </p>
//             </li>
//           </ul>

//           <button 
//             onClick={handleClose}
//             className="w-full mt-8 py-4 bg-[var(--color-primary)] text-white font-[var(--fw-bold)] rounded-[var(--radius-md)] shadow-lg hover:brightness-110 active:scale-[0.98] transition-all"
//             style={{ fontSize: 'var(--fs-body)' }}
//           >
//             I Understand, Proceed
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisclaimerModal;




import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Lock, Eye } from 'lucide-react';

const DisclaimerModal = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
    // Triggers after 3 seconds on every page load/refresh
    const timer = setTimeout(() => {
      setShouldRender(true);
      setTimeout(() => setIsAnimate(true), 50);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimate(false);
    setTimeout(() => setShouldRender(false), 500);
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[10000] flex items-end md:items-center justify-center p-4 transition-all duration-500 ease-in-out ${
        isAnimate ? 'bg-black/60 backdrop-blur-sm opacity-100' : 'bg-transparent opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className={`bg-[var(--bg-card)] w-full max-w-[480px] rounded-[var(--radius-lg)] shadow-[var(--shadow-hover)] border border-[var(--border)] overflow-hidden transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${
          isAnimate ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
        }`}
        style={{ fontFamily: 'var(--ff-primary)' }}
      >
        {/* Header with Background Accent */}
        <div className="relative p-6 text-center bg-[var(--bg-main)] border-b border-[var(--border)]">
          <button 
            onClick={handleClose}
            className="absolute p-2 transition-all rounded-full top-3 right-3 hover:bg-[var(--color-primary-2)] cursor-pointer group"
          >
            <X size={20} className="text-[var(--text-light)] group-hover:text-[var(--color-primary)]" />
          </button>
          
          <div className="inline-flex items-center justify-center p-3 mb-3 rounded-full bg-[var(--color-primary-2)]">
            <Lock size={28} className="text-[var(--color-primary)]" />
          </div>
          <h2 className="text-[var(--fs-h4)] font-[var(--fw-bold)] text-[var(--text-primary)] uppercase tracking-tight">
            Security Disclaimer
          </h2>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8">
          <div className="space-y-5">
            <p className="text-[var(--fs-body)] text-[var(--text-primary)] font-[var(--fw-medium)] leading-relaxed text-center">
              Your safety is our top priority. Please read this notice carefully before proceeding.
            </p>

            <div className="space-y-4 p-4 rounded-[var(--radius-md)] bg-[var(--bg-main)] border border-[var(--border)]">
              <div className="flex gap-3">
                <ShieldCheck size={20} className="shrink-0 text-[var(--success)]" />
                <p className="text-[var(--fs-small)] text-[var(--text-secondary)]">
                  <strong>Verification Notice:</strong> As per safety purposes, users are advised to record and verify profile details independently before entering into any personal commitments.
                </p>
              </div>
              
              <div className="flex gap-3">
                <Eye size={20} className="shrink-0 text-[var(--color-accent-base)]" />
                <p className="text-[var(--fs-small)] text-[var(--text-secondary)]">
                   We never ask for your bank details or OTP. Be cautious of fraudulent accounts claiming to represent our team.
                </p>
              </div>
            </div>

            <p className="text-[var(--fs-caption)] text-[var(--text-light)] text-center italic">
              By continuing, you acknowledge that you are responsible for your interactions on this platform.
            </p>
          </div>

          {/* Action Button */}
          <button 
            onClick={handleClose}
            className="w-full mt-8 py-4 bg-[var(--color-primary)] text-white font-[var(--fw-bold)] rounded-[var(--radius-md)] shadow-lg hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
            style={{ fontSize: 'var(--fs-body)' }}
          >
            Confirm & Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;