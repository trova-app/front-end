import { useState } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../index'
import RangeInput from '../../../../../shared/RangeInput'

import { setBounds } from '../../../../../../redux/slices/filters'

const Doubles = ({ doubles, setBounds }) => {
    const [values, setValues] = useState(doubles)

    return (
        <SectionContainer header="2B">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={250}
                values={values}
                setValues={setValues}
                setFinalValues={() => setBounds({
                    key: "doubles",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        doubles: state.filters.doubles
    }),
    { setBounds }
)(Doubles)