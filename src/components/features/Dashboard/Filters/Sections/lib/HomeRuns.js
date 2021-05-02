import { useState } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../index'
import RangeInput from '../../../../../shared/RangeInput'

import { setBounds } from '../../../../../../redux/slices/filters'

const HomeRuns = ({ homeRuns, setBounds }) => {
    const [values, setValues] = useState(homeRuns)

    return (
        <SectionContainer header="HR">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={250}
                values={values}
                setValues={setValues}
                setFinalValues={() => setBounds({
                    key: "homeRuns",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        homeRuns: state.filters.homeRuns
    }),
    { setBounds }
)(HomeRuns)