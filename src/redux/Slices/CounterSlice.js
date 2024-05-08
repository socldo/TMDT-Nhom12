import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    value: 0,
}
 export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increament: (state) => {
            state.value += 1;
        },
        decreament: (state) => {
            state.value -= 1;
        }
    }
})
export default counterSlice.reducer