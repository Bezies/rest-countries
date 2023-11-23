import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  state: true,
};

export const darkmode = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.state = !state.state;
    },
  },
});

export const { changeMode } = darkmode.actions;
export default darkmode.reducer;
