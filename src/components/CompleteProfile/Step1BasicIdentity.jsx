// src/components/CompleteProfile/Step1BasicIdentity.jsx
import React, { useState, useEffect } from "react";

const Step1BasicIdentity = ({ formData, setFormData, nextStep, prevStep }) => {
  const [accountFor, setAccountFor] = useState(formData.accountFor || "");
  const [gender, setGender] = useState(formData.gender || "");
  const [dob, setDob] = useState(formData.dob || "");
  const [maritalStatus, setMaritalStatus] = useState(formData.maritalStatus || "");

  // Age validation for DOB
  const validateAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18;
  };

  // Effect: auto-set gender for parent-created accounts
  useEffect(() => {
    if (accountFor === "son" || accountFor === "brother") setGender("male");
    else if (accountFor === "daughter" || accountFor === "sister") setGender("female");
  }, [accountFor]);

  const handleNext = () => {
    if (!accountFor) return alert("Please select who this profile is for");
    if (!gender) return alert("Please select gender");
    if (!dob) return alert("Please select date of birth");
    if (!validateAge(dob)) return alert("You must be at least 18 years old");
    if (!maritalStatus) return alert("Please select marital status");

    // Save to parent state
    setFormData({
      ...formData,
      accountFor,
      gender,
      dob,
      maritalStatus,
    });
    nextStep();
  };

  return (
    <div className="w-full max-w-md p-4 bg-white rounded shadow">
      {/* Progress Tracker */}
      <div className="mb-4 text-sm font-semibold">
        Step 1 of 5 — 20% Completed
      </div>

      {/* Account For */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">This profile is created for:</label>
        <select
          value={accountFor}
          onChange={(e) => setAccountFor(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Select</option>
          <option value="self">Self</option>
          <option value="son">Son</option>
          <option value="daughter">Daughter</option>
          <option value="brother">Brother</option>
          <option value="sister">Sister</option>
        </select>
      </div>

      {/* Gender */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          disabled={accountFor === "son" || accountFor === "brother" || accountFor === "daughter" || accountFor === "sister"}
          className="w-full border p-2 rounded bg-white disabled:bg-gray-100"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* Date of Birth */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Marital Status */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Marital Status</label>
        <select
          value={maritalStatus}
          onChange={(e) => setMaritalStatus(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Status</option>
          <option value="never_married">Never Married</option>
          <option value="divorced">Divorced</option>
          <option value="widowed">Widowed</option>
        </select>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step1BasicIdentity;