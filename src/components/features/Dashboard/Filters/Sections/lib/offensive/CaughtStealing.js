import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds } from '../../../../../../../redux/slices/filters'

const CaughtStealing = ({ caughtStealing, setOffensiveBounds }) => {
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
                setFinalValues={() => setOffensiveBounds({
                    key: "caughtStealing",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        caughtStealing: state.filters.offensiveFilters.caughtStealing
    }),
    { setOffensiveBounds }
)(CaughtStealing)