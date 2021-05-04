import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds } from '../../../../../../../redux/slices/filters'

const Walks = ({ walks, setPitcherBounds }) => {
    const [values, setValues] = useState(walks)

    useEffect(() => {
        setValues(walks)
    }, [walks])

    return (
        <SectionContainer header="BB">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={1000}
                values={values}
                setValues={setValues}
                setFinalValues={() => setPitcherBounds({
                    key: "walks",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        walks: state.filters.pitcherFilters.walks
    }),
    { setPitcherBounds }
)(Walks)