import styled from 'styled-components'
import { colors } from '../../styles/colors'

const Label = styled.label`
    display: block;
    margin-bottom: 12px;
    color: ${colors.white};
    font-family: "Nunito";
    font-weight: 700;
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 4px;
`
interface Props {
    htmlFor: string,
    children: JSX.Element | string
}

const FormLabel: React.FC<Props> = ({
    htmlFor,
    children
}) => {
    return (
        <Label htmlFor={htmlFor}>{children}</Label>
    )
}

export default FormLabel