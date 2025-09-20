import axios from "axios";
import { store } from "../store/store";
import { JAVA_BASE_URL } from "./apiConstants";

const javaApi = axios.create({
  baseURL: JAVA_BASE_URL,
});

javaApi.interceptors.request.use((config) => {
  const token = store.getState().auth.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default javaApi;
