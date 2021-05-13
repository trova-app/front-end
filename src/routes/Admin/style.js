import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Header = styled.h2`
    margin-bottom: 24px;
    color: ${colors.white};
    font-family: "Nunito";
    font-size: 24px;
    font-weight: 700;
`

export const CloseButton = styled.button`
    display: block;
    appearance: none;
    margin-left: auto;
    padding: 8px 24px;
    border: none;
    border-radius: 12px;
    background-color: ${colors.white};
    color: ${colors.lightBlue};
    font-family: "Nunito";
    font-size: 24px;
    font-weight: 700;
`

export const Form = styled.form`
    margin: 2%;
    padding: 2%;
    border: 2px solid ${colors.white};
    border-radius: 24px;
`

export const SubmitButton = styled.button`
    appearance: none;
    padding: 8px 24px;
    border: none;
    border-radius: 12px;
    background-color: ${colors.white};
    color: ${colors.lightBlue};
    font-family: "Nunito";
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
`

export const Error = styled.p`
    padding-bottom: 24px;
    color: ${colors.red};
    font-family: "Nunito";
    font-size: 24px;
    font-weight: 700;
`