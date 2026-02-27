

// import React, { useState, useEffect, useContext } from "react";
// import { motion, useSpring, AnimatePresence } from "framer-motion";
// import { Check, X, Heart, Star, Crown, ShieldCheck } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// // import { useAuth } from "../context/AuthContext";
// import { useAuth } from "../../context/AuthContext";
// import { PaymentContext } from "../../context/PaymentContext";

// const PricingSection = () => {
//   const [isAnnual, setIsAnnual] = useState(false);
//   const [basicViews, setBasicViews] = useState(50);
//   const [premiumViews, setPremiumViews] = useState(250);
//   const navigate = useNavigate();

//     const { user } = useAuth();
//   const { startPayment } = useContext(PaymentContext);

//   // Dynamic Price Logic
//   const calculateBasicPrice = () => (isAnnual ? 899 : 1299) + basicViews * 3;
//   const calculatePremiumPrice = () => (isAnnual ? 2499 : 3499) + premiumViews * 2;

//   // Animated Price Springs
//   const basicPriceSpring = useSpring(calculateBasicPrice(), { stiffness: 100 });
//   const premiumPriceSpring = useSpring(calculatePremiumPrice(), { stiffness: 100 });

//   useEffect(() => {
//     basicPriceSpring.set(calculateBasicPrice());
//   }, [basicViews, isAnnual]);

//   useEffect(() => {
//     premiumPriceSpring.set(calculatePremiumPrice());
//   }, [premiumViews, isAnnual]);

//   const handlePaymentClick = (planName, price) => {
//     if (!user) {
//       // If user is not logged in, redirect
//       navigate("/login");
//       return;
//     }
//     startPayment(user.uid, planName, price);
//   };

//   const plans = [
//     {
//       name: "Soulmate Basic",
//       icon: <Heart size={24} className="text-rose-500" />,
//       desc: "Perfect for those just starting their search",
//       sliderLabel: "Profile Views",
//       range: { min: 20, max: 200, current: basicViews, setter: setBasicViews },
//       features: [
//         { text: "Send Unlimited Interests", included: true },
//         { text: "View 20+ Verified Contacts", included: true },
//         { text: "Standard Profile Tag", included: true },
//         { text: "Chat with Matches", included: true },
//         { text: "Priority Customer Support", included: false },
//         { text: "Profile Booster (3x Visibility)", included: false },
//       ],
//     },
//     {
//       name: "Eternal Premium",
//       icon: <Star size={24} className="text-white" />,
//       popular: true,
//       desc: "Most popular choice for serious seekers",
//       sliderLabel: "Direct Contacts",
//       range: { min: 100, max: 1000, current: premiumViews, setter: setPremiumViews },
//       features: [
//         { text: "Everything in Basic", included: true },
//         { text: "View Unlimited Contacts", included: true },
//         { text: "Personalized Matchmaking", included: true },
//         { text: "Profile Booster (10x Visibility)", included: true },
//         { text: "Verified Badge on Profile", included: true },
//         { text: "Privacy Control Settings", included: true },
//       ],
//     },
//     {
//       name: "Infinity Lifetime",
//       icon: <Crown size={24} className="text-indigo-600" />,
//       price: "Custom",
//       features: [
//         { text: "Dedicated Relationship Manager", included: true },
//         { text: "Face-to-Face Meeting Setup", included: true },
//         { text: "Background Verification Service", included: true },
//         { text: "Astro-Matchmaking Reports", included: true },
//         { text: "Exclusive Elite Lounge Access", included: true },
//         { text: "No Expiry Date", included: true },
//       ],
//     },
//   ];

//   // Motion Variants
//   const textVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
//   };

//   return (
//     <section className="bg-[var(--color-secondary)] text-white py-16 px-4 font-[family-name:var(--ff-primary)] overflow-hidden">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Header */}
//         <motion.h1 custom={0} initial="hidden" animate="visible" variants={textVariant} className="text-[length:var(--fs-h1)] font-[var(--fw-bold)] mb-4">
//           Find Your <span className="text-[var(--color-accent)]">Perfect Match</span>
//         </motion.h1>

//         {/* Toggle */}
//         <motion.div custom={1} initial="hidden" animate="visible" variants={textVariant} className="flex flex-col items-center gap-4 mb-16">
//           <AnimatePresence mode="wait">
//             <motion.span
//               key={isAnnual ? "annual" : "monthly"}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               className="text-[var(--color-accent)] font-semibold text-sm"
//             >
//               {isAnnual ? "✨ 30% Annual Savings Applied" : "Save 30% with Yearly Membership"}
//             </motion.span>
//           </AnimatePresence>

//           <div className="flex items-center gap-4">
//             <span className={!isAnnual ? "text-white" : "text-gray-400"}>Monthly</span>
//             <button onClick={() => setIsAnnual(!isAnnual)} className="w-14 h-7 bg-[var(--color-primary)] rounded-full p-1 relative">
//               <motion.div animate={{ x: isAnnual ? 28 : 0 }} className="w-5 h-5 bg-white rounded-full" />
//             </button>
//             <span className={isAnnual ? "text-white" : "text-gray-400"}>Yearly</span>
//           </div>
//         </motion.div>

//         {/* Plan Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {plans.map((plan, index) => {
//             // Compute price dynamically
//             let planPrice;
//             if (plan.name === "Soulmate Basic") planPrice = Math.round(basicPriceSpring.get());
//             else if (plan.name === "Eternal Premium") planPrice = Math.round(premiumPriceSpring.get());
//             else planPrice = 0; // For Infinity Lifetime

//             return (
//               <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} className={`relative rounded-[var(--radius-lg)] p-8 shadow-xl flex flex-col transition-all ${plan.popular ? "bg-gradient-to-b from-amber-400 to-amber-600 text-white scale-105 z-10" : "bg-white text-[var(--text-primary)]"}`}>
                
//                 {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-accent-base)] text-amber-600 px-5 py-1.5 rounded-full text-xs font-bold shadow-lg">RECOMMENDED</div>}

//                 <div className="mb-6 flex flex-col items-center">
//                   <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="mb-2">{plan.icon}</motion.div>
//                   <h3 className="text-2xl font-bold">{plan.name}</h3>
//                   <p className={`text-sm ${plan.popular ? "text-amber-50" : "text-gray-500"}`}>{plan.desc}</p>
//                 </div>

//                 <div className={`mb-8 border-y py-6 text-center ${plan.popular ? "border-amber-300/30" : "border-gray-100"}`}>
//                   <div className={`text-3xl font-bold ${plan.popular ? "text-white" : "text-[var(--color-secondary)]"}`}>
//                     {plan.name === "Infinity Lifetime" ? plan.price : `₹${planPrice.toLocaleString()}`}
//                   </div>

//                   {plan.range && (
//                     <div className="mt-6">
//                       <input type="range" min={plan.range.min} max={plan.range.max} value={plan.range.current} onChange={(e) => plan.range.setter(Number(e.target.value))} className={`w-full ${plan.popular ? "accent-white" : "accent-[var(--color-primary)]"}`} />
//                       <p className={`text-sm font-bold mt-2 ${plan.popular ? "text-white" : "text-[var(--color-primary)]"}`}>{plan.range.current} {plan.sliderLabel}</p>
//                     </div>
//                   )}
//                 </div>

//                 {/* Payment Button */}
//                 <motion.button
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => handlePaymentClick(plan.name, planPrice)}
//                   className={`w-full py-4 rounded-[var(--radius-md)] font-bold mb-6 transition-colors ${plan.popular ? "bg-white text-amber-600 hover:bg-gray-100 shadow-lg" : "bg-[var(--color-primary)] text-white hover:bg-opacity-90"}`}
//                 >
//                   {plan.name === "Infinity Lifetime" ? "Consult Expert →" : "Get Started Now →"}
//                 </motion.button>

//                 <div className="text-left space-y-3">
//                   {plan.features.map((feat, i) => (
//                     <div key={i} className="flex items-center gap-3 text-sm">
//                       {feat.included ? <Check size={16} className={plan.popular ? "text-white" : "text-green-500"} /> : <X size={16} className={plan.popular ? "text-amber-300" : "text-red-400"} />}
//                       <span className={`${!feat.included && "opacity-50 line-through"}`}>{feat.text}</span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Footer Icons */}
//         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-8 text-[13px] opacity-80">
//           <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12  text-[13px]">
//             <div className="flex items-center gap-2"><ShieldCheck size={20} className="text-[var(--success)]" />100% Privacy</div>
//             <div className="flex items-center gap-2"><Check size={20} className="text-[var(--bg-soft)]" />Verified ID</div>
//             <div className="flex items-center gap-2"><Heart size={20} className="text-[var(--color-accent)]" />Happy Stories</div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;







// import React, { useState, useContext } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Check, X, Heart, Star, Crown, ShieldCheck, Zap, Users } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { PaymentContext } from "../../context/PaymentContext";

// const PricingSection = () => {
//   const [isYearly, setIsYearly] = useState(false);
//   const navigate = useNavigate();
//   const { user } = useAuth();
//   const { startPayment } = useContext(PaymentContext);

//   const handlePaymentClick = (planName, price) => {
//     if (!user) {
//       navigate("/login");
//       return;
//     }
//     startPayment(user.uid, planName, price);
//   };

//   // Base prices for the 3-6-9 Month blocks
//   const plansData = [
//     {
//       name: "Silver",
//       icon: <Heart size={28} className="text-slate-400" />,
//       desc: "Perfect for exploring the platform",
//       basePrice: 1499,
//       months: 3,
//       features: [
//         { text: "10 Profile Views Only", included: true },
//         { text: "100 Connect Requests", included: true },
//         { text: "Chat with Matches", included: true },
//         { text: "AI Match Suggestions", included: false },
//         { text: "Astro Matchmaking", included: false },
//       ],
//       buttonText: "Start Searching",
//     },
//     {
//       name: "Gold",
//       icon: <Star size={28} className="text-[var(--color-accent)]" />,
//       desc: "Best value for serious seekers",
//       basePrice: 3499, 
//       months: 6,
//       popular: true,
//       features: [
//         { text: "Unlimited Profile Views", included: true },
//         { text: "500 Connect Requests", included: true },
//         { text: "AI Match Suggestions", included: true },
//         { text: "Priority Profile Boost", included: true },
//         { text: "Guna Milan (Astro Score)", included: true },
//         { text: "WhatsApp Support", included: true },
//       ],
//       buttonText: "Get Best Value",
//     },
//     {
//       name: "Platinum",
//       icon: <Crown size={28} className="text-[var(--color-accent)]" />,
//       desc: "Elite matchmaking for high-profiles",
//       basePrice: 6999,
//       months: 9,
//       features: [
//         { text: "Access to Elite Club", included: true },
//         { text: "Unlimited Everything", included: true },
//         { text: "Hand-picked Suggestions", included: true },
//         { text: "Personal Relationship Manager", included: true },
//         { text: "Full Janam-Patrika Analysis", included: true },
//         { text: "Invisible Mode Privacy", included: true },
//       ],
//       buttonText: "Join Elite Club",
//     },
//   ];

//   return (
//     <section className="bg-[var(--bg-main)] py-20 px-4 font-[family-name:var(--ff-primary)]">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Header */}
//         <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
//           <h1 className="text-[length:var(--fs-h1)] font-[var(--fw-bold)] text-[var(--text-primary)] mb-4 leading-tight">
//             Find Your <span className="text-[var(--color-primary)]">Perfect Match</span>
//           </h1>
//           <p className="text-[var(--text-secondary)] text-[length:var(--fs-body)] max-w-2xl mx-auto">
//             Trusted by Indian families. Choose a plan to unlock verified contacts and smart matchmaking.
//           </p>
//         </motion.div>

//         {/* Toggle - 30% Savings logic */}
//         <div className="flex flex-col items-center gap-4 mb-16">
//           <div className="flex items-center gap-2 bg-[var(--color-primary-2)] p-1.5 rounded-full border border-[var(--color-primary)]">
//             <button 
//               onClick={() => setIsYearly(false)}
//               className={`px-8 py-2.5 rounded-full text-sm font-semibold  cursor-pointer transition-all ${!isYearly ? "bg-[var(--color-primary)] text-white shadow-md" : "text-[var(--color-primary)]"}`}
//             >
//               Standard
//             </button>
//             <button 
//               onClick={() => setIsYearly(true)}
//               className={`px-8 py-2.5 rounded-full text-sm  cursor-pointer font-semibold transition-all ${isYearly ? "bg-[var(--color-primary)] text-white shadow-md" : "text-[var(--color-primary)]"}`}
//             >
//               Yearly <span className="ml-1 text-[10px] bg-[var(--color-accent)] text-black px-1.5 py-0.5 rounded font-bold">SAVE 30%</span>
//             </button>
//           </div>
//         </div>

//         {/* Plan Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
//           {plansData.map((plan, index) => {
//             // Logic: Yearly price = (Monthly/Block * 4) - 30%
//             const multiplier = isYearly ? 4 : 1;
//             const rawPrice = plan.basePrice * multiplier;
//             const finalPrice = isYearly ? Math.floor(rawPrice * 0.7) : rawPrice;
//             const displayValidity = isYearly ? "12 Months" : `${plan.months} Months`;

//             return (
//               <motion.div
//                 key={plan.name}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className={`relative rounded-[var(--radius-lg)] p-8 flex flex-col h-full transition-all duration-300 border ${
//                   plan.popular 
//                   ? "bg-[var(--color-secondary)] text-white scale-105 z-10 shadow-[0_20px_50px_rgba(102,53,53,0.3)]" 
//                   : "bg-[var(--bg-card)] text-[var(--text-primary)] border-[var(--border)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)]"
//                 }`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-[var(--color-secondary)] px-6 py-1 rounded-full text-xs font-black tracking-widest shadow-lg">
//                     BEST VALUE
//                   </div>
//                 )}

//                 <div className="mb-6">
//                   <div className={`w-14 h-14 rounded-[var(--radius-md)] flex items-center justify-center mb-4 ${plan.popular ? "bg-white/10" : "bg-[var(--bg-soft)]"}`}>
//                     {plan.icon}
//                   </div>
//                   <h3 className="text-[length:var(--fs-h3)] font-[var(--fw-bold)]">{plan.name}</h3>
//                   <p className={`text-[length:var(--fs-caption)] mt-1 ${plan.popular ? "text-slate-200" : "text-[var(--text-secondary)]"}`}>{plan.desc}</p>
//                 </div>

//                 <div className="mb-8 py-6 border-y border-white/10">
//                   <div className="flex items-baseline gap-1 justify-center">
//                     <span className="text-lg font-medium">₹</span>
//                     <span className="text-5xl font-bold tracking-tight">{finalPrice.toLocaleString()}</span>
//                   </div>
//                   {isYearly && (
//                       <p className={`text-xs mt-1 line-through opacity-60`}>₹{rawPrice.toLocaleString()}</p>
//                   )}
//                   <p className={`text-[10px] font-black mt-3 uppercase tracking-[2px] px-3 py-1 rounded-full inline-block ${plan.popular ? "bg-[var(--color-accent)] text-black" : "bg-[var(--color-primary-2)] text-[var(--color-primary)]"}`}>
//                     Validity: {displayValidity}
//                   </p>
//                 </div>

//                 <button
//                   onClick={() => handlePaymentClick(plan.name, finalPrice)}
//                   className={`w-full py-4 rounded-[var(--radius-md)] font-[var(--fw-bold)]  cursor-pointer mb-8 transition-all active:scale-95 ${
//                     plan.popular 
//                     ? "bg-[var(--color-accent)] text-[var(--color-secondary)] hover:brightness-110 shadow-lg" 
//                     : "bg-[var(--color-primary)] text-white hover:brightness-110 shadow-md"
//                   }`}
//                 >
//                   {plan.buttonText}
//                 </button>

//                 <div className="space-y-4 text-left flex-grow">
//                   {plan.features.map((feat, i) => (
//                     <div key={i} className="flex items-start gap-3 text-[length:var(--fs-small)]">
//                       {feat.included ? (
//                         <Check size={18} className={plan.popular ? "text-[var(--color-accent)]" : "text-[var(--success)]"} />
//                       ) : (
//                         <X size={18} className={plan.popular ? "text-white/30" : "text-[var(--text-light)]"} />
//                       )}
//                       <span className={`${!feat.included && "opacity-40 line-through"}`}>
//                         {feat.text}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Status Badges */}
//         <div className="mt-20 pt-10 border-t border-[var(--border)] grid grid-cols-2 lg:grid-cols-4 gap-8">
//             <div className="flex flex-col items-center gap-2">
//                 <ShieldCheck className="text-[var(--success)]" size={32} />
//                 <span className="text-[length:var(--fs-caption)] font-[var(--fw-medium)] text-[var(--text-secondary)]">100% Secure Payment</span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//                 <Users className="text-[var(--color-primary)]" size={32} />
//                 <span className="text-[length:var(--fs-caption)] font-[var(--fw-medium)] text-[var(--text-secondary)]">Verified Profiles</span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//                 <Zap className="text-[var(--color-accent-base)]" size={32} />
//                 <span className="text-[length:var(--fs-caption)] font-[var(--fw-medium)] text-[var(--text-secondary)]">Instant Matching</span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//                 <Heart className="text-[var(--color-primary)]" size={32} />
//                 <span className="text-[length:var(--fs-caption)] font-[var(--fw-medium)] text-[var(--text-secondary)]">Successful Matches</span>
//             </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;



import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Star, Crown ,ShieldCheck, Zap, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { PaymentContext } from "../../context/PaymentContext";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { startPayment } = useContext(PaymentContext);

  const handlePaymentClick = (planName, price) => {
    if (!user) {
      navigate("/login");
      return;
    }
    startPayment(user.uid, planName, price);
  };

  const plansData = [
    {
      name: "Silver",
     icon: <Star size={24} className="text-[var(--color-accent)]" />,
      desc: "Perfect for exploring the platform",
      basePrice: 1499,
      months: 3,
      theme: "rosy",
      features: [
        { text: "10 Profile Views Only", included: true },
        { text: "100 Connect Requests", included: true },
        { text: "Chat with Matches", included: true },
        { text: "AI Match Suggestions", included: false },
        { text: "Astro Matchmaking", included: false },
      ],
      buttonText: "Start Searching",
    },
    {
      name: "Gold",
      icon: <Star size={24} className="text-[var(--color-accent)]" />,
      
      desc: "Best value for serious seekers",
      basePrice: 3499,
      months: 6,
      popular: true,
      features: [
        { text: "Unlimited Profile Views", included: true },
        { text: "500 Connect Requests", included: true },
        { text: "AI Match Suggestions", included: true },
        { text: "Priority Profile Boost", included: true },
        { text: "Guna Milan (Astro Score)", included: true },
        { text: "WhatsApp Support", included: true },
      ],
      buttonText: "Get Best Value",
    },
    {
      name: "Platinum",
       icon: <Star size={24} className="text-[var(--color-accent)]" />,
      desc: "Elite matchmaking for high-profiles",
      basePrice: 6999,
      months: 9,
      theme: "rosy",
      features: [
        { text: "Access to Elite Club", included: true },
        { text: "Unlimited Everything", included: true },
        { text: "Hand-picked Suggestions", included: true },
        { text: "Personal Relationship Manager", included: true },
        { text: "Full Janam-Patrika Analysis", included: true },
        { text: "Invisible Mode Privacy", included: true },
      ],
      buttonText: "Join Elite Club",
    },
    {
      name: "Personal Elite Service",
      icon: <Crown size={24} className="text-yellow-400 fill-yellow-400" />,
      desc:  "Exclusive Elite Matchmaking for Distinguished Profiles",
      basePrice: 50000,
      months: 9,
      theme: "orange",
      features: [
        { text: "Dedicated Relationship Manager", included: true },
        { text: "One-to-One Personal Consultation", included: true },
        { text: "Manual Profile Screening and Shortlisting", included: true },
        { text: "Direct Family Coordination", included: true },
        { text: "Private Matchmaking Assistance", included: true },
        { text: "Verified & Genuine Profiles", included: true },
        { text: "Privacy and Confidential Handling", included: true },
        { text: "6 Months Premium Support", included: true },
      ],
      buttonText: "Join Elite Club Pro",
    },
  ];

  return (
    <section className="bg-[var(--bg-main)] py-12 px-4 font-[family-name:var(--ff-primary)]">
      <div className="max-w-[1400px] mx-auto text-center">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
            Find Your <span className="text-[var(--color-primary)]">Perfect Match</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-sm max-w-2xl mx-auto">
            Trusted by Indian families. Choose a plan to unlock verified contacts and smart matchmaking.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-[var(--color-primary-2)] p-1 rounded-full border border-[var(--color-primary)]">
            <button onClick={() => setIsYearly(false)} className={`px-6 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all ${!isYearly ? "bg-[var(--color-primary)] text-white shadow-md" : "text-[var(--color-primary)]"}`}>
              Standard
            </button>
            <button onClick={() => setIsYearly(true)} className={`px-6 py-2 rounded-full text-xs cursor-pointer font-semibold transition-all ${isYearly ? "bg-[var(--color-primary)] text-white shadow-md" : "text-[var(--color-primary)]"}`}>
              Yearly <span className="ml-1 text-[9px] bg-[var(--color-accent)] text-black px-1.5 py-0.5 rounded font-bold">SAVE 30%</span>
            </button>
          </div>
        </div>

        {/* Plan Cards Grid - Set to 4 columns for laptop view */}
        <div className="grid grid-cols-1  py-10 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {plansData.map((plan, index) => {
            const multiplier = isYearly ? 4 : 1;
            const rawPrice = plan.basePrice * multiplier;
            const finalPrice = isYearly ? Math.floor(rawPrice * 0.7) : rawPrice;
            const displayValidity = isYearly ? "12 Months" : `${plan.months} Months`;

            // Style variations
            const isElite = plan.theme === "orange";
            const isRosy = plan.theme === "rosy";

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-5 py-10 flex flex-col h-full transition-all duration-300 border ${
                  plan.popular 
                  ? "bg-[var(--color-secondary)] text-white scale-105 z-10 shadow-xl" 
                  : isRosy 
                  ? "bg-gradient-to-br from-[#fff1f1] to-[#ffdada] border-[#ffc1c1] text-slate-800"
                  : isElite
                  ? "bg-gradient-to-b from-[#fff7ed] via-[#ffedd5] to-[#fed7aa] border-[#fb923c] text-orange-950"
                  : "bg-[var(--bg-card)] text-[var(--text-primary)] border-[var(--border)]"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-[var(--color-secondary)] px-4 py-0.5 rounded-full text-[10px] font-black tracking-widest shadow-md">
                    BEST VALUE
                  </div>
                )}

                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${
                    plan.popular ? "bg-red-500" : isElite ? "bg-red-500 " : "bg-red-500"
                  }`}>
                    {plan.icon}
                  </div>
                  <h3 className={`font-bold leading-tight ${isElite ? "text-lg text-orange-900" : "text-md"}`}>{plan.name}</h3>
                  {plan.desc && <p className="text-[10px] mt-1 opacity-80 leading-tight">{plan.desc}</p>}
                </div>

                <div className="mb-6 py-4 border-y border-black/5">
                  <div className="flex items-baseline gap-1 justify-center">
                    <span className="text-sm font-medium">₹</span>
                    <span className={`${isElite ? "text-3xl" : "text-4xl"} font-bold tracking-tight`}>{finalPrice.toLocaleString()}</span>
                  </div>
                  <p className={`text-[9px] font-black mt-2 uppercase tracking-wider px-2 py-0.5 rounded-full inline-block ${plan.popular ? "bg-[var(--color-accent)] text-black" : "bg-[var(--color-primary-2)] text-[var(--color-primary)]"}`}>
                
                    Validity: {displayValidity}
                  </p>
                </div>

                <button
                  onClick={() => handlePaymentClick(plan.name, finalPrice)}
                  className={`w-full py-3 rounded-xl text-sm font-bold cursor-pointer mb-6 transition-all active:scale-95 ${
                    plan.popular 
                    ? "bg-[var(--color-accent)] text-[var(--color-secondary)] hover:brightness-110 shadow-md" 
                    : "bg-[var(--color-primary)] text-white hover:brightness-110"
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3 text-left flex-grow">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px]">
                      {feat.included ? (
                        <Check size={14} className={plan.popular ? "text-[var(--color-accent)]" : "text-green-600"} />
                      ) : (
                        <X size={14} className="text-slate-400 opacity-50" />
                      )}
                      <span className={`${!feat.included && "opacity-40 line-through"}`}>
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;











