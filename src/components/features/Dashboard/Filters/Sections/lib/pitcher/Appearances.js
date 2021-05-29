import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const Appearances = ({ appearances, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(appearances)

    useEffect(() => {
        setValues(appearances)
    }, [appearances])

    return (
        <SectionContainer header="APP">
            <RangeInput
                step={1}
                rangeMin={appearances[0]}
                rangeMax={appearances[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "appearances",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        appearances: state.filters.pitcherFilters.appearances
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(Appearances)