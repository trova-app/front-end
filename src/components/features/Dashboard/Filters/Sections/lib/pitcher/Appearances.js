import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds } from '../../../../../../../redux/slices/filters'

const Appearances = ({ appearances, setPitcherBounds }) => {
    const [values, setValues] = useState(appearances)

    useEffect(() => {
        setValues(appearances)
    }, [appearances])

    return (
        <SectionContainer header="APP">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={200}
                values={values}
                setValues={setValues}
                setFinalValues={() => setPitcherBounds({
                    key: "appearances",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        appearances: state.filters.pitcherFilters.appearances
    }),
    { setPitcherBounds }
)(Appearances)