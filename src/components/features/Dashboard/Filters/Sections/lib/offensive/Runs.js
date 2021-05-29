import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const Runs = ({ runs, setIsDefaultFilters, setOffensiveBounds }) => {
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
                    setOffensiveBounds({
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
        runs: state.filters.offensiveFilters.runs
    }),
    { setOffensiveBounds, setIsDefaultFilters }
)(Runs)