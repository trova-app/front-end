import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../index'
import RangeInput from '../../../../../shared/RangeInput'

import { setBounds } from '../../../../../../redux/slices/filters'

const BattingAverage = ({ battingAverage, setBounds }) => {
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
                setFinalValues={() => setBounds({
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
        battingAverage: state.filters.battingAverage
    }),
    { setBounds }
)(BattingAverage)