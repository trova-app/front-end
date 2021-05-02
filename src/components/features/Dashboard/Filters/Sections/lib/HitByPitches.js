import { useState } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../index'
import RangeInput from '../../../../../shared/RangeInput'

import { setBounds } from '../../../../../../redux/slices/filters'

const HitByPitches = ({ hitByPitches, setBounds }) => {
    const [values, setValues] = useState(hitByPitches)

    return (
        <SectionContainer header="HP">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={100}
                values={values}
                setValues={setValues}
                setFinalValues={() => setBounds({
                    key: "hitByPitches",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        hitByPitches: state.filters.hitByPitches
    }),
    { setBounds }
)(HitByPitches)