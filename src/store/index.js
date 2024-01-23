import { configureStore } from "@reduxjs/toolkit";
import signin from "./sign-slice";
import profileSlice from "./profile-slice";
const store = configureStore({
    reducer:{
        sign:signin.reducer,
        profile:profileSlice.reducer
    }
});

export default store;