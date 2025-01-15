import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import addressReducer from "./slices/addresSlice";

export const store = configureStore({
  reducer: {
    form: formReducer, // Keep a unique key for this reducer
    address: addressReducer, // Use a unique key for this reducer
  },
});
