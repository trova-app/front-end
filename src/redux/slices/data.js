import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: {
            reducer(state, action) {
                state.data = action.payload
            }
        }
    }
})

export const {
    setData
} = dataSlice.actions

export default dataSlice.reducer