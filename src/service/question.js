import { apiRequest, axiosInstance } from "./core/axios";

export const generateQuestion = async (data) => {
  return await apiRequest(() => axiosInstance.post("/api/questions/generate-questions", data));
};

export const addQuestion = async (data) => {
  return await apiRequest(() => axiosInstance.post("/api/questions", data));
};

export const addQuestionBulk = async (data) => {
  return await apiRequest(() => axiosInstance.post("/api/questions/bulk", data));
};

export const updateQuestion = async (id, data) => {
  return await apiRequest(() => axiosInstance.put(`/api/questions/${id}`, data));
};

export const getQuestions = async (params = {}) => {
  const queryString = new URLSearchParams(params).toString();

  const endpoint = `/api/questions${queryString ? `?${queryString}` : ""}`;

  return await apiRequest(() => axiosInstance.get(endpoint));
};

export const getOneQuestion = async (id) => {
  return await apiRequest(() => axiosInstance.get(`/api/questions/${id}`));
};

export const flagQuestion = async (id) => {
  return await apiRequest(() => axiosInstance.post(`/api/questions/${id}/flag`));
};
