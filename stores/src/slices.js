import { counterInitialState, counterReducers } from "app2/reducer";
import { createSlice } from "@reduxjs/toolkit";

export const COUNTER_NAME_SPACE = "counter";

const storeNameSpaceList = [
  {
    name: COUNTER_NAME_SPACE,
    initialState: { ...counterInitialState },
    reducers: { ...counterReducers },
  },
];

export const slices = storeNameSpaceList.reduce((finalSlices, current) => {
  if (!finalSlices[current.name]) {
    finalSlices[current.name] = createSlice({ ...current });
  }
  return finalSlices;
}, {});
