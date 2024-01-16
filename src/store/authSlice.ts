import { UserSchema } from "@/types/userTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: {},
    currentUser: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.currentUser = action.payload
        },
        loggoutUser: (state) => {
            state.currentUser = null
            state.userInfo = {}
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
