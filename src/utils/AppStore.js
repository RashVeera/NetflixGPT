import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userSlice"


const appStore=configureStore({
    reducer:{
        user:userslice,
    }
})

export default appStore