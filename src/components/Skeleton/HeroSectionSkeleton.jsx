// import React from "react";
// import Skeleton from "@mui/material/Skeleton";
// import Box from "@mui/material/Box";

// const HeroSectionSkeleton = () => {
//   return (
//     <Box className="relative min-h-[90vh] flex flex-col lg:flex-row items-center gap-12 py-16 px-20">

//       {/* LEFT CONTENT SKELETON */}
//       <Box className="flex-1 flex flex-col gap-6">
//         {/* Badge Skeleton */}
//         <Skeleton
//           variant="rectangular"
//           width={200}
//           height={24}
//           sx={{  borderRadius: "9999px" }}
//         />

//         {/* Headline Skeleton */}
//         <Skeleton variant="text" width="80%" height={48}  />

//         {/* Paragraph Skeleton */}
//         <Skeleton variant="text" width="90%" height={20} />
//         <Skeleton variant="text" width="70%" height={20}  />

//         {/* Search Bar Skeleton */}
//         <Skeleton
//           variant="rectangular"
//           width="100%"
//           height={60}
//           sx={{  borderRadius: "16px" }}
//         />

//         {/* Badges Skeleton */}
//         <Box className="flex gap-4 mt-4">
//           <Skeleton variant="circular" width={40} height={40} />
//           <Skeleton variant="circular" width={40} height={40}/>
//           <Skeleton variant="text" width={120} height={16} />
//         </Box>
//       </Box>

//       {/* RIGHT CONTENT SKELETON */}
//       <Box className="flex-1 relative flex items-center justify-center">
//         {/* Main Hero Image */}
//         <Skeleton
//           variant="rectangular"
//           width={288}
//           height={384}
//           sx={{ borderRadius: "16px" }}
//         />

//         {/* Floating Card 1 */}
//         <Skeleton
//           variant="rectangular"
//           width={150}
//           height={60}
//           sx={{  borderRadius: "12px", position: "absolute", top: 40, left: 0 }}
//         />

//         {/* Floating Card 2 */}
//         <Skeleton
//           variant="rectangular"
//           width={160}
//           height={70}
//           sx={{  borderRadius: "12px", position: "absolute", bottom: 40, right: 0 }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default HeroSectionSkeleton;















import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const HeroSectionSkeleton = () => {
  return (
    <Box className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between gap-12 py-16 px-6 lg:px-20 bg-gray-50/50">
      
      {/* LEFT CONTENT SKELETON (Text & Search) */}
      <Box className="flex-1 flex flex-col gap-4 max-w-2xl">
        {/* "Soulmate Finder" Badge */}
        <Skeleton
          variant="rectangular"
          width={180}
          height={32}
          sx={{ borderRadius: "20px", mb: 2 }}
        />

        {/* Big Headline: "Starting Your Beautiful Journey" */}
        <Skeleton variant="text" width="90%" height={60} />
        <Skeleton variant="text" width="60%" height={60} sx={{ mt: -2 }} />

        {/* Subtext Paragraph */}
        <Box className="mt-4">
          <Skeleton variant="text" width="95%" height={25} />
          <Skeleton variant="text" width="85%" height={25} />
          <Skeleton variant="text" width="50%" height={25} />
        </Box>

        {/* The "Looking For / Spark Love" Bar */}
        <Box className="mt-8 p-2 border border-gray-100 bg-white rounded-2xl flex items-center justify-between w-full max-w-lg shadow-sm">
          <Box className="pl-4">
             <Skeleton variant="text" width={80} height={20} />
             <Skeleton variant="text" width={120} height={30} />
          </Box>
          <Skeleton 
            variant="rectangular" 
            width={140} 
            height={45} 
            sx={{ borderRadius: "12px" }} 
          />
        </Box>

        {/* Bottom Trust Badges (100% Verified / 500k+ Users) */}
        <Box className="flex gap-8 mt-6">
          <Box className="flex items-center gap-2">
            <Skeleton variant="circular" width={24} height={24} />
            <Skeleton variant="text" width={100} height={20} />
          </Box>
          <Box className="flex items-center gap-2">
            <Skeleton variant="circular" width={24} height={24} />
            <Skeleton variant="text" width={100} height={20} />
          </Box>
        </Box>
      </Box>

      {/* RIGHT CONTENT SKELETON (The Profile Card) */}
      <Box className="flex-1 flex items-center justify-center lg:justify-end">
        <Box className="relative transform rotate-3">
           {/* Main Profile Card Container */}
           <Box className="bg-white p-4 rounded-[40px] shadow-xl border border-gray-100">
              {/* Profile Image Area */}
              <Skeleton
                variant="rectangular"
                width={320}
                height={400}
                sx={{ borderRadius: "30px" }}
              />
              
              {/* Floating Info Label (Name, Match %) */}
              <Box className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[85%] bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex justify-between items-center">
                <Box>
                  <Skeleton variant="text" width={80} height={25} />
                  <Skeleton variant="text" width={110} height={20} />
                </Box>
                <Skeleton variant="circular" width={45} height={45} />
              </Box>
           </Box>

           {/* Decorative Element (matches the red dot/heart in your image) */}
           <Box className="absolute -top-4 -right-4">
              <Skeleton variant="circular" width={20} height={20} sx={{ bgcolor: 'rgba(255,0,0,0.1)' }} />
           </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default HeroSectionSkeleton;