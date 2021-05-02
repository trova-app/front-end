// This component was written with the onClick meant to be a redux action. It may not work using a more basic function flow
// Or it might, who knows.

import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    color: ${colors.gray};
    font-family: "Nunito";
    font-size: 20px;
    user-select: none;
`

export const Button = styled.button`
    appearance: none;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 4px;
    border: none;
    background-color: ${props => props.isSelected ? colors.lightBlue : colors.gray};
    cursor: pointer;
`

const Checkbox = ({
    label,
    isSelected,
    onClick
}) => {
    return (
        <Label
            onClick={(e) => {
                e.preventDefault()
                onClick()
            }}
        >
            <Button isSelected={isSelected} />
            {label}
        </Label>
    )
}

export default Checkbox