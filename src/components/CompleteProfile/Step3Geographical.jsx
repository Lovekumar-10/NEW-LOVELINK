// src/components/CompleteProfile/Step3Geographical.jsx
import React, { useState, useEffect } from "react";

const countries = ["India", "USA", "Canada"]; // can expand later
const statesByCountry = {
  India: ["Delhi", "Maharashtra", "Karnataka"],
  USA: ["California", "New York", "Texas"],
  Canada: ["Ontario", "Quebec", "British Columbia"],
};
const citiesByState = {
  Delhi: ["New Delhi", "Dwarka", "Rohini"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Karnataka: ["Bangalore", "Mysore", "Mangalore"],
  California: ["Los Angeles", "San Francisco", "San Diego"],
  NewYork: ["New York City", "Buffalo", "Albany"],
  Texas: ["Houston", "Dallas", "Austin"],
  Ontario: ["Toronto", "Ottawa", "Hamilton"],
  Quebec: ["Montreal", "Quebec City", "Laval"],
  BritishColumbia: ["Vancouver", "Victoria", "Kelowna"],
};

const Step3Geographical = ({ formData, setFormData, nextStep, prevStep }) => {
  const [country, setCountry] = useState(formData.currentCountry || "");
  const [state, setState] = useState(formData.state || "");
  const [city, setCity] = useState(formData.city || "");
  const [nativePlace, setNativePlace] = useState(formData.nativePlace || "");

  // Reset state & city if country changes
  useEffect(() => {
    setState("");
    setCity("");
  }, [country]);

  // Reset city if state changes
  useEffect(() => {
    setCity("");
  }, [state]);

  const handleNext = () => {
    if (!country || !state || !city) {
      alert("Please fill all mandatory fields");
      return;
    }

    setFormData({
      ...formData,
      currentCountry: country,
      state,
      city,
      nativePlace,
    });

    nextStep();
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded shadow-md space-y-4">
      <h2 className="text-xl font-bold mb-4">Step 3: Geographical Roots</h2>

      {/* Country */}
      <div>
        <label className="block font-semibold mb-1">Current Country*</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* State */}
      <div>
        <label className="block font-semibold mb-1">State*</label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          disabled={!country}
          className="w-full border p-2 rounded"
        >
          <option value="">Select State</option>
          {country && statesByCountry[country].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* City */}
      <div>
        <label className="block font-semibold mb-1">City*</label>
        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          disabled={!state}
          className="w-full border p-2 rounded"
        >
          <option value="">Select City</option>
          {state && citiesByState[state].map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Native Place */}
      <div>
        <label className="block font-semibold mb-1">Native Place (Optional)</label>
        <input
          type="text"
          value={nativePlace}
          onChange={(e) => setNativePlace(e.target.value)}
          placeholder="Your ancestral/native place"
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-4">
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

export default Step3Geographical;