import { connect } from 'react-redux'

import * as Styled from './style'
import { colors } from '../../../../styles/colors'

import { setOffensiveSort } from '../../../../redux/slices/filters'

import { useHitterRows } from '../../../../hooks/useHitterRows'

import Placeholder from './Placeholder'
import SVG from '../../../svg'

const headers = [
    ["lastName", "Name"],
    ["Team"],
    ["position", "Pos"],
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

const DataTable = ({
    sort,
    setOffensiveSort
}) => {
    const rows = useHitterRows()

    return (
        <Styled.Container>
            {rows.length === 0 && <Placeholder />}
            {rows.length !== 0 &&
                <Styled.Table>
                    <Styled.Header>
                        <tr>
                            {headers.map(elem => (
                                <th
                                    key={elem[0]}
                                    onClick={() => setOffensiveSort(elem[0])}
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
                            ))
                            }
                        </tr>
                    </Styled.Header>
                    <Styled.Body>
                        {rows.length !== 0 && rows.map(elem => {
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
            }
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
    { setOffensiveSort }
)(DataTable)