"use client"

import AddressPage from "@/src/module/Address/MainAddrespage";
import { store } from "@/src/utils/store";
import React from "react";
import { Provider } from "react-redux";


const MainAddressPAge = () => {
  return (
    <Provider store={store}>
      <AddressPage />
    </Provider>
  );
};

export default MainAddressPAge;
