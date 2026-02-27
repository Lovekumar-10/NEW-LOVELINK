// src/components/CompleteProfile/Step4LifestyleFamily.jsx
import React, { useState } from "react";

const hobbiesOptions = [
  "Reading",
  "Traveling",
  "Music",
  "Sports",
  "Photography",
  "Cooking",
  "Gaming",
  "Fitness",
];

const Step4LifestyleFamily = ({ formData, setFormData, nextStep, prevStep }) => {
  const [diet, setDiet] = useState(formData.diet || "");
  const [drinkHabit, setDrinkHabit] = useState(formData.drinkHabit || "");
  const [smokeHabit, setSmokeHabit] = useState(formData.smokeHabit || "");
  const [hobbies, setHobbies] = useState(formData.hobbies || []);
  const [fatherJob, setFatherJob] = useState(formData.fatherJob || "");
  const [motherJob, setMotherJob] = useState(formData.motherJob || "");
  const [siblingsCount, setSiblingsCount] = useState(formData.siblingsCount || 0);
  const [familyLocation, setFamilyLocation] = useState(formData.familyLocation || "");

  const toggleHobby = (hobby) => {
    if (hobbies.includes(hobby)) {
      setHobbies(hobbies.filter((h) => h !== hobby));
    } else {
      setHobbies([...hobbies, hobby]);
    }
  };

  const handleNext = () => {
    // Validation
    if (!diet || !drinkHabit || !smokeHabit || hobbies.length === 0) {
      alert("Please fill all lifestyle details and select at least one hobby");
      return;
    }
    if (!fatherJob || !motherJob || !familyLocation) {
      alert("Please fill all family details");
      return;
    }

    // Save to formData
    setFormData({
      ...formData,
      diet,
      drinkHabit,
      smokeHabit,
      hobbies,
      fatherJob,
      motherJob,
      siblingsCount,
      familyLocation,
    });

    nextStep();
  };

  return (
    <div className="w-full max-w-md bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Step 4: Lifestyle & Family</h2>

      {/* Lifestyle */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Diet</label>
        <div className="flex gap-4">
          {["Vegetarian", "Non-Veg", "Vegan", "Eggetarian"].map((option) => (
            <label key={option} className="flex items-center gap-1">
              <input
                type="radio"
                name="diet"
                value={option}
                checked={diet === option}
                onChange={(e) => setDiet(e.target.value)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Drinking Habit</label>
        <div className="flex gap-4">
          {["No", "Occasionally", "Regular"].map((option) => (
            <label key={option} className="flex items-center gap-1">
              <input
                type="radio"
                name="drinkHabit"
                value={option}
                checked={drinkHabit === option}
                onChange={(e) => setDrinkHabit(e.target.value)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Smoking Habit</label>
        <div className="flex gap-4">
          {["No", "Occasionally", "Regular"].map((option) => (
            <label key={option} className="flex items-center gap-1">
              <input
                type="radio"
                name="smokeHabit"
                value={option}
                checked={smokeHabit === option}
                onChange={(e) => setSmokeHabit(e.target.value)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Hobbies (Select at least 1)</label>
        <div className="flex flex-wrap gap-2">
          {hobbiesOptions.map((hobby) => (
            <button
              key={hobby}
              type="button"
              onClick={() => toggleHobby(hobby)}
              className={`px-3 py-1 border rounded ${
                hobbies.includes(hobby)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {hobby}
            </button>
          ))}
        </div>
      </div>

      {/* Family */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Father's Occupation</label>
        <input
          type="text"
          value={fatherJob}
          onChange={(e) => setFatherJob(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Mother's Occupation</label>
        <input
          type="text"
          value={motherJob}
          onChange={(e) => setMotherJob(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Siblings Count</label>
        <input
          type="number"
          min={0}
          max={10}
          value={siblingsCount}
          onChange={(e) => setSiblingsCount(Number(e.target.value))}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Family Location</label>
        <input
          type="text"
          value={familyLocation}
          onChange={(e) => setFamilyLocation(e.target.value)}
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
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step4LifestyleFamily;