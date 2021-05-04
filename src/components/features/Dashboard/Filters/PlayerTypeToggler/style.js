import styled from 'styled-components'
import { colors } from '../../../../../styles/colors'

export const Wrapper = styled.div`
    position: relative;
    height: 36px;
    border-radius: 12px;
    background-color: ${colors.lightGray};
`

export const HighlighterBox = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${props => props.value === true ? "1%" : "49%"};
    width: 50%;
    height: 30px;
    border-radius: 10px;
    background-color: ${colors.lightBlue};
    transition: .2s;
`

export const Pitchers = styled.button`
    appearance: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    border: none;
    background-color: transparent;
    color: ${props => props.value === true ? colors.white : colors.gray};
    font-family: "Nunito";
    font-size: 18px;
    cursor: pointer;
    transition: .2s;
    outline: none;
`

export const Hitters = styled.button`
    appearance: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 50%;
    border: none;
    background-color: transparent;
    color: ${props => props.value === false ? colors.white : colors.gray};
    font-family: "Nunito";
    font-size: 18px;
    cursor: pointer;
    transition: .2s;
    outline: none;
`