import styled from 'styled-components'
import { colors } from '../../../../../styles/colors'

type IsShowingPitchers = {
    isShowingPitchers: boolean
}

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 36px;
    margin: 0 auto;
    margin-bottom: 5%;
    border-radius: 12px;
    background-color: ${colors.lightestBlue};
`

export const HighlighterBox = styled.div<IsShowingPitchers>`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${props => props.isShowingPitchers === true ? "1%" : "49%"};
    width: 50%;
    height: 30px;
    border-radius: 14px;
    background-color: ${colors.lightBlue};
    transition: .2s;
`

export const Pitchers = styled.button<IsShowingPitchers>`
    appearance: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    border: none;
    background-color: transparent;
    color: ${props => props.isShowingPitchers === true ? colors.white : colors.gray};
    font-family: "Nunito";
    font-size: 18px;
    cursor: pointer;
    transition: .2s;
    outline: none;
`

export const Hitters = styled.button<IsShowingPitchers>`
    appearance: none;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 50%;
    border: none;
    background-color: transparent;
    color: ${props => props.isShowingPitchers === false ? colors.white : colors.gray};
    font-family: "Nunito";
    font-size: 18px;
    cursor: pointer;
    transition: .2s;
    outline: none;
`