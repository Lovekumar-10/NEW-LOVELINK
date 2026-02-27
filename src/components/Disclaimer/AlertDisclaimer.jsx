


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
import { X, ShieldAlert, ArrowRight } from 'lucide-react';

const DisclaimerModal = () => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  useEffect(() => {
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
    <div className={`fixed inset-0 z-[10000] flex items-center justify-center p-6 transition-all duration-500 ${
      isAnimate ? 'bg-black/50 backdrop-blur-sm opacity-100' : 'bg-transparent opacity-0 pointer-events-none'
    }`}>
      <div 
        className={`bg-[var(--bg-card)] w-full max-w-[340px] rounded-[var(--radius-lg)] shadow-[var(--shadow-hover)] border border-[var(--border)] relative transition-all duration-700 cubic-bezier(0.19, 1, 0.22, 1) ${
          isAnimate ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
        style={{ fontFamily: 'var(--ff-primary)' }}
      >
        {/* CROSS BUTTON (Top Right) */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-[var(--bg-main)] text-[var(--text-light)] hover:text-[var(--color-primary)] transition-all cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="p-8 flex flex-col items-center text-center">
          
          {/* ICON */}
          <div className="mb-4 p-3 rounded-full bg-[var(--color-primary-2)]">
            <ShieldAlert size={28} className="text-[var(--color-primary)]" />
          </div>

          {/* HEADLINE */}
          <h2 className="text-[var(--fs-h6)] font-[var(--fw-bold)] text-[var(--text-primary)] mb-2">
            Disclaimer
          </h2>

          {/* PARA (Minimal & Direct) */}
          <p className="text-[12px] text-[var(--text-secondary)] leading-relaxed mb-6 px-2">
            This is a <b>Matrimony</b> platform, not a dating app. Users are solely responsible for their interactions.
          </p>

          {/* CENTER BUTTON */}
          <button 
            onClick={handleClose}
            className="w-full py-3.5 bg-[var(--color-primary)] text-white font-[var(--fw-bold)] rounded-[var(--radius-md)] cursor-pointer hover:brightness-110 active:scale-[0.97] transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-200"
            style={{ fontSize: 'var(--fs-caption)' }}
          >
            I Understand
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;