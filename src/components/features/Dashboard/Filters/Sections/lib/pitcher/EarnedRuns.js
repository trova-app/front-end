import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds } from '../../../../../../../redux/slices/filters'

const EarnedRuns = ({ earnedRuns, setPitcherBounds }) => {
    const [values, setValues] = useState(earnedRuns)

    useEffect(() => {
        setValues(earnedRuns)
    }, [earnedRuns])

    return (
        <SectionContainer header="ER">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={250}
                values={values}
                setValues={setValues}
                setFinalValues={() => setPitcherBounds({
                    key: "earnedRuns",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        earnedRuns: state.filters.pitcherFilters.earnedRuns
    }),
    { setPitcherBounds }
)(EarnedRuns)