import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const CaughtStealing = ({ caughtStealing, setIsDefaultFilters, setOffensiveBounds }) => {
    const [values, setValues] = useState(caughtStealing)

    useEffect(() => {
        setValues(caughtStealing)
    }, [caughtStealing])

    return (
        <SectionContainer header="CS">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={100}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setOffensiveBounds({
                        key: "caughtStealing",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        caughtStealing: state.filters.offensiveFilters.caughtStealing
    }),
    { setOffensiveBounds, setIsDefaultFilters }
)(CaughtStealing)