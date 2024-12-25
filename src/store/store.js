import { configureStore } from "@reduxjs/toolkit";
import authReducers from '../store/authSlice'

const store = configureStore({
    reducer: authReducers
});

export default store