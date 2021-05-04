import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds } from '../../../../../../../redux/slices/filters'

const OnBasePercentage = ({ onBasePercentage, setOffensiveBounds }) => {
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
                setFinalValues={() => setOffensiveBounds({
                    key: "onBasePercentage",
                    value: values
                })}
                toFixed={3}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        onBasePercentage: state.filters.offensiveFilters.onBasePercentage
    }),
    { setOffensiveBounds }
)(OnBasePercentage)