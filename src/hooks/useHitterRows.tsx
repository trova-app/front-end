import { PositionsTypes } from '../redux/slices/filters'
import { useState, useEffect } from 'react'
import { useSelector } from '../hooks/redux/useSelector'

interface PlayerInterface {
    firstName: string,
    lastName: string,
    Team: string,
    position: string,
    GP: number,
    AB: number,
    AVG: number,
    OBP: number,
    OPS: number,
    R: number,
    H: number,
    "2B": number,
    "3B": number,
    "HR": number,
    "RBI": number,
    "BB": number,
    "SO": number,
    "SB": number,
    "CS": number,
    "HP": number
}

export const useHitterRows = () => {
    const [filteredData, setFilteredData] = useState<PlayerInterface[]>([])
    const data = useSelector(state => state.data.dataset)
    const statFilters = useSelector(state => state.filters.offensiveFilters)
    const positionFilter = useSelector(state => state.filters.positions)
    const sort = useSelector(state => state.filters.sort.offensive)
    const searchTerm = useSelector(state => state.search.term)

    useEffect(() => {
        if (data) {
            setFilteredData(data
                // Filter by Position
                .filter((elem: { position: string }) => positionFilter[elem.position as PositionsTypes])
                // Filter by Stats
                .filter((elem: PlayerInterface) => statFilters.gamesPlayed[1] >= Number(elem.GP) && statFilters.gamesPlayed[0] <= Number(elem.GP))
                .filter((elem: PlayerInterface) => statFilters.atBats[1] >= Number(elem.AB) && statFilters.atBats[0] <= Number(elem.AB))
                .filter((elem: PlayerInterface) => statFilters.battingAverage[1] >= Number(elem.AVG) && statFilters.battingAverage[0] <= Number(elem.AVG))
                .filter((elem: PlayerInterface) => statFilters.onBasePercentage[1] >= Number(elem.OBP) && statFilters.onBasePercentage[0] <= Number(elem.OBP))
                .filter((elem: PlayerInterface) => statFilters.onBasePlusSlugging[1] >= Number(elem.OPS) && statFilters.onBasePlusSlugging[0] <= Number(elem.OPS))
                .filter((elem: PlayerInterface) => statFilters.runs[1] >= Number(elem.R) && statFilters.runs[0] <= Number(elem.R))
                .filter((elem: PlayerInterface) => statFilters.hits[1] >= Number(elem.H) && statFilters.hits[0] <= Number(elem.H))
                .filter((elem: PlayerInterface) => statFilters.doubles[1] >= Number(elem["2B"]) && statFilters.doubles[0] <= Number(elem["2B"]))
                .filter((elem: PlayerInterface) => statFilters.triples[1] >= Number(elem["3B"]) && statFilters.triples[0] <= Number(elem["3B"]))
                .filter((elem: PlayerInterface) => statFilters.homeRuns[1] >= Number(elem["HR"]) && statFilters.homeRuns[0] <= Number(elem["HR"]))
                .filter((elem: PlayerInterface) => statFilters.rbi[1] >= Number(elem.RBI) && statFilters.rbi[0] <= Number(elem.RBI))
                .filter((elem: PlayerInterface) => statFilters.walks[1] >= Number(elem["BB"]) && statFilters.walks[0] <= Number(elem["BB"]))
                .filter((elem: PlayerInterface) => statFilters.strikeouts[1] >= Number(elem["SO"]) && statFilters.strikeouts[0] <= Number(elem["SO"]))
                .filter((elem: PlayerInterface) => statFilters.stolenBases[1] >= Number(elem["SB"]) && statFilters.stolenBases[0] <= Number(elem["SB"]))
                .filter((elem: PlayerInterface) => statFilters.caughtStealing[1] >= Number(elem["CS"]) && statFilters.caughtStealing[0] <= Number(elem["CS"]))
                .filter((elem: PlayerInterface) => statFilters.hitByPitches[1] >= Number(elem["HP"]) && statFilters.hitByPitches[0] <= Number(elem["HP"]))
                // Filter by Search
                .filter((elem: PlayerInterface) => {
                    if (!searchTerm) return elem
                    return elem.Team?.toLowerCase().includes(searchTerm.toLowerCase()) || (elem.firstName + " " + elem.lastName)?.toLowerCase().includes(searchTerm.toLowerCase())
                })

                .sort((a, b) => {
                    if (["lastName", "Team", "position"].includes(sort.column)) {
                        if (sort.order === "DESC") {
                            if (a[sort.column] < b[sort.column]) {
                                return -1
                            }

                            if (a[sort.column] > b[sort.column]) {
                                return 1
                            }

                            return 0
                        } else {
                            if (a[sort.column] < b[sort.column]) {
                                return 1
                            }

                            if (a[sort.column] > b[sort.column]) {
                                return -1
                            }

                            return 0
                        }
                    } else {
                        if (sort.order === "DESC") {
                            return b[sort.column] - a[sort.column]
                        } else {
                            return a[sort.column] - b[sort.column]
                        }
                    }
                })
                .slice(0, 100)
            )
        }
    }, [data,
        statFilters.gamesPlayed,
        statFilters.atBats,
        statFilters.battingAverage,
        statFilters.onBasePercentage,
        statFilters.onBasePlusSlugging,
        statFilters.runs,
        statFilters.hits,
        statFilters.doubles,
        statFilters.triples,
        statFilters.homeRuns,
        statFilters.rbi,
        statFilters.walks,
        statFilters.strikeouts,
        statFilters.stolenBases,
        statFilters.caughtStealing,
        statFilters.hitByPitches,
        positionFilter,
        searchTerm,
        sort.column,
        sort.order
    ])

    return filteredData
}