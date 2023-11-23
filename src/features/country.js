import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: undefined,
};

export const country = createSlice({
  name: "country",
  initialState,
  reducers: {
    addCountries: (state, action) => {
      state.data = action.payload;
    },
  },
});

export function getCountryList(action) {
  return function (dispatch, getState) {
    axios.get("data.json").then((res) => dispatch(addCountries(res.data)));
  };
}

export const { addCountries } = country.actions;
export default country.reducer;
