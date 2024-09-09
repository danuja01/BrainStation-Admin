import { useState } from "react";

const ToggleTabs = () => {
  const [activeTab, setActiveTab] = useState("Emotion Tracker");

  const tabs = [
    { name: "Emotion Tracker" },
    { name: "User Metrics" },
    { name: "Session Logs" },
    { name: "System Usage" }
  ];

  return (
    <div
      className="flex items-center justify-start p-2 border rounded-full"
      style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)" }}
    >
      {tabs.map((tab, index) => (
        <div key={tab.name} className="flex items-center">
          {/* Button */}
          <button
            onClick={() => setActiveTab(tab.name)}
            className={`py-1 px-4 rounded-full mx-1 ${
              activeTab === tab.name ? "bg-blue-900 text-white" : "bg-white text-black"
            }`}
          >
            {tab.name}
          </button>

          {/* Add separator | between tabs except the last one */}
          {index < tabs.length - 1 && <span className="mx-1 text-gray-500">|</span>}
        </div>
      ))}
    </div>
  );
};

export default ToggleTabs;
