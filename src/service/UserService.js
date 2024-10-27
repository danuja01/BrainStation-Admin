import { apiRequest, axiosInstance } from "./core/axios";

// Get all users
export const getAllUsers = async () => {
  return await apiRequest(() => axiosInstance.get("/api/users"));
};

// Get user by ID
export const getUserById = async (id) => {
  return await apiRequest(() => axiosInstance.get(`/api/users/${id}`));
};
