import { useState } from 'react'
import * as Styled from './style'
import { colors } from '../../../../../styles/colors'

import SVG from '../../../../svg'

interface Props {
    title: string,
    children: JSX.Element
}

const Section: React.FC<Props> = ({
    title,
    children
}) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Styled.Container>
            <Styled.Header onClick={() => setIsOpen(!isOpen)}>
                {title}
                <SVG.Carat
                    fill={colors.gray}
                    style={{
                        position: "absolute",
                        top: "45%",
                        right: "10%",
                        width: "6%",
                        transform: `rotate(${isOpen ? "0deg" : "180deg"})`
                    }} />
            </Styled.Header>
            {isOpen ? children : null}
            <Styled.HR isOpen={isOpen} />
        </Styled.Container>
    )
}

export default Section