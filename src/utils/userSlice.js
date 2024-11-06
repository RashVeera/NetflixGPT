import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
  name: "user",
  initialState: {
    api_key: null,
  },
  reducers: {
    adduser: (state, action) => {
      return action.payload;
    },
    removeuser: () => {
      return null;
    },
    addopenapikey: (state, action) => {
      state.api_key = action.payload;
    },
  },
});

export const { adduser, removeuser, addopenapikey } = userslice.actions;

export default userslice.reducer;
