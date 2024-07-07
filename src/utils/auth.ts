// utils/auth.ts
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = document.cookie
    .split(";")
    .find((c) => c.trim().startsWith("token="));
  if (token) {
    config.headers.Authorization = `Bearer ${token.split("=")[1]}`;
  }
  return config;
});
