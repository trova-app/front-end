import { useState } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../index'
import RangeInput from '../../../../../shared/RangeInput'

import { setBounds } from '../../../../../../redux/slices/filters'

const GamesPlayed = ({ gamesPlayed, setBounds }) => {
    const [values, setValues] = useState(gamesPlayed)

    return (
        <SectionContainer header="GP">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={100}
                values={values}
                setValues={setValues}
                setFinalValues={() => setBounds({
                    key: "gamesPlayed",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        gamesPlayed: state.filters.gamesPlayed
    }),
    { setBounds }
)(GamesPlayed)