import { useState, useEffect } from 'react'
import { useSelector } from '../hooks/redux/useSelector'

import { useGetPlayerDataQuery } from '../redux/api/dataApi'

interface PitcherInterface {
    firstName: string,
    lastName: string,
    Team: string,
    position: string,
    appearances: number,
    APP: number,
    BB: number,
    CG: number,
    ER: number,
    ERA: number,
    GS: number,
    H: number,
    HP: number,
    IP: number,
    L: number,
    OBA: number,
    R: number,
    SHO: number,
    SO: number,
    SV: number,
    W: number,
    WP: number,
    bbRate: number,
    hRate: number,
    kRate: number,
    soTObb: number,
}

export const usePitcherRows = () => {
    const [filteredData, setFilteredData] = useState<PitcherInterface[]>([])
    const sort = useSelector(state => state.filters.sort.offensive)
    const filters = useSelector(state => state.filters.pitcherFilters)
    const searchTerm = useSelector(state => state.search.term)
    const token = useSelector(state => state.auth.tokens.idToken.jwtToken)

    const activeDivision = useSelector(state => state.filters.division)
    const { data } = useGetPlayerDataQuery(activeDivision, { skip: !token })

    useEffect(() => {
        if (data) {
            setFilteredData(data.data
                // Filter by Position
                .filter((elem: PitcherInterface) => elem.position === "P")
                // Filter Stats
                .filter((elem: PitcherInterface) => filters.APP[1] >= Number(elem.APP) && filters.APP[0] <= Number(elem.APP))
                .filter((elem: PitcherInterface) => filters.BB[1] >= Number(elem.BB) && filters.BB[0] <= Number(elem.BB))
                .filter((elem: PitcherInterface) => filters.BB[1] >= Number(elem.CG) && filters.BB[0] <= Number(elem.CG))
                .filter((elem: PitcherInterface) => filters.ER[1] >= Number(elem.ER) && filters.ER[0] <= Number(elem.ER))
                .filter((elem: PitcherInterface) => filters.ERA[1] >= Number(elem.ERA) && filters.ERA[0] <= Number(elem.ERA))
                .filter((elem: PitcherInterface) => filters.GS[1] >= Number(elem.GS) && filters.GS[0] <= Number(elem.GS))
                .filter((elem: PitcherInterface) => filters.H[1] >= Number(elem.H) && filters.H[0] <= Number(elem.H))
                .filter((elem: PitcherInterface) => filters.HP[1] >= Number(elem.HP) && filters.HP[0] <= Number(elem.HP))
                .filter((elem: PitcherInterface) => filters.IP[1] >= Number(elem.IP) && filters.IP[0] <= Number(elem.IP))
                .filter((elem: PitcherInterface) => filters.L[1] >= Number(elem.L) && filters.L[0] <= Number(elem.L))
                .filter((elem: PitcherInterface) => filters.OBA[1] >= Number(elem.OBA) && filters.OBA[0] <= Number(elem.OBA))
                .filter((elem: PitcherInterface) => filters.R[1] >= Number(elem.R) && filters.R[0] <= Number(elem.R))
                .filter((elem: PitcherInterface) => filters.SHO[1] >= Number(elem.SHO) && filters.SHO[0] <= Number(elem.SHO))
                .filter((elem: PitcherInterface) => filters.SO[1] >= Number(elem.SO) && filters.SO[0] <= Number(elem.SO))
                .filter((elem: PitcherInterface) => filters.SV[1] >= Number(elem.SV) && filters.SV[0] <= Number(elem.SV))
                .filter((elem: PitcherInterface) => filters.W[1] >= Number(elem.W) && filters.W[0] <= Number(elem.W))
                .filter((elem: PitcherInterface) => filters.bbRate[1] >= Number(elem.bbRate) && filters.bbRate[0] <= Number(elem.WP))
                .filter((elem: PitcherInterface) => filters.hRate[1] >= Number(elem.hRate) && filters.hRate[0] <= Number(elem.WP))
                .filter((elem: PitcherInterface) => filters.kRate[1] >= Number(elem.kRate) && filters.kRate[0] <= Number(elem.WP))
                .filter((elem: PitcherInterface) => filters.soTObb[1] >= Number(elem.soTObb) && filters.soTObb[0] <= Number(elem.WP))
                // Filter by Search
                .filter((elem: PitcherInterface) => {
                    if (!searchTerm) return elem
                    return elem.Team?.toLowerCase().includes(searchTerm.toLowerCase()) || (elem.firstName + " " + elem.lastName)?.toLowerCase().includes(searchTerm.toLowerCase())
                })
                .sort((a: any, b: any) => {
                    if (["lastName", "Team"].includes(sort.column)) {
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
    }, [
        data,
        filters,
        searchTerm,
        sort
    ])

    return filteredData
}