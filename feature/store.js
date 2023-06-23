import { configureStore } from "@reduxjs/toolkit";
import actionSlice from "./service/actionSlice";

export const store = configureStore({
  reducer: {
    action: actionSlice,
  },
});
