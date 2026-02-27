// // src/pages/General/SuccessStory.jsx
// import React from "react";
// import { motion, useAnimation } from "framer-motion";
// import { ArrowRight, ShieldCheck, Heart, Users, MapPin } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { storiesData } from "../../data/data";

// const SuccessStory = () => {
//   const rocketControls = useAnimation();
//   const navigate = useNavigate();
//   const handleLaunch = async () => {
//     await rocketControls.start({
//       rotate: -45,
//       x: [0, -2, 2, -2, 0],
//       transition: { duration: 0.2 },
//     });
//     await rocketControls.start({
//       x: 400,
//       y: -400,
//       opacity: 0,
//       scale: 1.5,
//       transition: { duration: 0.6, ease: "easeIn" },
//     });
//      navigate("/successStories/postSuccessStory");
//     setTimeout(
//       () => rocketControls.set({ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }),
//       1500,
//     );
//   };

//   return (
//     <div className="w-full min-h-screen bg-[#FCF9F7]">
//       {/* Hero Section */}
//       <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
//         {/* Background Image */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2000"
//             alt="Happy Couples"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/60"></div>
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-20 text-center px-6 max-w-4xl -mt-20">
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

//             <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8">
//               Millions have found their life partner through our services. Your
//               forever story could be next.
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

//         {/* ================= BLURRED TRUST BAR (ONLY 3 ITEMS) ================= */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-30">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2 }}
//           >
//             <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl py-2 px-2 shadow-2xl">
//               <div className="grid grid-cols-3 gap-4 items-center">
//                 {/* Item 1 */}
//                 <div className="flex flex-col items-center gap-2 text-center border-r border-white/10">
//                   <ShieldCheck className="text-green-400" size={24} />
//                   <span className="text-white text-xs md:text-sm font-medium">
//                     100% Verified
//                   </span>
//                 </div>

//                 {/* Item 2 */}
//                 <div className="flex flex-col items-center gap-2 text-center border-r border-white/10">
//                   <Users className="text-blue-400" size={24} />
//                   <span className="text-white text-xs md:text-sm font-medium">
//                     Genuine Profiles
//                   </span>
//                 </div>

//                 {/* Item 3 */}
//                 <div className="flex flex-col items-center gap-2 text-center">
//                   <Heart className="text-red-400" size={24} />
//                   <span className="text-white text-xs md:text-sm font-medium">
//                     Happy Matches
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Grid Section */}

//       {/* Recent Stories Section starts here... */}
//       {/* ================= RECENT STORIES ================= */}
//       <section className="max-w-7xl mx-auto px-6 pb-20">
//         <div className="flex items-center gap-4 py-10">
//           <h2 className="text-2xl md:text-3xl font-semibold whitespace-nowrap text-[var(--text-primary)]">
//             Recent Stories
//           </h2>
//           <div className="h-[1px] w-full bg-[var(--border)]"></div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {storiesData.map((item) => (
//             <motion.div
//               key={item.id}
//               whileHover={{ y: -10 }}
//               className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100"
//             >
//               <img
//                 src={item.image}
//                 className="h-60 w-full object-cover"
//                 alt="Couple"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2">
//                   {item.groom} ❤️ {item.bride}
//                 </h3>
//                 <p className="text-gray-400 text-sm mb-4 flex items-center gap-1">
//                   <MapPin size={14} /> {item.location}
//                 </p>
//                 <Link
//                   to={`/successStories/view/${item.id}`}
//                   className="inline-block bg-[#FF4D6D]/10 text-[#FF4D6D] px-6 py-2 rounded-full font-bold text-sm hover:bg-[#FF4D6D] hover:text-white transition-all"
//                 >
//                   Read Full Story
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SuccessStory;

// src/pages/General/SuccessStory.jsx
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, ShieldCheck, Heart, Users, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SuccessStory = () => {
  const rocketControls = useAnimation();
  const navigate = useNavigate();
  const { fetchSuccessStories } = useAuth(); // <-- Fetch function from context
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [visibleCount, setVisibleCount] = useState(8);

  // 2️⃣ Infinite scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300 // 300px from bottom
      ) {
        setVisibleCount((prev) => {
          if (prev < stories.length) {
            return prev + 8; // load next 8 stories
          }
          return prev;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [stories]);

  // Fetch success stories
  useEffect(() => {
    const unsubscribe = fetchSuccessStories((data) => {
      setStories(data); // Real-time update
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup listener
  }, [fetchSuccessStories]);

  const handleLaunch = async () => {
    await rocketControls.start({
      rotate: -45,
      x: [0, -2, 2, -2, 0],
      transition: { duration: 0.2 },
    });
    await rocketControls.start({
      x: 400,
      y: -400,
      opacity: 0,
      scale: 1.5,
      transition: { duration: 0.6, ease: "easeIn" },
    });
    navigate("/successStories/postSuccessStory");
    setTimeout(
      () => rocketControls.set({ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }),
      1500,
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#FCF9F7]">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
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

        {/* Trust Bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl py-2 px-2 shadow-2xl">
              <div className="grid grid-cols-3 gap-4 items-center">
                <div className="flex flex-col items-center gap-2 text-center border-r border-white/10">
                  <ShieldCheck className="text-green-400" size={24} />
                  <span className="text-white text-xs md:text-sm font-medium">
                    100% Verified
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center border-r border-white/10">
                  <Users className="text-blue-400" size={24} />
                  <span className="text-white text-xs md:text-sm font-medium">
                    Genuine Profiles
                  </span>
                </div>
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

      {/* Recent Stories */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex items-center gap-4 py-10">
          <h2 className="text-2xl md:text-3xl font-semibold whitespace-nowrap text-[var(--text-primary)]">
            Recent Stories
          </h2>
          <div className="h-[1px] w-full bg-[var(--border)]"></div>
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading stories...</p>
        ) : stories.length === 0 ? (
          <p className="text-center text-gray-500">
            No recent stories available 😢
          </p>
        ) : (
          // <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          //   {stories.slice(0, 8).map((item) => (
          //     <motion.div
          //       key={item.id}
          //       whileHover={{ y: -10 }}
          //       className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100"
          //     >
          //       {item.images && item.images[0] ? (
          //         <img
          //           src={item.images[0]}
          //           className="h-60 w-full object-cover"
          //           alt="Couple"
          //         />
          //       ) : (
          //         <div className="h-60 w-full bg-gray-200 flex items-center justify-center text-gray-400">
          //           No Image
          //         </div>
          //       )}
          //       <div className="p-6">
          //         <h3 className="text-xl font-bold mb-2">
          //           {item.groomName} ❤️ {item.brideName}
          //         </h3>
          //         <p className="text-gray-400 text-sm mb-2 flex items-center gap-1">
          //           <MapPin size={14} />{" "}
          //           {item.address || "Location not specified"}
          //         </p>
          //         <p className="text-gray-500 text-sm mb-4 line-clamp-3">
          //           {item.story || "No story available"}
          //         </p>
          //         <Link
          //           to={`/successStories/view/${item.id}`}
          //           className="inline-block bg-[#FF4D6D]/10 text-[#FF4D6D] px-6 py-2 rounded-full font-bold text-sm hover:bg-[#FF4D6D] hover:text-white transition-all"
          //         >
          //           Read Full Story
          //         </Link>
          //       </div>
          //     </motion.div>
          //   ))}
          // </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.slice(0, visibleCount).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100"
              >
                {item.images && item.images[0] ? (
                  <img
                    src={item.images[0]}
                    className="h-60 w-full object-cover"
                    alt="Couple"
                  />
                ) : (
                  <div className="h-60 w-full bg-gray-200 flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    {item.groomName} ❤️ {item.brideName}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2 flex items-center gap-1">
                    <MapPin size={14} />{" "}
                    {item.address || "Location not specified"}
                  </p>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                    {item.story || "No story available"}
                  </p>
                  <Link
                    to={`/successStories/view/${item.id}`}
                    className="inline-block bg-[#FF4D6D]/10 text-[#FF4D6D] px-6 py-2 rounded-full font-bold text-sm hover:bg-[#FF4D6D] hover:text-white transition-all"
                  >
                    Read Full Story
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default SuccessStory;
