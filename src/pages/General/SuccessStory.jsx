// import React from "react";
// import { motion, useAnimation } from "framer-motion";
// import { ArrowRight, Users, ShieldCheck, Zap, Heart } from "lucide-react";

// const SuccessStory = () => {
//   const rocketControls = useAnimation();

//   const handleLaunch = async () => {
//     await rocketControls.start({
//       rotate: -45,
//       x: [0, -1, 1, -1, 0],
//       transition: { duration: 0.2 }
//     });

//     await rocketControls.start({
//       x: 300,
//       y: -300,
//       opacity: 0,
//       scale: 1.2,
//       transition: { duration: 0.5, ease: "easeIn" }
//     });

//     setTimeout(() => {
//       rocketControls.set({ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 });
//     }, 1200);
//   };

//   return (
//     <div className="w-full min-h-screen bg-[var(--bg-main)] font-[var(--ff-primary)] overflow-x-hidden">

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative h-[65vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
//         {/* Background */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
//             alt="Happy Couples"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/65"></div>
//         </div>

//         {/* Content */}
//         <div className="relative z-20 text-center px-6 max-w-4xl mb-12">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="font-bold leading-tight mb-5 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
//               Our Marriage,{" "}
//               <span className="text-[var(--color-primary)] italic">
//                 Happy Family
//               </span>
//             </h1>

//             <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
//               Millions have found their life partner through our services.
//               Your forever story could be next.
//             </p>

//             <motion.button
//               onClick={handleLaunch}
//               whileHover="hover"
//               initial="rest"
//               className="relative group overflow-hidden bg-white/10 border border-white px-6 py-2.5 rounded-full flex items-center gap-3 mx-auto transition-all duration-300 hover:border-[var(--color-primary)]"
//             >
//               <motion.span
//                 className="absolute inset-0 bg-[var(--color-primary)] z-0"
//                 variants={{ rest: { x: "-100%" }, hover: { x: 0 } }}
//                 transition={{ duration: 0.4, ease: "circOut" }}
//               />
//               <span className="relative z-10 text-sm md:text-base font-semibold text-white">
//                 Post Your Success Story
//               </span>
//               <div className="relative z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[var(--color-primary)]">
//                 <motion.div animate={rocketControls}>
//                   <ArrowRight size={18} />
//                 </motion.div>
//               </div>
//             </motion.button>
//           </motion.div>
//         </div>

//         {/* ================= TRUST BAR (The specific part you requested) ================= */}
//         <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm border-t border-gray-100 py-6 z-30">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">

//               {/* Item 1 */}
//               <div className="flex flex-col items-center gap-2">
//                 <ShieldCheck className="text-green-500" size={28} />
//                 <span className="text-xs md:text-sm font-medium text-slate-700">100% Secure Payment</span>
//               </div>

//               {/* Item 2 */}
//               <div className="flex flex-col items-center gap-2">
//                 <Users className="text-red-500" size={28} />
//                 <span className="text-xs md:text-sm font-medium text-slate-700">Verified Profiles</span>
//               </div>

//               {/* Item 3 */}
//               <div className="flex flex-col items-center gap-2">
//                 <Zap className="text-yellow-600" size={28} />
//                 <span className="text-xs md:text-sm font-medium text-slate-700">Instant Matching</span>
//               </div>

//               {/* Item 4 */}
//               <div className="flex flex-col items-center gap-2">
//                 <Heart className="text-red-500" size={28} />
//                 <span className="text-xs md:text-sm font-medium text-slate-700">Successful Matches</span>
//               </div>

//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ================= RECENT STORIES DIVIDER ================= */}
//       <div className="max-w-7xl mx-auto px-6 mt-10">
//         <div className="flex items-center gap-4 py-10">
//           <h2 className="text-2xl md:text-3xl font-semibold whitespace-nowrap text-[var(--text-primary)]">
//             Recent Stories
//           </h2>
//           <div className="h-[1px] w-full bg-[var(--border)]"></div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default SuccessStory;

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, ShieldCheck, Heart, Users } from "lucide-react";

const SuccessStory = () => {

  const stories = [
  {
    id: 1,
    groom: "Rahul",
    bride: "Sneha",
    location: "Delhi",
    image:
      "https://images.unsplash.com/photo-1604014238170-4def1e4e6fcf?auto=format&fit=crop&w=800&q=80",
    story:
      "We met through this platform and instantly connected. Today we are happily married and grateful forever."
  },
  {
    id: 2,
    groom: "Aman",
    bride: "Priya",
    location: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=800&q=80",
    story:
      "Our families connected first, and slowly our friendship turned into love. Best decision of our life."
  },
  {
    id: 3,
    groom: "Karan",
    bride: "Megha",
    location: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    story:
      "We found not just a partner but a best friend for life. Thank you for making this possible."
  }
];
  const rocketControls = useAnimation();

  const handleLaunch = async () => {
    await rocketControls.start({
      rotate: -45,
      x: [0, -1, 1, -1, 0],
      transition: { duration: 0.2 },
    });

    await rocketControls.start({
      x: 300,
      y: -300,
      opacity: 0,
      scale: 1.2,
      transition: { duration: 0.5, ease: "easeIn" },
    });

    setTimeout(() => {
      rocketControls.set({ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 });
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen bg-[var(--bg-main)] font-[var(--ff-primary)] overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
            alt="Happy Couples"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl -mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-bold leading-tight mb-5 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Our Marriage,{" "}
              <span className="text-[var(--color-primary)] italic">
                Happy Family
              </span>
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Millions have found their life partner through our services. Your
              forever story could be next.
            </p>

            <motion.button
              onClick={handleLaunch}
              whileHover="hover"
              initial="rest"
              className="relative group overflow-hidden bg-white/10 border border-white px-6 py-2.5 rounded-full flex items-center gap-3 mx-auto transition-all duration-300 hover:border-[var(--color-primary)]"
            >
              <motion.span
                className="absolute inset-0 bg-[var(--color-primary)] z-0"
                variants={{ rest: { x: "-100%" }, hover: { x: 0 } }}
                transition={{ duration: 0.4, ease: "circOut" }}
              />
              <span className="relative z-10 text-sm md:text-base font-semibold text-white">
                Post Your Success Story
              </span>
              <div className="relative z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[var(--color-primary)]">
                <motion.div animate={rocketControls}>
                  <ArrowRight size={18} />
                </motion.div>
              </div>
            </motion.button>
          </motion.div>
        </div>

        {/* ================= BLURRED TRUST BAR (ONLY 3 ITEMS) ================= */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl py-2 px-2 shadow-2xl">
              <div className="grid grid-cols-3 gap-4 items-center">
                {/* Item 1 */}
                <div className="flex flex-col items-center gap-2 text-center border-r border-white/10">
                  <ShieldCheck className="text-green-400" size={24} />
                  <span className="text-white text-xs md:text-sm font-medium">
                    100% Verified
                  </span>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col items-center gap-2 text-center border-r border-white/10">
                  <Users className="text-blue-400" size={24} />
                  <span className="text-white text-xs md:text-sm font-medium">
                    Genuine Profiles
                  </span>
                </div>

                {/* Item 3 */}
                <div className="flex flex-col items-center gap-2 text-center">
                  <Heart className="text-red-400" size={24} />
                  <span className="text-white text-xs md:text-sm font-medium">
                    Happy Matches
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent Stories Section starts here... */}
      {/* ================= RECENT STORIES ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center gap-4 py-10">
          <h2 className="text-2xl md:text-3xl font-semibold whitespace-nowrap text-[var(--text-primary)]">
            Recent Stories
          </h2>
          <div className="h-[1px] w-full bg-[var(--border)]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] overflow-hidden hover:shadow-[var(--shadow-hover)] transition-all duration-300"
            >
              {/* Image */}
              <div className="h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt="couple"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
                  {item.groom} ❤️ {item.bride}
                </h3>

                <p className="text-sm text-[var(--text-light)] mb-3">
                  {item.location}
                </p>

                <p className="text-[var(--text-secondary)] text-sm leading-relaxed line-clamp-3">
                  {item.story}
                </p>

                <button className="mt-4 text-[var(--color-primary)] font-medium text-sm hover:underline">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SuccessStory;
