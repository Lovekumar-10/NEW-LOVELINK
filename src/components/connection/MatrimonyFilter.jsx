

// import React, { useState, useEffect, useMemo } from "react";
// import { useAuth } from "../../context/AuthContext";
// import {
//   MapPin,
//   Heart,
//   Search,
//   ShieldCheck,
//   ExternalLink,
//   X,
//   RotateCcw,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { useLocation } from "react-router-dom";

// const FindYourSoulmate = () => {
//   const { getAllProfiles, userData } = useAuth();
//   const [allProfiles, setAllProfiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [displayLimit, setDisplayLimit] = useState(8);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // 1. Full Filter State
//   const [filters, setFilters] = useState({
//     search: "",
//     gender: "",
//     maritalStatus: "",
//     education: "",
//     occupation: "",
//     gothra: "",
//     rasi: "",
//     ageRange: "",
//     featured: false,
//     online: false,
//   });

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const lookingFor = params.get("lookingFor") || "";
//     const ageRange = params.get("ageRange") || "";

//     if (lookingFor || ageRange) {
//       setFilters((prev) => ({
//         ...prev,
//         gender: lookingFor === "A Bride" ? "Female" : "Male", // optional mapping
//         ageRange,
//       }));
//     }
//   }, [location.search]);

//   // --- Static Dropdown Data ---
//   const genderOptions = [
//     "Male",
//     "Female",
//     "Transgender",
//     "Non-binary",
//     "Other",
//   ];
//   const maritalStatusOptions = [
//     "Unmarried",
//     "Married",
//     "Divorced",
//     "Widowed",
//     "Separated",
//     "Annulled",
//     "Other",
//   ];
//   const educationOptions = [
//     "Uneducated",
//     "Secondary School",
//     "High School",
//     "Bachelor’s Degree",
//     "Master’s Degree",
//     "Postgraduate",
//     "PhD",
//     "LLB",
//     "Other",
//   ];
//   const occupationOptions = [
//     "Professor",
//     "Teacher",
//     "Lawyer",
//     "Doctor",
//     "Engineer",
//     "Businessman",
//     "Royal Family Member",
//     "Software Engineer",
//     "Chartered Accountant",
//     "Investment Banker",
//     "Architect",
//     "Government Officer",
//     "Other",
//   ];
//   const gotraOptions = [
//     "Bharadwaj",
//     "Kashyap",
//     "Vashistha",
//     "Gautam",
//     "Agastya",
//     "Atri",
//     "Jamadagni",
//     "Vishwamitra",
//     "Parashar",
//     "Shandilya",
//     "Bhrigu",
//     "Kaushik",
//     "Other",
//   ];
//   const rasiOptions = [
//     "Mesha (Aries)",
//     "Vrishabha (Taurus)",
//     "Mithuna (Gemini)",
//     "Karka (Cancer)",
//     "Simha (Leo)",
//     "Kanya (Virgo)",
//     "Tula (Libra)",
//     "Vrishchika (Scorpio)",
//     "Dhanu (Sagittarius)",
//     "Makara (Capricorn)",
//     "Kumbha (Aquarius)",
//     "Meena (Pisces)",
//   ];
//   const ageRanges = [
//     { label: "21-25", min: 21, max: 25 },
//     { label: "26-30", min: 26, max: 30 },
//     { label: "31-35", min: 31, max: 35 },
//     { label: "36-40", min: 36, max: 40 },
//     { label: "41-50", min: 41, max: 50 },
//   ];

//   // Logic to check if any filter is active
//   const isFilterActive = Object.values(filters).some(
//     (val) => val !== "" && val !== false,
//   );

//   useEffect(() => {
//     const loadData = async () => {
//       const data = await getAllProfiles();
//       setAllProfiles(data);
//       setLoading(false);
//     };
//     loadData();
//   }, []);

//   // 2. Comprehensive Filtering Logic
//   const filteredData = useMemo(() => {
//     return allProfiles.filter((profile) => {
//       const searchTerm = filters.search.toLowerCase();
//       const searchMatch =
//         searchTerm === "" ||
//         profile.fullName?.toLowerCase().includes(searchTerm) ||
//         profile.location?.city?.toLowerCase().includes(searchTerm) ||
//         profile.occupation?.toLowerCase().includes(searchTerm);

//       const ageMatch =
//         filters.ageRange === "" ||
//         (() => {
//           const range = ageRanges.find((r) => r.label === filters.ageRange);
//           return profile.age >= range.min && profile.age <= range.max;
//         })();

//       return (
//         searchMatch &&
//         ageMatch &&
//         (filters.gender === "" || profile.gender === filters.gender) &&
//         (filters.maritalStatus === "" ||
//           profile.maritalStatus === filters.maritalStatus) &&
//         (filters.education === "" || profile.education === filters.education) &&
//         (filters.occupation === "" ||
//           profile.occupation === filters.occupation) &&
//         (filters.gothra === "" || profile.gothra === filters.gothra) &&
//         (filters.rasi === "" || profile.raasi === filters.rasi) &&
//         (!filters.featured || profile.subscription?.isActive) &&
       
//         (!filters.featured || profile.subscription?.isActive === true) &&
//         (!filters.online || profile.isOnline === true)
//       );
//     });
//   }, [filters, allProfiles]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (
//         window.innerHeight + document.documentElement.scrollTop + 1 >=
//         document.documentElement.scrollHeight
//       ) {
//         setDisplayLimit((prev) => prev + 4);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//     const toggleFilter = (key) =>
//       setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
//   };

//   const resetFilters = () => {
//     setFilters({
//       search: "",
//       gender: "",
//       maritalStatus: "",
//       education: "",
//       occupation: "",
//       gothra: "",
//       rasi: "",
//       ageRange: "",
//       featured: false,
//       online: false,
//     });
//   };

//   if (loading)
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--bg-main)]">
//         <div className="w-16 h-16 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin mb-4"></div>
//         <p className="font-black tracking-widest text-[var(--text-secondary)]">
//           SEARCHING UNIVERSE...
//         </p>
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-[var(--bg-main)] pt-28 pb-20 px-4 md:px-10">
//       <div className="max-w-7xl mx-auto">
//         {/* --- FILTER SECTION --- */}
//         <section className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 md:p-8 mb-12">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
//             <div className="relative">
//               <Search
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//                 size={18}
//               />
//               <input
//                 type="text"
//                 name="search"
//                 value={filters.search}
//                 onChange={handleFilterChange}
//                 placeholder="Search..."
//                 className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-12 pr-4 py-3 text-sm font-medium outline-none focus:border-[var(--color-primary)] transition-all"
//               />
//             </div>
//             <select
//               name="gender"
//               value={filters.gender}
//               onChange={handleFilterChange}
//               className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium outline-none cursor-pointer hover:bg-gray-100 transition-colors"
//             >
//               <option value="">Any Gender</option>
//               {genderOptions.map((g) => (
//                 <option key={g} value={g}>
//                   {g}
//                 </option>
//               ))}
//             </select>
//             <select
//               name="maritalStatus"
//               value={filters.maritalStatus}
//               onChange={handleFilterChange}
//               className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium outline-none cursor-pointer hover:bg-gray-100 transition-colors"
//             >
//               <option value="">Marital Status</option>
//               {maritalStatusOptions.map((m) => (
//                 <option key={m} value={m}>
//                   {m}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
//             <select
//               name="education"
//               value={filters.education}
//               onChange={handleFilterChange}
//               className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium outline-none cursor-pointer hover:bg-gray-100 transition-colors"
//             >
//               <option value="">Education</option>
//               {educationOptions.map((e) => (
//                 <option key={e} value={e}>
//                   {e}
//                 </option>
//               ))}
//             </select>
//             <select
//               name="occupation"
//               value={filters.occupation}
//               onChange={handleFilterChange}
//               className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium outline-none cursor-pointer hover:bg-gray-100 transition-colors"
//             >
//               <option value="">Occupation</option>
//               {occupationOptions.map((o) => (
//                 <option key={o} value={o}>
//                   {o}
//                 </option>
//               ))}
//             </select>
//             <select
//               name="gothra"
//               value={filters.gothra}
//               onChange={handleFilterChange}
//               className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium outline-none cursor-pointer hover:bg-gray-100 transition-colors"
//             >
//               <option value="">Gotra</option>
//               {gotraOptions.map((g) => (
//                 <option key={g} value={g}>
//                   {g}
//                 </option>
//               ))}
//             </select>
//             <select
//               name="rasi"
//               value={filters.rasi}
//               onChange={handleFilterChange}
//               className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium outline-none cursor-pointer hover:bg-gray-100 transition-colors"
//             >
//               <option value="">Raasi</option>
//               {rasiOptions.map((r) => (
//                 <option key={r} value={r}>
//                   {r}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 border-t border-gray-50">
//             <div className="flex flex-wrap items-center gap-6">
//               <select
//                 name="ageRange"
//                 value={filters.ageRange}
//                 onChange={handleFilterChange}
//                 className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium outline-none min-w-[150px] cursor-pointer hover:bg-gray-100 transition-colors"
//               >
//                 <option value="">Any Age</option>
//                 {ageRanges.map((a) => (
//                   <option key={a.label} value={a.label}>
//                     {a.label}
//                   </option>
//                 ))}
//               </select>

//               <button
//                 onClick={() =>
//                   setFilters((p) => ({ ...p, featured: !p.featured }))
//                 }
//                 className="flex items-center gap-3 group cursor-pointer"
//               >
//                 <div
//                   className={`w-10 h-5 rounded-full relative transition-colors ${filters.featured ? "bg-[var(--color-primary)]" : "bg-gray-200"}`}
//                 >
//                   <div
//                     className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${filters.featured ? "left-6" : "left-1"}`}
//                   />
//                 </div>
//                 <span className="text-sm font-bold text-[var(--text-secondary)]">
//                   Premium Only
//                 </span>
//               </button>

//               <button
//                 type="button" // Prevents accidental form submission
//                 onClick={() =>
//                   setFilters((prev) => ({ ...prev, online: !prev.online }))
//                 }
//                 className="flex items-center gap-3 group cursor-pointer bg-transparent border-none outline-none"
//               >
//                 <div
//                   className={`w-10 h-5 rounded-full relative transition-all duration-300 ${filters.online ? "bg-green-500" : "bg-gray-300"}`}
//                 >
//                   <div
//                     className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 ${filters.online ? "left-6" : "left-1"}`}
//                   />
//                 </div>
//                 <span
//                   className={`text-sm font-bold transition-colors ${filters.online ? "text-green-600" : "text-[var(--text-secondary)]"}`}
//                 >
//                   Online Now
//                 </span>
//               </button>
//             </div>

//             {/* RESET BUTTON - ACTIVE STATE */}
//             <button
//               onClick={resetFilters}
//               disabled={!isFilterActive}
//               className={`text-xs font-black uppercase tracking-widest flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
//                 isFilterActive
//                   ? "bg-red-500 text-white shadow-lg hover:bg-red-600 cursor-pointer scale-100"
//                   : "bg-gray-100 text-gray-400 cursor-not-allowed scale-95 opacity-50"
//               }`}
//             >
//               <RotateCcw
//                 size={14}
//                 className={isFilterActive ? "animate-spin-slow" : ""}
//               />
//               Reset All Filters
//             </button>
//           </div>
//         </section>

//         {/* --- GRID SECTION --- */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
//           <AnimatePresence>
//             {filteredData.slice(0, displayLimit).map((member, index) => (
//               <motion.div
//                 key={member.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 onClick={() => navigate(`/profile/${member.id}`)}
//                 className="relative h-[420px] cursor-pointer overflow-hidden rounded-[2.5rem] group/card shadow-lg hover:shadow-2xl transition-all border border-gray-100 bg-[var(--bg-card)]"
//               >
//                 <img
//                   src={
//                     member.profileImages?.[0] ||
//                    "https://imgs.search.brave.com/VneMoX7Cl7XDPD7DguYtmdLDfVBIwtaLV6fbnFx77Jc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzU0LzA5LzI3/LzM2MF9GXzEwNTQw/OTI3ODBfbGlPYllR/bzEwUG4yeE9vNENt/R1laTWVXaXcwUDdD/VDIuanBn"
//                   }
//                   alt={member.fullName}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
//                 <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
//                   <div className="px-3 py-1 rounded-md text-[10px] font-black tracking-widest flex items-center gap-1 bg-[var(--color-primary)] text-white shadow-lg">
//                     <ShieldCheck size={12} />{" "}
//                     {member.subscription?.plan?.toUpperCase() || "MEMBER"}
//                   </div>
//                   <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 text-white">
//                     <Heart
//                       size={16}
//                       fill={
//                         userData?.likesSent?.includes(member.id)
//                           ? "white"
//                           : "none"
//                       }
//                       className={
//                         userData?.likesSent?.includes(member.id)
//                           ? "text-white"
//                           : ""
//                       }
//                     />
//                   </div>
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                   <h3 className="text-xl font-bold group-hover/card:text-[var(--color-primary)] transition-colors">
//                     {member.fullName}, {member.age || "??"}
//                   </h3>
//                   <p className="text-xs opacity-80 uppercase tracking-widest font-bold text-[var(--color-accent)]">
//                     {member.occupation || "Professional"}
//                   </p>
//                   <p className="text-[10px] opacity-60 mt-1 italic">
//                     {member.location?.city || "Location Private"}
//                   </p>
//                   <div className="mt-4 flex items-center gap-2 text-xs font-black text-[var(--color-primary)] opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0 transition-all">
//                     VIEW PROFILE <ExternalLink size={14} />
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {filteredData.length === 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="text-center py-40 bg-white rounded-[3rem] border border-dashed border-gray-100"
//           >
//             <Search size={48} className="mx-auto text-gray-200 mb-4" />
//             <h3 className="text-xl font-black text-gray-400 uppercase tracking-tighter">
//               No members match your criteria
//             </h3>
//             {isFilterActive && (
//               <button
//                 onClick={resetFilters}
//                 className="mt-4 text-[var(--color-primary)] font-bold text-xs cursor-pointer hover:underline"
//               >
//                 RESET SEARCH
//               </button>
//             )}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FindYourSoulmate;







import React, { useState, useEffect, useMemo } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  MapPin, Heart, Search, ShieldCheck, ExternalLink,
  RotateCcw, SlidersHorizontal, Sparkles
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const FindYourSoulmate = () => {
  const { getAllProfiles, userData } = useAuth();
  const [allProfiles, setAllProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayLimit, setDisplayLimit] = useState(8);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [filters, setFilters] = useState({
    search: "", gender: "", maritalStatus: "", education: "",
    occupation: "", gothra: "", rasi: "", ageRange: "",
    featured: false, online: false,
  });

  // --- Static Data ---
  const ageRanges = [
    { label: "21-25", min: 21, max: 25 },
    { label: "26-30", min: 26, max: 30 },
    { label: "31-35", min: 31, max: 35 },
    { label: "36-40", min: 36, max: 40 },
    { label: "41-50", min: 41, max: 50 },
  ];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lookingFor = params.get("lookingFor") || "";
    const ageRange = params.get("ageRange") || "";
    if (lookingFor || ageRange) {
      setFilters(prev => ({
        ...prev,
        gender: lookingFor === "A Bride" ? "Female" : "Male",
        ageRange,
      }));
    }
  }, [location.search]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getAllProfiles();
      setAllProfiles(data);
      setLoading(false);
    };
    loadData();
  }, []);

 const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    // Reset display limit when filters change so they see the top results
    setDisplayLimit(8); 
  };

  const resetFilters = () => {
    setFilters({
      search: "", gender: "", maritalStatus: "", education: "",
      occupation: "", gothra: "", rasi: "", ageRange: "",
      featured: false, online: false,
    });
  };

  const isFilterActive = Object.values(filters).some(val => val !== "" && val !== false);

  // 2. Comprehensive Global Filtering Logic
  const filteredData = useMemo(() => {
    return allProfiles.filter((profile) => {
      // Create a string of all searchable traits for this profile
      const searchableText = [
        profile.fullName,
        profile.location?.city,
        profile.occupation,
        profile.maritalStatus,
        profile.education,
        profile.gothra,
        profile.raasi,
        profile.religion, // Added this if you have it
      ].join(" ").toLowerCase();

      const searchTerm = filters.search.toLowerCase();
      
      // Check if the search term exists anywhere in the searchable text
      const searchMatch = searchTerm === "" || searchableText.includes(searchTerm);

      // Keep Advanced Filters as additional constraints
      const ageMatch =
        filters.ageRange === "" ||
        (() => {
          const range = ageRanges.find((r) => r.label === filters.ageRange);
          return profile.age >= range.min && profile.age <= range.max;
        })();

      return (
        searchMatch &&
        ageMatch &&
        (filters.gender === "" || profile.gender === filters.gender) &&
        (filters.maritalStatus === "" || profile.maritalStatus === filters.maritalStatus) &&
        (filters.education === "" || profile.education === filters.education) &&
        (filters.occupation === "" || profile.occupation === filters.occupation) &&
        (filters.gothra === "" || profile.gothra === filters.gothra) &&
        (filters.rasi === "" || profile.raasi === filters.rasi) &&
        (!filters.featured || profile.subscription?.isActive) &&
        (!filters.online || profile.isOnline === true)
      );
    });
  }, [filters, allProfiles]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfbf9]">
      <div className="w-12 h-12 border-4 border-rose-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fdfbf9] pt-32 pb-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* --- CLASSY HEADER --- */}
        {/* <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mb-4">
            <span className="px-4 py-1 rounded-full bg-rose-50 text-rose-600 text-[10px] font-black tracking-[0.2em] uppercase flex items-center gap-2">
              <Sparkles size={14} /> Premium Discovery
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-serif text-slate-900 mb-4 tracking-tight">
            Find Your Soulmate
          </h1>
          <p className="text-slate-500 font-light">Refine your search for a meaningful connection</p>
        </div> */}

        {/* --- LUXURY HEADER --- */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center mb-4">
            <span className="px-4 py-1 rounded-full bg-rose-50 text-rose-500 text-xs font-bold tracking-widest uppercase flex items-center gap-2">
              <Sparkles size={14} /> Discover Your Destiny
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 tracking-tight">
            Find Your Soulmate
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Exclusively designed for meaningful connections. Filter by tradition, values, and lifestyle.
          </p>
        </div>

        {/* --- PROFESSIONAL SEARCH BAR --- */}
        <div className="relative z-40 mb-16">
          <div className="bg-white rounded-[2rem] shadow-2xl shadow-rose-900/10 p-2 flex flex-col md:flex-row items-center border border-rose-100/50">
            
            {/* Search Input */}
            <div className="flex-1 flex items-center px-6 w-full py-2 md:py-0">
              <Search className="text-rose-400 mr-4" size={20} />
              <input
                type="text"
                name="search"
                value={filters.search}
                onChange={handleFilterChange}
                placeholder="Search name, city or job..."
                className="w-full bg-transparent border-none outline-none text-slate-700 font-medium placeholder:text-slate-300"
              />
            </div>

            <div className="hidden md:block w-px h-8 bg-slate-100" />

            {/* Quick Select: Gender */}
            <div className="w-full md:w-48 px-6">
              <select
                name="gender"
                value={filters.gender}
                onChange={handleFilterChange}
                className="w-full bg-transparent outline-none font-bold text-slate-600 cursor-pointer appearance-none py-2"
              >
                <option value="">Any Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Advanced Toggle */}
            <button
              onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
              className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full transition-all duration-300 font-bold
                ${isAdvancedOpen ? 'bg-rose-500 text-white shadow-lg shadow-rose-200' : 'bg-slate-900 text-white hover:bg-rose-500'}`}
            >
              <SlidersHorizontal size={18} />
              {isAdvancedOpen ? "Close Filters" : "Advanced Filters"}
            </button>
          </div>

          {/* --- EXPANDABLE FILTERS --- */}
          <AnimatePresence>
            {isAdvancedOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-4 bg-white rounded-3xl shadow-2xl border border-rose-50 p-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Reuse your existing filter logic here */}
                  {[
                    { name: 'maritalStatus', label: 'Status', options: ["Unmarried", "Married", "Divorced", "Widowed"] },
                    { name: 'ageRange', label: 'Age Group', options: ageRanges.map(a => a.label) },
                    { name: 'education', label: 'Education', options: ["Bachelor’s Degree", "Master’s Degree", "PhD", "Other"] },
                    { name: 'rasi', label: 'Raasi', options: ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo"] },
                  ].map((item) => (
                    <div key={item.name}>
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 block">{item.label}</label>
                      <select name={item.name} value={filters[item.name]} onChange={handleFilterChange} className="w-full p-3 bg-slate-50 rounded-xl outline-none text-sm font-semibold text-slate-700 border border-transparent focus:border-rose-200">
                        <option value="">Any</option>
                        {item.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-slate-50 flex flex-wrap gap-6 items-center justify-between">
                   <div className="flex gap-6">
                      <button onClick={() => setFilters(p => ({...p, online: !p.online}))} className={`flex items-center gap-2 text-xs font-bold transition-colors ${filters.online ? 'text-green-500' : 'text-slate-400'}`}>
                        <div className={`w-3 h-3 rounded-full ${filters.online ? 'bg-green-500 animate-pulse' : 'bg-slate-200'}`} />
                        Online Now
                      </button>
                      <button onClick={() => setFilters(p => ({...p, featured: !p.featured}))} className={`flex items-center gap-2 text-xs font-bold transition-colors ${filters.featured ? 'text-rose-500' : 'text-slate-400'}`}>
                        <div className={`w-3 h-3 rounded-full ${filters.featured ? 'bg-rose-500' : 'bg-slate-200'}`} />
                        Premium
                      </button>
                   </div>
                   <button onClick={resetFilters} className="text-rose-500 text-[10px] font-black tracking-widest uppercase hover:underline">
                      Reset All Filters
                   </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- GRID SECTION (YOUR ORIGINAL DESIGN) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredData.slice(0, displayLimit).map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => navigate(`/profile/${member.id}`)}
                className="relative h-[420px] cursor-pointer overflow-hidden rounded-[2.5rem] group/card shadow-lg hover:shadow-2xl transition-all border border-gray-100 bg-[var(--bg-card)]"
              >
                <img
                  src={member.profileImages?.[0] || "https://imgs.search.brave.com/VneMoX7Cl7XDPD7DguYtmdLDfVBIwtaLV6fbnFx77Jc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzU0LzA5LzI3/LzM2MF9GXzEwNTQw/OTI3ODBfbGlPYllR/bzEwUG4yeE9vNENt/R1laTWVXaXcwUDdD/VDIuanBn"}
                  alt={member.fullName}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                
                {/* Header info on Card */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <div className="px-3 py-1 rounded-md text-[10px] font-black tracking-widest flex items-center gap-1 bg-rose-500 text-white shadow-lg">
                    <ShieldCheck size={12} /> {member.subscription?.plan?.toUpperCase() || "MEMBER"}
                  </div>
                  <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30 text-white">
                    <Heart size={16} fill={userData?.likesSent?.includes(member.id) ? "white" : "none"} />
                  </div>
                </div>

                {/* Footer info on Card */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold group-hover/card:text-rose-400 transition-colors">
                    {member.fullName}, {member.age || "??"}
                  </h3>
                  <p className="text-xs opacity-80 uppercase tracking-widest font-bold text-rose-200">
                    {member.occupation || "Professional"}
                  </p>
                  <p className="text-[10px] opacity-60 mt-1 italic">
                    {member.location?.city || "Location Private"}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-black text-rose-400 opacity-0 group-hover/card:opacity-100 translate-y-2 group-hover/card:translate-y-0 transition-all">
                    VIEW PROFILE <ExternalLink size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- EMPTY STATE --- */}
        {filteredData.length === 0 && (
          <div className="text-center py-40 bg-white rounded-[3rem] border border-dashed border-slate-100 mt-12">
            <Search size={48} className="mx-auto text-slate-200 mb-4" />
            <h3 className="text-lg font-bold text-slate-400 uppercase tracking-tight">No members match your criteria</h3>
            <button onClick={resetFilters} className="mt-4 text-rose-500 font-bold text-xs hover:underline">RESET SEARCH</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FindYourSoulmate;