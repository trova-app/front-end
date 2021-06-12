import * as Styled from './style'
import { colors } from '../../../../styles/colors'

import { setOffensiveSort } from '../../../../redux/slices/filters'

import { useHitterRows } from '../../../../hooks/useHitterRows'
import { useSelector } from '../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../hooks/redux/useDispatch'

import Placeholder from './Placeholder'
import SVG from '../../../svg'

const d1Headers = [
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

const jucoHeaders = [
    ["lastName", "Name"],
    ["Team"],
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
]

const DataTable: React.FC = () => {
    const activeDivision = useSelector(state => state.filters.division)
    const sort = useSelector(state => state.filters.sort.offensive)
    const rows = useHitterRows()
    const dispatch = useDispatch()

    const renderD1Headers = () => {
        return d1Headers.map(elem => (
            <th
                key={elem[0]}
                onClick={() => dispatch(setOffensiveSort(elem[0]))}
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

    const renderJucoHeaders = () => {
        return jucoHeaders.map(elem => (
            <th
                key={elem[0]}
                onClick={() => dispatch(setOffensiveSort(elem[0]))}
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

    const renderD1Rows = () => {
        return rows.length !== 0 && rows.map(elem => {
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
        })
    }

    const renderJucoRows = () => {
        return rows.length !== 0 && rows.map(elem => {
            return (
                <Styled.Row key={"" + elem.firstName + elem.lastName + elem.Team}>
                    <Styled.Name>{`${elem.lastName}, ${elem.firstName[0]}.`}</Styled.Name>
                    <td>{elem.Team}</td>
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
                </Styled.Row>
            )
        })
    }

    return (
        <Styled.Container>
            {rows.length === 0 && <Placeholder />}
            {rows.length !== 0 &&
                <Styled.Table>
                    <Styled.Header>
                        <tr>
                            {activeDivision === "d1" && renderD1Headers()}
                            {activeDivision === "juco" && renderJucoHeaders()}
                        </tr>
                    </Styled.Header>
                    <Styled.Body>
                        {activeDivision === "d1" && renderD1Rows()}
                        {activeDivision === "juco" && renderJucoRows()}
                    </Styled.Body>
                </Styled.Table>
            }
        </Styled.Container>
    )
}

export default DataTable