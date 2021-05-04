import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setPitcherBounds } from '../../../../../../../redux/slices/filters'

const Hits = ({ hits, setPitcherBounds }) => {
    const [values, setValues] = useState(hits)

    useEffect(() => {
        setValues(hits)
    }, [hits])

    return (
        <SectionContainer header="H">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={1000}
                values={values}
                setValues={setValues}
                setFinalValues={() => setPitcherBounds({
                    key: "hits",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        hits: state.filters.pitcherFilters.hits
    }),
    { setPitcherBounds }
)(Hits)