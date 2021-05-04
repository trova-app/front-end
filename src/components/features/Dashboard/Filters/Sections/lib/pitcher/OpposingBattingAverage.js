import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds } from '../../../../../../../redux/slices/filters'

const OpposingBattingAverage = ({ opposingBattingAverage, setPitcherBounds }) => {
    const [values, setValues] = useState(opposingBattingAverage)

    useEffect(() => {
        setValues(opposingBattingAverage)
    }, [opposingBattingAverage])

    return (
        <SectionContainer header="OBA">
            <RangeInput
                step={.001}
                rangeMin={0}
                rangeMax={1}
                values={values}
                setValues={setValues}
                setFinalValues={() => setPitcherBounds({
                    key: "opposingBattingAverage",
                    value: values
                })}
                toFixed={3}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        opposingBattingAverage: state.filters.pitcherFilters.opposingBattingAverage
    }),
    { setPitcherBounds }
)(OpposingBattingAverage)