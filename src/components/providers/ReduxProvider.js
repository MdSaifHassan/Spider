"use client"; // Ensure this is a client component

import { store } from "@/src/utils/store";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
