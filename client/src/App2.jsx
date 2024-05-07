import React, { useState,useEffect } from 'react';
const featuresList = [
  "Cruise Control",
  "Airbags",
  "Leather Seats",
  "Navigation/GPS System",
  "Air Conditioning",
  "Sunroof",
  "Remote Central Locking",
];
function tabs() {
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  useEffect(() => {
    // Simulate fetching data from the backend
    // Replace this with your actual API call
    const fetchDataFromBackend = () => {
      // Assume the data fetched is an array of selected features
      const dataFromBackend = ["Cruise Control", "Airbags", "Leather Seats"];
      setSelectedFeatures(dataFromBackend);
    };

    fetchDataFromBackend();
  }, []);

  const handleCheckboxChange = (feature) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(item => item !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const handleSave = () => {
    console.log('Selected Features:', selectedFeatures);
    // Here you can send selectedFeatures to your backend
  };

  return (
    <div>
    <h1>Car Features</h1>
    {featuresList.map((feature) => (
      <div key={feature}>
        <label>
          <input
            type="checkbox"
            checked={selectedFeatures.includes(feature)}
            onChange={() => handleCheckboxChange(feature)}
          />
          {feature}
        </label>
      </div>
    ))}
    <button onClick={handleSave}>Save Selected Features</button>
  </div>
);
}

export default tabs;
