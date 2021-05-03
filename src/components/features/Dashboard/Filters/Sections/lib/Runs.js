import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../index'
import RangeInput from '../../../../../shared/RangeInput'

import { setBounds } from '../../../../../../redux/slices/filters'

const Runs = ({ runs, setBounds }) => {
    const [values, setValues] = useState(runs)

    useEffect(() => {
        setValues(runs)
    }, [runs])

    return (
        <SectionContainer header="R">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={150}
                values={values}
                setValues={setValues}
                setFinalValues={() => setBounds({
                    key: "runs",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        runs: state.filters.runs
    }),
    { setBounds }
)(Runs)