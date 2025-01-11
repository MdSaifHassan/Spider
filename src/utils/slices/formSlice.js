
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   categories: ["Category 1", "Category 2", "Category 3"],
//   services: ["Service 1", "Service 2", "Service 3"],
//   formData: {
//     category: "",
//     service: "",
//     date: null,
//     time: null,
//     description: "",
//   },
//   user: null, // To store logged-in user information
//   isAuthenticated: false, // To track authentication status
// };

// const formSlice = createSlice({
//   name: "form",
//   initialState,
//   reducers: {
//     // Updates form data
//     updateForm: (state, action) => {
//       state.formData = { ...state.formData, ...action.payload };
//     },
//     // Handles user login
//     loginUser: (state, action) => {
//       state.user = action.payload; // Stores user details
//       state.isAuthenticated = true; // Sets authentication status to true
//     },
//     // Handles user logout
//     logoutUser: (state) => {
//       state.user = null; 
//       state.isAuthenticated = false; 
//     },
//   },
// });

// export const { updateForm, loginUser, logoutUser } = formSlice.actions;
// export default formSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: ["Category 1", "Category 2", "Category 3"],
  services: ["Service 1", "Service 2", "Service 3"],
  formData: {
    category: "",
    service: "",
    date: null,
    time: null,
    description: "",
  },
  user: null,
  isAuthenticated: false, 
  registeredUsers: [], 
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    // Updates form data
    updateForm: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    // Handles user login
    loginUser: (state, action) => {
      state.user = action.payload; 
      state.isAuthenticated = true; 
    },
    // Handles user logout
    logoutUser: (state) => {
      state.user = null; 
      state.isAuthenticated = false; 
    },
    // Handles user signup
    registerUser: (state, action) => {
      state.registeredUsers.push(action.payload); 
    },
  },
});

export const { updateForm, loginUser, logoutUser, registerUser } = formSlice.actions;
export default formSlice.reducer;
