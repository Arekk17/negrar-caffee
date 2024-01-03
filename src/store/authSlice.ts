import { UserSchema } from "@/types/userTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    currentuser: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.currentuser = action.payload
        },
        loggoutUser: (state) => {
            state.currentuser = null
        },
        userInfo: (state, action) => {
            state.userInfo = action.payload
        },
        editUser: (state, action) => {
            state.userInfo = action.payload
        }
    }
})

export const {loginUser, loggoutUser, userInfo, editUser} = userSlice.actions
