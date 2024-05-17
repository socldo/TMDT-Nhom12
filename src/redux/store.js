import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "./Slices/CounterSlice";
import userSlice from "./Slices/UserSlice";
export const store = configureStore({
    reducer: {
        counter: counterSlice,
        user: userSlice
    },
})