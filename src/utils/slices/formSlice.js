import { createSlice } from "@reduxjs/toolkit";
import { initialFormData, categories, services } from "../FormData/formFieldsConfig";

const initialState = {
  categories,
  services,
  formData: initialFormData,
  user: null,
  isAuthenticated: true,
  registeredUsers: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    registerUser: (state, action) => {
      state.registeredUsers.push(action.payload);
    },
  },
});

export const { updateForm, loginUser, logoutUser, registerUser } = formSlice.actions;
export default formSlice.reducer;
