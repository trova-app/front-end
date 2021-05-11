import styled from 'styled-components'
import { colors } from '../../../../styles/colors'

export const Container = styled.div`
    position: relative;
    width: 20vw;
    height: 100%;
    padding-left: 3vw;
`

export const Header = styled.h2`
    height: 36px;
    padding-left: 8px;
    color: ${colors.gray};
    font-family: "Nunito";
    font-size: 18px;
`

export const ClearFilters = styled.button`
    appearance: none;
    position: absolute;
    top: -8px;
    right: 12px;
    padding: 8px;
    border: none;
    border-radius: 12px;
    background-color: transparent;
    color: ${props => props.isDefaultFilters ? "transparent" : colors.lightBlue};
    font-family: "Nunito";
    font-size: 16px;
    cursor: ${props => props.isDefaultFilters ? "initial" : "pointer"};
    transition: .2s;

    &:hover {
        background-color: ${props => props.isDefaultFilters ? "transparent" : colors.lightBlue};
        color: ${props => props.isDefaultFilters ? "transparent" : colors.white};
    }
`

export const Scrollable = styled.div`
    width: 100%;
    height: 89.5%;
    padding-top: 5%;
    overflow-x: visible;
    overflow-y: auto;
`
export const HR = styled.hr`
    position: relative;
    left: -1.5%;
    width: 64.3%;
    height: 1px;
    margin: 0 auto;
    border-width: 0;
    background-color: ${colors.lightGrayOpacity20};
`