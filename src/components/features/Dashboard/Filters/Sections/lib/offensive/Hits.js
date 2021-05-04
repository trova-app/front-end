import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SectionContainer from '../../index'
import RangeInput from '../../../../../../shared/RangeInput'

import { setOffensiveBounds } from '../../../../../../../redux/slices/filters'

const Hits = ({ hits, setOffensiveBounds }) => {
    const [values, setValues] = useState(hits)

    useEffect(() => {
        setValues(hits)
    }, [hits])

    return (
        <SectionContainer header="H">
            <RangeInput
                step={1}
                rangeMin={0}
                rangeMax={250}
                values={values}
                setValues={setValues}
                setFinalValues={() => setOffensiveBounds({
                    key: "hits",
                    value: values
                })}
            />
        </SectionContainer>
    )
}

export default connect(
    state => ({
        hits: state.filters.offensiveFilters.hits
    }),
    { setOffensiveBounds }
)(Hits)