

// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// import { useAuth } from "../../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// const PostSuccessStory = () => {
//   const { user, postSuccessStory } = useAuth();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     brideName: "",
//     groomName: "",
//     email: "",
//     engagementDate: "",
//     marriageDate: "",
//     address: "",
//     country: "",
//     telephone: "",
//     story: "",
//   });

//   const [images, setImages] = useState([]);
//   const [status, setStatus] = useState({ loading: false, error: null });
//   const fileInputRef = useRef(null);
//   const today = new Date().toISOString().split("T")[0];

//   useEffect(() => {
//     if (!user) {
//       alert("Please login to post your success story ❤️");
//       navigate("/login");
//     }
//   }, [user, navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (status.error) setStatus((prev) => ({ ...prev, error: null }));
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (images.length + files.length > 5) {
//       setStatus({ error: "Maximum 5 images allowed ❤️" });
//       return;
//     }
//     const newImages = files.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }));
//     setImages((prev) => [...prev, ...newImages]);
//   };

//   const removeImage = (index) => {
//     const updated = [...images];
//     URL.revokeObjectURL(updated[index].preview);
//     updated.splice(index, 1);
//     setImages(updated);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ loading: true, error: null });

//     try {
//       // Send images array, can be empty
//       const result = await postSuccessStory(formData, images);

//       if (result.success) {
//         setStatus({ loading: false, error: null });
//         alert("Story Posted Successfully ❤️");
//         navigate("/successStories");
//       } else {
//         setStatus({ loading: false, error: result.error });
//       }
//     } catch (error) {
//       setStatus({ loading: false, error: error.message });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[var(--bg-main)] py-12 px-4 font-[var(--ff-primary)]">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         className="max-w-3xl mx-auto bg-[var(--bg-card)] shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[var(--radius-lg)] border border-[var(--border)] overflow-hidden"
//       >
//         {/* Header */}
//         <div className="bg-gradient-to-r from-[var(--color-primary)] to-[#ff6b6b] p-8 text-center text-white">
//           <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
//             Share Your Success Story
//           </h2>
//           <p className="opacity-90 text-sm mt-2">
//             Inspire others to find their best match!
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6">
//           {/* Names */}
//           <div className="grid md:grid-cols-2 gap-6">
//             <InputField
//               label="Bride Name (Female) *"
//               name="brideName"
//               value={formData.brideName}
//               onChange={handleChange}
//               placeholder="e.g. Anjali Sharma"
//             />
//             <InputField
//               label="Groom Name (Male) *"
//               name="groomName"
//               value={formData.groomName}
//               onChange={handleChange}
//               placeholder="e.g. Love Kumar"
//             />
//           </div>

//           {/* Contact */}
//           <div className="grid md:grid-cols-2 gap-6">
//             <InputField
//               label="E-mail *"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="yourname@example.com"
//             />
//             <InputField
//               label="Telephone *"
//               type="tel"
//               name="telephone"
//               value={formData.telephone}
//               onChange={handleChange}
//               placeholder="+91 XXXXX XXXXX"
//             />
//           </div>

//           {/* Dates */}
//           <div className="grid md:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl">
//             <InputField
//               label="Engagement Date"
//               type="date"
//               name="engagementDate"
//               value={formData.engagementDate}
//               onChange={handleChange}
//               max={today}
//             />
//             <InputField
//               label="Marriage Date *"
//               type="date"
//               name="marriageDate"
//               value={formData.marriageDate}
//               onChange={handleChange}
//               max={today}
//             />
//           </div>

//           {/* Location */}
//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="flex flex-col gap-1">
//               <label className="text-xs font-bold text-[var(--text-secondary)] uppercase ml-1">
//                 Country Living In *
//               </label>
//               <select
//                 name="country"
//                 value={formData.country}
//                 onChange={handleChange}
//                 required
//                 className="form-input-custom appearance-none"
//               >
//                 <option value="">-Select Country-</option>
//                 <option value="India">India</option>
//                 <option value="USA">USA</option>
//                 <option value="UK">UK</option>
//               </select>
//             </div>
//             <InputField
//               label="Full Address *"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               placeholder="City, State, Pincode"
//             />
//           </div>

//           {/* Story */}
//           <div className="flex flex-col gap-1">
//             <label className="text-xs font-bold text-[var(--text-secondary)] uppercase ml-1">
//               Your Success Story *
//             </label>
//             <textarea
//               name="story"
//               rows="5"
//               value={formData.story}
//               onChange={handleChange}
//               required
//               className="form-input-custom resize-none p-4"
//               placeholder="Tell us about the first time you spoke, the meeting, and your journey..."
//             />
//           </div>

//           {/* Image Upload - OPTIONAL */}
//           <div className="pt-4 border-t border-[var(--border)]">
//             <label className="text-xs font-bold text-[var(--text-secondary)] uppercase mb-3 block">
//               Upload Photos (Optional, Max 5)
//             </label>
//             <div className="flex flex-wrap gap-4">
//               <AnimatePresence>
//                 {images.map((img, index) => (
//                   <motion.div
//                     key={img.preview}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.5 }}
//                     className="relative w-20 h-20 rounded-lg overflow-hidden shadow-inner border border-[var(--border)]"
//                   >
//                     <img
//                       src={img.preview}
//                       className="w-full h-full object-cover"
//                       alt="Preview"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => removeImage(index)}
//                       className="absolute top-0 right-0 bg-red-600 text-white rounded-bl-lg p-1"
//                     >
//                       <svg
//                         className="w-3 h-3"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth="2"
//                           d="M6 18L18 6M6 6l12 12"
//                         />
//                       </svg>
//                     </button>
//                   </motion.div>
//                 ))}
//               </AnimatePresence>

//               {images.length < 5 && (
//                 <button
//                   type="button"
//                   onClick={() => fileInputRef.current.click()}
//                   className="w-20 h-20 border-2 border-dashed border-[var(--border)] rounded-lg flex flex-col items-center justify-center text-[var(--text-light)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M12 4v16m8-8H4"
//                     />
//                   </svg>
//                   <span className="text-[8px] font-bold mt-1">ADD</span>
//                 </button>
//               )}
//             </div>
//             <input
//               type="file"
//               ref={fileInputRef}
//               onChange={handleImageChange}
//               multiple
//               accept="image/*"
//               className="hidden"
//             />
//           </div>

//           {/* Status & Submit */}
//           {status.error && (
//             <p className="text-red-500 text-xs text-center font-bold italic">
//               {status.error}
//             </p>
//           )}

//           <motion.button
//             whileHover={{ scale: 1.01 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={status.loading}
//             className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg cursor-pointer transition-all
//               ${status.loading ? "bg-gray-400" : "bg-[var(--color-primary)] hover:shadow-[0_10px_20px_rgba(254,59,59,0.2)]"}`}
//           >
//             {status.loading ? "Sharing Story..." : "Submit Our Journey ❤️"}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// };

// // Helper
// const InputField = ({ label, ...props }) => (
//   <div className="flex flex-col gap-1">
//     <label className="text-xs font-bold text-[var(--text-secondary)] uppercase ml-1 tracking-wider">
//       {label}
//     </label>
//     <input {...props} required className="form-input-custom" />
//   </div>
// );

// export default PostSuccessStory;

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

// Production Storage Key
const DRAFT_STORAGE_KEY = "success_story_form_draft";

const PostSuccessStory = () => {
  const { user, postSuccessStory } = useAuth();
  const navigate = useNavigate();

  // 1. Initialize state from localStorage text data
  const [formData, setFormData] = useState(() => {
    const savedText = localStorage.getItem(DRAFT_STORAGE_KEY);
    return savedText ? JSON.parse(savedText) : {
      brideName: "",
      groomName: "",
      email: "",
      engagementDate: "",
      marriageDate: "",
      address: "",
      country: "",
      telephone: "",
      story: "",
    };
  });

  const [images, setImages] = useState([]);
  const [status, setStatus] = useState({ loading: false, error: null });
  const fileInputRef = useRef(null);
  const today = new Date().toISOString().split("T")[0];

  // 2. Auto-save text data whenever formData changes
  useEffect(() => {
    localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (!user) {
      alert("Please login to post your success story ❤️");
      navigate("/login");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.error) setStatus((prev) => ({ ...prev, error: null }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (images.length + files.length > 5) {
      setStatus({ error: "Maximum 5 images allowed ❤️" });
      return;
    }
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...newImages]);
  };

  const removeImage = (index) => {
    const updated = [...images];
    URL.revokeObjectURL(updated[index].preview);
    updated.splice(index, 1);
    setImages(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null });

    try {
      const result = await postSuccessStory(formData, images);

      if (result.success) {
        // 3. Purge the text storage only on successful submission
        localStorage.removeItem(DRAFT_STORAGE_KEY);
        
        setStatus({ loading: false, error: null });
        alert("Story Posted Successfully ❤️");
        navigate("/successStories");
      } else {
        setStatus({ loading: false, error: result.error });
      }
    } catch (error) {
      setStatus({ loading: false, error: error.message });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] py-12 px-4 font-[var(--ff-primary)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl mx-auto bg-[var(--bg-card)] shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[var(--radius-lg)] border border-[var(--border)] overflow-hidden"
      >
        <div className="bg-gradient-to-r from-[var(--color-primary)] to-[#ff6b6b] p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight">
            Share Your Success Story
          </h2>
          <p className="opacity-90 text-sm mt-2">
            Inspire others to find their best match!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Bride Name (Female) *"
              name="brideName"
              value={formData.brideName}
              onChange={handleChange}
              placeholder="e.g. Anjali Sharma"
            />
            <InputField
              label="Groom Name (Male) *"
              name="groomName"
              value={formData.groomName}
              onChange={handleChange}
              placeholder="e.g. Love Kumar"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="E-mail *"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="yourname@example.com"
            />
            <InputField
              label="Telephone *"
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 bg-slate-50 p-4 rounded-xl">
            <InputField
              label="Engagement Date"
              type="date"
              name="engagementDate"
              value={formData.engagementDate}
              onChange={handleChange}
              max={today}
            />
            <InputField
              label="Marriage Date *"
              type="date"
              name="marriageDate"
              value={formData.marriageDate}
              onChange={handleChange}
              max={today}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-[var(--text-secondary)] uppercase ml-1">
                Country Living In *
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="form-input-custom appearance-none"
              >
                <option value="">-Select Country-</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <InputField
              label="Full Address *"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="City, State, Pincode"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-[var(--text-secondary)] uppercase ml-1">
              Your Success Story *
            </label>
            <textarea
              name="story"
              rows="5"
              value={formData.story}
              onChange={handleChange}
              required
              className="form-input-custom resize-none p-4"
              placeholder="Tell us about the first time you spoke..."
            />
          </div>

          <div className="pt-4 border-t border-[var(--border)]">
            <label className="text-xs font-bold text-[var(--text-secondary)] uppercase mb-3 block">
              Upload Photos (Optional, Max 5)
            </label>
            <div className="flex flex-wrap gap-4">
              <AnimatePresence>
                {images.map((img, index) => (
                  <motion.div
                    key={img.preview}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    className="relative w-20 h-20 rounded-lg overflow-hidden shadow-inner border border-[var(--border)]"
                  >
                    <img src={img.preview} className="w-full h-full object-cover" alt="Preview" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-0 right-0 bg-red-600 text-white rounded-bl-lg p-1"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>

              {images.length < 5 && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="w-20 h-20 border-2 border-dashed border-[var(--border)] rounded-lg flex flex-col items-center justify-center text-[var(--text-light)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-[8px] font-bold mt-1">ADD</span>
                </button>
              )}
            </div>
            <input type="file" ref={fileInputRef} onChange={handleImageChange} multiple accept="image/*" className="hidden" />
          </div>

          {status.error && (
            <p className="text-red-500 text-xs text-center font-bold italic">{status.error}</p>
          )}

          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={status.loading}
            className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg cursor-pointer transition-all
              ${status.loading ? "bg-gray-400" : "bg-[var(--color-primary)] hover:shadow-[0_10px_20px_rgba(254,59,59,0.2)]"}`}
          >
            {status.loading ? "Sharing Story..." : "Submit Our Journey ❤️"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

const InputField = ({ label, ...props }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-bold text-[var(--text-secondary)] uppercase ml-1 tracking-wider">
      {label}
    </label>
    <input {...props} required className="form-input-custom" />
  </div>
);

export default PostSuccessStory;