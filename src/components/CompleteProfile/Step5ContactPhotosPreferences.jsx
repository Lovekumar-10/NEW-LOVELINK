// src/components/CompleteProfile/Step5ContactPhotosPreferences.jsx
import React, { useState } from "react";

const maritalStatusOptions = ["Never Married", "Divorced", "Widowed", "Awaiting Divorce"];
const locationsOptions = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"];

const Step5ContactPhotosPreferences = ({ formData, setFormData, nextStep, prevStep }) => {
  const [phone, setPhone] = useState(formData.phone || "");
  const [photos, setPhotos] = useState(formData.photos || []);
  const [prefAge, setPrefAge] = useState(formData.prefAge || [18, 50]);
  const [prefHeight, setPrefHeight] = useState(formData.prefHeight || [4, 7]);
  const [prefMaritalStatus, setPrefMaritalStatus] = useState(formData.prefMaritalStatus || []);
  const [prefLocations, setPrefLocations] = useState(formData.prefLocations || []);
  const [aboutPartner, setAboutPartner] = useState(formData.aboutPartner || "");

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files).slice(0, 5); // max 5
    setPhotos(files);
  };

  const togglePreference = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((v) => v !== value));
    } else {
      setList([...list, value]);
    }
  };

  const handleSubmit = () => {
    if (!phone) {
      alert("Please enter your phone number");
      return;
    }
    if (photos.length === 0) {
      alert("Please upload at least one profile photo");
      return;
    }
    if (!aboutPartner || prefMaritalStatus.length === 0) {
      alert("Please fill all partner preferences");
      return;
    }

    // Save data to parent
    setFormData({
      ...formData,
      phone,
      photos,
      prefAge,
      prefHeight,
      prefMaritalStatus,
      prefLocations,
      aboutPartner,
    });

    nextStep();
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Step 5: Contact, Photos & Preferences</h2>

      {/* Phone Input */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Photo Upload */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Profile Photos (1-5)</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handlePhotoUpload}
          className="border p-2 rounded w-full"
        />
        {photos.length > 0 && (
          <p className="mt-1 text-sm">{photos.length} photo(s) selected</p>
        )}
      </div>

      {/* Partner Preferences */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Preferred Age</label>
        <div className="flex gap-2">
          <input
            type="number"
            min={18}
            max={50}
            value={prefAge[0]}
            onChange={(e) => setPrefAge([Number(e.target.value), prefAge[1]])}
            className="border p-2 rounded w-1/2"
          />
          <input
            type="number"
            min={18}
            max={50}
            value={prefAge[1]}
            onChange={(e) => setPrefAge([prefAge[0], Number(e.target.value)])}
            className="border p-2 rounded w-1/2"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Preferred Height (ft)</label>
        <div className="flex gap-2">
          <input
            type="number"
            min={4}
            max={7}
            value={prefHeight[0]}
            onChange={(e) => setPrefHeight([Number(e.target.value), prefHeight[1]])}
            className="border p-2 rounded w-1/2"
          />
          <input
            type="number"
            min={4}
            max={7}
            value={prefHeight[1]}
            onChange={(e) => setPrefHeight([prefHeight[0], Number(e.target.value)])}
            className="border p-2 rounded w-1/2"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Preferred Marital Status</label>
        <div className="flex flex-wrap gap-2">
          {maritalStatusOptions.map((status) => (
            <button
              key={status}
              type="button"
              onClick={() =>
                togglePreference(status, prefMaritalStatus, setPrefMaritalStatus)
              }
              className={`px-3 py-1 rounded ${
                prefMaritalStatus.includes(status)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Preferred Locations</label>
        <div className="flex flex-wrap gap-2">
          {locationsOptions.map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => togglePreference(loc, prefLocations, setPrefLocations)}
              className={`px-3 py-1 rounded ${
                prefLocations.includes(loc)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">About Partner</label>
        <textarea
          value={aboutPartner}
          onChange={(e) => setAboutPartner(e.target.value)}
          placeholder="Describe your preferred partner"
          rows={4}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step5ContactPhotosPreferences;