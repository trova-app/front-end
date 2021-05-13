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
    cursor: pointer;
`

export const Form = styled.form`
    margin: 2%;
    padding: 2%;
    border: 2px solid ${colors.white};
    border-radius: 24px;
`

export const Textarea = styled.textarea`
    display: block;
    width: 50%;
    max-width: 60vw;
    margin-bottom: 32px;
    padding: 14px 18px;
    border: 2px solid ${colors.white};
    background-color: transparent;
    border-radius: 32px;
    color: ${colors.white};
    font-size: 20px;
    font-family: "Nunito";
    outline: none;
`

export const FileUploadLabel = styled.label`
    margin-right: 24px;
    padding: 12px 24px;
    border: none;
    border-radius: 24px;
    background-color: ${colors.lightBlue};
    color: ${colors.white};
    font-family: "Nunito";
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
`

export const FileUploadName = styled.span`
    margin-right: 48px;
    color: ${colors.white};
    font-family: "Nunito";
    font-size: 18px;
    font-weight: 700;
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

    &:disabled {
        cursor: initial;
        opacity: .1;
    }
`

export const Error = styled.p`
    padding-bottom: 24px;
    color: ${colors.red};
    font-family: "Nunito";
    font-size: 24px;
    font-weight: 700;
`

export const UploadSuccess = styled.span`
    margin-left: 5%;
    color: ${colors.white};
    font-size: 24px;
    font-family: "Nunito";
    font-weight: 700;
`