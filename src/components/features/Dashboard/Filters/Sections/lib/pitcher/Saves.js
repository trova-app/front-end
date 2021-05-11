import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const Saves = ({ saves, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(saves)

    useEffect(() => {
        setValues(saves)
    }, [saves])

    return (
        <SectionContainer header="SV">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={56}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "saves",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        saves: state.filters.pitcherFilters.saves
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(Saves)