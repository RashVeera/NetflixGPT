import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "language",
  initialState: {
    lang: "en",
  },
  reducers: {
    addChangeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { addChangeLanguage } = langSlice.actions;
export default langSlice.reducer;
