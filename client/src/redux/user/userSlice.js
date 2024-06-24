import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    otp: null,
    error: null,
    loading: false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        verifyOtpStart: (state) => {
            state.loading = true
        },
        verifyOtpSuccess: (state, action) => {
            state.email = action.payload,
            state.error = null
        },
        verifyOtpFailure : (state, action) => {
            state.error = action.payload
        }
    }
})

export const {verifyOtpSuccess, verifyOtpFailure, verifyOtpStart} = userSlice.actions

export default userSlice.reducer