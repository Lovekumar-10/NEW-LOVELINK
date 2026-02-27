// // src/pages/General/StoryViewPage.jsx
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate, Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowLeft, ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
// import { useAuth } from "../../context/AuthContext";

// const StoryViewPage = () => {
//   const { id, fetchSuccessStories } = useAuth();
//   const navigate = useNavigate();

//   const [story, setStory] = useState(null);
//   const [imageIndex, setImageIndex] = useState(0);

//   // Fetch story by ID
//   useEffect(() => {
//     const unsubscribe = fetchSuccessStories((stories) => {
//       const foundStory = stories.find((s) => s.id === id || s.id === parseInt(id));
//       if (foundStory) {
//         setStory(foundStory);
//         setImageIndex(0); // reset image index when story changes
//         window.scrollTo({ top: 0, behavior: "smooth" });
//       } else {
//         navigate("/successStories");
//       }
//     });

//     return () => {
//       unsubscribe(); // stop listening on unmount
//     };
//   }, [id, fetchSuccessStories, navigate]);

//   if (!story) return null;

//   const totalImages = story.images?.length || 0;

//   const nextImage = () => {
//     if (totalImages === 0) return;
//     setImageIndex((prev) => (prev + 1) % totalImages);
//   };

//   const prevImage = () => {
//     if (totalImages === 0) return;
//     setImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
//   };

//   return (
//     <div className="min-h-screen bg-[#FDFCFB] text-gray-900 pb-20">

//       {/* 1. TOP NAV - BACK */}
//       <nav className="w-full h-20 flex items-center px-2 md:px-6 max-w-5xl mx-auto">
//         <Link to="/successStories" className="flex items-center gap-2 text-gray-400 hover:text-[#FF4D6D] transition-all">
//           <ArrowLeft size={18} />
//           <span className="text-xs font-bold uppercase tracking-widest">Back to Stories</span>
//         </Link>
//       </nav>

//       {/* 2. MAIN CONTAINER */}
//       <main className="max-w-4xl mx-auto py-3.5 px-2 md:px-6 flex flex-col items-center text-center">

//         {/* 3. IMAGE SLIDER */}
//         <motion.div
//           key={`img-${story.id}-${imageIndex}`}
//           initial={{ opacity: 0, scale: 0.98 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="w-full aspect-[9/5] overflow-hidden rounded-3xl shadow-xl mb-10 border-5 border-white ring-1 ring-gray-100 relative"
//         >
//           {totalImages > 0 ? (
//             <img src={story.images[imageIndex]} className="w-full h-full object-cover" alt="Couple" />
//           ) : (
//             <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
//               No Image
//             </div>
//           )}

//           {totalImages > 1 && (
//             <>
//               <button
//                 onClick={prevImage}
//                 className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white shadow-md transition"
//               >
//                 <ChevronLeft size={20} />
//               </button>
//               <button
//                 onClick={nextImage}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white shadow-md transition"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </>
//           )}
//         </motion.div>

//         {/* 4. METADATA */}
//         <div className="flex flex-wrap items-center justify-center gap-5 text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">
//           <div className="flex items-center gap-1.5">
//             <Calendar size={14} className="text-[#FF4D6D]" />{" "}
//             {story.marriageDate ? new Date(story.marriageDate).toLocaleDateString() : "Date not specified"}
//           </div>
//           <div className="flex items-center gap-1.5">
//             <MapPin size={14} className="text-[#FF4D6D]" /> {story.address || "Location not specified"}
//           </div>
//         </div>

//         {/* 5. TITLE & STORY */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`content-${story.id}`}
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             className="w-full"
//           >
//             <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-5 leading-tight tracking-tight">
//               {story.groomName} <span className="text-[#FF4D6D] italic">&</span> {story.brideName}
//             </h1>

//             <div className="w-20 h-1 bg-[#FF4D6D] rounded-full mx-auto mb-12"></div>

//             <article className="max-w-2xl mx-auto">
//               <p className="text-xl md:text-2xl text-gray-600 leading-[1.8] italic font-serif mb-12">
//                 "{story.story || "No story available"}"
//               </p>

//               <div className="flex justify-center items-center gap-4 mb-5 text-gray-200">
//                 <div className="h-[1px] w-12 bg-gray-200"></div>
//                 <span className="text-xs font-bold tracking-[0.3em] text-gray-300">END</span>
//                 <div className="h-[1px] w-12 bg-gray-200"></div>
//               </div>
//             </article>
//           </motion.div>
//         </AnimatePresence>

//       </main>
//     </div>
//   );
// };

// export default StoryViewPage;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Heart,
  Clock,
} from "lucide-react";
import StorySkeleton from "../../components/Skeleton/StorySkeleton";
import { useAuth } from "../../context/AuthContext";

const StoryViewPage = () => {
  const { id } = useParams();
  const { fetchSuccessStories } = useAuth();
  const navigate = useNavigate();

  const [stories, setStories] = useState([]);
  const [story, setStory] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = fetchSuccessStories((data) => {
      setStories(data);
      setLoading(false);
      const foundStory = data.find((s) => s.id === id || s.id === parseInt(id));
      if (foundStory) {
        setStory(foundStory);
        setImageIndex(0);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/successStories");
      }
    });
    return () => unsubscribe();
  }, [id, fetchSuccessStories, navigate]);

  if (loading)
    return (
      // <div className="min-h-screen flex items-center justify-center bg-[#FDFCFB]">
      //   <div className="w-6 h-6 border-2 border-[#FF4D6D] border-t-transparent rounded-full animate-spin"></div>
      // </div>
      <StorySkeleton />
    );

  if (!story) return null;

  const totalImages = story.images?.length || 0;
  const currentIndex = stories.findIndex((s) => s.id === story.id);

  const formatShortDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = timestamp.seconds
      ? new Date(timestamp.seconds * 1000)
      : new Date(timestamp);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const goToNextStory = () => {
    const nextIdx = (currentIndex + 1) % stories.length;
    navigate(`/successStories/view/${stories[nextIdx].id}`);
  };

  const goToPrevStory = () => {
    const prevIdx = (currentIndex - 1 + stories.length) % stories.length;
    navigate(`/successStories/view/${stories[prevIdx].id}`);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-gray-800 pb-20">
      {/* Header */}
      <nav className="max-w-5xl mx-auto h-16 flex items-center px-6">
        <Link
          to="/successStories"
          className="group flex items-center gap-2 text-gray-400 hover:text-[#FF4D6D] transition-all"
        >
          <ArrowLeft size={16} />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">
            Back
          </span>
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-4 flex flex-col items-center">
        {/* Responsive Image Container */}
        <div className="w-full relative group mb-6">
          <motion.div
            key={story.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            /* Adaptive corners: rounded-2xl on mobile, rounded-[2.5rem] on desktop */
            className="w-full aspect-[16/9] rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 bg-white relative"
          >
            {totalImages > 0 ? (
              <img
                src={story.images[imageIndex]}
                className="w-full h-full object-cover"
                alt="Story"
              />
            ) : (
              <div className="w-full h-full bg-gray-50 flex items-center justify-center text-gray-300">
                No Image
              </div>
            )}

            {/* Minimal Image Controls */}
            {totalImages > 1 && (
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between">
                <button
                  onClick={() =>
                    setImageIndex((p) => (p - 1 + totalImages) % totalImages)
                  }
                  className="bg-white/80 p-2 rounded-full shadow-sm hover:bg-white transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setImageIndex((p) => (p + 1) % totalImages)}
                  className="bg-white/80 p-2 rounded-full shadow-sm hover:bg-white transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* The Clean Left-Right Meta Row */}
        <div className="w-full flex justify-between items-center mb-10 px-1 md:px-4">
          <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            <Clock size={14} className="text-gray-300" />
            <span>Post: {formatShortDate(story.createdAt)}</span>
          </div>
          <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold text-[#FF4D6D] uppercase tracking-widest">
            <Heart size={14} fill="#FF4D6D" fillOpacity={0.1} />
            <span>Married: {formatShortDate(story.marriageDate)}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center max-w-2xl mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-none tracking-tighter">
            {story.groomName}{" "}
            <span className="text-[#FF4D6D] font-light italic">&</span>{" "}
            {story.brideName}
          </h1>

          <div className="w-8 h-1 bg-[#FF4D6D]/10 rounded-full mx-auto mb-10"></div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-serif italic px-2 md:px-0">
            "{story.story || "A beautiful journey of love and togetherness."}"
          </p>
        </div>

        {/* Bottom Navigation */}

        <footer className="flex w-full max-w-sm items-center justify-between border-t border-gray-100/80 pt-10">
          {/* PREV BUTTON */}
          <button
            onClick={goToPrevStory}
            className="group flex cursor-pointer items-center gap-3 rounded-xl border border-gray-50 bg-white px-5 py-2.5 shadow-sm transition-all hover:border-[#FF4D6D]/20 hover:bg-gray-50/50 hover:shadow-md active:scale-95"
          >
            <ChevronLeft
              size={16}
              className="text-gray-400 group-hover:text-[#FF4D6D] transition-colors"
            />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-gray-500 group-hover:text-gray-900 transition-colors">
              Prev
            </span>
          </button>

          {/* MINIMAL DIVIDER */}
          <div className="h-8 w-[1px] bg-gray-100"></div>

          {/* NEXT BUTTON */}
          <button
            onClick={goToNextStory}
            className="group flex cursor-pointer items-center gap-3 rounded-xl border border-gray-50 bg-white px-5 py-2.5 shadow-sm transition-all hover:border-[#FF4D6D]/20 hover:bg-gray-50/50 hover:shadow-md active:scale-95"
          >
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-gray-500 group-hover:text-gray-900 transition-colors">
              Next
            </span>
            <ChevronRight
              size={16}
              className="text-gray-400 group-hover:text-[#FF4D6D] transition-colors"
            />
          </button>
        </footer>
      </main>
    </div>
  );
};

export default StoryViewPage;
