import styled from 'styled-components'
import { colors } from '../../../../../styles/colors'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 12px;
`

export const Button = styled.button<{ isActive: boolean }>`
    appearance: none;
    margin: 4px;
    padding: 4px 12px;
    border: none;
    border-radius: 12px;
    background-color: ${props => props.isActive ? colors.lightBlue : colors.lightestBlue};
    color: ${props => props.isActive ? colors.white : colors.gray};
    font-family: "Nunito";
    font-size: 18px;
    cursor: pointer;
    transition: .2s;
`