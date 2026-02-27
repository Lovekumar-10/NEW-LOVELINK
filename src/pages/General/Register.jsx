

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';
// import { FcGoogle } from 'react-icons/fc'; // Google Original Logo
// import { FaFacebook } from 'react-icons/fa'; // Facebook Logo
// import { useAuth } from '../../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     if (!name || !email || !password) {
//       return alert("Please fill all fields");
//     }

//     try {
//       setLoading(true);
//       await register(name, email, password);
//       navigate("/");
//     } catch (error) {
//       console.log("REGISTER ERROR:", error);
//       alert(error.message || "Registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--bg-main)] font-[var(--ff-primary)]">
//       <motion.div
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-[350px] p-5 rounded-[var(--radius-md)]"
//         style={{ 
//           backgroundColor: 'var(--bg-card)', 
//           boxShadow: 'var(--shadow-card)',
//           border: `1px solid var(--border)` 
//         }}
//       >
//         {/* Header */}
//         <div className="mb-4">
//           <h1 className="text-[var(--fs-h6)] font-[var(--fw-bold)] text-[var(--text-primary)]">
//             Create Account
//           </h1>
//           <p className="text-[var(--fs-caption)] text-[var(--text-secondary)]">
//             Join us to get started.
//           </p>
//         </div>

//         <form className="space-y-3" onSubmit={handleRegister}>
//           {/* Name */}
//           <div className="space-y-1">
//             <label className="text-[var(--fs-caption)] font-[var(--fw-semibold)] text-[var(--text-secondary)] uppercase">
//               Full Name
//             </label>
//             <div className="relative">
//               <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]" />
//               <input
//                 type="text"
//                 placeholder="John Doe"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full pl-9 pr-3 py-1.5 text-[var(--fs-small)] border border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-primary)]"
//               />
//             </div>
//           </div>

//           {/* Email */}
//           <div className="space-y-1">
//             <label className="text-[var(--fs-caption)] font-[var(--fw-semibold)] text-[var(--text-secondary)] uppercase">
//               Email
//             </label>
//             <div className="relative">
//               <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]" />
//               <input
//                 type="email"
//                 placeholder="name@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full pl-9 pr-3 py-1.5 text-[var(--fs-small)] border border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-primary)]"
//               />
//             </div>
//           </div>

//           {/* Password */}
//           <div className="space-y-1">
//             <label className="text-[var(--fs-caption)] font-[var(--fw-semibold)] text-[var(--text-secondary)] uppercase">
//               Password
//             </label>
//             <div className="relative">
//               <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]" />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full pl-9 pr-9 py-1.5 text-[var(--fs-small)] border border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-primary)]"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
//               >
//                 {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
//               </button>
//             </div>
//           </div>

//           {/* Sign Up Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-2 mt-2 bg-[var(--color-primary)]   cursor-pointer text-white text-[var(--fs-small)] font-[var(--fw-medium)] rounded-[var(--radius-sm)] hover:opacity-90"
//           >
//             {loading ? "Creating account..." : "Register"}
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="relative my-4 text-center">
//           <div className="absolute inset-0 flex items-center">
//             <span className="w-full border-t border-[var(--border)]"></span>
//           </div>
//           <div className="relative flex justify-center">
//             <span className="bg-[var(--bg-card)] px-2 text-[var(--fs-caption)] text-[var(--text-light)] uppercase">
//               Or continue with
//             </span>
//           </div>
//         </div>

//         {/* Social Buttons */}
//         <div className="grid grid-cols-2 gap-2">
//           <button className="flex items-center justify-center gap-2 py-2 border    cursor-pointer  border-[var(--border)] rounded-[var(--radius-sm)] text-[var(--fs-small)] text-[var(--text-primary)] hover:bg-[var(--bg-soft)] transition-colors">
//             <FcGoogle size={18} /> Google
//           </button>
//           <button className="flex items-center justify-center gap-2 py-2 border   cursor-pointer  border-[var(--border)] rounded-[var(--radius-sm)] text-[var(--fs-small)] text-[var(--text-primary)] hover:bg-[var(--bg-soft)] transition-colors">
//             <FaFacebook size={18} color="#1877F2" /> Facebook
//           </button>
//         </div>

//         {/* Footer */}
//         <p className="mt-5 text-[var(--fs-small)] text-center text-[var(--text-secondary)]">
//           Already have an account?{" "}
//           <button
//             className="text-[var(--color-primary)] font-[var(--fw-bold)]  cursor-pointer   hover:underline"
//             onClick={() => navigate("/login")}
//           >
//             log in
//           </button>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default Register;






import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, User, Mail, Lock, Phone } from 'lucide-react'; // Added Phone icon
// import { FcGoogle } from 'react-icons/fc';
// import { FaFacebook } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(''); // New phone state
  const [countryCode, setCountryCode] = useState('+91'); // Default country code
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return alert("Please fill all required fields");
    }

    try {
      setLoading(true);
      // You can pass phone/countryCode to your register function if your backend supports it
      await register(name, email, password, { phone: `${countryCode}${phone}` });
      navigate("/");
    } catch (error) {
      console.log("REGISTER ERROR:", error);
      alert(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

 
const countryCodes = [
  { code: '+93', label: 'AF' },
  { code: '+61', label: 'AU' },
  { code: '+880', label: 'BD' },
  { code: '+975', label: 'BT' },
  { code: '+91', label: 'IN' },
  { code: '+92', label: 'PK' },
  { code: '+94', label: 'LK' },
  { code: '+977', label: 'NP' }, 
  { code: '+1',  label: 'US' },
  { code: '+44', label: 'GB' },
  { code: '+971', label: 'UAE' },
];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--bg-main)] font-[var(--ff-primary)]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[350px] p-5 rounded-[var(--radius-md)]"
        style={{ 
          backgroundColor: 'var(--bg-card)', 
          boxShadow: 'var(--shadow-card)',
          border: `1px solid var(--border)` 
        }}
      >
        <div className="mb-4">
          <h1 className="text-[var(--fs-h6)] font-[var(--fw-bold)] text-[var(--text-primary)]">
            Create Account
          </h1>
          <p className="text-[var(--fs-caption)] text-[var(--text-secondary)]">
            Join us to get started.
          </p>
        </div>

        <form className="space-y-3" onSubmit={handleRegister}>
          {/* Name */}
          <div className="space-y-1">
            <label className="text-[var(--fs-caption)] font-[var(--fw-semibold)] text-[var(--text-secondary)] uppercase">
              Full Name
            </label>
            <div className="relative">
              <User size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]" />
              <input
                type="text"
                required
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-[var(--fs-small)] border border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-primary)]"
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-[var(--fs-caption)] font-[var(--fw-semibold)] text-[var(--text-secondary)] uppercase">
              Email
            </label>
            <div className="relative">
              <Mail size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-[var(--fs-small)] border border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-primary)]"
              />
            </div>
          </div>

          {/* Contact (Optional) */}
          <div className="space-y-1">
            <label className="text-[var(--fs-caption)] font-[var(--fw-semibold)] text-[var(--text-secondary)] uppercase">
              Contact (Optional)
            </label>
            <div className="flex gap-1">
              {/* Country Code Selector */}
              <div className="relative w-24 shrink-0">
                <select 
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-full pl-2 pr-1 py-1.5 text-[var(--fs-small)] border border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-primary)] bg-transparent appearance-none"
                >
                  {countryCodes.map(c => (
                    <option key={c.code} value={c.code}>{c.label} {c.code}</option>
                  ))}
                </select>
              </div>

              {/* Phone Input */}
              <div className="relative flex-1">
                <Phone size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]" />
                <input
                  type="tel"
                  placeholder="98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} // Only numbers
                  className="w-full pl-9 pr-3 py-1.5 text-[var(--fs-small)] border border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-primary)]"
                />
              </div>
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-[var(--fs-caption)] font-[var(--fw-semibold)] text-[var(--text-secondary)] uppercase">
              Password
            </label>
            <div className="relative">
              <Lock size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-9 py-1.5 text-[var(--fs-small)] border border-[var(--border)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-primary)]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-light)]"
              >
                {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 mt-2 bg-[var(--color-primary)] cursor-pointer text-white text-[var(--fs-small)] font-[var(--fw-medium)] rounded-[var(--radius-sm)] hover:opacity-90 transition-opacity"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <div className="relative my-4 text-center">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-[var(--border)]"></span>
          </div>
          {/* <div className="relative flex justify-center">
            <span className="bg-[var(--bg-card)] px-2 text-[var(--fs-caption)] text-[var(--text-light)] uppercase">
              Or continue with
            </span>
          </div> */}
        </div>

        {/* <div className="grid grid-cols-2 gap-2">
          <button className="flex items-center justify-center gap-2 py-2 border cursor-pointer border-[var(--border)] rounded-[var(--radius-sm)] text-[var(--fs-small)] text-[var(--text-primary)] hover:bg-[var(--bg-soft)] transition-colors">
            <FcGoogle size={18} /> Google
          </button>
          <button className="flex items-center justify-center gap-2 py-2 border cursor-pointer border-[var(--border)] rounded-[var(--radius-sm)] text-[var(--fs-small)] text-[var(--text-primary)] hover:bg-[var(--bg-soft)] transition-colors">
            <FaFacebook size={18} color="#1877F2" /> Facebook
          </button>
        </div> */}

        <p className="mt-5 text-[var(--fs-small)] text-center text-[var(--text-secondary)]">
          Already have an account?{" "}
          <button
            className="text-[var(--color-primary)] font-[var(--fw-bold)] cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            log in
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;