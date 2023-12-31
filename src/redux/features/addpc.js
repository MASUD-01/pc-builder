import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const addPc = createSlice({
  name: "addpc",
  initialState,
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.value.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add } = addPc.actions;

export default addPc.reducer;
