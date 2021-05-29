import { createSlice } from '@reduxjs/toolkit'

type LastUpdatedType = {
    payload: {
        date: string
    }
}

const initialState = {
    dataset: [],
    meta: {
        lastUpdated: ""
    }
}

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setData: (state, action) => {
            state.dataset = action.payload
        },
        setLastUpdated: (state, action: LastUpdatedType) => {
            state.meta.lastUpdated = action.payload.date
        }
    }
})

export const {
    setData,
    setLastUpdated
} = dataSlice.actions

export default dataSlice.reducer