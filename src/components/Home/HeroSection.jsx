// Hero section Version 1

// import React, { useState, useEffect } from "react";
// // 1️⃣ Import this at the top
// import { useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Search, Heart, Sparkles, ShieldCheck, Users } from "lucide-react";

// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import HeroSectionSkeleton from "../Skeleton/HeroSectionSkeleton"; // adjust path

// const HeroSection = () => {
//   const ageRanges = [
//     { label: "21-25", min: 21, max: 25 },
//     { label: "26-30", min: 26, max: 30 },
//     { label: "31-35", min: 31, max: 35 },
//     { label: "36-40", min: 36, max: 40 },
//     { label: "41-50", min: 41, max: 50 },
//   ];

//   const location = useLocation();
//   const [loading, setLoading] = useState(true);

//   const [lookingFor, setLookingFor] = useState("A Bride");
//   const [ageRange, setAgeRange] = useState("21 - 28");
//   const navigate = useNavigate();
//   const { user } = useAuth(); // check if user is logged in
//   // Animation variants for text

//   // Read query params and prefill filters
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const gender = params.get("gender") || "";
//     const ageRange = params.get("ageRange") || "";

//     if (gender || ageRange) {
//       setFilters((prev) => ({
//         ...prev,
//         gender,
//         ageRange,
//       }));
//     }
//   }, [location.search]);

//   const handleSearch = () => {
//     if (!user) {
//       // If not logged in, redirect to login
//       navigate("/login");
//       return;
//     }

//     // If logged in, pass the search params via query string
//     navigate(
//       `/MatrimonyFilter?lookingFor=${encodeURIComponent(lookingFor)}&ageRange=${encodeURIComponent(ageRange)}`,
//     );
//   };
//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1, duration: 0.8, ease: "easeOut" },
//     }),
//   };

//   // Simulate loading (replace with real fetch if needed)
//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1000); // 1.5s loading
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) return <HeroSectionSkeleton />;

//   return (
//     <section
//       className="relative flex items-center  bg-[var(--bg-main)] overflow-hidden mt-16 "
//       style={{ backgroundColor: "var(--bg-main)" }}
//     >
//       {/* Decorative Background Element */}
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--bg-soft)] rounded-l-[100px] z-0 opacity-50 hidden lg:block" />

//       <div className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
//         {/* LEFT CONTENT: TEXT & SEARCH */}
//         <div className="space-y-8">
//           <motion.div
//             custom={0}
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//           >
//             <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[var(--color-primary)] text-[12px] font-[var(--fw-bold)] uppercase tracking-widest mb-4">
//               <Sparkles size={14} /> Trust & Tradition meet Technology
//             </span>
//             <h1 className="text-[var(--fs-h2)] lg:text-[var(--fs-h1)] font-[var(--fw-bold)] leading-[1.1] text-[var(--text-primary)]">
//               Find your{" "}
//               <span className="text-[var(--color-primary)]">Soulmate</span>{" "}
//               <br />
//               with Purpose.
//             </h1>
//             <p className="mt-4 text-[var(--fs-body)] text-[var(--text-secondary)] max-w-md leading-relaxed">
//               We bring together high-value individuals looking for lifelong
//               commitment. 100% verified profiles and personalized matchmaking.
//             </p>
//           </motion.div>

//           {/* SMART SEARCH BAR - The "Killer" UI element */}
//           <motion.div
//             custom={1}
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//             className="p-2 bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-hover)] border border-[var(--border)] flex flex-col md:flex-row items-center gap-2"
//           >
//             <div className="flex-1 grid grid-cols-2 divide-x divide-[var(--border)] w-full">
//               <div className="px-4 py-2">
//                 <label className="block text-[10px] uppercase font-bold text-[var(--text-light)]">
//                   I'm looking for
//                 </label>
//                 <select
//                   className="bg-transparent text-[var(--fs-small)] font-medium outline-none w-full cursor-pointer"
//                   value={lookingFor} // bind state
//                   onChange={(e) => setLookingFor(e.target.value)} // update state
//                 >
//                   <option value="A Bride">A Bride</option>
//                   <option value="A Groom">A Groom</option>
//                 </select>
//               </div>
//               <div className="px-4 py-2">
//                 <label className="block text-[10px] uppercase font-bold text-[var(--text-light)]">
//                   Age Range
//                 </label>
//                 <select
//                   className="bg-transparent text-[var(--fs-small)] font-medium outline-none w-full cursor-pointer"
//                   value={ageRange} // bind state
//                   onChange={(e) => setAgeRange(e.target.value)} // update state
//                 >
//                   <option value="">Select Age Range</option>
//                   {ageRanges.map((a) => (
//                     <option key={a.label} value={a.label}>
//                       {a.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <button
//               onClick={handleSearch}
//               className="w-full md:w-auto px-8 py-4 bg-[var(--color-primary)] cursor-pointer text-white rounded-[var(--radius-md)] font-[var(--fw-bold)] flex items-center justify-center gap-2 hover:brightness-110 transition-all"
//             >
//               <Search size={18} /> Let's Connect
//             </button>
//           </motion.div>

//           {/* TRUST BADGES */}
//           <motion.div
//             custom={2}
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//             className="flex flex-wrap gap-6 pt-4"
//           >
//             <div className="flex items-center gap-2">
//               <div className="p-2 bg-green-100 text-[var(--success)] rounded-full">
//                 <ShieldCheck size={18} />
//               </div>
//               <span className="text-[12px] font-medium text-[var(--text-secondary)]">
//                 Verified Profiles
//               </span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="p-2 bg-blue-100 text-[var(--color-primary)] rounded-full">
//                 <Users size={18} />
//               </div>
//               <span className="text-[12px] font-medium text-[var(--text-secondary)]">
//                 500k+ Active Users
//               </span>
//             </div>
//           </motion.div>
//         </div>

//         {/* RIGHT CONTENT: FLOATING PROFILE CARDS */}
//         <div className="relative h-[500px] flex items-center justify-center">
//           {/* Main Hero Image */}
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="relative w-72 h-96 rounded-[var(--radius-lg)] overflow-hidden z-10 border-4 border-white shadow-2xl"
//           >
//             <img
//               src="https://plus.unsplash.com/premium_photo-1675797613561-a4ea6dd7b914?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Happy Couple"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
//               <p className="font-bold">Rahul & Sneha</p>
//               <p className="text-[10px] opacity-80">Matched 2 months ago</p>
//             </div>
//           </motion.div>

//           {/* Floating Card 1 */}
//           <motion.div
//             animate={{ y: [0, -20, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute top-10 left-0 md:-left-10 z-20 bg-white p-3 rounded-[var(--radius-md)] shadow-xl flex items-center gap-3"
//           >
//             <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-500">
//               <Heart size={20} fill="currentColor" />
//             </div>
//             <div>
//               <p className="text-[12px] font-bold">New Match!</p>
//               <p className="text-[10px] text-[var(--text-light)]">
//                 Based on Interests
//               </p>
//             </div>
//           </motion.div>

//           {/* Floating Card 2 */}
//           <motion.div
//             animate={{ y: [0, 20, 0] }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 1,
//             }}
//             className="absolute bottom-10 right-0 md:-right-5 z-20 bg-white p-4 rounded-[var(--radius-md)] shadow-xl"
//           >
//             <div className="flex items-center gap-2 mb-2">
//               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//               <span className="text-[10px] font-bold text-[var(--text-secondary)]">
//                 2,400 Online Now
//               </span>
//             </div>
//             <div className="flex -space-x-2">
//               {[1, 2, 3, 4].map((i) => (
//                 <img
//                   key={i}
//                   className="w-8 h-8 rounded-full border-2 border-white object-cover"
//                   src={`https://i.pravatar.cc/150?u=${i + 10}`}
//                   alt="avatar"
//                 />
//               ))}
//             </div>
//           </motion.div>

//           {/* Decorative Circles */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-blue-200 rounded-full opacity-20 animate-spin-slow" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-blue-100 rounded-full opacity-10 animate-spin-slow-reverse" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// Hero Section Version 2
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Search, Heart, Sparkles, MapPin, Star } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const HeroSection = () => {
//   const navigate = useNavigate();
//   const { user } = useAuth();
//   const [lookingFor, setLookingFor] = useState("Bride");

//   // Floating Heart Component for the "Playful" feel
//   const FloatingHeart = ({ delay, x }) => (
//     <motion.div
//       initial={{ y: "100vh", opacity: 0, scale: 0 }}
//       animate={{ y: "-10vh", opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
//       transition={{ duration: 6, repeat: Infinity, delay, ease: "linear" }}
//       className="absolute text-pink-400/30 z-0"
//       style={{ left: x }}
//     >
//       <Heart fill="currentColor" size={24} />
//     </motion.div>
//   );

//   return (
//     <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-20">

//       {/* 1. ANIMATED BACKGROUND GRADIENT */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-100 rounded-full blur-[120px] opacity-60 animate-pulse" />
//         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] opacity-60" />
//       </div>

//       {/* Floating Elements */}
//       <FloatingHeart delay={0} x="10%" />
//       <FloatingHeart delay={2} x="85%" />
//       <FloatingHeart delay={4} x="40%" />

//       <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center z-10">

//         {/* LEFT COLUMN: SOPHISTICATED COPY & GLASS SEARCH */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-pink-100 shadow-sm mb-6">
//             <Sparkles size={16} className="text-pink-500" />
//             <span className="text-sm font-semibold bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">
//               #1 Trusted Playful Matrimony
//             </span>
//           </div>

//           <h1 className="text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
//             Serious Love, <br />
//             <span className="relative">
//               Playful
//               <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none"><path d="M1 5.5C40 2 120 2 199 5.5" stroke="#F472B6" strokeWidth="4" strokeLinecap="round"/></svg>
//             </span> Start.
//           </h1>

//           <p className="mt-8 text-lg text-slate-600 max-w-lg leading-relaxed">
//             Why should finding "The One" feel like a chore? Experience a vibrant community where tradition meets a modern dating vibe.
//           </p>

//           {/* GLASSMORPHISM SEARCH BOX */}
//           <div className="mt-10 p-2 bg-white/70 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-3xl flex flex-col md:flex-row gap-2">
//             <div className="flex-1 flex items-center px-4 py-3 border-r border-slate-100">
//               <div className="space-y-0.5 w-full">
//                 <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">I am seeking</p>
//                 <select
//                   className="w-full bg-transparent font-bold text-slate-800 outline-none appearance-none cursor-pointer"
//                   value={lookingFor}
//                   onChange={(e) => setLookingFor(e.target.value)}
//                 >
//                   <option value="Bride">A Beautiful Bride</option>
//                   <option value="Groom">A Handsome Groom</option>
//                 </select>
//               </div>
//             </div>

//             <button
//               onClick={() => navigate(user ? "/MatrimonyFilter" : "/login")}
//               className="group relative px-10 py-4 bg-slate-900 overflow-hidden text-white rounded-2xl font-bold transition-all hover:scale-[1.02] active:scale-95"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity" />
//               <span className="relative flex items-center justify-center gap-2">
//                 Find My Match <Search size={20} />
//               </span>
//             </button>
//           </div>

//           <div className="mt-8 flex items-center gap-4 text-slate-500">
//             <div className="flex -space-x-3">
//               {[1, 2, 3].map(i => (
//                 <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white" alt="user" />
//               ))}
//             </div>
//             <p className="text-sm font-medium">Join <span className="text-slate-900 font-bold">2,400+</span> people online now</p>
//           </div>
//         </motion.div>

//         {/* RIGHT COLUMN: THE "KNOT" VISUAL COLLAGE */}
//         <div className="relative">
//           {/* Central Animated Image */}
//           <motion.div
//             animate={{ y: [0, -15, 0] }}
//             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//             className="relative z-20 w-full max-w-[320px] mx-auto aspect-[3/4] rounded-[40px] overflow-hidden border-[12px] border-white shadow-2xl rotate-3"
//           >
//             <img
//               src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1974&auto=format&fit=crop"
//               className="w-full h-full object-cover"
//               alt="Couples"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//             <div className="absolute bottom-6 left-6 text-white">
//               <p className="font-bold text-xl">Arjun & Riya</p>
//               <p className="text-sm opacity-80 flex items-center gap-1"><MapPin size={12} /> Mumbai, India</p>
//             </div>
//           </motion.div>

//           {/* Playful Floating Badge 1 */}
//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             className="absolute top-10 -left-12 z-30 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-pink-50"
//           >
//             <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white">
//               <Heart fill="currentColor" size={20} />
//             </div>
//             <div>
//               <p className="text-xs font-black text-slate-800 tracking-tight">98% Match</p>
//               <p className="text-[10px] text-slate-400 font-medium">Shared Hobbies</p>
//             </div>
//           </motion.div>

//           {/* Playful Floating Badge 2 */}
//           <motion.div
//             animate={{ y: [0, 15, 0] }}
//             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
//             className="absolute bottom-20 -right-8 z-30 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-blue-50"
//           >
//             <div className="flex items-center gap-2 mb-2">
//               <Star className="text-yellow-400" size={16} fill="currentColor" />
//               <span className="text-xs font-bold text-slate-800 italic">Verified Premium</span>
//             </div>
//             <div className="text-[10px] text-slate-500 font-semibold leading-tight">
//               Hand-picked profiles <br /> daily just for you.
//             </div>
//           </motion.div>

//           {/* Background Decorative Rings */}
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-dashed border-pink-200/50 rounded-full animate-[spin_20s_linear_infinite]" />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// Hero Section version 3

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Search, Heart, Sparkles, Flame, Zap } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const HeroSection = () => {
//   const navigate = useNavigate();
//   const [lookingFor, setLookingFor] = useState("Bride");

//   // Oversized Floating Hearts for that "Playful Magic"
//   const FloatingHeart = ({ delay, x, size, color }) => (
//     <motion.div
//       initial={{ y: "110vh", opacity: 0, rotate: 0 }}
//       animate={{
//         y: "-20vh",
//         opacity: [0, 0.8, 0],
//         rotate: 360,
//         scale: [0.5, 1.2, 0.8]
//       }}
//       transition={{ duration: 8, repeat: Infinity, delay, ease: "easeInOut" }}
//       className={`absolute z-0 ${color}`}
//       style={{ left: x }}
//     >
//       <Heart fill="currentColor" size={size} />
//     </motion.div>
//   );

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0f172a] text-white">

//       {/* --- THE MAGIC SIDE (Left Background) --- */}
//       <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full z-0 overflow-hidden">
//         {/* Dragon Magic Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4c1d95] opacity-90" />

//         {/* BIG MAGIC HEARTS */}
//         <FloatingHeart delay={0} x="5%" size={80} color="text-pink-500/20" />
//         <FloatingHeart delay={2} x="25%" size={120} color="text-purple-500/10" />
//         <FloatingHeart delay={4} x="15%" size={60} color="text-indigo-400/20" />
//         <FloatingHeart delay={1} x="40%" size={100} color="text-rose-500/10" />
//       </div>

//       {/* --- THE METRICOLLION SIDE (Right Background) --- */}
//       <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block z-0">
//         <div
//           className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
//           style={{
//             backgroundImage: `url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop')`,
//           }}
//         />
//         {/* Cooling Frost Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0f172a]/40 to-[#0f172a]" />
//         <div className="absolute inset-0 backdrop-blur-[2px] bg-blue-900/10" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10">

//         {/* LEFT CONTENT: DRAGON ENERGY */}
//         <motion.div
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         >
//           <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 animate-bounce">
//             <Zap size={18} className="text-yellow-400 fill-yellow-400" />
//             <span className="text-sm font-black uppercase tracking-[3px]">Dragon-Tier Matches</span>
//           </div>

//           <h1 className="text-7xl lg:text-9xl font-black leading-[0.9] italic uppercase">
//             Feel the <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 drop-shadow-[0_5px_15px_rgba(244,114,182,0.4)]">
//               Magic.
//             </span>
//           </h1>

//           <p className="mt-8 text-xl text-blue-100/80 max-w-lg font-medium leading-relaxed border-l-4 border-pink-500 pl-6">
//             Where Metricollion precision meets playful destiny. Find your soulmate with the power of the Dragon.
//           </p>

//           {/* KILLER SEARCH UI */}
//           <div className="mt-12 group relative max-w-md">
//              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-[30px] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
//              <div className="relative flex flex-col md:flex-row bg-[#1e293b] rounded-[25px] p-2 border border-white/10">
//                 <div className="flex-1 px-6 py-3">
//                   <p className="text-[10px] font-bold text-pink-400 uppercase tracking-widest mb-1">I'm Hunting for</p>
//                   <select
//                     className="bg-transparent text-xl font-bold outline-none w-full cursor-pointer text-white"
//                     value={lookingFor}
//                     onChange={(e) => setLookingFor(e.target.value)}
//                   >
//                     <option className="bg-[#1e293b]" value="Bride">My Queen</option>
//                     <option className="bg-[#1e293b]" value="Groom">My King</option>
//                   </select>
//                 </div>
//                 <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white px-8 py-4 rounded-[20px] font-black uppercase flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 transition-all">
//                   Spark Love <Flame size={20} />
//                 </button>
//              </div>
//           </div>
//         </motion.div>

//         {/* RIGHT CONTENT: THE COOLING EFFECT */}
//         <div className="relative hidden lg:flex justify-end">
//            <motion.div
//             initial={{ scale: 0, rotate: -20 }}
//             animate={{ scale: 1, rotate: -5 }}
//             transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
//             className="relative z-20 w-[380px] h-[500px] bg-white/5 backdrop-blur-md rounded-[50px] border border-white/20 p-4 shadow-2xl overflow-hidden"
//            >
//               <img
//                 src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop"
//                 className="w-full h-full object-cover rounded-[40px] grayscale hover:grayscale-0 transition-all duration-700"
//                 alt="Magic Profile"
//               />
//               <div className="absolute bottom-10 left-10 right-10 p-6 bg-black/40 backdrop-blur-lg rounded-3xl border border-white/10">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <h3 className="text-2xl font-black">Sarah, 24</h3>
//                     <p className="text-sm text-pink-400 font-bold">Dragon Match: 99%</p>
//                   </div>
//                   <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center animate-pulse">
//                     <Heart fill="white" size={24} />
//                   </div>
//                 </div>
//               </div>
//            </motion.div>

//            {/* Floating "Magic Dust" - Small sparks */}
//            {[...Array(6)].map((_, i) => (
//              <motion.div
//                key={i}
//                animate={{
//                  scale: [1, 1.5, 1],
//                  opacity: [0.3, 0.7, 0.3],
//                  x: [0, Math.random() * 50, 0],
//                  y: [0, Math.random() * -50, 0]
//                }}
//                transition={{ duration: 3 + i, repeat: Infinity }}
//                className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-[2px]"
//                style={{ top: `${20 * i}%`, right: `${10 * i}%` }}
//              />
//            ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// Hero section version 4

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Heart, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const HeroSection = () => {
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   const [currentIdx, setCurrentIdx] = useState(0);
//   const [displayedText, setDisplayedText] = useState("");
//   const [isTypingComplete, setIsTypingComplete] = useState(false);

//   const [lookingFor, setLookingFor] = useState("A Bride");
//   const [ageRange, setAgeRange] = useState("21 - 28");

//   // ONE STORY - 7 CHAPTERS - SYNCED TO YOUR COLOR THEME
// const storyChapters = [
//   {
//     phase: "Discover",
//     chapter: "I",
//     title: "Two Strangers Meet",
//     text: "Among thousands of profiles, their eyes paused at each other. A simple 'Hi' turned into late night chats, shared laughs, and a connection that felt effortless.",
//     img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop"
//   },
//   {
//     phase: "Dating",
//     chapter: "II",
//     title: "The First Date",
//     text: "They met at a cozy café, nervous yet excited. Conversations flowed naturally, and in that moment, they knew this was something special.",
//     img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop"

//   },
//   {
//     phase: "Families",
//     chapter: "III",
//     title: "Meeting the Families",
//     text: "With hopeful hearts, they introduced each other to their families. Smiles were exchanged, blessings were given, and two families slowly became one.",
//     img: "https://images.unsplash.com/photo-1603575448368-153f093fd0b2?q=80&w=1200&auto=format&fit=crop"
//   },
//   {
//     phase: "Engagement",
//     chapter: "IV",
//     title: "A Promise Forever",
//     text: "Under soft lights and joyful cheers, he slipped a ring onto her finger. It was not just a proposal, but a promise of forever.",
//     img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop"
//   },
//   {
//     phase: "Marriage",
//     chapter: "V",
//     title: "Sacred Vows",
//     text: "Dressed in tradition and surrounded by loved ones, they took their sacred vows. What began as a simple match turned into a lifetime partnership.",
//     img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop"
//   }
// ];

//   const phases = ["Find", "Connect", "Date", "Marry"];

//   useEffect(() => {
//     let i = 0;
//     setDisplayedText("");
//     setIsTypingComplete(false);
//     const text = storyChapters[currentIdx].text;
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + text.charAt(i));
//       i++;
//       if (i >= text.length) {
//         clearInterval(interval);
//         setIsTypingComplete(true);
//       }
//     }, 30);
//     return () => clearInterval(interval);
//   }, [currentIdx]);

//   useEffect(() => {
//     if (isTypingComplete) {
//       const timer = setTimeout(() => {
//         setCurrentIdx((prev) => (prev + 1) % storyChapters.length);
//       }, 4000);
//       return () => clearTimeout(timer);
//     }
//   }, [isTypingComplete]);

//   const handleSearch = () => {
//     if (!user) { navigate("/login"); return; }
//     navigate(`/MatrimonyFilter?lookingFor=${encodeURIComponent(lookingFor)}&ageRange=${encodeURIComponent(ageRange)}`);
//   };

//   return (
//     <section className="relative min-h-screen w-full flex items-center overflow-hidden" style={{ backgroundColor: "var(--bg-main)" }}>

//       {/* RIGHT SIDE: BORDERLESS DYNAMIC IMAGE */}
//       <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIdx}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.5 }}
//             className="h-full w-full"
//           >
//             <img src={storyChapters[currentIdx].img} className="h-full w-full object-cover" alt="Couple Journey" />
//             {/* VIGNETTE OVERLAY THAT BLEEDS INTO THE LEFT SIDE */}
//             <div className="absolute inset-0" style={{ background: `linear-gradient(to right, var(--bg-main) 0%, transparent 100%)` }} />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-12 items-center z-10">
//         <div>
//           {/* THE TOP TIMELINE TRACKER */}
//           <div className="flex items-center gap-6 mb-12">
//             {phases.map((p, i) => {
//               const isActive = storyChapters[currentIdx].phase === p;
//               const isPast = phases.indexOf(storyChapters[currentIdx].phase) > i;
//               return (
//                 <div key={p} className="flex items-center gap-4">
//                   <div className="flex flex-col items-center">
//                     <div
//                       className={`w-3 h-3 rounded-full transition-all duration-700 ${isActive || isPast ? 'scale-125' : 'opacity-20'}`}
//                       style={{ backgroundColor: isActive || isPast ? "var(--color-primary)" : "var(--text-primary)" }}
//                     />
//                     <span className={`absolute -bottom-6 text-[10px] font-black uppercase tracking-widest ${isActive ? 'opacity-100' : 'opacity-30'}`} style={{ color: "var(--text-primary)" }}>
//                       {p}
//                     </span>
//                   </div>
//                   {i < 3 && <div className="w-10 h-[1px]" style={{ backgroundColor: isPast ? "var(--color-primary)" : "var(--border)" }} />}
//                 </div>
//               );
//             })}
//           </div>

//           {/* DYNAMIC CONTENT */}
//           <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
//             <span className="font-black uppercase tracking-[5px] text-xs" style={{ color: "var(--color-primary)" }}>
//               Chapter {storyChapters[currentIdx].chapter}
//             </span>
//             <h1 className="font-serif leading-tight mt-2" style={{ fontSize: "var(--fs-h1)", color: "var(--text-primary)" }}>
//               {storyChapters[currentIdx].title.split(' ')[0]} <br />
//               <span className="italic" style={{ color: "var(--color-primary)" }}>{storyChapters[currentIdx].title.split(' ')[1]}</span>
//             </h1>

//             <div className="mt-8 min-h-[140px] max-w-lg">
//               <p className="italic leading-relaxed font-serif" style={{ fontSize: "var(--fs-body)", color: "var(--text-secondary)" }}>
//                 "{displayedText}"
//                 <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-1 h-6 ml-2 align-middle" style={{ backgroundColor: "var(--color-primary)" }} />
//               </p>
//             </div>
//           </motion.div>

//           {/* SEARCH BAR UI - Using your --bg-card and --border */}
//           <div className="mt-14 p-2 rounded-[var(--radius-lg)] flex flex-col md:flex-row border shadow-lg overflow-hidden" style={{ backgroundColor: "var(--bg-card)", borderColor: "var(--border)" }}>
//             <div className="flex-1 grid grid-cols-2 divide-x" style={{ divideColor: "var(--border)" }}>
//               <div className="px-8 py-5">
//                 <label className="block text-[10px] uppercase font-black mb-1 tracking-widest" style={{ color: "var(--color-primary)" }}>Seeking</label>
//                 <select className="w-full bg-transparent font-bold outline-none cursor-pointer" value={lookingFor} onChange={(e) => setLookingFor(e.target.value)} style={{ color: "var(--text-primary)" }}>
//                   <option value="A Bride">A Bride</option>
//                   <option value="A Groom">A Groom</option>
//                 </select>
//               </div>
//               <div className="px-8 py-5">
//                 <label className="block text-[10px] uppercase font-black mb-1 tracking-widest" style={{ color: "var(--color-primary)" }}>Age</label>
//                 <select className="w-full bg-transparent font-bold outline-none cursor-pointer" value={ageRange} onChange={(e) => setAgeRange(e.target.value)} style={{ color: "var(--text-primary)" }}>
//                   <option value="21 - 28">21 - 28</option>
//                   <option value="29 - 35">29 - 35</option>
//                 </select>
//               </div>
//             </div>
//             <button
//               onClick={handleSearch}
//               className="m-1 px-12 py-6 text-white rounded-[var(--radius-md)] font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg"
//               style={{ backgroundColor: "var(--color-primary)" }}
//             >
//               Start Story <ArrowRight size={20} />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* FLOATING JOY ELEMENTS */}
//       <div className="absolute bottom-10 left-10 flex items-center gap-4">
//         <div className="w-12 h-[1px]" style={{ backgroundColor: "var(--color-primary)" }} />
//         <span className="text-[10px] font-bold uppercase tracking-[4px]" style={{ color: "var(--text-light)" }}>
//           Slide {currentIdx + 1} / 7
//         </span>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// Hero Section version 5

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Heart, ArrowRight, Sparkles, MapPin, CheckCircle2 } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const HeroSection = () => {
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   const [lookingFor, setLookingFor] = useState("A Bride");
//   const [ageRange, setAgeRange] = useState("21-25");
//   const [currentIdx, setCurrentIdx] = useState(0);
//   const [displayedText, setDisplayedText] = useState("");
//   const [isTypingComplete, setIsTypingComplete] = useState(false);

// const journeyData = [
//   {
//     headline: "The First",
//     highlight: "Spark.",
//     sub: "Where curiosity turns into a connection.",
//     story: "It started with a simple profile view. We spent hours talking about our favorite books and morning coffees. That digital 'hi' was the start of my forever.",
//     img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop",
//     names: "Arjun & Priya",
//     phase: "Find"
//   },
//   {
//     headline: "Deeply",
//     highlight: "Connected.",
//     sub: "When two souls find their rhythm.",
//     story: "We didn't just match; we resonated. From late-night voice notes to realizing we share the same values, the distance between us just vanished.",
//     img: "https://images.unsplash.com/photo-1516589174184-c685266d4301?q=80&w=1200&auto=format&fit=crop",
//     names: "Kabir & Ananya",
//     phase: "Connect"
//   },
//   {
//     headline: "The Perfect",
//     highlight: "Date.",
//     sub: "Turning moments into memories.",
//     story: "Our first meeting felt like we'd known each other for lifetimes. The laughter didn't stop, and neither did our journey together.",
//     img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop",
//     names: "Rohan & Meera",
//     phase: "Date"
//   },
//   {
//     headline: "A Promise",
//     highlight: "Engaged.",
//     sub: "When forever becomes official.",
//     story: "He got down on one knee and asked for forever. Surrounded by smiles and happy tears, we said yes to a lifetime of love.",
//     img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
//     names: "Amit & Sana",
//     phase: "Engagement"
//   },
//   {
//     headline: "Always",
//     highlight: "Forever.",
//     sub: "The beautiful union of two families.",
//     story: "Standing at the mandap, looking at her, I realized that this platform didn't just give me a partner; it gave me my home.",
//     img: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop",
//     names: "Vikram & Sneha",
//     phase: "Marry"
//   }
// ];
//   const phases = ["Find", "Connect", "Date", "Marry"];

//   // 1. TYPING LOGIC
//   useEffect(() => {
//     let i = 0;
//     setDisplayedText("");
//     setIsTypingComplete(false);
//     const text = journeyData[currentIdx].story;

//     const typingInterval = setInterval(() => {
//       setDisplayedText((prev) => prev + text.charAt(i));
//       i++;
//       if (i >= text.length) {
//         clearInterval(typingInterval);
//         setIsTypingComplete(true);
//       }
//     }, 30); // Fast, snappy typing

//     return () => clearInterval(typingInterval);
//   }, [currentIdx]);

//   // 2. AUTO-TRANSITION LOGIC
//   useEffect(() => {
//     if (isTypingComplete) {
//       const timeout = setTimeout(() => {
//         setCurrentIdx((prev) => (prev + 1) % journeyData.length);
//       }, 4000);
//       return () => clearTimeout(timeout);
//     }
//   }, [isTypingComplete]);

//   const handleSearch = () => {
//     if (!user) { navigate("/login"); return; }
//     navigate(`/MatrimonyFilter?lookingFor=${encodeURIComponent(lookingFor)}&ageRange=${encodeURIComponent(ageRange)}`);
//   };

//   return (
//     <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#050505]">

//       {/* BACKGROUND IMAGE - RIGHT ALIGNED */}
//       <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentIdx}
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.95 }}
//             transition={{ duration: 1.5 }}
//             className="h-full w-full"
//           >
//             <img
//               src={journeyData[currentIdx].img}
//               className="h-full w-full object-cover grayscale-[10%]"
//               alt="Love Story"
//             />
//             <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent" />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-12 items-center z-10">

//         {/* CONTENT SIDE */}
//         <motion.div>

//           {/* DYNAMIC TIMELINE */}
//           <div className="flex items-center gap-6 mb-12">
//             {phases.map((p, i) => {
//               const isActive = journeyData[currentIdx].phase === p;
//               const isPast = phases.indexOf(journeyData[currentIdx].phase) > i;
//               return (
//                 <div key={p} className="flex items-center gap-4">
//                   <div className="relative flex flex-col items-center">
//                     <motion.div
//                       animate={isActive ? { scale: [1, 1.2, 1], borderColor: "#f43f5e" } : {}}
//                       transition={{ repeat: Infinity, duration: 2 }}
//                       className={`w-4 h-4 rounded-full border-2 transition-colors duration-500 ${isActive || isPast ? 'bg-rose-500 border-rose-500' : 'border-gray-700 bg-transparent'}`}
//                     />
//                     <span className={`absolute -bottom-6 text-[10px] font-black tracking-widest uppercase transition-colors ${isActive ? 'text-rose-500' : 'text-gray-600'}`}>
//                       {p}
//                     </span>
//                   </div>
//                   {i < 3 && <div className={`h-[1px] w-8 transition-colors duration-1000 ${isPast ? 'bg-rose-500' : 'bg-gray-800'}`} />}
//                 </div>
//               );
//             })}
//           </div>

//           {/* DYNAMIC HEADLINE */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentIdx}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="mb-6"
//             >
//               <h1 className="text-7xl lg:text-8xl font-serif text-white leading-none">
//                 {journeyData[currentIdx].headline} <br />
//                 <span className="italic text-rose-500">{journeyData[currentIdx].highlight}</span>
//               </h1>
//               <p className="mt-4 text-rose-200/60 font-medium tracking-[4px] uppercase text-xs">
//                 {journeyData[currentIdx].sub}
//               </p>
//             </motion.div>
//           </AnimatePresence>

//           {/* DYNAMIC STORY BOX */}
//           <div className="mt-10 min-h-[120px] max-w-lg border-l-2 border-rose-500/20 pl-8">
//             <p className="text-xl text-gray-400 font-serif italic leading-relaxed">
//               "{displayedText}"
//               <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-1 h-6 bg-rose-500 ml-1" />
//             </p>
//             <div className="mt-6 flex items-center gap-3">
//                <span className="text-white font-bold text-sm tracking-widest uppercase">{journeyData[currentIdx].names}</span>
//                <span className="text-gray-600 font-black">•</span>
//                <div className="flex items-center gap-1 text-rose-400 text-xs font-bold uppercase">
//                  <CheckCircle2 size={12} /> Verified Journey
//                </div>
//             </div>
//           </div>

//           {/* SEARCH COMPONENT */}
//           <div className="mt-14 p-1.5 bg-[#0f0f0f] rounded-[30px] flex flex-col md:flex-row border border-white/5 shadow-2xl group hover:border-rose-500/20 transition-all">
//             <div className="flex-1 grid grid-cols-2 divide-x divide-white/10">
//               <div className="px-8 py-5">
//                 <label className="block text-[10px] uppercase font-black text-rose-500 mb-1 tracking-widest">Seeking</label>
//                 <select className="w-full bg-transparent font-bold text-white outline-none cursor-pointer" value={lookingFor} onChange={(e) => setLookingFor(e.target.value)}>
//                   <option className="bg-[#0f0f0f]" value="A Bride">A Bride</option>
//                   <option className="bg-[#0f0f0f]" value="A Groom">A Groom</option>
//                 </select>
//               </div>
//               <div className="px-8 py-5">
//                 <label className="block text-[10px] uppercase font-black text-rose-500 mb-1 tracking-widest">Age</label>
//                 <select className="w-full bg-transparent font-bold text-white outline-none cursor-pointer" value={ageRange} onChange={(e) => setAgeRange(e.target.value)}>
//                   <option className="bg-[#0f0f0f]" value="21-25">21-25</option>
//                   <option className="bg-[#0f0f0f]" value="26-30">26-30</option>
//                   <option className="bg-[#0f0f0f]" value="31-35">31-35</option>
//                 </select>
//               </div>
//             </div>
//             <button onClick={handleSearch} className="m-1.5 px-12 py-6 bg-rose-600 hover:bg-rose-500 text-white rounded-[24px] font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all">
//               Join Us <ArrowRight size={20} />
//             </button>
//           </div>
//         </motion.div>
//       </div>

//       {/* FOOTER PROGRESS BAR */}
//       <div className="absolute bottom-0 left-0 h-1 bg-white/5 w-full">
//         <motion.div
//           key={currentIdx}
//           initial={{ width: "0%" }}
//           animate={isTypingComplete ? { width: "100%" } : { width: "0%" }}
//           transition={{ duration: 4, ease: "linear" }}
//           className="h-full bg-rose-600 shadow-[0_0_20px_#e11d48]"
//         />
//       </div>

//     </section>
//   );
// };

// export default HeroSection;

// Hero Section Version 6



import React, { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Users, Activity } from "lucide-react";
import { Search, Heart, Sparkles, Flame, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroSectionSkeleton from "../Skeleton/HeroSectionSkeleton"; // adjust path

const HeroSection = () => {
  const navigate = useNavigate();
  const [lookingFor, setLookingFor] = useState("Bride");
 const [loading, setLoading] = useState(true);

  // Floating Hearts using your Primary Red Theme
  const FloatingHeart = ({ delay, x, size, color }) => (
    <motion.div
      initial={{ y: "110vh", opacity: 0, rotate: 0 }}
      animate={{
        y: "-20vh",
        opacity: [0, 0.8, 0],
        rotate: 360,
        scale: [0.5, 1.2, 0.8],
      }}
      transition={{ duration: 8, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`absolute z-0 ${color}`}
      style={{ left: x }}
    >
      <Heart fill="currentColor" size={size} />
    </motion.div>
  );


  
  // Simulate loading (replace with real fetch if needed)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1.5s loading
    return () => clearTimeout(timer);
  }, []);

 if (loading) return <HeroSectionSkeleton />;
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[var(--bg-main)] text-[var(--text-primary)]">
      {/* --- THE MAGIC SIDE (Background Image & Hearts) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background Image: Visible on all screens now with better opacity for your theme */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] opacity-[0.15] lg:opacity-40"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop')`,
          }}
        />

        {/* Deep Red Magic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary-2)] via-transparent to-[var(--bg-main)] opacity-90" />

        {/* MAGIC HEARTS in Primary Red */}
        <FloatingHeart
          delay={0}
          x="5%"
          size={80}
          color="text-[var(--color-primary)]/10"
        />
        <FloatingHeart
          delay={2}
          x="25%"
          size={120}
          color="text-[var(--color-secondary)]/5"
        />
        <FloatingHeart
          delay={4}
          x="75%"
          size={60}
          color="text-[var(--color-primary)]/10"
        />
        <FloatingHeart
          delay={1}
          x="40%"
          size={100}
          color="text-[var(--color-primary)]/5"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center z-10 pt-20 lg:pt-0">
        {/* LEFT CONTENT: THE FEEL & TAGLINE */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 mb-8 animate-bounce mx-auto lg:mx-0">
            <Zap
              size={18}
              className="text-[var(--color-primary)] fill-[var(--color-primary)]"
            />
            <span className="text-sm font-[var(--fw-bold)] uppercase tracking-[3px] text-[var(--color-secondary)]">
              Soulmate Finder
            </span>
          </div>
          <h1
            className="font-[var(--fw-bold)] leading-[1.1] italic uppercase font-[var(--ff-accent)] 
             /* Fluid Font Size: Min 32px, scales with width, Max 64px */
             text-[clamp(32px,8vw,64px)] 
             w-full"
          >
            Starting Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] drop-shadow-md inline-block">
              Beautiful Journey.
            </span>
          </h1>

          <p
            className="mt-8 
             /* Fluid Font Size: Min 16px, Max 20px */
             text-[clamp(16px,2vw,20px)] 
             text-[var(--text-secondary)] max-w-lg font-[var(--fw-medium)] leading-relaxed border-l-4 border-[var(--color-primary)] pl-6 text-left mx-auto lg:mx-0"
          >
            "Sacha rishta, sacha bandhan." Find your perfect match where
            tradition meets destiny. Experience the magic of Love Link.
          </p>

          {/* KILLER SEARCH UI */}
          <div className="mt-12 group relative max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-1 bg-[var(--color-primary)] rounded-[12px] blur opacity-10 group-hover:opacity-40 transition duration-1000"></div>

            {/* Changed flex-col to flex-row and added items-center to keep it in one line */}
            <div className="relative flex flex-row items-center bg-[var(--bg-card)] rounded-[12px] p-1.5 border border-[var(--border)] shadow-[var(--shadow-card)] overflow-hidden">
              <div className="flex-1 px-3 md:px-6 py-2 text-left min-w-0">
                <p className="text-[clamp(8px,2vw,10px)] font-bold text-[var(--color-primary)] uppercase tracking-widest mb-0.5 md:mb-1 truncate">
                  Looking for
                </p>

                {/* Dynamic font size for "My Queen" using clamp */}
                <select
                  className="bg-transparent text-[clamp(14px,4vw,20px)] font-bold outline-none w-full cursor-pointer text-[var(--text-primary)] appearance-none"
                  value={lookingFor}
                  onChange={(e) => setLookingFor(e.target.value)}
                >
                  <option value="Bride">My Queen</option>
                  <option value="Groom">My King</option>
                </select>
              </div>

              {/* SEARCH BUTTON - Added flex-shrink-0 to prevent squishing */}
              <button
                onClick={() => navigate("/MatrimonyFilter")}
                className="bg-[var(--color-primary)] cursor-pointer text-white px-4 md:px-8 py-2.5 md:py-4 rounded-[8px] font-black uppercase flex items-center justify-center gap-1 md:gap-2 shadow-lg shadow-[var(--color-primary)]/20 transition-all active:scale-95 group/btn overflow-hidden relative flex-shrink-0"
              >
                <span className="relative z-10 text-[clamp(10px,2.5vw,14px)] whitespace-nowrap">
                  Spark Love
                </span>

                <div className="relative z-10 flex items-center justify-center scale-75 md:scale-100">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 0, scale: 1 }}
                      animate={{
                        opacity: [0, 1, 0],
                        y: -15,
                        x: i % 2 === 0 ? 5 : -5,
                        scale: [0.5, 1.2, 0.2],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeOut",
                      }}
                      className="absolute w-0.5 h-0.5 bg-yellow-200 rounded-full blur-[0.5px]"
                      style={{ boxShadow: "0 0 4px #fe3b3b" }}
                    />
                  ))}

                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      filter: [
                        "drop-shadow(0 0 2px #ffecb3)",
                        "drop-shadow(0 0 12px #fe3b3b)",
                        "drop-shadow(0 0 2px #ffecb3)",
                      ],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Flame
                      size={18}
                      className="md:size-[22px] fill-orange-500 text-yellow-200"
                    />
                  </motion.div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 via-transparent to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 blur-xl" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-8 mt-8 justify-center md:justify-start items-center">
            {/* Verified Badge */}
            <div className="flex items-center gap-2 group">
              <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-200 transition-colors">
                <ShieldCheck size={20} className="text-green-600" />
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-800">
                100% Verified Profiles
              </span>
            </div>

            {/* User Count Badge */}
            <div className="flex items-center gap-2 group">
              <div className="bg-blue-100 p-2 rounded-full group-hover:bg-blue-200 transition-colors">
                <Users size={20} className="text-blue-600" />
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-800">
                500k+ Active Users
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT: THE PROFILE CARD (Now visible on mobile) */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: -5 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
            className="relative z-20 w-[280px] h-[380px] md:w-[380px] md:h-[500px] bg-[var(--bg-card)] rounded-[50px] border border-[var(--border)] p-4 shadow-[var(--shadow-hover)] overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop"
              className="w-full h-full object-cover rounded-[40px]  transition-all duration-700"
              alt="Magic Profile"
            />
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-4 md:p-6 bg-white/80 backdrop-blur-xl rounded-[var(--radius-lg)] border border-white/20 shadow-2xl">
              <div className="flex justify-between items-center gap-2">
                <div className="flex-1">
                  {/* Responsive Name: Mobile h5 (18px) to Desktop h3 (32px) */}
                  <h3 className="text-[var(--fs-h5)] md:text-[var(--fs-h3)] font-[var(--fw-bold)] text-[var(--text-primary)] leading-tight">
                    Sarah, 24
                  </h3>

                  {/* Responsive Subtext: Mobile caption (12px) to Desktop body (16px) */}
                  <p className="text-[var(--fs-caption)] md:text-[var(--fs-body)] text-[var(--color-primary)] font-[var(--fw-bold)] flex items-center gap-1 uppercase tracking-wider">
                    <Sparkles size={12} className="hidden md:block" /> 99%
                    Destiny Match
                  </p>
                </div>

                {/* Responsive Icon Circle */}
                <div className="w-10 h-10 md:w-14 md:h-14 bg-[var(--color-primary)] rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-[var(--color-primary)]/30 shrink-0">
                  <Heart
                    fill="white"
                    size={window.innerWidth < 768 ? 18 : 24}
                    className="text-white"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Magic Dust */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
                x: [0, Math.random() * 50, 0],
                y: [0, Math.random() * -50, 0],
              }}
              transition={{ duration: 3 + i, repeat: Infinity }}
              className="absolute w-2 h-2 bg-[var(--color-primary)] rounded-full blur-[1px]"
              style={{ top: `${20 * i}%`, right: `${10 * i}%` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
