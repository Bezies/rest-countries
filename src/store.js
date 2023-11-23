import { configureStore } from "@reduxjs/toolkit";
import darkmode from "./features/darkmode";
import country from "./features/country";

export const store = configureStore({
  reducer: {
    darkmode,
    country,
  },
});
