import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

const Input = styled.input`
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

const FormInput = (props) => (
    <Input {...props} />
)
export default FormInput