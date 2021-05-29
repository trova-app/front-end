import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const Losses = ({ losses, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(losses)

    useEffect(() => {
        setValues(losses)
    }, [losses])

    return (
        <SectionContainer header="L">
            <RangeInput
                step={1}
                rangeMin={losses[0]}
                rangeMax={losses[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "losses",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        losses: state.filters.pitcherFilters.losses
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(Losses)