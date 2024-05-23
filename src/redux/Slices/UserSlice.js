import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    access_token: '',
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const{_id ='',name ='', email = ' ',address = '', phone = '', access_token = ''} = action.payload
            state.id = _id;
            state.name = name ;
            state.email = email;
            state.address = address;
            state.phone = phone;
            state.access_token = access_token;
        },
        resetUser: (state) => {
            state.name = ''
            state.email = ''
            state.phone = ''
            state.address = ''
            state.access_token = '';
        }

    }
})
export const {updateUser, resetUser}= userSlice.actions
export default userSlice.reducer