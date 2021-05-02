import { useState } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../index'
import RangeInput from '../../../../../shared/RangeInput'

import { setBounds } from '../../../../../../redux/slices/filters'

const AtBats = ({ atBats, setBounds }) => {
    const [values, setValues] = useState(atBats)

    return (
        <SectionContainer header="AB">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={350}
                values={values}
                setValues={setValues}
                setFinalValues={() => setBounds({
                    key: "atBats",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        atBats: state.filters.atBats
    }),
    { setBounds }
)(AtBats)