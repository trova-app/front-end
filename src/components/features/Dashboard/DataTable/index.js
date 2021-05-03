import { useEffect } from 'react'
import { connect } from 'react-redux'

import * as Styled from './style'
import { colors } from '../../../../styles/colors'

import { setData } from '../../../../redux/slices/data'
import { setSort } from '../../../../redux/slices/filters'

import SVG from '../../../svg'

const DataTable = ({
    data,
    setData,
    filters,
    searchTerm,
    sort,
    setSort
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
                                ["position", "Position"],
                                ["GP", "GP"],
                                ["AB"],
                                ["AVG"],
                                ["OBP"],
                                ["OPS"],
                                ["R"],
                                ["H"],
                                ["2B"],
                                ["3B"],
                                ["HR"],
                                ["RBI"],
                                ["BB"],
                                ["SO"],
                                ["SB"],
                                ["CS"],
                                ["HP"]
                            ]
                                .map(elem => (
                                    <th
                                        key={elem[0]}
                                        onClick={() => setSort(elem[0])}
                                    >
                                        {elem[1] || elem[0]}
                                        {
                                            sort.column === elem[0]
                                            &&
                                            <SVG.Carat
                                                fill={colors.gray}
                                                style={{
                                                    position: "absolute",
                                                    top: "10px",
                                                    right: "6px",
                                                    width: "16px",
                                                    transform: sort.order === "DESC" && "rotate(180deg)"
                                                }}
                                            />
                                        }
                                    </th>
                                ))
                        }
                    </tr>
                </Styled.Header>
                <Styled.Body>
                    {data
                        // Filter by Position
                        .filter(elem => filters.positions[elem.position])
                        // Filter by Stats
                        .filter(elem => filters.gamesPlayed[1] >= Number(elem.GP) && filters.gamesPlayed[0] <= Number(elem.GP))
                        .filter(elem => filters.atBats[1] >= Number(elem.AB) && filters.atBats[0] <= Number(elem.AB))
                        .filter(elem => filters.battingAverage[1] >= Number(elem.AVG) && filters.battingAverage[0] <= Number(elem.AVG))
                        .filter(elem => filters.onBasePercentage[1] >= Number(elem.OBP) && filters.onBasePercentage[0] <= Number(elem.OBP))
                        .filter(elem => filters.onBasePlusSlugging[1] >= Number(elem.OPS) && filters.onBasePlusSlugging[0] <= Number(elem.OPS))
                        .filter(elem => filters.runs[1] >= Number(elem.R) && filters.runs[0] <= Number(elem.R))
                        .filter(elem => filters.hits[1] >= Number(elem.H) && filters.hits[0] <= Number(elem.H))
                        .filter(elem => filters.doubles[1] >= Number(elem["2B"]) && filters.doubles[0] <= Number(elem["2B"]))
                        .filter(elem => filters.triples[1] >= Number(elem["3B"]) && filters.triples[0] <= Number(elem["3B"]))
                        .filter(elem => filters.homeRuns[1] >= Number(elem["HR"]) && filters.homeRuns[0] <= Number(elem["HR"]))
                        .filter(elem => filters.rbi[1] >= Number(elem.RBI) && filters.rbi[0] <= Number(elem.RBI))
                        .filter(elem => filters.walks[1] >= Number(elem["BB"]) && filters.walks[0] <= Number(elem["BB"]))
                        .filter(elem => filters.strikeouts[1] >= Number(elem["SO"]) && filters.strikeouts[0] <= Number(elem["SO"]))
                        .filter(elem => filters.stolenBases[1] >= Number(elem["SB"]) && filters.stolenBases[0] <= Number(elem["SB"]))
                        .filter(elem => filters.caughtStealing[1] >= Number(elem["CS"]) && filters.caughtStealing[0] <= Number(elem["CS"]))
                        .filter(elem => filters.hitByPitches[1] >= Number(elem["HP"]) && filters.hitByPitches[0] <= Number(elem["HP"]))
                        // Filter by Search
                        .filter(elem => {
                            if (!searchTerm) return elem
                            return elem.Team?.toLowerCase().includes(searchTerm.toLowerCase()) || (elem.firstName + " " + elem.lastName)?.toLowerCase().includes(searchTerm.toLowerCase())
                        })

                        .sort((a, b) => {
                            if (["lastName", ["Team", "Team"], "position"].includes(sort.column)) {
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
                                    <td>{elem.position}</td>
                                    <td>{elem.GP}</td>
                                    <td>{elem.AB}</td>
                                    <td>{elem.AVG.toFixed(3)}</td>
                                    <td>{elem.OBP.toFixed(3)}</td>
                                    <td>{elem.OPS.toFixed(3)}</td>
                                    <td>{elem.R}</td>
                                    <td>{elem.H}</td>
                                    <td>{elem["2B"]}</td>
                                    <td>{elem["3B"]}</td>
                                    <td>{elem["HR"]}</td>
                                    <td>{elem["RBI"]}</td>
                                    <td>{elem["BB"]}</td>
                                    <td>{elem["SO"]}</td>
                                    <td>{elem["SB"]}</td>
                                    <td>{elem["CS"]}</td>
                                    <td>{elem["HP"]}</td>
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
        filters: state.filters,
        sort: state.filters.sort,
        searchTerm: state.search.term
    }),
    { setData, setSort }
)(DataTable)