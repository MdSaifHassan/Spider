"use client"

import AddressPage from "@module/Address/Address";
import { store } from "@utils/store";
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
