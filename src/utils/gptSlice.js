import { createSlice } from "@reduxjs/toolkit";

const gptslice = createSlice({
  name: "gpt",
  initialState: {
    gptsearch: false,
    showGPTMovies: null,
    showGPTMovieNames: null,
  },
  reducers: {
    addGPTSearch: (state, action) => {
      state.gptsearch = !state.gptsearch;
    },
    addGPTMovies: (state, action) => {
      const { movies, tmdbresults } = action.payload;
      state.showGPTMovies = tmdbresults;
      state.showGPTMovieNames = movies;
    },
    addclearState: (state) => {
      state.showGPTMovies = null;
      state.showGPTMovieNames = null;
    },
  },
});

export const { addGPTSearch, addGPTMovies, addclearState } = gptslice.actions;

export default gptslice.reducer;
