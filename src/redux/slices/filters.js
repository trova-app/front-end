import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sort: {
        pitcher: {
            column: "ERA",
            order: "ASC"
        },
        offensive: {
            column: "OPS",
            order: "DESC"
        }
    },
    positions: {
        "P": true,
        "C": true,
        "1B": true,
        "2B": true,
        "SS": true,
        "3B": true,
        "LF": true,
        "CF": true,
        "RF": true
    },
    pitcherFilters: {
        appearances: [0, 200],
        walks: [0, 1000],
        completeGames: [0, 25],
        earnedRuns: [0, 250],
        earnedRunAverage: [0, 100],
        gamesStarted: [0, 56],
        hits: [0, 1000],
        hitByPitches: [0, 250],
        inningsPitched: [0, 1000],
        losses: [0, 50],
        opposingBattingAverage: [0, 1],
        runs: [0, 1000],
        shutouts: [0, 56],
        strikeouts: [0, 1000],
        saves: [0, 56],
        wins: [0, 50],
        wildPitches: [0, 100],

    },
    offensiveFilters: {
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
}

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setPitcherSort: {
            reducer(state, action) {

                if (state.pitcher.sort.column === action.payload && state.pitcher.sort.order === "ASC") {
                    state.pitcher.sort.order = "DESC"
                } else if (state.pitcher.sort.column === action.payload) {
                    state.sort.order = "ASC"
                } else {
                    state.pitcher.sort = {
                        column: action.payload,
                        order: "DESC"
                    }
                }
            }
        },
        setOffensiveSort: {
            reducer(state, action) {

                if (state.offensive.sort.column === action.payload && state.offensive.sort.order === "ASC") {
                    state.offensive.sort.order = "DESC"
                } else if (state.offensive.sort.column === action.payload) {
                    state.offensive.sort.order = "ASC"
                } else {
                    state.offensive.sort = {
                        column: action.payload,
                        order: "DESC"
                    }
                }
            }
        },
        setPitcher: {
            reducer(state, action) {
                state.positions.P = action.payload
            }
        },
        setPosition: {
            reducer(state, action) {
                state.positions[action.payload] = !state.positions[action.payload]
            }
        },
        setPitcherBounds: {
            reducer(state, action) {
                state.pitcherFilters[action.payload.key] = action.payload.value
            }
        },
        setOffensiveBounds: {
            reducer(state, action) {
                state.offensiveFilters[action.payload.key] = action.payload.value
            }
        },
        clearAllFilters: {
            reducer(state, action) {
                state.positions = {
                    "P": state.positions.P,
                    "C": true,
                    "1B": true,
                    "2B": true,
                    "SS": true,
                    "3B": true,
                    "LF": true,
                    "CF": true,
                    "RF": true
                }
                state.pitcherFilters = {
                    appearances: [0, 200],
                    walks: [0, 1000],
                    completeGames: [0, 25],
                    earnedRuns: [0, 250],
                    earnedRunAverage: [0, 100],
                    gamesStarted: [0, 56],
                    hits: [0, 1000],
                    hitByPitches: [0, 250],
                    inningsPitched: [0, 1000],
                    losses: [0, 50],
                    opposingBattingAverage: [0, 1],
                    runs: [0, 1000],
                    shutouts: [0, 56],
                    strikeouts: [0, 1000],
                    saves: [0, 56],
                    wins: [0, 50],
                    wildPitches: [0, 100],

                }
                state.offensiveFilters = {
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

            }
        }
    }
})

export const {
    setPitcherSort,
    setOffensiveSort,
    setPitcher,
    setPosition,
    setPitcherBounds,
    setOffensiveBounds,
    clearAllFilters
} = filterSlice.actions

export default filterSlice.reducer