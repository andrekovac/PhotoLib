import { createSlice } from "@reduxjs/toolkit";

import { RootStateT } from "./index";

const initialState: number = 0;

const counterSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    increase: state => state + 1,
    decrease: state => state > 0 ? state - 1 : state,
  },
});

// Two actions generated from the slice
export const { increase, decrease } = counterSlice.actions;

// A selector
export const counterSelector = (state: RootStateT) => state.count;

// The reducer
export default counterSlice.reducer;
