import { useEffect } from 'react'
import { connect } from 'react-redux'

import * as Styled from './style'
import { colors } from '../../../../styles/colors'

import { setData } from '../../../../redux/slices/data'
import { setOffensiveSort } from '../../../../redux/slices/filters'

import SVG from '../../../svg'

const DataTable = ({
    data,
    setData,
    positionFilter,
    statFilters,
    searchTerm,
    sort,
    setOffensiveSort
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
                                        onClick={() => setOffensiveSort(elem[0])}
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
                        .filter(elem => positionFilter[elem.position])
                        // Filter by Stats
                        .filter(elem => statFilters.gamesPlayed[1] >= Number(elem.GP) && statFilters.gamesPlayed[0] <= Number(elem.GP))
                        .filter(elem => statFilters.atBats[1] >= Number(elem.AB) && statFilters.atBats[0] <= Number(elem.AB))
                        .filter(elem => statFilters.battingAverage[1] >= Number(elem.AVG) && statFilters.battingAverage[0] <= Number(elem.AVG))
                        .filter(elem => statFilters.onBasePercentage[1] >= Number(elem.OBP) && statFilters.onBasePercentage[0] <= Number(elem.OBP))
                        .filter(elem => statFilters.onBasePlusSlugging[1] >= Number(elem.OPS) && statFilters.onBasePlusSlugging[0] <= Number(elem.OPS))
                        .filter(elem => statFilters.runs[1] >= Number(elem.R) && statFilters.runs[0] <= Number(elem.R))
                        .filter(elem => statFilters.hits[1] >= Number(elem.H) && statFilters.hits[0] <= Number(elem.H))
                        .filter(elem => statFilters.doubles[1] >= Number(elem["2B"]) && statFilters.doubles[0] <= Number(elem["2B"]))
                        .filter(elem => statFilters.triples[1] >= Number(elem["3B"]) && statFilters.triples[0] <= Number(elem["3B"]))
                        .filter(elem => statFilters.homeRuns[1] >= Number(elem["HR"]) && statFilters.homeRuns[0] <= Number(elem["HR"]))
                        .filter(elem => statFilters.rbi[1] >= Number(elem.RBI) && statFilters.rbi[0] <= Number(elem.RBI))
                        .filter(elem => statFilters.walks[1] >= Number(elem["BB"]) && statFilters.walks[0] <= Number(elem["BB"]))
                        .filter(elem => statFilters.strikeouts[1] >= Number(elem["SO"]) && statFilters.strikeouts[0] <= Number(elem["SO"]))
                        .filter(elem => statFilters.stolenBases[1] >= Number(elem["SB"]) && statFilters.stolenBases[0] <= Number(elem["SB"]))
                        .filter(elem => statFilters.caughtStealing[1] >= Number(elem["CS"]) && statFilters.caughtStealing[0] <= Number(elem["CS"]))
                        .filter(elem => statFilters.hitByPitches[1] >= Number(elem["HP"]) && statFilters.hitByPitches[0] <= Number(elem["HP"]))
                        // Filter by Search
                        .filter(elem => {
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
                        .map(elem => {
                            return (
                                <Styled.Row key={"" + elem.firstName + elem.lastName + elem.Team}>
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
        positionFilter: state.filters.positions,
        statFilters: state.filters.offensiveFilters,
        sort: state.filters.sort.offensive,
        searchTerm: state.search.term
    }),
    { setData, setOffensiveSort }
)(DataTable)