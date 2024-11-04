import { createSlice } from "@reduxjs/toolkit"

const moviesSlice =createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
    },
    reducers:{
        addnowPlayingmovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addPopularmovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
    }
})


export const {addnowPlayingmovies,addTrailerVideo,addPopularmovies,addTopRatedMovies,addUpcomingMovies}=moviesSlice.actions;
export default moviesSlice.reducer