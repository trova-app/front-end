import { useState, useEffect } from 'react'

import * as Styled from './style'

const DataTable = ({ ...props }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`https://trova-data-bucket-a1-dev.s3-us-west-1.amazonaws.com/players.json`)
            .then(res => res.json())
            .then(res => {
                setData(res)
            })
    }, [])

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
                    {data.slice(0, 100).map(elem => {
                        const nameSplit = elem.Player?.split(" ") || ["?", "?"]
                        const name = `${nameSplit[1]}, ${nameSplit[0][0]}`


                        return (
                            <tr key={"" + elem.Player + elem.Team}>
                                <td>{name}</td>
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
                            </tr>
                        )
                    })}
                </Styled.TableBody>
            </Styled.Table>
            {/* {JSON.stringify(data)} */}
        </Styled.Container>
    )
}

export default DataTable