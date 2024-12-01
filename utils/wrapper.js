"use client";
import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";

export const metadata = {
  title: "Task Pro",
};

/**
 * The Wrapper component is the top-level component of our application.
 * It provides the Redux store to all the child components.
 * It also has a ToastContainer for the react-toastify notifications.
 */

const Wrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="w-screen">
          {children}
        </div>
      </PersistGate>
    </Provider>
  );
};

export default Wrapper;