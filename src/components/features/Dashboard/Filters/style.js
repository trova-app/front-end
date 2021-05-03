import styled from 'styled-components'
import { colors } from '../../../../styles/colors'

export const Container = styled.div`
    position: relative;
    width: 20vw;
    height: 100%;
    padding-top: 48px;
    padding-left: 2vw;
`

export const Header = styled.h2`
    position: absolute;
    top: 2px;
    left: 28px;
    height: 36px;
    color: ${colors.gray};
    font-family: "Nunito";
    font-size: 24px;
`

export const ClearFilters = styled.button`
    appearance: none;
    position: absolute;
    top: 0;
    right: 12px;
    padding: 8px;
    border: none;
    border-radius: 12px;
    background-color: transparent;
    color: ${colors.lightBlue};
    font-family: "Nunito";
    font-size: 18px;
    cursor: pointer;
    transition: .2s;

    &:hover {
        background-color: ${colors.lightBlue};
        color: ${colors.white};
    }
`

export const Scrollable = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: visible;
    overflow-y: auto;
`