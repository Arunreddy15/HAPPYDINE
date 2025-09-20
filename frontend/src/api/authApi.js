// authThunks.js (or inside authSlice.js)
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ENDPOINTS } from "../routes/AppUrls";
import { JAVA_BASE_URL } from "./apiConstants";
export const loginApi = createAsyncThunk(
  "auth/loginUser",
  async (loginPayload, { rejectWithValue }) => {
    try {
      const data = await axios.post(
        `${JAVA_BASE_URL}${ENDPOINTS.AUTHENTICATE}`,
        loginPayload
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);
