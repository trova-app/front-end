import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    current: ""
}

const viewSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setView: {
            reducer(state, action) {
                state.current = action.payload
            }
        }
    }
})

export const {
    setView
} = viewSlice.actions

export default viewSlice.reducer