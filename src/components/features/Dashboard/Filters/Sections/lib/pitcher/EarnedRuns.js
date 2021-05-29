import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const EarnedRuns = ({ earnedRuns, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(earnedRuns)

    useEffect(() => {
        setValues(earnedRuns)
    }, [earnedRuns])

    return (
        <SectionContainer header="ER">
            <RangeInput
                step={1}
                rangeMin={earnedRuns[0]}
                rangeMax={earnedRuns[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "earnedRuns",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        earnedRuns: state.filters.pitcherFilters.earnedRuns
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(EarnedRuns)