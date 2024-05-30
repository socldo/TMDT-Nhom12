import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [] // Khởi tạo items như một mảng rỗng để tránh lỗi undefined
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart: (state, action) => {
            state.items = action.payload;
        },
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
});

export const { updateCart, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
