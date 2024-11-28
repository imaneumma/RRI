import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getCourses = async () => {
  const response = await API.get("courses/");
  return response.data;
};
