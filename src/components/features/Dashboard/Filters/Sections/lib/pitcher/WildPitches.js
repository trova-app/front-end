import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const WildPitches = ({ wildPitches, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(wildPitches)

    useEffect(() => {
        setValues(wildPitches)
    }, [wildPitches])

    return (
        <SectionContainer header="WP">
            <RangeInput
                step={1}
                rangeMin={wildPitches[0]}
                rangeMax={wildPitches[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "wildPitches",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        wildPitches: state.filters.pitcherFilters.wildPitches
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(WildPitches)