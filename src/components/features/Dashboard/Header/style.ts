import styled from 'styled-components'
import { colors } from '../../../../styles/colors'

type HasSearchTerm = {
    hasSearchTerm: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 18vh;
    padding: 1.5% 3%;
`

export const SearchForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 2.5%;
    flex: 1;
    position: relative;
`

export const SearchInput = styled.input`
    width: 100%;
    padding: 12px 24px;
    border-radius: 24px;
    border: 1px solid rgba(68, 113, 209, .25);
    background-color: ${colors.lightestBlue};
    color: ${colors.lightBlue};
    font-family: "Nunito";
    font-size: 18px;
    font-weight: 400;
    outline: none;

    &::placeholder {
        color: ${colors.lightBlue};
        opacity: .6;
    }
`

export const SearchButton = styled.button<HasSearchTerm>`
    appearance: none;
    position: absolute;
    right: 4px;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background-color: ${props => props.hasSearchTerm ? colors.lightBlue : "transparent"};
    cursor: pointer;
    transition: .2s;
`

export const Button = styled.div`
    appearance: none;
    padding: 12px 32px;
    border: 2px solid ${colors.lightBlue};
    border-radius: 24px;
    color: ${colors.lightBlue};
    font-family: "Nunito";
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 4px;
    cursor: pointer;
    transition: .2s;

    &:hover {
        background-color: ${colors.lightBlue};
        color: ${colors.white};
    }
`