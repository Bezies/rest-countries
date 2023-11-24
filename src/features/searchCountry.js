import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SearchByName: "",
  FilterByRegion: "",
};

export const searchCountry = createSlice({
  name: "searchCountry",
  initialState,
  reducers: {
    addName: (state, action) => {
      state.SearchByName = action.payload;
    },
    addRegion: (state, action) => {
      state.FilterByRegion = action.payload;
    },
  },
});

export const { addName, addRegion } = searchCountry.actions;
export default searchCountry.reducer;
