import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const Walks = ({ walks, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(walks)

    useEffect(() => {
        setValues(walks)
    }, [walks])

    return (
        <SectionContainer header="BB">
            <RangeInput
                step={1}
                rangeMin={walks[0]}
                rangeMax={walks[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "walks",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        walks: state.filters.pitcherFilters.walks
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(Walks)