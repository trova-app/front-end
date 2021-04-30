import styled from 'styled-components'
import { colors } from '../../../../styles/colors'

export const Container = styled.div`
    width: 80vw;
    height: 100%;
`

export const Table = styled.table`
    width: 100%;
    height: 100%;
`

export const TableHead = styled.thead`
    width: 100%;
    color: ${colors.gray};
    font-family: "Nunito";
    font-weight: 400;
    font-size: 24px;
`

export const TableBody = styled.tbody`
    width: 100%;
    color: ${colors.darkGray};
`