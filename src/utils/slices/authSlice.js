import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: true,
  token: typeof window !== "undefined" ? sessionStorage.getItem("authToken") : null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      
      sessionStorage.setItem("authToken", action.payload.token); 
    },
    signupSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;

      sessionStorage.setItem("authToken", action.payload.token); 
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;

      sessionStorage.removeItem("authToken"); 
    },
  },
});

export const { loginSuccess, logout, signupSuccess } = authSlice.actions;
export default authSlice.reducer;
