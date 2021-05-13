import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const usePitcherRows = () => {
    const [filteredData, setFilteredData] = useState([])
    const data = useSelector(state => state.data.dataset)
    const filters = useSelector(state => state.filters.pitcherFilters)
    const sort = useSelector(state => state.filters.sort.pitcher)
    const searchTerm = useSelector(state => state.search.term)

    useEffect(() => {

        setFilteredData(data
            // Filter by Position
            .filter(elem => elem.position === "P")
            // Filter by Stats
            .filter(elem => filters.appearances[1] >= Number(elem.APP) && filters.appearances[0] <= Number(elem.APP))
            .filter(elem => filters.walks[1] >= Number(elem.BB) && filters.walks[0] <= Number(elem.BB))
            .filter(elem => filters.completeGames[1] >= Number(elem.CG) && filters.completeGames[0] <= Number(elem.CG))
            .filter(elem => filters.earnedRuns[1] >= Number(elem.ER) && filters.earnedRuns[0] <= Number(elem.ER))
            .filter(elem => filters.earnedRunAverage[1] >= Number(elem.ERA) && filters.earnedRunAverage[0] <= Number(elem.ERA))
            .filter(elem => filters.gamesStarted[1] >= Number(elem.GS) && filters.gamesStarted[0] <= Number(elem.GS))
            .filter(elem => filters.hits[1] >= Number(elem.H) && filters.hits[0] <= Number(elem.H))
            .filter(elem => filters.hitByPitches[1] >= Number(elem.HP) && filters.hitByPitches[0] <= Number(elem.HP))
            .filter(elem => filters.inningsPitched[1] >= Number(elem.IP) && filters.inningsPitched[0] <= Number(elem.IP))
            .filter(elem => filters.losses[1] >= Number(elem.L) && filters.losses[0] <= Number(elem.L))
            .filter(elem => filters.opposingBattingAverage[1] >= Number(elem.OBA) && filters.opposingBattingAverage[0] <= Number(elem.OBA))
            .filter(elem => filters.runs[1] >= Number(elem.R) && filters.runs[0] <= Number(elem.R))
            .filter(elem => filters.shutouts[1] >= Number(elem.SHO) && filters.shutouts[0] <= Number(elem.SHO))
            .filter(elem => filters.strikeouts[1] >= Number(elem.SO) && filters.strikeouts[0] <= Number(elem.SO))
            .filter(elem => filters.saves[1] >= Number(elem.SV) && filters.saves[0] <= Number(elem.SV))
            .filter(elem => filters.wins[1] >= Number(elem.W) && filters.wins[0] <= Number(elem.W))
            .filter(elem => filters.wildPitches[1] >= Number(elem.WP) && filters.wildPitches[0] <= Number(elem.WP))
            // Filter by Search
            .filter(elem => {
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