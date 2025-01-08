import { fields } from "@/module/Home/fields";
import { createSlice } from "@reduxjs/toolkit";


const initialState = fields.reduce((acc, field) => {
  acc[fields.id] = ""; 
  return acc;
}, {});

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { fieldId, value } = action.payload;
      state[fieldId] = value;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, resetForm } = formSlice.actions;

export default formSlice.reducer;
