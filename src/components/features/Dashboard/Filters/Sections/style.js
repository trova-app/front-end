import styled from 'styled-components'
import { colors } from '../../../../../styles/colors'

export const Container = styled.div`
    width: 100%;
    padding-left: 8px;
    padding-right: 12px;
`

export const Header = styled.div`
    position: relative;
    padding: 14px 0;
    color: ${colors.gray};
    font-family: "Nunito";
    font-size: 18px;
    cursor: pointer;
    user-select: none;
`

export const HR = styled.hr`
    position: relative;
    left: -5%;
    width: 82%;
    height: 1px;
    margin: 0 auto;
    margin-top: ${props => props.isOpen ? "12px" : "0"};
    border-width: 0;
    background-color: ${colors.lightGrayOpacity20};
`