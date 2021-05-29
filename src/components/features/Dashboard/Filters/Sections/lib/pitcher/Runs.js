import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const Runs = ({ runs, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(runs)

    useEffect(() => {
        setValues(runs)
    }, [runs])

    return (
        <SectionContainer header="R">
            <RangeInput
                step={1}
                rangeMin={runs[0]}
                rangeMax={runs[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "runs",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        runs: state.filters.pitcherFilters.runs
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(Runs)