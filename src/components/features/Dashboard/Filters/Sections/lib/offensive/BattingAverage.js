import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds } from '../../../../../../../redux/slices/filters'

const BattingAverage = ({ battingAverage, setOffensiveBounds }) => {
    const [values, setValues] = useState(battingAverage)

    useEffect(() => {
        setValues(battingAverage)
    }, [battingAverage])

    return (
        <SectionContainer header="AVG">
            <RangeInput
                step={.001}
                rangeMin={0}
                rangeMax={1}
                values={values}
                setValues={setValues}
                setFinalValues={() => setOffensiveBounds({
                    key: "battingAverage",
                    value: values
                })}
                toFixed={3}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        battingAverage: state.filters.offensiveFilters.battingAverage
    }),
    { setOffensiveBounds }
)(BattingAverage)