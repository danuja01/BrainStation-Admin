import { apiRequest, axiosInstance } from "./core/axios";

// Add a new session
export const addSession = async (data) => {
  return await apiRequest(() => axiosInstance.post("/api/sessions", data));
};

// Get a session by ID
export const getSessionById = async (sessionId) => {
  return await apiRequest(() => axiosInstance.get(`/api/sessions/${sessionId}`));
};

// Get all sessions by a specific user ID
export const getSessionsByUser = async (userId) => {
  return await apiRequest(() => axiosInstance.get(`/api/sessions/user/${userId}`));
};

// New API to get total session details for a user
export const getTotalSessionData = async (userId) => {
  return await apiRequest(() => axiosInstance.get(`/api/sessions/sessionData/${userId}`));
};

// Get all sessions of a user by module
export const getSessionsOfUserByModule = async (userId, moduleId) => {
  return await apiRequest(() => axiosInstance.get(`/api/sessions/userByModule/${userId}?filter[moduleId]=${moduleId}`));
};

// Get user start and end times per module
export const getStartEndTimesOfUserByModule = async (userId, moduleId) => {
  return await apiRequest(() => axiosInstance.get(`/api/sessions/start-end-times/${userId}?filter[moduleId]=${moduleId}`));
};

// Get total focus time for a user by module
export const getTotalFocusTimeOfUserByModule = async (userId, moduleId) => {
  return await apiRequest(() => axiosInstance.get(`/api/sessions/total-focus-time/${userId}?filter[moduleId]=${moduleId}`));
};

// Get average focus time for a user by module
export const getAverageFocusTimeOfUserByModule = async (userId, moduleId) => {
  return await apiRequest(() => axiosInstance.get(`/api/sessions/average-focus-time/${userId}?filter[moduleId]=${moduleId}`));
};
