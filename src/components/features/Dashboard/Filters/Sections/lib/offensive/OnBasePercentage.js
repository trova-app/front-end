import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const OnBasePercentage = ({ onBasePercentage, setIsDefaultFilters, setOffensiveBounds }) => {
    const [values, setValues] = useState(onBasePercentage)

    useEffect(() => {
        setValues(onBasePercentage)
    }, [onBasePercentage])

    return (
        <SectionContainer header="OBP">
            <RangeInput
                step={.001}
                rangeMin={0}
                rangeMax={1}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setOffensiveBounds({
                        key: "onBasePercentage",
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
        onBasePercentage: state.filters.offensiveFilters.onBasePercentage
    }),
    { setOffensiveBounds, setIsDefaultFilters }
)(OnBasePercentage)