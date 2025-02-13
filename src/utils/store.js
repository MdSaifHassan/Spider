import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import addressReducer from "./slices/addresSlice";
import authReducer from "./slices/authSlice";

const isBrowser = typeof window !== "undefined"; 

const preloadedState = {
  auth: {
    isAuthenticated: isBrowser ? !!sessionStorage.getItem("authToken") : false,
    token: isBrowser ? sessionStorage.getItem("authToken") : null,
    user: null,
  },
};

export const store = configureStore({
  reducer: {
    form: formReducer,
    address: addressReducer,
    auth: authReducer,
  },
  preloadedState, 
});

export default store;
