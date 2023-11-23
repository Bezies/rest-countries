import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: undefined,
};

export const country = createSlice({
  name: "country",
  initialState,
  reducers: {},
});

export const {} = country.actions;
export default country.reducer;
