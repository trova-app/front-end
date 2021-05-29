import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const OpposingBattingAverage = ({ opposingBattingAverage, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(opposingBattingAverage)

    useEffect(() => {
        setValues(opposingBattingAverage)
    }, [opposingBattingAverage])

    return (
        <SectionContainer header="OBA">
            <RangeInput
                step={.001}
                rangeMin={opposingBattingAverage[0]}
                rangeMax={opposingBattingAverage[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "opposingBattingAverage",
                        value: values
                    })
                }}
                toFixed={3}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        opposingBattingAverage: state.filters.pitcherFilters.opposingBattingAverage
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(OpposingBattingAverage)