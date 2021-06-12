import { PositionsInterface } from '../redux/slices/filters'
import { useState, useEffect } from 'react'
import { useSelector } from './redux/useSelector'

import { useGetPlayerDataQuery } from '../redux/api/dataApi'

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
    const statFilters = useSelector(state => state.filters.offensiveFilters)
    const positionFilter = useSelector(state => state.filters.positions)
    const sort = useSelector(state => state.filters.sort.offensive)
    const searchTerm = useSelector(state => state.search.term)
    const token = useSelector(state => state.auth.tokens.idToken.jwtToken)

    const activeDivision = useSelector(state => state.filters.division)
    const { data } = useGetPlayerDataQuery(activeDivision, { skip: !token })


    useEffect(() => {
        if (data) {
            setFilteredData(data.data
                // Filter by Position
                .filter((elem: { position: string }) => positionFilter[elem.position as keyof PositionsInterface])
                // Filter by Stats
                .filter((elem: PlayerInterface) => statFilters.GP[1] >= Number(elem.GP) && statFilters.GP[0] <= Number(elem.GP))
                .filter((elem: PlayerInterface) => statFilters.AB[1] >= Number(elem.AB) && statFilters.AB[0] <= Number(elem.AB))
                .filter((elem: PlayerInterface) => statFilters.AVG[1] >= Number(elem.AVG) && statFilters.AVG[0] <= Number(elem.AVG))
                .filter((elem: PlayerInterface) => statFilters.OBP[1] >= Number(elem.OBP) && statFilters.OBP[0] <= Number(elem.OBP))
                .filter((elem: PlayerInterface) => statFilters.OPS[1] >= Number(elem.OPS) && statFilters.OPS[0] <= Number(elem.OPS))
                .filter((elem: PlayerInterface) => statFilters.R[1] >= Number(elem.R) && statFilters.R[0] <= Number(elem.R))
                .filter((elem: PlayerInterface) => statFilters.H[1] >= Number(elem.H) && statFilters.H[0] <= Number(elem.H))
                .filter((elem: PlayerInterface) => statFilters["2B"][1] >= Number(elem["2B"]) && statFilters["2B"][0] <= Number(elem["2B"]))
                .filter((elem: PlayerInterface) => statFilters["3B"][1] >= Number(elem["3B"]) && statFilters["3B"][0] <= Number(elem["3B"]))
                .filter((elem: PlayerInterface) => statFilters.HR[1] >= Number(elem["HR"]) && statFilters.HR[0] <= Number(elem["HR"]))
                .filter((elem: PlayerInterface) => statFilters.RBI[1] >= Number(elem.RBI) && statFilters.RBI[0] <= Number(elem.RBI))
                .filter((elem: PlayerInterface) => statFilters.BB[1] >= Number(elem["BB"]) && statFilters.BB[0] <= Number(elem["BB"]))
                .filter((elem: PlayerInterface) => statFilters.SO[1] >= Number(elem["SO"]) && statFilters.SO[0] <= Number(elem["SO"]))
                .filter((elem: PlayerInterface) => statFilters.SB[1] >= Number(elem["SB"]) && statFilters.SB[0] <= Number(elem["SB"]))
                .filter((elem: PlayerInterface) => statFilters.CS[1] >= Number(elem["CS"]) && statFilters.CS[0] <= Number(elem["CS"]))
                .filter((elem: PlayerInterface) => statFilters.HP[1] >= Number(elem["HP"]) && statFilters.HP[0] <= Number(elem["HP"]))
                // Filter by Search
                .filter((elem: PlayerInterface) => {
                    if (!searchTerm) return elem
                    return elem.Team?.toLowerCase().includes(searchTerm.toLowerCase()) || (elem.firstName + " " + elem.lastName)?.toLowerCase().includes(searchTerm.toLowerCase())
                })

                .sort((a: any, b: any) => {
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
        statFilters,
        positionFilter,
        searchTerm,
        sort
    ])

    return filteredData
}