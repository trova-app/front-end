import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const HitByPitches = ({ hitByPitches, setIsDefaultFilters, setOffensiveBounds }) => {
    const [values, setValues] = useState(hitByPitches)

    useEffect(() => {
        setValues(hitByPitches)
    }, [hitByPitches])

    return (
        <SectionContainer header="HP">
            <RangeInput
                step={1}
                rangeMin={hitByPitches[0]}
                rangeMax={hitByPitches[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setOffensiveBounds({
                        key: "hitByPitches",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        hitByPitches: state.filters.offensiveFilters.hitByPitches
    }),
    { setOffensiveBounds, setIsDefaultFilters }
)(HitByPitches)