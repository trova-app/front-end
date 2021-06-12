import { createSlice } from '@reduxjs/toolkit'

type DataRangesActionType = {
    payload: {
        pitchers: typeof pitcherSchema,
        hitters: typeof offensiveSchema
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

export const pitcherSchema = {
    APP: [0, 0],
    BB: [0, 0],
    CG: [0, 0],
    ER: [0, 0],
    ERA: [0, 0],
    GS: [0, 0],
    H: [0, 0],
    HP: [0, 0],
    IP: [0, 0],
    L: [0, 0],
    OBA: [0, 0],
    R: [0, 0],
    SHO: [0, 0],
    SO: [0, 0],
    SV: [0, 0],
    W: [0, 0],
    WP: [0, 0],
    bbRate: [0, 0],
    kRate: [0, 0],
    hRate: [0, 0],
    soTObb: [0, 0]
}

export type PitcherBoundsInterface = typeof pitcherSchema

export const offensiveSchema = {
    GP: [0, 0],
    AB: [0, 0],
    AVG: [0, 0],
    OBP: [0, 0],
    OPS: [0, 0],
    R: [0, 0],
    H: [0, 0],
    "2B": [0, 0],
    "3B": [0, 0],
    HR: [0, 0],
    RBI: [0, 0],
    BB: [0, 0],
    SO: [0, 0],
    SB: [0, 0],
    CS: [0, 0],
    HP: [0, 0]
}

export type OffensiveBoundsInterface = typeof offensiveSchema

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
            state.pitcherFilters[action.payload.key as keyof typeof pitcherSchema] = action.payload.value
        },
        setOffensiveBounds: (state, action) => {
            state.offensiveFilters[action.payload.key as keyof typeof offensiveSchema] = action.payload.value
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