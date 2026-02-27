
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, Check } from "lucide-react";

// Only functional, high-utility languages for India
const languages = [
  { name: "English", code: "en" },
  { name: "Hindi (हिन्दी)", code: "hi" },
  { name: "Bengali (বাংলা)", code: "bn" },
  { name: "Telugu (తెలుగు)", code: "te" },
  { name: "Marathi (मराठी)", code: "mr" },
  { name: "Tamil (தமிழ்)", code: "ta" },
  { name: "Gujarati (ગુજરાતી)", code: "gu" },
  { name: "Urdu (اردو)", code: "ur" },
  { name: "Kannada (ಕನ್ನಡ)", code: "kn" },
  { name: "Malayalam (മലയാളം)", code: "ml" },
  { name: "Punjabi (ਪੰਜਾਬੀ)", code: "pa" },
  { name: "Odia (ଓଡ଼ିଆ)", code: "or" },
];

const GoogleTranslate = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize state from localStorage if it exists, otherwise 'EN'
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem("preferredLanguage")?.toUpperCase() || "EN";
  });
  const dropdownRef = useRef(null);

  useEffect(() => {
    // 1. Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_hidden",
      );

      // Check if there is a saved language and apply it after init
      const savedLang = localStorage.getItem("preferredLanguage");
      if (savedLang && savedLang !== "en") {
        setTimeout(() => {
          applyTranslation(savedLang);
        }, 100); // Small delay to ensure Google's select is ready
      }
    };

    // 2. Inject Script
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // 3. THE FIX: MutationObserver to delete Google's banner instantly
    const observer = new MutationObserver(() => {
      const banner = document.querySelector(".goog-te-banner-frame");
      if (banner) {
        banner.remove(); // Physically delete it from the DOM
        document.body.style.top = "0px";
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  const handleTranslate = (code) => {
    const googleSelect = document.querySelector(".goog-te-combo");
    if (googleSelect) {
      googleSelect.value = code;
      googleSelect.dispatchEvent(new Event("change"));
      setCurrentLang(code.toUpperCase().substring(0, 2));
      setIsOpen(false);
    }
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div id="google_translate_hidden" className="hidden"></div>

      {/* Modern Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 cursor-pointer py-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-md)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300"
      >
        <Globe size={18} className="text-[var(--color-primary)]" />
        <span className="font-[var(--ff-secondary)] font-[var(--fw-medium)] cursor-pointer   text-[var(--text-primary)] uppercase tracking-wider">
          {currentLang}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={14} className="text-[var(--text-secondary)]" />
        </motion.div>
      </motion.button>

      {/* Clean Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="absolute right-0 mt-2 w-52 max-h-72 overflow-y-auto bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-hover)] z-[9999] py-1"
          >
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleTranslate(lang.code)}
                  className="w-full flex items-center justify-between cursor-pointer  px-4 py-2.5 text-[14px] font-[var(--ff-secondary)] text-[var(--text-primary)] hover:bg-[var(--color-primary-2)] hover:text-[var(--color-primary)] transition-colors text-left"
                >
                  <span
                    className={
                      currentLang === lang.code.toUpperCase()
                        ? "font-[var(--fw-bold)]"
                        : ""
                    }
                  >
                    {lang.name}
                  </span>
                  {currentLang === lang.code.toUpperCase() && (
                    <Check size={14} />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

    </div>
  );
};

export default GoogleTranslate;



