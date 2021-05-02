import styled from 'styled-components'
import { colors } from '../../../../styles/colors'

export const Container = styled.div`
    position: relative;
    width: 80vw;
    max-height: 100%;
    margin-left: 12px;
    overflow: auto;
`

export const Table = styled.table`
    width: 100%;
    height: 100%;
`

export const TableHead = styled.thead`
    color: ${colors.gray};
    font-family: "Nunito";
    font-weight: 400;
    font-size: 22px;
    text-align: center;
    overflow: auto;

    tr {
        th {
            position: sticky;
            top: 0;
            padding: 0 30px;
            background-color: ${colors.white};

            &:first-of-type {
                position: sticky;
                left: 0;
                padding: 0 5px;
                z-index: 1;
            }
        }
    }
`

export const TableBody = styled.tbody`
    height: 100%;
    color: ${colors.darkGray};
    font-family: "Nunito";
    font-size: 20px;
    text-align: center;
`

export const TableRow = styled.tr`
    &:hover {
        background-color: ${colors.lightGray};
    }

    td {
    border-bottom: 1px solid ${colors.lightGray};
    line-height: 48px;
    white-space: nowrap;
    cursor: default;
    }
`

export const TableName = styled.td`
    position: sticky;
    display: block;
    width: 200px;
    left: 0;
    padding-left: 16px;
    background-color: ${colors.white};
    text-align: left;

    &:hover {
        background-color: ${colors.lightGray};
    }
`