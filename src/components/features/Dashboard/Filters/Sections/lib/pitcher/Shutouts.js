import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds } from '../../../../../../../redux/slices/filters'

const Shutouts = ({ shutouts, setPitcherBounds }) => {
    const [values, setValues] = useState(shutouts)

    useEffect(() => {
        setValues(shutouts)
    }, [shutouts])

    return (
        <SectionContainer header="SHO">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={56}
                values={values}
                setValues={setValues}
                setFinalValues={() => setPitcherBounds({
                    key: "shutouts",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        shutouts: state.filters.pitcherFilters.shutouts
    }),
    { setPitcherBounds }
)(Shutouts)