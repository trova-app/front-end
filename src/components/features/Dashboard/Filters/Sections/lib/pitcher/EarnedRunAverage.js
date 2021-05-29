import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const EarnedRunAverage = ({ earnedRunAverage, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(earnedRunAverage)

    useEffect(() => {
        setValues(earnedRunAverage)
    }, [earnedRunAverage])

    return (
        <SectionContainer header="ERA">
            <RangeInput
                step={1}
                rangeMin={earnedRunAverage[0]}
                rangeMax={earnedRunAverage[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "earnedRunAverage",
                        value: values
                    })
                }}
                toFixed={2}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        earnedRunAverage: state.filters.pitcherFilters.earnedRunAverage
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(EarnedRunAverage)