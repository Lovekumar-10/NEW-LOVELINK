import React from "react";
import { Container, Box, Stack, Skeleton, Divider } from "@mui/material";

const StorySkeleton = () => {
  return (
    <Box sx={{ bgcolor: "#FDFCFB", minHeight: "100vh", pb: 10 }}>
      {/* 1. Header Navigation (Matches nav h-16) */}
      <Container
        maxWidth="lg"
        sx={{ height: 64, display: "flex", alignItems: "center", px: 3 }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Skeleton variant="circular" width={16} height={16} />
          <Skeleton
            variant="text"
            width={40}
            height={16}
            sx={{ borderRadius: 1 }}
          />
        </Stack>
      </Container>

      {/* 2. Main Content Area (Matches max-w-4xl) */}
      <Container
        maxWidth="md"
        sx={{
          px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* EXACT Image Area (Matches aspect-16/9 and rounded corners) */}
        <Box sx={{ width: "100%", mb: 3 }}>
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{
              width: "100%",
              height: "auto", // Tell the browser NOT to use a fixed height
              aspectRatio: "16 / 9",
              borderRadius: { xs: "1rem", md: "2.5rem" },
              border: "1px solid #f3f4f6",
              // Support for older browsers that might struggle with aspectRatio
              "@supports not (aspect-ratio: 16 / 9)": {
                paddingTop: "56.25%", // This is the math: (9 / 16) * 100
              },
            }}
          />
        </Box>

        {/* 3. Left-Right Meta Row (Matches mb-10 and px-1/px-4) */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%", mb: 5, px: { xs: 0.5, md: 2 } }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Skeleton variant="circular" width={14} height={14} />
            <Skeleton variant="text" width={80} height={20} />
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Skeleton variant="circular" width={14} height={14} />
            <Skeleton variant="text" width={100} height={20} />
          </Stack>
        </Stack>

        {/* 4. Content Section (Matches text-center max-w-2xl) */}
        <Box
          sx={{ width: "100%", maxWidth: "42rem", textAlign: "center", mb: 8 }}
        >
          {/* Headline (Groom & Bride) */}
          <Skeleton
            variant="text"
            width="85%"
            height={80}
            sx={{ mx: "auto", mb: 2, borderRadius: 2 }}
          />

          {/* Decorative Divider */}
          <Skeleton
            variant="rectangular"
            width={32}
            height={4}
            sx={{ mx: "auto", mb: 5, borderRadius: 2 }}
          />

          {/* Paragraph (Story lines) */}
          <Stack spacing={1} alignItems="center">
            <Skeleton variant="text" width="95%" height={25} />
            <Skeleton variant="text" width="90%" height={25} />
            <Skeleton variant="text" width="60%" height={25} />
          </Stack>
        </Box>

        {/* 5. Bottom Navigation (Matches max-w-xs) */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 320,
            pt: 4,
            borderTop: "1px solid #f3f4f6",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Skeleton
              variant="rectangular"
              width={60}
              height={24}
              sx={{ borderRadius: 1 }}
            />
            <Skeleton variant="circular" width={4} height={4} />
            <Skeleton
              variant="rectangular"
              width={60}
              height={24}
              sx={{ borderRadius: 1 }}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default StorySkeleton;
