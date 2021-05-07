import PropTypes from 'prop-types'
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
const FormLabel = ({ htmlFor, children, ...props }) => {
    return (
        <Label htmlFor={htmlFor}>{children}</Label>
    )
}

FormLabel.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default FormLabel