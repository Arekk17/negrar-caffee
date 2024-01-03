import { UserSchema } from "@/types/userTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.user = action.payload
        },
        loggoutUser: (state) => {
            state.user = null
        },
    }
})

export const {loginUser, loggoutUser} = userSlice.actions
