import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/post/postSlice";
import userReducer from "../features/users/userSlice";

const store =configureStore({
    reducer:{
        posts:postReducer,
        users:userReducer
    }
})

export default store