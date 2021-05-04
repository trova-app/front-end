import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds } from '../../../../../../../redux/slices/filters'

const Losses = ({ losses, setPitcherBounds }) => {
    const [values, setValues] = useState(losses)

    useEffect(() => {
        setValues(losses)
    }, [losses])

    return (
        <SectionContainer header="L">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={50}
                values={values}
                setValues={setValues}
                setFinalValues={() => setPitcherBounds({
                    key: "losses",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        losses: state.filters.pitcherFilters.losses
    }),
    { setPitcherBounds }
)(Losses)