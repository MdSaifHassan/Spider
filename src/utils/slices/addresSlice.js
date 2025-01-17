// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   formData: {
//     address: "",
//     state: null,
//     city: null,
//     postalCode: "",
//     additionalInfo: "",
//     isDefault: false,
//   },
// };

// const formSlice = createSlice({
//   name: "form",
//   initialState,
//   reducers: {
//     updateForm: (state, action) => {
//       state.formData = { ...state.formData, ...action.payload };
//     },
//     resetForm: (state) => {
//       state.formData = initialState.formData;
//     },
//   },
// });

// export const { updateForm, resetForm } = formSlice.actions;
// export default formSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   addresses: JSON.parse(localStorage.getItem("addresses")) || [],
//   defaultAddressId: localStorage.getItem("defaultAddressId") || null,
// };

// const addressSlice = createSlice({
//   name: "address",
//   initialState,
//   reducers: {
//     addAddress(state, action) {
//       const updatedAddresses = [...state.addresses, action.payload];
//       localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
//       state.addresses = updatedAddresses;
//     },
//     updateAddress(state, action) {
//       const updatedAddresses = state.addresses.map((address) =>
//         address.id === action.payload.id ? action.payload : address
//       );
//       localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
//       state.addresses = updatedAddresses;
//     },
//     setDefaultAddress(state, action) {
//       localStorage.setItem("defaultAddressId", action.payload);
//       state.defaultAddressId = action.payload;
//     },
//   },
// });

// export const { addAddress, updateAddress, setDefaultAddress } = addressSlice.actions;
// export default addressSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addresses: JSON.parse(localStorage.getItem("addresses")) || [],
  defaultAddressId: localStorage.getItem("defaultAddressId") || null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addAddress(state, action) {
      const updatedAddresses = [...state.addresses, action.payload];
      localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
      state.addresses = updatedAddresses;
    },
    updateAddress(state, action) {
      const updatedAddresses = state.addresses.map((address) =>
        address.id === action.payload.id ? action.payload : address
      );
      localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
      state.addresses = updatedAddresses;
    },
    deleteAddress(state, action) {
      const updatedAddresses = state.addresses.filter(
        (address) => address.id !== action.payload
      );
      localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
      state.addresses = updatedAddresses;

      // Reset default address if it was the one deleted
      if (state.defaultAddressId === action.payload) {
        localStorage.removeItem("defaultAddressId");
        state.defaultAddressId = null;
      }
    },
    setDefaultAddress(state, action) {
      localStorage.setItem("defaultAddressId", action.payload);
      state.defaultAddressId = action.payload;
    },
  },
});

export const { addAddress, updateAddress, deleteAddress, setDefaultAddress } = addressSlice.actions;
export default addressSlice.reducer;
