// import React, { useState } from "react";

// const CompleteProfile = () => {
//   const [step, setStep] = useState(1);
//   const [gender, setGender] = useState("");
//   const [dob, setDob] = useState("");
//   const [maritalStatus, setMaritalStatus] = useState("");
//   const [accountFor, setAccountFor] = useState("");
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center p-6">
//       <h1 className="text-2xl font-bold mb-6">Complete Your Profile</h1>

//       {/* STEP 1 */}
//       {step === 1 && (
//         <div className="w-full max-w-md">
//           <label className="block mb-2 font-semibold">
//             This profile is created for:
//           </label>

//           <select
//             value={accountFor}
//             onChange={(e) => setAccountFor(e.target.value)}
//             className="w-full border p-2 rounded mb-4"
//           >
//             <option value="">Select</option>
//             <option value="self">Self</option>
//             <option value="son">Son</option>
//             <option value="daughter">Daughter</option>
//             <option value="brother">Brother</option>
//             <option value="sister">Sister</option>
//           </select>
//         </div>
//       )}
//       {/* STEP 2 */}
//       {step === 2 && (
//         <div className="w-full max-w-md space-y-4">
//           {/* Gender */}
//           <div>
//             <label className="block mb-1 font-semibold">Gender</label>
//             <select
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               className="w-full border p-2 rounded"
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//             </select>
//           </div>

//           {/* Date of Birth */}
//           <div>
//             <label className="block mb-1 font-semibold">Date of Birth</label>
//             <input
//               type="date"
//               value={dob}
//               onChange={(e) => setDob(e.target.value)}
//               className="w-full border p-2 rounded"
//             />
//           </div>

//           {/* Marital Status */}
//           <div>
//             <label className="block mb-1 font-semibold">Marital Status</label>
//             <select
//               value={maritalStatus}
//               onChange={(e) => setMaritalStatus(e.target.value)}
//               className="w-full border p-2 rounded"
//             >
//               <option value="">Select Status</option>
//               <option value="never_married">Never Married</option>
//               <option value="divorced">Divorced</option>
//               <option value="widowed">Widowed</option>
//             </select>
//           </div>
//         </div>
//       )}

//       <p className="mb-4">Current Step: {step}</p>

//       <div className="flex gap-4">
//         <button
//           onClick={() => setStep(step - 1)}
//           disabled={step === 1}
//           className="px-4 py-2 bg-gray-300 rounded"
//         >
//           Back
//         </button>

//         <button
//           onClick={() => {
//             // Step 1 validation
//             if (step === 1 && !accountFor) {
//               alert("Please select who this profile is for");
//               return;
//             }

//             // Step 2 validation
//             if (step === 2) {
//               if (!gender || !dob || !maritalStatus) {
//                 alert("Please fill all personal details");
//                 return;
//               }
//             }

//             setStep(step + 1);
//           }}
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CompleteProfile;



import React, { useState } from "react";
import Step1BasicIdentity from "../../components/CompleteProfile/Step1BasicIdentity";
import Step2PersonalAstro from "../../components/CompleteProfile/Step2PersonalAstro";
import Step3Geographical from "../../components/CompleteProfile/Step3Geographical";
import Step4LifestyleFamily from "../../components/CompleteProfile/Step4LifestyleFamily";
import Step5ContactPhotosPreferences from "../../components/CompleteProfile/Step5ContactPhotosPreferences";

const CompleteProfile = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({}); // stores all steps' data

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-50">
      {step === 1 && (
        <Step1BasicIdentity
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 2 && (
        <Step2PersonalAstro
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <Step3Geographical
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 4 && (
        <Step4LifestyleFamily
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 5 && (
        <Step5ContactPhotosPreferences
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep} // could show final summary or confirmation
          prevStep={prevStep}
        />
      )}
    </div>
  );
};

export default CompleteProfile;