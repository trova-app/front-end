import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds } from '../../../../../../../redux/slices/filters'

const WildPitches = ({ wildPitches, setPitcherBounds }) => {
    const [values, setValues] = useState(wildPitches)

    useEffect(() => {
        setValues(wildPitches)
    }, [wildPitches])

    return (
        <SectionContainer header="WP">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={100}
                values={values}
                setValues={setValues}
                setFinalValues={() => setPitcherBounds({
                    key: "wildPitches",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        wildPitches: state.filters.pitcherFilters.wildPitches
    }),
    { setPitcherBounds }
)(WildPitches)