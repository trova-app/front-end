import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Header = styled.h1`
    margin-top: 5%;
    margin-bottom: 5%;
    color: ${colors.white};
    font-family: "Work Sans";
    font-weight: 600;
    font-size: 52px;
`

export const TopBlock = styled.div`
    margin-bottom: 5%;
`

export const Form = styled.form`
    position: relative;
`

export const LoginError = styled.p`
    position: absolute;
    top: 25%;
    left: 53%;
    color: ${colors.red};
    font-family: "Nunito";
    font-weight: 700;
    font-size: 20px;
`

export const Submit = styled.button`
    position: absolute;
    top: 50%;
    right: 22.5%;
    appearance: none;
    width: 245px;
    padding: 24px 76px;
    border: none;
    border-radius: 48px;
    background-color: ${props => props.isError ? colors.red : colors.slateBlue};
    color: ${colors.white};
    font-family: "Nunito";
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 4px;
    cursor: pointer;
    transition: .2s;
`

export const AuxText = styled.span`
    appearance: none;
    display: inline-block;
    margin-right: 12px;
    margin-bottom: 24px;
    color: ${props => props.color || colors.slateBlue};
    font-family: "Nunito";
    font-weight: 400;
    font-size: 24px;
`

export const AuxLink = styled(Link)`
    appearance: none;
    color: ${props => props.color || colors.white};
    font-family: "Nunito";
    font-weight: 400;
    font-size: 24px;

    &:hover {
        text-decoration: underline;
    }
`