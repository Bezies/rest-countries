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
  },
});

export const { addName } = searchCountry.actions;
export default searchCountry.reducer;
