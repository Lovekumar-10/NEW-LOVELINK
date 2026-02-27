// import React from "react";
// import { ShieldAlert, AlertTriangle } from "lucide-react";
// import { motion } from "framer-motion";

// const TopSafetyMarquee = ({ isScrolled }) => {
//   // The 15-word professional disclaimer
//   const disclaimerText = "Matrimony platform for serious alliances only. Not for dating. Users are responsible for their own interactions.";

//   return (
//     <div
//       className={`w-full overflow-hidden transition-all duration-300
//       bg-[var(--color-primary)] 
//       text-white
//       border-b border-black/10
//       ${isScrolled ? "py-1" : "py-2"}`}
//       style={{ zIndex: 9999 }}
//     >
//       <div className="flex items-center whitespace-nowrap">
//         {/* Framer Motion for ultra-smooth infinite scroll */}
//         <motion.div
//           animate={{ x: ["0%", "-50%"] }}
//           transition={{
//             ease: "linear",
//             duration: 20,
//             repeat: Infinity,
//           }}
//           className="flex items-center gap-12 pr-12"
//         >
//           {/* Section 1 */}
//           <div className="flex items-center gap-2">
//             <ShieldAlert size={14} className="text-[var(--color-accent)]" />
//             <span 
//               className="font-[var(--fw-medium)] tracking-wide"
//               style={{ fontSize: 'var(--fs-caption)', fontFamily: 'var(--ff-secondary)' }}
//             >
//               {disclaimerText}
//             </span>
//           </div>

//           {/* Section 2 (Repeat for seamless loop) */}
//           <div className="flex items-center gap-2">
//             <AlertTriangle size={14} className="text-[var(--color-accent)]" />
//             <span 
//               className="font-[var(--fw-medium)] tracking-wide"
//               style={{ fontSize: 'var(--fs-caption)', fontFamily: 'var(--ff-secondary)' }}
//             >
//               {disclaimerText}
//             </span>
//           </div>

//           {/* Section 3 (Duplicate for extra-long screens) */}
//           <div className="flex items-center gap-2">
//             <ShieldAlert size={14} className="text-[var(--color-accent)]" />
//             <span 
//               className="font-[var(--fw-medium)] tracking-wide"
//               style={{ fontSize: 'var(--fs-caption)', fontFamily: 'var(--ff-secondary)' }}
//             >
//               {disclaimerText}
//             </span>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TopSafetyMarquee;



import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert } from "lucide-react";

const TopSafetyTicker = ({ isScrolled }) => {
  const disclaimerText = "Matrimony platform for serious alliances only. Not for dating. Users are responsible for their interactions.";

  return (
    <div
      className={`w-full overflow-hidden bg-[var(--color-primary)] text-white border-b border-black/5 transition-all duration-300 flex items-center ${
        isScrolled ? "py-0.5" : "py-1"
      }`}
      style={{ zIndex: 10001 }}
    >
      <div className="flex items-center whitespace-nowrap w-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25, // Slow, easy-to-read speed
            repeat: Infinity,
          }}
          // Pauses the animation when user hovers (Desktop) or touches (Mobile)
          whileHover={{ animationPlayState: "paused" }} 
          className="flex items-center gap-16 pr-16"
        >
          {/* Loop items 4 times to ensure no gaps on large screens */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <ShieldAlert size={12} className="text-[var(--color-accent)] shrink-0" />
              <span 
                className="font-[var(--fw-medium)] tracking-tight opacity-90"
                style={{ 
                  fontSize: '11px', // Hardcoded tiny for extreme slim look
                  fontFamily: 'var(--ff-secondary)' 
                }}
              >
                {disclaimerText}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TopSafetyTicker;