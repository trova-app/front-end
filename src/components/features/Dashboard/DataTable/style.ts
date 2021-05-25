import styled from 'styled-components'
import { colors } from '../../../../styles/colors'

export const Container = styled.div`
    position: absolute;
    top: 5vh;
    bottom: 0;
    right: 0;
    width: 78.5vw;
    max-height: 94%;
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
    font-size: 18px;
    text-align: center;
    overflow: auto;

    tr {
        th {
            position: sticky;
            top: 0;
            width: 93px;
            background-color: ${colors.white};
            cursor: pointer;
            user-select: none;
            overflow: hidden;

            &:hover {
                background-color: ${colors.lightestBlue};
            }

            &:first-of-type {
                position: sticky;
                left: 0;
                width: 175px;
                z-index: 1;
            }

            &:nth-of-type(2) {
                width: 175px;
            }
        }
    }
`

export const Body = styled.tbody`
    height: 100%;
    color: ${colors.darkGray};
    font-family: "Nunito";
    font-size: 18px;
    text-align: center;
`

export const Row = styled.tr`
    &:hover {
        background-color: ${colors.lightestBlue};
    }

    td {
    border-bottom: 1px solid ${colors.lightestBlue};
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

    &:hover {
        background-color: ${colors.lightestBlue};
    }
`