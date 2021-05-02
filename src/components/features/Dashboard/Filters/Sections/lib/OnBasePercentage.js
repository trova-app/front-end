import { useState } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../index'
import RangeInput from '../../../../../shared/RangeInput'

import { setBounds } from '../../../../../../redux/slices/filters'

const OnBasePercentage = ({ onBasePercentage, setBounds }) => {
    const [values, setValues] = useState(onBasePercentage)

    return (
        <SectionContainer header="OBP">
            <RangeInput
                step={.001}
                rangeMin={0}
                rangeMax={1}
                values={values}
                setValues={setValues}
                setFinalValues={() => setBounds({
                    key: "onBasePercentage",
                    value: values
                })}
                toFixed={3}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        onBasePercentage: state.filters.onBasePercentage
    }),
    { setBounds }
)(OnBasePercentage)