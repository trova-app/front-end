import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds, setIsDefaultFilters } from '../../../../../../../redux/slices/filters'

const Hits = ({ hits, setIsDefaultFilters, setPitcherBounds }) => {
    const [values, setValues] = useState(hits)

    useEffect(() => {
        setValues(hits)
    }, [hits])

    return (
        <SectionContainer header="H">
            <RangeInput
                step={1}
                rangeMin={hits[0]}
                rangeMax={hits[1]}
                values={values}
                setValues={setValues}
                setFinalValues={() => {
                    setIsDefaultFilters(false)
                    setPitcherBounds({
                        key: "hits",
                        value: values
                    })
                }}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        hits: state.filters.pitcherFilters.hits
    }),
    { setPitcherBounds, setIsDefaultFilters }
)(Hits)