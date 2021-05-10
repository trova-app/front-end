import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const HitByPitches = ({ hitByPitches, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(hitByPitches)

    useEffect(() => {
        setValues(hitByPitches)
    }, [hitByPitches])

    return (
        <SectionContainer header="HP">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={250}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
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
        hitByPitches: state.filters.pitcherFilters.hitByPitches
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(HitByPitches)