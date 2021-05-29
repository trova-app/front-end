import { useState, useEffect } from 'react'
import { useSelector } from './redux/useSelector'

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
    const data = useSelector(state => state.data.dataset)
    const filters = useSelector(state => state.filters.pitcherFilters)
    const sort = useSelector(state => state.filters.sort.pitcher)
    const searchTerm = useSelector(state => state.search.term)

    useEffect(() => {
        if (data) {
            setFilteredData(data
                // Filter by Position
                .filter((elem: PitcherInterface) => elem.position === "P")
                // Filter Stats
                .filter((elem: PitcherInterface) => filters.appearances[1] >= Number(elem.APP) && filters.appearances[0] <= Number(elem.APP))
                .filter((elem: PitcherInterface) => filters.walks[1] >= Number(elem.BB) && filters.walks[0] <= Number(elem.BB))
                .filter((elem: PitcherInterface) => filters.completeGames[1] >= Number(elem.CG) && filters.completeGames[0] <= Number(elem.CG))
                .filter((elem: PitcherInterface) => filters.earnedRuns[1] >= Number(elem.ER) && filters.earnedRuns[0] <= Number(elem.ER))
                .filter((elem: PitcherInterface) => filters.earnedRunAverage[1] >= Number(elem.ERA) && filters.earnedRunAverage[0] <= Number(elem.ERA))
                .filter((elem: PitcherInterface) => filters.gamesStarted[1] >= Number(elem.GS) && filters.gamesStarted[0] <= Number(elem.GS))
                .filter((elem: PitcherInterface) => filters.hits[1] >= Number(elem.H) && filters.hits[0] <= Number(elem.H))
                .filter((elem: PitcherInterface) => filters.hitByPitches[1] >= Number(elem.HP) && filters.hitByPitches[0] <= Number(elem.HP))
                .filter((elem: PitcherInterface) => filters.inningsPitched[1] >= Number(elem.IP) && filters.inningsPitched[0] <= Number(elem.IP))
                .filter((elem: PitcherInterface) => filters.losses[1] >= Number(elem.L) && filters.losses[0] <= Number(elem.L))
                .filter((elem: PitcherInterface) => filters.opposingBattingAverage[1] >= Number(elem.OBA) && filters.opposingBattingAverage[0] <= Number(elem.OBA))
                .filter((elem: PitcherInterface) => filters.runs[1] >= Number(elem.R) && filters.runs[0] <= Number(elem.R))
                .filter((elem: PitcherInterface) => filters.shutouts[1] >= Number(elem.SHO) && filters.shutouts[0] <= Number(elem.SHO))
                .filter((elem: PitcherInterface) => filters.strikeouts[1] >= Number(elem.SO) && filters.strikeouts[0] <= Number(elem.SO))
                .filter((elem: PitcherInterface) => filters.saves[1] >= Number(elem.SV) && filters.saves[0] <= Number(elem.SV))
                .filter((elem: PitcherInterface) => filters.wins[1] >= Number(elem.W) && filters.wins[0] <= Number(elem.W))
                .filter((elem: PitcherInterface) => filters.wildPitches[1] >= Number(elem.WP) && filters.wildPitches[0] <= Number(elem.WP))
                // Filter by Search
                .filter((elem: PitcherInterface) => {
                    if (!searchTerm) return elem
                    return elem.Team?.toLowerCase().includes(searchTerm.toLowerCase()) || (elem.firstName + " " + elem.lastName)?.toLowerCase().includes(searchTerm.toLowerCase())
                })

                .sort((a, b) => {
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
    }, [data,
        filters.appearances,
        filters.completeGames,
        filters.earnedRunAverage,
        filters.earnedRuns,
        filters.gamesStarted,
        filters.hitByPitches,
        filters.hits,
        filters.inningsPitched,
        filters.losses,
        filters.opposingBattingAverage,
        filters.runs,
        filters.saves,
        filters.shutouts,
        filters.strikeouts,
        filters.walks,
        filters.wildPitches,
        filters.wins,
        searchTerm,
        sort.column,
        sort.order
    ])

    return filteredData
}