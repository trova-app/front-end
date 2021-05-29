import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const InningsPitched = ({ inningsPitched, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(inningsPitched)

    useEffect(() => {
        setValues(inningsPitched)
    }, [inningsPitched])

    return (
        <SectionContainer header="IP">
            <RangeInput
                step={1}
                rangeMin={inningsPitched[0]}
                rangeMax={inningsPitched[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "inningsPitched",
                        value: values
                    })
                }}
                toFixed={1}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        inningsPitched: state.filters.pitcherFilters.inningsPitched
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(InningsPitched)