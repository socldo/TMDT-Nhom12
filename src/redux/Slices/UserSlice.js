import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    access_token: '',
    isAdmin: false
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const{_id ='',name ='', email = ' ',address = '', phone = '', access_token = '',isAdmin} = action.payload
            state.id = _id;
            state.name = name ;
            state.email = email;
            state.address = address;
            state.phone = phone;
            state.access_token = access_token;
            state.isAdmin = isAdmin;
        },
        resetUser: (state) => {
            state.name = ''
            state.email = ''
            state.phone = ''
            state.address = ''
            state.access_token = ''
            state.isAdmin = false;
        }

    }
})
export const {updateUser, resetUser}= userSlice.actions
export default userSlice.reducer