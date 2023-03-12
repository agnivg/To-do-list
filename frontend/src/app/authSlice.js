import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import react-cookie
import Cookie from "react-cookie";
import axios from "axios";

const url = process.env.REACT_APP_BACKEND_URL || "http://localhost:1337/api";
const LOGIN_URL = `${url}/auth/login`;
const SIGNUP_URL = `${url}/auth/register`;
const CHECK_USER_URL = `${url}/auth/check`;
const LOGOUT_URL = `${url}/auth/logout`;

const initialState = {
  isLoading: false,
  user: null,
  isAuthenticated: false,
  error: null,
};

export const logout = createAsyncThunk(
  "auth/logout",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(LOGOUT_URL, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(LOGIN_URL, payload, {
        withCredentials: true,
      });
      console.log("response",response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.post(SIGNUP_URL, payload);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const checkUser = createAsyncThunk(
  "auth/checkUser",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get(CHECK_USER_URL, {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload?.user?._id;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
        state.isAuthenticated = false;
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload?.user?._id;
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(checkUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload?.user?._id;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
