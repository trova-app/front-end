import { useEffect } from 'react'
import { connect } from 'react-redux'

import * as Styled from './style'
import { colors } from '../../../../styles/colors'

import { setData } from '../../../../redux/slices/data'
import { setPitcherSort } from '../../../../redux/slices/filters'

import SVG from '../../../svg'

const DataTable = ({
    data,
    setData,
    filters,
    searchTerm,
    sort,
    setPitcherSort
}) => {
    useEffect(() => {
        if (data.length === 0)
            fetch(`https://trova-data-bucket-a1-dev.s3-us-west-1.amazonaws.com/players.json`)
                .then(res => res.json())
                .then(res => {
                    setData(res)
                })
    }, [data, setData])

    return (
        <Styled.Container>
            <Styled.Table>
                <Styled.Header>
                    <tr>
                        {
                            [
                                ["lastName", "Name"],
                                ["Team"],
                                ["APP"],
                                ["GS"],
                                ["W"],
                                ["L"],
                                ["SV"],
                                ["IP"],
                                ["ERA"],
                                ["ER"],
                                ["R"],
                                ["H"],
                                ["OBA"],
                                ["SO"],
                                ["BB"],
                                ["HP"],
                                ["CG"],
                                ["SHO"],
                                ["WP"]
                            ]
                                .map(elem => {
                                    return (
                                        <th
                                            key={elem[0]}
                                            onClick={() => setPitcherSort(elem[0])}
                                        >
                                            {elem[1] || elem[0]}
                                            {
                                                sort.column === elem[0]
                                                &&
                                                <SVG.Triangle
                                                    fill={colors.gray}
                                                    style={{
                                                        position: "absolute",
                                                        top: "6px",
                                                        right: "6px",
                                                        width: "16px",
                                                        transform: sort.order === "ASC" && "rotate(180deg)"
                                                    }}
                                                />
                                            }
                                        </th>
                                    )
                                })
                        }
                    </tr>
                </Styled.Header>
                <Styled.Body>
                    {data
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
                        .map(elem => {
                            return (
                                <Styled.Row key={"" + elem.firstName + elem.lastName + [elem.Team, "Team"]}>
                                    <Styled.Name>{`${elem.lastName}, ${elem.firstName[0]}.`}</Styled.Name>
                                    <td>{elem.Team}</td>
                                    <td>{elem.APP}</td>
                                    <td>{elem.GS}</td>
                                    <td>{elem.W}</td>
                                    <td>{elem.L}</td>
                                    <td>{elem.SV}</td>
                                    <td>{elem.IP.toFixed(1)}</td>
                                    <td>{elem.ERA.toFixed(2)}</td>
                                    <td>{elem.ER}</td>
                                    <td>{elem.R}</td>
                                    <td>{elem.H}</td>
                                    <td>{elem.OBA.toFixed(3)}</td>
                                    <td>{elem.SO}</td>
                                    <td>{elem.BB}</td>
                                    <td>{elem.HP}</td>
                                    <td>{elem.CG}</td>
                                    <td>{elem.SHO}</td>
                                    <td>{elem.WP}</td>
                                </Styled.Row>
                            )
                        })}
                </Styled.Body>
            </Styled.Table>
        </Styled.Container>
    )
}

export default connect(
    state => ({
        data: state.data.dataset,
        filters: state.filters.pitcherFilters,
        sort: state.filters.sort.pitcher,
        searchTerm: state.search.term
    }),
    { setData, setPitcherSort }
)(DataTable)