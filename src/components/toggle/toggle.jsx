import { useState, useEffect } from "react";
import { getSessionsByUser, getTotalSessionData } from "@/service/SessionService"; // Import the services
import Scrollbars from "react-custom-scrollbars-2"; // Import Scrollbars

const ToggleTabs = ({ userId }) => {
  const [activeTab, setActiveTab] = useState("Session Logs");
  const [sessionLogs, setSessionLogs] = useState([]); // State to store session logs
  const [sessionOverview, setSessionOverview] = useState(null); // State to store session overview data
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error status

  const tabs = [
    { name: "Session Overview" },
    { name: "User Metrics" },
    { name: "Session Logs" },
    { name: "System Usage" }
  ];

  // Fetch session logs when 'Session Logs' tab is active and userId is available
  useEffect(() => {
    if (activeTab === "Session Logs" && userId) {
      setLoading(true);
      getSessionsByUser(userId)
        .then((response) => {
          if (response.data && response.data.docs) {
            setSessionLogs(response.data.docs); // Set session logs from the API response
          }
          setLoading(false);
        })
        .catch((error) => {
          setError(error); // Handle errors
          setLoading(false);
        });
    }

    // Fetch session overview data when 'Session Overview' tab is active
    if (activeTab === "Session Overview" && userId) {
      setLoading(true);
      getTotalSessionData(userId)
        .then((response) => {
          if (response.data) {
            setSessionOverview(response.data); // Set session overview data
          }
          setLoading(false);
        })
        .catch((error) => {
          setError(error); // Handle errors
          setLoading(false);
        });
    }
  }, [activeTab, userId]);

  return (
    <div className="flex flex-col items-center w-full">
      {/* Tab Buttons */}
      <div
        className="flex items-center justify-center p-2 border rounded-full w-full max-w-2xl"
        style={{ boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)" }}
      >
        {tabs.map((tab, index) => (
          <div key={tab.name} className="flex items-center">
            <button
              onClick={() => setActiveTab(tab.name)}
              className={`py-1 px-4 rounded-full mx-1 ${
                activeTab === tab.name ? "bg-blue-900 text-white" : "bg-white text-black"
              }`}
            >
              {tab.name}
            </button>
            {index < tabs.length - 1 && <span className="mx-1 text-gray-500">|</span>}
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div className="mt-6 w-full max-w-4xl">
        {activeTab === "Session Overview" && (
          <div>
            {loading ? (
              <p>Loading session overview...</p>
            ) : error ? (
              <p>Error fetching session overview: {error.message}</p>
            ) : (
              sessionOverview && (
                <div className="p-4 border rounded-lg">
                  <p><strong>Total Study Time:</strong> {sessionOverview.totalStudyTime.toFixed(2)}</p>
                  <p><strong>Total Focus Time:</strong> {sessionOverview.totalFocusTime.toFixed(2)}</p>
                  <p><strong>Total Movements:</strong> {sessionOverview.totalMovements}</p>
                  <p><strong>Total Erratic Movements:</strong> {sessionOverview.totalErraticMovements}</p>
                  <p><strong>ADHD Classification:</strong> {sessionOverview.adhdClassification}</p>
                </div>
              )
            )}
          </div>
        )}

        {activeTab === "Session Logs" && (
          <Scrollbars style={{ height: 400 }}> {/* Wrap session logs in Scrollbars */}
            <div>
              {loading ? (
                <p>Loading session logs...</p>
              ) : error ? (
                <p>Error fetching session logs: {error.message}</p>
              ) : (
                <ul>
                  {sessionLogs.map((log) => (
                    <li key={log._id} className="border-b p-2">
                      <p><strong>Date:</strong> {new Date(log.date).toLocaleDateString()}</p>
                      <p><strong>Start Time:</strong> {new Date(log.startTime).toLocaleTimeString()}</p>
                      <p><strong>Stop Time:</strong> {new Date(log.stopTime).toLocaleTimeString()}</p>
                      <p><strong>Focus Time (hrs):</strong> {log.focus_time.toFixed(2)}</p>
                      <p><strong>Total Movements:</strong> {log.total_movements}</p>
                      <p><strong>Erratic Movements:</strong> {log.erratic_movements}</p>
                      <p><strong>Erratic Percentage:</strong> {log.erratic_percentage}%</p>
                      <p><strong>Final Classification:</strong> {log.final_classification}</p>
                      <div>
                        <strong>Emotion Distribution:</strong>
                        <ul>
                          {Object.entries(log.emotion_distribution).map(([emotion, percentage]) => (
                            <li key={emotion}>
                              {emotion}: {percentage.toFixed(2)}%
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Scrollbars>
        )}

        {activeTab === "User Metrics" && <p>User Metrics data goes here...</p>}
        {activeTab === "System Usage" && <p>System Usage data goes here...</p>}
      </div>
    </div>
  );
};

export default ToggleTabs;
