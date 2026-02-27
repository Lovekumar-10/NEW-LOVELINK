// src/components/CompleteProfile/Step2PersonalAstro.jsx
import React, { useState } from "react";

const Step2PersonalAstro = ({ formData, setFormData, nextStep, prevStep }) => {
  const [fullName, setFullName] = useState(formData.fullName || "");
  const [physicalStatus, setPhysicalStatus] = useState(formData.physicalStatus || "");
  const [gothra, setGothra] = useState(formData.gothra || "");
  const [manglik, setManglik] = useState(formData.manglik || "");
  const [raasi, setRaasi] = useState(formData.raasi || "");

  const handleNext = () => {
    if (!fullName) return alert("Please enter full name");
    if (!physicalStatus) return alert("Please select physical status");
    if (!manglik) return alert("Please select Manglik status");

    setFormData({
      ...formData,
      fullName,
      physicalStatus,
      gothra,
      manglik,
      raasi,
    });

    nextStep();
  };

  return (
    <div className="w-full max-w-md p-4 bg-white rounded shadow">
      {/* Progress Tracker */}
      <div className="mb-4 text-sm font-semibold">
        Step 2 of 5 — 40% Completed
      </div>

      {/* Full Name */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter full name"
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Physical Status */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Physical Status</label>
        <select
          value={physicalStatus}
          onChange={(e) => setPhysicalStatus(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Select</option>
          <option value="normal">Normal</option>
          <option value="differently_abled">Differently-abled</option>
        </select>
      </div>

      {/* Gothra */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Gothra (Optional)</label>
        <input
          type="text"
          value={gothra}
          onChange={(e) => setGothra(e.target.value)}
          placeholder="Enter Gothra"
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Manglik */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Manglik</label>
        <select
          value={manglik}
          onChange={(e) => setManglik(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="dont_know">Don't Know</option>
        </select>
      </div>

      {/* Raasi/Zodiac */}
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Raasi / Zodiac (Optional)</label>
        <input
          type="text"
          value={raasi}
          onChange={(e) => setRaasi(e.target.value)}
          placeholder="Enter Raasi/Zodiac"
          className="w-full border p-2 rounded"
        />
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

export default Step2PersonalAstro;