import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    modal: {
        type: "",
        data: {}
    }
}

const viewSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.modal = action.payload
        }
    }
})

export const {
    setModal
} = viewSlice.actions

export default viewSlice.reducer