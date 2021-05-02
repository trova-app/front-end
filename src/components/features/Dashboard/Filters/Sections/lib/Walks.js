import { useState } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../index'
import RangeInput from '../../../../../shared/RangeInput'

import { setBounds } from '../../../../../../redux/slices/filters'

const Walks = ({ walks, setBounds }) => {
    const [values, setValues] = useState(walks)

    return (
        <SectionContainer header="BB">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={250}
                values={values}
                setValues={setValues}
                setFinalValues={() => setBounds({
                    key: "walks",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        walks: state.filters.walks
    }),
    { setBounds }
)(Walks)