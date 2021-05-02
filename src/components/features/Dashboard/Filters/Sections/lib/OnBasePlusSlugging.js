import { useState } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../index'
import RangeInput from '../../../../../shared/RangeInput'

import { setBounds } from '../../../../../../redux/slices/filters'

const OnBasePlusSlugging = ({ onBasePlusSlugging, setBounds }) => {
    const [values, setValues] = useState(onBasePlusSlugging)

    return (
        <SectionContainer header="OPS">
            <RangeInput
                step={.001}
                rangeMin={0}
                rangeMax={2}
                values={values}
                setValues={setValues}
                setFinalValues={() => setBounds({
                    key: "onBasePlusSlugging",
                    value: values
                })}
                toFixed={3}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        onBasePlusSlugging: state.filters.onBasePlusSlugging
    }),
    { setBounds }
)(OnBasePlusSlugging)