import { createSlice } from '@reduxjs/toolkit'

type DataRangesActionType = {
    payload: {
        pitchers: PitcherFiltersInterface,
        hitters: OffensiveFiltersInterface
    }
}

interface PositionsInterface {
    "P": boolean
    "C": boolean
    "1B": boolean
    "2B": boolean
    "SS": boolean
    "3B": boolean
    "LF": boolean
    "CF": boolean
    "RF": boolean
}

export type PositionsTypes = keyof PositionsInterface

interface PitcherFiltersInterface {
    appearances: number[],
    walks: number[],
    completeGames: number[],
    earnedRuns: number[],
    earnedRunAverage: number[],
    gamesStarted: number[],
    hits: number[],
    hitByPitches: number[],
    inningsPitched: number[],
    losses: number[],
    opposingBattingAverage: number[],
    runs: number[],
    shutouts: number[],
    strikeouts: number[],
    saves: number[],
    wins: number[],
    wildPitches: number[],
}

export type PitcherFiltersTypes = keyof PitcherFiltersInterface

interface OffensiveFiltersInterface {
    gamesPlayed: number[],
    atBats: number[],
    battingAverage: number[],
    onBasePercentage: number[],
    onBasePlusSlugging: number[],
    runs: number[],
    hits: number[],
    doubles: number[],
    triples: number[],
    homeRuns: number[],
    rbi: number[],
    walks: number[],
    strikeouts: number[],
    stolenBases: number[],
    caughtStealing: number[],
    hitByPitches: number[],
}

export type OffensiveFiltersTypes = keyof OffensiveFiltersInterface

const pitcherSchema = {
    appearances: [0, 0],
    walks: [0, 0],
    completeGames: [0, 0],
    earnedRuns: [0, 0],
    earnedRunAverage: [0, 0],
    gamesStarted: [0, 0],
    hits: [0, 0],
    hitByPitches: [0, 0],
    inningsPitched: [0, 0],
    losses: [0, 0],
    opposingBattingAverage: [0, 0],
    runs: [0, 0],
    shutouts: [0, 0],
    strikeouts: [0, 0],
    saves: [0, 0],
    wins: [0, 0],
    wildPitches: [0, 0],
}

const offensiveSchema = {
    gamesPlayed: [0, 0],
    atBats: [0, 0],
    battingAverage: [0, 0],
    onBasePercentage: [0, 0],
    onBasePlusSlugging: [0, 0],
    runs: [0, 0],
    hits: [0, 0],
    doubles: [0, 0],
    triples: [0, 0],
    homeRuns: [0, 0],
    rbi: [0, 0],
    walks: [0, 0],
    strikeouts: [0, 0],
    stolenBases: [0, 0],
    caughtStealing: [0, 0],
    hitByPitches: [0, 0]
}

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
    isDefaultFilters: true,
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
    pitcherFilters: pitcherSchema,
    offensiveFilters: offensiveSchema,
    pitcherExtremities: pitcherSchema,
    offensiveExtremities: offensiveSchema
}


const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setDataRanges: (state, action: DataRangesActionType) => {
            state.pitcherExtremities = action.payload.pitchers
            state.offensiveExtremities = action.payload.hitters
            state.pitcherFilters = action.payload.pitchers
            state.offensiveFilters = action.payload.hitters
        },
        setPitcherSort: (state, action) => {
            if (state.sort.pitcher.column === action.payload && state.sort.pitcher.order === "ASC") {
                state.sort.pitcher.order = "DESC"
            } else if (state.sort.pitcher.column === action.payload) {
                state.sort.pitcher.order = "ASC"
            } else {
                state.sort.pitcher = {
                    column: action.payload,
                    order: "DESC"
                }
            }
        },
        setOffensiveSort: (state, action) => {
            if (state.sort.offensive.column === action.payload && state.sort.offensive.order === "ASC") {
                state.sort.offensive.order = "DESC"
            } else if (state.sort.offensive.column === action.payload) {
                state.sort.offensive.order = "ASC"
            } else {
                state.sort.offensive = {
                    column: action.payload,
                    order: "DESC"
                }
            }
        },
        setPitcher: (state, action) => {
            state.positions.P = action.payload
        },
        setPosition: (state, action) => {
            state.positions[action.payload as PositionsTypes] = !state.positions[action.payload as PositionsTypes]
        },
        setPitcherBounds: (state, action) => {
            state.pitcherFilters[action.payload.key as PitcherFiltersTypes] = action.payload.value
        },
        setOffensiveBounds: (state, action) => {
            state.offensiveFilters[action.payload.key as OffensiveFiltersTypes] = action.payload.value
        },
        setIsDefaultFilters: (state, action) => {
            state.isDefaultFilters = action.payload
        },
        clearAllFilters: (state, action) => {
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
})

export const {
    setDataRanges,
    setPitcherSort,
    setOffensiveSort,
    setPitcher,
    setPosition,
    setPitcherBounds,
    setOffensiveBounds,
    setIsDefaultFilters,
    clearAllFilters
} = filterSlice.actions

export default filterSlice.reducer