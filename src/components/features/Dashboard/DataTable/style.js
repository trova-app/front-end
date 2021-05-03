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
    table-layout: fixed;
`

export const Header = styled.thead`
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
            width: 100px;
            background-color: ${colors.white};
            cursor: pointer;
            user-select: none;
            overflow: hidden;

            &:hover {
                background-color: ${colors.lightGray};
            }

            &:first-of-type {
                position: sticky;
                left: 0;
                width: 200px;
                z-index: 1;
            }

            &:nth-of-type(2) {
                width: 200px;
            }

            &:nth-of-type(3) {
                width: 150px;
            }
        }
    }
`

export const Body = styled.tbody`
    height: 100%;
    color: ${colors.darkGray};
    font-family: "Nunito";
    font-size: 20px;
    text-align: center;
`

export const Row = styled.tr`
    &:hover {
        background-color: ${colors.lightGray};
    }

    td {
    border-bottom: 1px solid ${colors.lightGray};
    line-height: 48px;
    white-space: nowrap;
    cursor: default;
    overflow: hidden;
    }
`

export const Name = styled.td`
    position: sticky;
    width: 200px;
    left: 0;
    padding-left: 16px;
    background-color: ${colors.white};
    text-align: left;

    &:hover {
        background-color: ${colors.lightGray};
    }
`