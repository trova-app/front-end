import { useState } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../index'
import RangeInput from '../../../../../shared/RangeInput'

import { setBounds } from '../../../../../../redux/slices/filters'

const RBI = ({ rbi, setBounds }) => {
    const [values, setValues] = useState(rbi)

    return (
        <SectionContainer header="RBI">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={300}
                values={values}
                setValues={setValues}
                setFinalValues={() => setBounds({
                    key: "rbi",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        rbi: state.filters.rbi
    }),
    { setBounds }
)(RBI)