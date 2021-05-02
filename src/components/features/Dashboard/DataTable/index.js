import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import * as Styled from './style'

const DataTable = ({ filters }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://trova-data-bucket-a1-dev.s3-us-west-1.amazonaws.com/players.json`)
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
    }, [])

    // const filterTester = (key, elem, value) => filters[key][1] > Number(elem[value] && filters[key][0] < Number(elem[value]))

    return (
        <Styled.Container>
            <Styled.Table>
                <Styled.TableHead>
                    <tr>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Position</th>
                        <th>GP</th>
                        <th>AB</th>
                        <th>AVG</th>
                        <th>OBP</th>
                        <th>OPS</th>
                        <th>R</th>
                        <th>H</th>
                        <th>2B</th>
                        <th>3B</th>
                        <th>HR</th>
                        <th>RBI</th>
                        <th>BB</th>
                        <th>SO</th>
                        <th>SB</th>
                        <th>CS</th>
                        <th>HP</th>
                    </tr>
                </Styled.TableHead>
                <Styled.TableBody>
                    {data
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
                        .slice(0, 100)
                        .map(elem => {
                            const nameSplit = elem.Player?.split(" ") || ["?", "?"]
                            const name = `${nameSplit[1]}, ${nameSplit[0][0]}.`

                            return (
                                <Styled.TableRow key={"" + elem.Player + elem.Team}>
                                    <Styled.TableName>{name}</Styled.TableName>
                                    <td>{elem.Team}</td>
                                    <td>{elem.POS}</td>
                                    <td>{elem.GP}</td>
                                    <td>{elem.AB}</td>
                                    <td>{elem.AVG}</td>
                                    <td>{elem.OBP}</td>
                                    <td>{elem.OPS}</td>
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
                                </Styled.TableRow>
                            )
                        })}
                </Styled.TableBody>
            </Styled.Table>
            {/* {JSON.stringify(data)} */}
        </Styled.Container>
    )
}

export default connect(
    state => ({
        filters: state.filters
    }),
    null
)(DataTable)