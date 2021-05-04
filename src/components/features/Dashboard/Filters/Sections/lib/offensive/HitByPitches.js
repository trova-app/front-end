import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds } from '../../../../../../../redux/slices/filters'

const HitByPitches = ({ hitByPitches, setOffensiveBounds }) => {
    const [values, setValues] = useState(hitByPitches)

    useEffect(() => {
        setValues(hitByPitches)
    }, [hitByPitches])

    return (
        <SectionContainer header="HP">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={100}
                values={values}
                setValues={setValues}
                setFinalValues={() => setOffensiveBounds({
                    key: "hitByPitches",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        hitByPitches: state.filters.offensiveFilters.hitByPitches
    }),
    { setOffensiveBounds }
)(HitByPitches)