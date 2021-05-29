import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const Shutouts = ({ shutouts, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(shutouts)

    useEffect(() => {
        setValues(shutouts)
    }, [shutouts])

    return (
        <SectionContainer header="SHO">
            <RangeInput
                step={1}
                rangeMin={shutouts[0]}
                rangeMax={shutouts[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "shutouts",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        shutouts: state.filters.pitcherFilters.shutouts
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(Shutouts)