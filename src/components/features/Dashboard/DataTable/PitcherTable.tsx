import * as Styled from './style'
import { colors } from '../../../../styles/colors'

import { setPitcherSort } from '../../../../redux/slices/filters'

import { usePitcherRows } from '../../../../hooks/usePitcherRows'
import { useSelector } from '../../../../hooks/redux/useSelector'
import { useDispatch } from '../../../../hooks/redux/useDispatch'

import Placeholder from './Placeholder'
import SVG from '../../../svg'

const headers = [
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
    ["hRate", "H%"],
    ["OBA"],
    ["SO"],
    ["BB"],
    ["soTObb", "K/BB"],
    ["kRate", "K%"],
    ["bbRate", "BB%"],
    ["HP"],
    ["CG"],
    ["SHO"],
    ["WP"]
]

const DataTable: React.FC = () => {
    const sort = useSelector(state => state.filters.sort.pitcher)
    const dispatch = useDispatch()
    const rows = usePitcherRows()

    return (
        <Styled.Container>
            {rows.length === 0 && <Placeholder />}
            {rows.length !== 0 &&
                <Styled.Table>
                    <Styled.Header>
                        <tr>
                            {headers.map(elem => {
                                return (
                                    <th
                                        key={elem[0]}
                                        onClick={() => dispatch(setPitcherSort(elem[0]))}
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
                        {rows.map(elem => {
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
                                    <td>{elem.hRate.toFixed(1)}%</td>
                                    <td>{elem.OBA.toFixed(3)}</td>
                                    <td>{elem.SO}</td>
                                    <td>{elem.BB}</td>
                                    <td>{elem.soTObb.toFixed(1)}</td>
                                    <td>{elem.kRate.toFixed(1)}%</td>
                                    <td>{elem.bbRate.toFixed(1)}%</td>
                                    <td>{elem.HP}</td>
                                    <td>{elem.CG}</td>
                                    <td>{elem.SHO}</td>
                                    <td>{elem.WP}</td>
                                </Styled.Row>
                            )
                        })}
                    </Styled.Body>
                </Styled.Table>
            }
        </Styled.Container>
    )
}

export default DataTable