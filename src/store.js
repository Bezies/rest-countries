import { configureStore } from "@reduxjs/toolkit";
import darkmode from "./features/darkmode";
import country from "./features/country";
import searchCountry from "./features/searchCountry";

export const store = configureStore({
  reducer: {
    darkmode,
    country,
    searchCountry,
  },
});
