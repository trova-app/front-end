import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds } from '../../../../../../../redux/slices/filters'

const InningsPitched = ({ inningsPitched, setPitcherBounds }) => {
    const [values, setValues] = useState(inningsPitched)

    useEffect(() => {
        setValues(inningsPitched)
    }, [inningsPitched])

    return (
        <SectionContainer header="IP">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={1000}
                values={values}
                setValues={setValues}
                setFinalValues={() => setPitcherBounds({
                    key: "inningsPitched",
                    value: values
                })}
                toFixed={1}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        inningsPitched: state.filters.pitcherFilters.inningsPitched
    }),
    { setPitcherBounds }
)(InningsPitched)