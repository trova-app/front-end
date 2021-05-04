import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds } from '../../../../../../../redux/slices/filters'

const Walks = ({ walks, setOffensiveBounds }) => {
    const [values, setValues] = useState(walks)

    useEffect(() => {
        setValues(walks)
    }, [walks])

    return (
        <SectionContainer header="BB">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={250}
                values={values}
                setValues={setValues}
                setFinalValues={() => setOffensiveBounds({
                    key: "walks",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        walks: state.filters.offensiveFilters.walks
    }),
    { setOffensiveBounds }
)(Walks)