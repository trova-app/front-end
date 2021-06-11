import { createSlice } from '@reduxjs/toolkit'

type DataRangesActionType = {
    payload: {
        pitchers: PitcherFiltersInterface,
        hitters: OffensiveFiltersInterface
    }
}

type DivisionActionType = {
    payload: {
        division: string
    }
}

export interface PositionsInterface {
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
    bbRate: number[],
    kRate: number[],
    hRate: number[],
    soTObb: number[]
}

export interface OffensiveFiltersInterface {
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

export const pitcherSchema = {
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
    bbRate: [0, 0],
    kRate: [0, 0],
    hRate: [0, 0],
    soTObb: [0, 0]
}

export const offensiveSchema = {
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

export const initialState = {
    division: "d1",
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
        setDivision: (state, action: DivisionActionType) => {
            state.division = action.payload.division
        },
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
            state.positions[action.payload as keyof PositionsInterface] = !state.positions[action.payload as keyof PositionsInterface]
        },
        setPitcherBounds: (state, action) => {
            state.pitcherFilters[action.payload.key as keyof PitcherFiltersInterface] = action.payload.value
        },
        setOffensiveBounds: (state, action) => {
            state.offensiveFilters[action.payload.key as keyof OffensiveFiltersInterface] = action.payload.value
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
            state.pitcherFilters = state.pitcherExtremities
            state.offensiveFilters = state.offensiveExtremities
        }
    }
})

export const {
    setDivision,
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