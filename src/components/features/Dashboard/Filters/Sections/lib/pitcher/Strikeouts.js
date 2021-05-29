import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const Strikeouts = ({ strikeouts, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(strikeouts)

    useEffect(() => {
        setValues(strikeouts)
    }, [strikeouts])

    return (
        <SectionContainer header="SO">
            <RangeInput
                step={1}
                rangeMin={strikeouts[0]}
                rangeMax={strikeouts[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "strikeouts",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        strikeouts: state.filters.pitcherFilters.strikeouts
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(Strikeouts)