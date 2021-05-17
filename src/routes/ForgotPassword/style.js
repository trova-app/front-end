import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Header = styled.h1`
    margin-top: 2%;
    margin-bottom: 2%;
    color: ${colors.white};
    font-family: "Work Sans";
    font-weight: 600;
    font-size: 52px;
`

export const P = styled.p`
    width: 65%;
    color: ${colors.white};
    margin-bottom: 2%;
    font-family: "Nunito";
    font-weight: 400;
    font-size: 18px;
`

export const Form = styled.form`
    position: relative;
`

export const Submit = styled.button`
    position: absolute;
    top: 22.5%;
    right: 12.5%;
    appearance: none;
    padding: 24px;
    border: none;
    border-radius: 48px;
    background-color: ${props => props.isError ? colors.red : colors.slateBlue};
    color: ${colors.white};
    font-family: "Nunito";
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 4px;
    transition: .2s;
    opacity: ${props => props.isSubmitting && ".2"};

    &:hover {
    background-color: ${props => props.isError ? colors.red : colors.white};
    color: ${colors.slateBlue};
    cursor: pointer;
    }
`

export const Error = styled.p`
    height: 27px;
    margin-bottom: 36px;
    color: ${colors.red};
    font-family: "Nunito";
    font-weight: 700;
    font-size: 20px;
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