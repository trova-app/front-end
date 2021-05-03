import { useState } from 'react'
import { connect } from 'react-redux'

import * as Styled from './style'

const PlayerTypeToggler = ({ ...props }) => {
    const [value, setValue] = useState("Pitchers")

    return (
        <Styled.Wrapper>
            <Styled.HighlighterBox value={value} />
            <Styled.Pitchers
                onClick={() => setValue("Pitchers")}
                value={value}
            >
                Pitchers
                </Styled.Pitchers>
            <Styled.Hitters
                onClick={() => setValue("Hitters")}
                value={value}
            >
                Hitters
            </Styled.Hitters>

        </Styled.Wrapper>
    )
}

export default connect(
    null,
    null
)(PlayerTypeToggler)