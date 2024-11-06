import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userSlice";
import movieslice from "./moviesSlice";
import gptslice from "./gptSlice";
import langSlice from "./langSlice";

const appStore = configureStore({
  reducer: {
    user: userslice,
    movie: movieslice,
    gpt: gptslice,
    language: langSlice,
  },
});

export default appStore;
