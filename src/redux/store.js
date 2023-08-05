import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import addpc from "./features/addpc";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    addpc: addpc,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
