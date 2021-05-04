import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds } from '../../../../../../../redux/slices/filters'

const Doubles = ({ doubles, setOffensiveBounds }) => {
    const [values, setValues] = useState(doubles)

    useEffect(() => {
        setValues(doubles)
    }, [doubles])

    return (
        <SectionContainer header="2B">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={250}
                values={values}
                setValues={setValues}
                setFinalValues={() => setOffensiveBounds({
                    key: "doubles",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        doubles: state.filters.offensiveFilters.doubles
    }),
    { setOffensiveBounds }
)(Doubles)