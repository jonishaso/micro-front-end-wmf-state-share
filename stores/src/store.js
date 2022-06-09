import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { slices } from "./slices";

const store = configureStore({
  reducer: {
    ...Object.keys(slices).reduce((final, currentKey) => {
      final[currentKey] = slices[currentKey].reducer;
      return final;
    }, {}),
  },
});

export function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
