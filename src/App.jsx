import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/General/Home";
import About from "./pages/General/About";
import Pricing from "./pages/General/Pricing";
import Login from "./pages/General/Login";
import Register from "./pages/General/Register";
import Chat from "./pages/private/Chat";
import Connection from "./pages/private/ConnectionPage";
import PrivacyPolicy from "./pages/General/Privacy.jsx";
import TermsAndConditions from "./pages/General/TermsAndConditions";
import RefundPolicy from "./pages/General/RefundPolicy";
import Disclaimer from "./pages/General/Disclaimer";
import SafetyProtocal from "./pages/General/SafetyProtocal";
import MatrimonyFilter from "./components/connection/MatrimonyFilter";

import StoryViewPage from "./pages/General/StoryViewPage";
import SuccessStory from "./pages/General/SuccessStory";
import PostSuccessStory from "./pages/General/PostSuccessStory";


// pop 
import AlertDisclaimer from "./components/Disclaimer/AlertDisclaimer";

// Profile Nested
import ProfileLayout from "./pages/private/ProfileLayout";
import ProfilePreview from "./components/ProfileStruc/Profile/ProfilePreview";
import ProfileEditForm from "./components/ProfileStruc/Profile/ProfileEditForm";

// Layouts
import PublicLayout from "./components/layouts/PublicLayout";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <AlertDisclaimer/>
      <ScrollToTop />

      <Routes>
        {/* Public Layout */}
        <Route element={<PublicLayout />}>
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />

          <Route path="/successStories" element={<SuccessStory />} />
          <Route path="/successStories/postSuccessStory" element={<PostSuccessStory />} />
          <Route path="/successStories/view/:id" element={<StoryViewPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/MatrimonyFilter" element={<MatrimonyFilter />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/be-safe-online" element={<SafetyProtocal />} />
          <Route path="/disclaimer" element={<Disclaimer />} />

          {/* Private Pages */}
          <Route
            path="/connection"
            element={
              <ProtectedRoute>
                <Connection />
              </ProtectedRoute>
            }
          />

          <Route
            path="/chat/:chatId"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />

          {/* Profile Nested Routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfileLayout />
              </ProtectedRoute>
            }
          >
            <Route path=":id?" element={<ProfilePreview />} />

            {/* Edit Profile (Remains the same) */}
            <Route path="edit" element={<ProfileEditForm />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
