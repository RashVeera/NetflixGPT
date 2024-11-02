import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userSlice"
import movieslice from "./moviesSlice"


const appStore=configureStore({
    reducer:{
        user:userslice,
        movie:movieslice,
    }
})

export default appStore