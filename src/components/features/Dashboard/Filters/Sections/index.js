import { useState } from 'react'
import PropTypes from 'prop-types'
import * as Styled from './style'
import { colors } from '../../../../../styles/colors'

import SVG from '../../../../svg'

const Section = ({ header, children }) => {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <Styled.Container isOpen={isOpen}>
            <Styled.Header onClick={() => setIsOpen(!isOpen)}>
                {header}
                <SVG.Carat
                    fill={colors.gray}
                    style={{
                        position: "absolute",
                        top: "45%",
                        right: "5%",
                        width: "5%",
                        transform: `rotate(${isOpen ? "0deg" : "180deg"})`
                    }} />
            </Styled.Header>
            {isOpen ? children : null}
        </Styled.Container>
    )
}

Section.propTypes = {
    header: PropTypes.string.isRequired
}

export default Section