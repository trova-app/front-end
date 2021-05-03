import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sort: {
        column: "OPS",
        order: "DESC"
    },
    positions: {
        "C": true,
        "1B": true,
        "2B": true,
        "SS": true,
        "3B": true,
        "LF": true,
        "CF": true,
        "RF": true
    },
    gamesPlayed: [0, 100],
    atBats: [0, 350],
    battingAverage: [0, 1],
    onBasePercentage: [0, 1],
    onBasePlusSlugging: [0, 2],
    runs: [0, 150],
    hits: [0, 250],
    doubles: [0, 250],
    triples: [0, 250],
    homeRuns: [0, 250],
    rbi: [0, 300],
    walks: [0, 250],
    strikeouts: [0, 250],
    stolenBases: [0, 100],
    caughtStealing: [0, 100],
    hitByPitches: [0, 100]
}

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setSort: {
            reducer(state, action) {

                if (state.sort.column === action.payload && state.sort.order === "ASC") {
                    state.sort.order = "DESC"
                } else if (state.sort.column === action.payload) {
                    state.sort.order = "ASC"
                } else {
                    state.sort = {
                        column: action.payload,
                        order: "DESC"
                    }
                }
            }
        },
        setPosition: {
            reducer(state, action) {
                state.positions[action.payload] = !state.positions[action.payload]
            }
        },
        setBounds: {
            reducer(state, action) {
                state[action.payload.key] = action.payload.value
            }
        }
    }
})

export const {
    setSort,
    setPosition,
    setBounds
} = filterSlice.actions

export default filterSlice.reducer