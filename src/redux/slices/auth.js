import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tokens: null,
    userAttributes: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setTokens: {
            reducer(state, action) {
                state.tokens = action.payload
            }
        },
        setUserAttributes: {
            reducer(state, action) {
                state.userAttributes = action.payload
            }
        }
    }
})

export const {
    setTokens,
    setUserAttributes
} = authSlice.actions

export default authSlice.reducer