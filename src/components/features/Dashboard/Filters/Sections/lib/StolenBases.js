import { useState } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../index'
import RangeInput from '../../../../../shared/RangeInput'

import { setBounds } from '../../../../../../redux/slices/filters'

const StolenBases = ({ stolenBases, setBounds }) => {
    const [values, setValues] = useState(stolenBases)

    return (
        <SectionContainer header="SB">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={100}
                values={values}
                setValues={setValues}
                setFinalValues={() => setBounds({
                    key: "stolenBases",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        stolenBases: state.filters.stolenBases
    }),
    { setBounds }
)(StolenBases)