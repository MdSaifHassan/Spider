import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    address: "",
    state: null,
    city: null,
    postalCode: "",
    additionalInfo: "",
    isDefault: false,
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
    },
  },
});

export const { updateForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
