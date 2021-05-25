import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    dataset: []
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.dataset = action.payload
        }
    }
})

export const {
    setData
} = dataSlice.actions

export default dataSlice.reducer